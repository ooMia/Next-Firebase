'use client'

import { JobCard } from '@/app/dev/(components)/JobCard'
import { JobRecommendation } from '@/types/JobRecommendation'

export default function QueriedJobCardList({ JobCards }: { JobCards: JobRecommendation[] }) {
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
