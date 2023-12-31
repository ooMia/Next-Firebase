'use server'

import { JobRecommendation } from '@/types/JobRecommendation'
import { ThemeJob } from '@/types/ThemeJob'
import { type NextRequest } from 'next/server'
import { WdJobDetail } from '@/types/JobDetail'

export async function getWanted(url: string, options?: RequestInit) {
  const resource = `https://www.wanted.co.kr/api${url}`
  return await fetch(resource, options).then((p) => p.json())
}

// Page: [wd, wdlist]
export async function getWdAssociatedJobs(
  wdId: number,
  limit: number,
  offset: number,
): Promise<JobRecommendation[]> {
  const json = await getWanted(`/v4/jobs/${wdId}/associated_jobs?limit=${limit}&offset=${offset}`)
  return json.data
}

// Page: [wdlist]
export async function queryWdListJobs(
  country: 'all',
  job_sort: 'job.latest_order',
  tag_type_ids: number,
): Promise<JobRecommendation[]> {
  const json = await getWanted(
    `/v4/jobs?country=${country}&job_sort=${job_sort}&tag_type_ids=${tag_type_ids}`,
  )
  return json.data
}

// Page: [wd]
export async function getWdJob(wdId: number): Promise<WdJobDetail> {
  return await getWanted(`/v4/jobs/${wdId}`)
}

// Page: [themes]
export async function getThemesAssociatedJobs(
  company: string,
  limit: number,
  offset: number,
): Promise<[ThemeJob, { fetched: Date; requested: Date }]> {
  const domain: string = `https://www.wanted.co.kr/api`
  const response = await fetch(
    `${domain}/v3/themes/${company}/jobs?limit=${limit}&offset=${offset}`,
    {
      next: { revalidate: 60 },
    },
  )
  const timestamp = {
    fetched: new Date(response.headers.get('date')!!),
    requested: new Date(),
  }
  return [await response.json(), timestamp]
}
