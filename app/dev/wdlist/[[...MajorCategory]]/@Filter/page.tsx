import MajorCategory from '@/app/dev/wdlist/(components)/MajorCategory'
import MinorCategory from '@/app/dev/wdlist/(components)/MinorCategory'

export default function Page({
  params,
}: {
  params: {
    MajorCategory: number[] | undefined
  }
}) {
  return (
    <aside className={`top-0 py-3`}>
      <div className={`flex items-center gap-2`}>
        <MajorCategory default={params.MajorCategory} />
        <p className={`border-x-2 border h-8 ml-6 mr-4`}></p>
        <MinorCategory majorCategory={params.MajorCategory?.at(0)} />
      </div>

      {/*<MajorCategory default={params.MajorCategory} />*/}
      {/*<MajorCategory default={params.MajorCategory} />*/}
      {/*<MajorCategory default={params.MajorCategory} />*/}
    </aside>
  )
}
