import { getThemesAssociatedJobs } from '@/backend/api/wantedAPI'
import { fetchDataFromWantedAPI } from '@/utils/db_crud'
import { readDocuments } from '@/utils/db_crud_2'

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

  const [docsFromDB, timestampDB] = await fetchDataFromWantedAPI('test', 'kakaovc', 20, 0)
  // const docsFromDB = await getDocumentsBy()
  const [docsFromAPI, timestampAPI] = await getThemesAssociatedJobs(company, 20, 0)

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

  // console.log(docsFromDB)
  // console.log(company)
  // console.log(docsFromAPI.at(0))

  // console.log(timestampAPI)

  const timeDiffString = (a: Date, b: Date) => {
    const aa = a.getMinutes() * 60 + a.getSeconds()
    const bb = b.getMinutes() * 60 + b.getSeconds()
    const cc = Math.abs(aa - bb)
    const dd = { minutes: Math.floor(cc / 60), seconds: cc % 60 }
    return `${dd.minutes < 10 ? `0${dd.minutes}` : dd.minutes}:${
      dd.seconds < 10 ? `0${dd.seconds}` : dd.seconds
    }`
  }

  return (
    <div className={`flex flex-col gap-2 w-full bg-gray-50`}>
      <div className={`grid grid-cols-2 justify-items-end m-10`}>
        <h3 className={`col-span-2 `}>
          <b className={` mr-1 text-red-600`}>{docsFromAPI.data ? 'Succeed' : 'Failed'}</b>
          fetchDataFromWantedAPI
        </h3>
        <h3>requested time</h3>
        <p>{timestampAPI.requested.toUTCString()}</p>

        <h3>fetched time</h3>
        <p>{timestampAPI.fetched.toUTCString()}</p>

        <h3>time difference</h3>
        <p className={`mr-9`}>{timeDiffString(timestampAPI.fetched, timestampAPI.requested)}</p>
      </div>
      <div className={`grid grid-cols-2 justify-items-end m-10`}>
        <h3 className={`col-span-2 `}>
          <b className={` mr-1 text-red-600`}>{docsFromDB ? 'Succeed' : 'Failed'}</b>
          getDocumentsFromFireStoreDB
        </h3>
        <h3>requested time</h3>
        <p>{timestampDB.requested.seconds}</p>

        <h3>fetched time</h3>
        <p>{timestampDB.fetched.seconds}</p>

        <h3>time difference</h3>
        <p className={`mr-9`}>
          {/*{() => {*/}
          {/*  Math.abs(timestampDB.fetched.seconds - timestampDB.requested.seconds)*/}
          {/*  return <></>*/}
          {/*}}*/}
        </p>
        <p>{docsFromDB && docsFromDB?.data?.at(0)?.id}</p>
      </div>
    </div>
  )
}
