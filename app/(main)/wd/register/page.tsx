'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import {
  createDocument,
  getDocumentsByKeyValue,
  printQuerySnapshot,
  updateDocumentsByKeyValue,
} from '@/utils/db_crud'

const Page = () => {
  const wdInfo = [
    { type: 'text', name: 'company' },
    { type: 'text', name: 'title' },
    { type: 'textarea', name: 'description' },
    { type: 'url', name: 'thumbnail' },
    { type: 'number', name: 'category' },
    { type: 'number', name: 'subcategory' },
  ]

  const onSubmitCallback = async (e: any) => {
    e.preventDefault()
    // console.log(e.target)
    const company = encodeURIComponent(e.target[0].value)
    const querySnapshot = await getDocumentsByKeyValue(e, 'wdList', 'company', company)

    const obj: any = {}
    for (let i = 0; i < e.target.length - 1; ++i) {
      const key = wdInfo[i].name
      let value = e.target[i].value
      obj[key] = value
      if (wdInfo[i].type == 'text') obj[key] = encodeURIComponent(value)
      if (wdInfo[i].type == 'number') obj[key] = parseInt(value)
    }
    // console.log(`${Object.keys(obj)}`)

    if (querySnapshot.empty) {
      await createDocument(e, 'wdList', obj)
    } else {
      await updateDocumentsByKeyValue(e, 'wdList', 'company', company, obj)
    }

    // CHECK
    const q = await getDocumentsByKeyValue(e, 'wdList', 'company', company)
    await printQuerySnapshot(q)
  }

  return (
    <form
      className={`w-fit  bg-gray-100 flex flex-col justify-center items-center p-8`}
      onSubmit={onSubmitCallback}
    >
      <div className={` bg-gray-100 flex flex-wrap justify-between items-center gap-3`}>
        {wdInfo.map((e, i) => (
          <Input key={i} type={e.type} name={e.name} />
        ))}
      </div>

      <Button type={'submit'} content={'wd 저장'} callback={undefined} />
    </form>
  )
}

export default Page
