'use server'

import { JobCard } from '@/app/dev/(components)/JobCard'
import { queryWdListJobs } from '@/backend/api/wantedAPI'
import { JobRecommendation } from '@/types/JobRecommendation'

export default async function JobCardWithTagType({ tag_type_id }: { tag_type_id: number }) {
  const JobCards = await queryWdListJobs('all', 'job.latest_order', tag_type_id)
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
