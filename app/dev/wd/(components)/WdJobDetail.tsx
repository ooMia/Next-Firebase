'use server'

import { getWdJob } from '@/backend/api/wantedAPI'
import JobDetail from '@/app/dev/(components)/JobDetail'

export default async function WdJobDetail({ wdId }: { wdId: number }) {
  const detail = await getWdJob(wdId)

  return <JobDetail props={detail} />
}
