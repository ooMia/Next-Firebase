import {getDocumentsByKeyValue} from "@/utils/db_crud";
import {DocumentData} from "@firebase/firestore-types";
import Event from "@/components/Event";
import Image from "next/image";



async function getWdData(company:any) {

    const docs=  await getDocumentsByKeyValue(undefined, 'wdList', "company", company)

    interface resType {
        [key: string]:any
    }

    const res:resType = {}
    docs.forEach((doc: DocumentData) => {
        const data = doc._document.data.value.mapValue.fields
        // console.log(`${doc.id} => `);
        Object.keys(data).map(field => Object.keys(data[field]).map(type => {
            // console.log(`${type} \t${field}:${data[field][type]}`)
            res[field] = decodeURIComponent(data[field][type])
        }))
    });

    return res
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`


export default async function SSR({params}: any) {
    const {company} = params

    const res = await getWdData(company)

    if (res.company === undefined ) return "no data"

    return (<div className={`w-full bg-gray-50`}>
        <Image
            className={'top-0 object-cover w-full max-h-52'}
            width={500}
            height={300}
            src={res.thumbnail}
            alt={res.company}/>
        <Event company={res.company} title={res.title}
               description={res.description}/>
    </div>)
}
