import QueriedJobCardList from '@/app/dev/wdlist/(components)/QueriedJobCardList'
import { queryWdListJobs } from '@/backend/api/wantedAPI'
import { JobRecommendation } from '@/types/JobRecommendation'

export default async function Page({
  params,
}: {
  params: {
    MajorCategory: string[]
  }
}) {
  const major = params.MajorCategory ? params.MajorCategory[0] : undefined
  const JobCards: JobRecommendation[] = await queryWdListJobs(
    'all',
    'job.latest_order',
    major ? parseInt(major) : 518,
  )

  return (
    <aside className={`top-0 py-3`}>
      <div className={`flex items-center gap-2`}>
        <QueriedJobCardList JobCards={JobCards} />
      </div>
    </aside>
  )
}
