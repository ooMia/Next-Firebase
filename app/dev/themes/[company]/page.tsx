import CenteredComponent from '@/app/dev/(components)/CenteredComponent'
import { JobCardTheme } from '@/app/dev/(components)/JobCardTheme'
import { getThemesAssociatedJobs } from '@/backend/api/wantedAPI'
import { Data } from '@/types/ThemeJob'
import { selectDocumentByDocumentId } from '@/utils/db_crud'
import { readDocuments } from '@/utils/db_crud_2'
import Image from 'next/image'

interface Theme {
  company: string
  content: string
  image: string
  title: string
}

export async function generateStaticParams() {
  const docs = await readDocuments('themes')

  const companies: string[][] = []
  docs.forEach((d) => {
    const data = d.data({ serverTimestamps: 'previous' })
    const company: string = d.id
  })
  return companies
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`

export default async function SSG({ params }: { params: { company: string } }) {
  const { company } = params
  const docs = await selectDocumentByDocumentId('themes', company)

  // const docsFromDB = await getDocumentsBy()
  const [docsFromAPI, timestampAPI] = await getThemesAssociatedJobs(
    decodeURIComponent(company),
    20,
    0,
  )

  // const jobList: ThemeJob = await fetchDataFromWantedAPI('themes', company, 20, 0)

  return (
    <div className={`flex flex-col gap-2 w-full bg-gray-50`}>
      <div className={`relative h-[300px]`}>
        <Image src={docs.get('image')} alt={docs.id} fill />
      </div>
      <CenteredComponent>
        <h3 className={`text-4xl my-8`}>{docs.get('title')}</h3>

        <h4 className={`text-xl font-normal whitespace-pre-line text-gray-400 leading-8`}>
          {String(docs.get('content')).replaceAll('<br>', '\n')}
        </h4>
      </CenteredComponent>
      <CenteredComponent>
        <section className={`grid grid-cols-2 lg:grid-cols-4 gap-4`}>
          {docsFromAPI.data.map((e: Data) => (
            <article className={``} key={e.id}>
              <JobCardTheme props={e} />
            </article>
          ))}
        </section>
      </CenteredComponent>
    </div>
  )
}
