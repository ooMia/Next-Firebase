import Image from "next/image";
import {getDocumentsByCategories} from "@/utils/db_crud";
import {DocumentData} from "@firebase/firestore-types";
import Link from "next/link";

async function getData(category: number, subcategory: number) {

    const docs = await getDocumentsByCategories(category, subcategory)

    const res:any = []
    docs.forEach((doc: DocumentData) => {
        const obj:any = {}
        const data = doc._document.data.value.mapValue.fields
        Object.keys(data).map(field => Object.keys(data[field]).map(type => {
            obj[field] = data[field][type]
        }))
        res.push(obj)
    });

    return res
}

export default async function NewProduct({category, subcategory}:any) {

    // let isValid = true
    let item;
    try {
        item = await getData(category, subcategory)
    } catch (e) {
        // isValid = false;
    }
    return (<>
        {item.map((e:any) => {
            return (
                <div key={e.company} className={`p-3 m-3 flex-col flex justify-center `}>
                    <Link href={`/themes/${e.company}`}>
                        <Image src={e.thumbnail} alt={e.company} width={300} height={900}
                               className={`object-cover h-48`}/>
                        <h1 className={`text-center font-bold my-3 overflow-ellipsis overflow-hidden `}>
                            {decodeURIComponent(e.title)}
                        </h1>
                    </Link>
                </div>
            )
        })}
    </>)
}