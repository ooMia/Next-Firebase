'use server'

import AssociatedJobCardList from '@/app/dev/(components)/AssociatedJobCardList'

export default async function Page({
  params,
}: {
  params: {
    MajorCategory: number[]
  }
}) {
  return (
    <>
      {params.MajorCategory ? <></> : <AssociatedJobCardList wdId={183358} offset={0} limit={20} />}
    </>
  )
}
