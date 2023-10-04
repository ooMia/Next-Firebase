import AssociatedJobCardList from '@/app/dev/(components)/AssociatedJobCardList'

export default function Page({ params }: { params: { wdId: number } }) {
  const { wdId } = params
  return (
    <>
      <h3 className={`my-3 mt-24`}>이 포지션을 찾고 계셨나요?</h3>
      <AssociatedJobCardList wdId={wdId} limit={20} offset={0} />
    </>
  )
}
