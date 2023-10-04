import { getThemesAssociatedJobs } from '@/backend/api/wantedAPI'
import { getDocumentsByKeyValue, readDocuments } from '@/utils/db_crud'

export async function generateStaticParams() {
  const docs = await readDocuments(undefined, 'wdList')

  const companies: { company: string }[] = []
  docs.forEach((d) => {
    companies.push({ company: decodeURIComponent(d.data().company) })
  })

  return companies
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`

export default async function SSG({ params }: { params: { company: string } }) {
  const { company } = params

  const docsFromDB = await getDocumentsByKeyValue(
    undefined,
    'wdList',
    'company',
    encodeURIComponent(company),
  )
  const [docsFromAPI, timestamp] = await getThemesAssociatedJobs(company, 20, 0)

  // const res: any[] = []
  // docs.forEach((doc: DocumentData) => {
  //   const data = doc._document.data.value.mapValue.fields
  //
  //   console.log(`${doc.id} => `)
  //
  //   // interface data {
  //   //     company?: string
  //   //     thumbnail?: string
  //   //     title?: string
  //   //     description?: string
  //   //     category?: number
  //   //     subcategory?: number
  //   // }
  //
  //   let obj: any = {}
  //   Object.keys(data).map((field) =>
  //     Object.keys(data[field]).map((type) => {
  //       const key = field
  //       const val = data[field][type]
  //       obj[key] = decodeURIComponent(val)
  //     }),
  //   )
  //   res.push(obj)
  // })

  console.log(docsFromDB.empty)
  // console.log(company)
  // console.log(docsFromAPI.at(0))

  return (
    <div className={`flex flex-col gap-2 w-full bg-gray-50`}>
      <div>
        <h3>docsFromAPI</h3>
        <p>{docsFromAPI.data.at(0)?.id}</p>
        <p>{timestamp}</p>
      </div>
      <div>
        <h3>docsFromDB</h3>
        <p>{docsFromDB.size}</p>
        <p>{timestamp}</p>
      </div>
    </div>
  )
}
