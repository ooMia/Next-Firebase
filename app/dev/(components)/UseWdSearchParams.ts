import { MinorCategoryDummyData, MinorCategoryType } from '@/public/MinorCategoryDummyData'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

// 1. parse and initialize 'queries' depends on the current URL queryString
// 2. can add additional queries
// 3. can navigate on current queries

// country=kr
// job_sort=job.latest_order
// years=-1
// user_tags=10245
// skill_tags=1554
// selected=873
// selected=10110
// locations=seoul.gangdong-gu

export default function useWdSearchParams(majorCategory?: string) {
  const data: MinorCategoryType[] = majorCategory ? MinorCategoryDummyData[518] : []
  const searchParams = useSearchParams()

  const [queries, setQueries] = useState()

  return {
    data: data,
    selected: searchParams.getAll('selected'),
    getDataUpdatedBySelected: (selected: string[]) => {
      data?.map((e) => (e.selected = selected.includes(e.key.toString())))
      return data
    },
    job_sort: searchParams.get('job_sort'),
    years: searchParams.getAll('years'),
    user_tags: searchParams.getAll('user_tags'),
    skill_tags: searchParams.getAll('skill_tags'),
    locations: searchParams.get('user_tags'),
    state: [queries, setQueries],
  }
}
