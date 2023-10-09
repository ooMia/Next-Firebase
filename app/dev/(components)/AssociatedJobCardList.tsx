'use server'

import { JobRecommendation } from '@/types/JobRecommendation'
import { JobCard } from '@/app/dev/(components)/JobCard'
import { getWdAssociatedJobs, queryWdListJobs } from '@/backend/api/wantedAPI'

export default async function AssociatedJobCardList({
  MajorCategory,
  wdId,
  limit,
  offset,
}: {
  MajorCategory?: number[]
  wdId: number
  limit: number
  offset: number
}) {
  const JobCards =
    MajorCategory && MajorCategory.length > 0
      ? await queryWdListJobs('all', 'job.latest_order', MajorCategory[0])
      : await getWdAssociatedJobs(wdId, limit, offset)

  return (
    <section className={`grid grid-cols-2 lg:grid-cols-4 gap-4`}>
      {JobCards.map((e: JobRecommendation) => (
        <article className={``} key={e.id}>
          <JobCard props={e} />
        </article>
      ))}
    </section>
  )
}
