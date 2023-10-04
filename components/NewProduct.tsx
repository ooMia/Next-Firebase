import Image from 'next/image'
import { getDocumentsByCategories } from '@/utils/db_crud_2'
import Link from 'next/link'
import { DocumentData } from 'firebase/firestore'

async function getData(category: number, subcategory: number) {
  const docs = await getDocumentsByCategories(category, subcategory)

  const res: any = []
  docs.forEach((doc: DocumentData) => {
    const obj: any = {}
    const data = doc._document.data.value.mapValue.fields
    Object.keys(data).map((field) =>
      Object.keys(data[field]).map((type) => {
        obj[field] = data[field][type]
      }),
    )
    res.push(obj)
  })

  return res
}

export default async function NewProduct({ category, subcategory }: any) {
  // let isValid = true
  let item
  try {
    item = await getData(category, subcategory)
  } catch (e) {
    // isValid = false;
  }

  return (
    <>
      {item.map((e: any) => {
        return (
          <Link key={e.company} href={`/themes/${e.company}`} className={` m-3`}>
            <div className={`relative flex-col flex justify-center h-52`}>
              <Image src={e.thumbnail} alt={e.company} fill className={`rounded`} />
              <div className={`absolute top-0 right-0 m-1`}>
                <div
                  className={`text-xl p-1 hover:bg-gray-300 inline bg-white tracking-widest rounded-full font-extrabold `}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  ☆
                </div>
              </div>
            </div>
            <div className={`p-2`}>
              <h1
                className={`truncate text-left font-bold tracking-tighter mb-1 overflow-ellipsis overflow-hidden`}
              >
                {decodeURIComponent(e.title)}
              </h1>
              <h2 className={`mb-1 text-xs font-sans truncate tracking-tighter font-semibold`}>
                {decodeURIComponent(e.company)}
              </h2>
              <h2
                className={`tracking-tighter text-gray-400 mb-1 text-xs font-sans truncate`}
              >{`서울 · 한국`}</h2>
              <h2 className={` text-sm tracking-tighter mb-1 truncate`}>{'합격보상금 100만원'}</h2>
            </div>
          </Link>
        )
      })}
    </>
  )
}
