import {getDocumentsByKeyValue, readDocuments} from "@/utils/db_crud";
import {DocumentData} from "@firebase/firestore-types";
import Event from "@/components/Event";
import Image from "next/image";

export async function generateStaticParams() {

    const docs = await readDocuments(undefined, 'wdList')

    let companies: any = []
    docs.forEach(d => {
        companies.push({company: d.data().company})
    })

    return companies
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`


export default async function SSG({params}: any) {
    const {company} = params

    const docs = await getDocumentsByKeyValue(undefined, 'wdList', "company", company)

    if (docs.empty) return "no data"

    const res: any[] = []
    docs.forEach((doc: DocumentData) => {
        const data = doc._document.data.value.mapValue.fields

        console.log(`${doc.id} => `);

        // interface data {
        //     company?: string
        //     thumbnail?: string
        //     title?: string
        //     description?: string
        //     category?: number
        //     subcategory?: number
        // }

        let obj: any = {}
        Object.keys(data).map(field => Object.keys(data[field]).map(type => {
            const key = field
            const val = data[field][type]
            obj[key] = decodeURIComponent(val)
        }))
        res.push(obj)
    });

    return (<div className={`w-full`}>
        <Image
            className={'top-0 w-full'}
            width={500}
            height={300}
            src={res[0].thumbnail}
            alt={res[0].company}/>
        {res.map((e, i) => <Event key={i} company={e.company} title={e.title}
                                  description={e.description}/>
        )}
    </div>)
}
