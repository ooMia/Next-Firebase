import WdJobDetail from '@/app/dev/wd/(components)/WdJobDetail'

export default function Page({ params }: { params: { wdId: number } }) {
  const { wdId } = params

  return (
    <div className={`flex flex-col`}>
      <div className={`w-full lg:w-[620px]`}>
        <WdJobDetail wdId={wdId} />
      </div>
    </div>
  )
}
