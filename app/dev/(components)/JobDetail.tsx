import { WdJobDetail } from '@/types/JobDetail'
import Image from 'next/image'

export default function JobDetail({ props }: { props: WdJobDetail }) {
  const images = props.job.company_images

  const paragraphs = [
    { header: '', description: props.job.detail.intro },
    { header: '주요업무', description: props.job.detail.main_tasks },
    { header: '자격요건', description: props.job.detail.requirements },
    { header: '우대사항', description: props.job.detail.preferred_points },
    { header: '혜택 및 복지', description: props.job.detail.benefits },
  ]
  const additions = [
    {
      header: '마감일',
      description: props.job.due_time ? props.job.due_time.replaceAll('-', '.') : '상시',
    },
    { header: '근무지역', description: props.job.address.full_location },
  ]
  return (
    <div className={`mx-2`}>
      {
        <Image
          key={images.at(0)!!.id}
          src={images.at(0)!!.url}
          alt={props.job.company.name + ' - ' + props.job.position}
          width={1000}
          height={1000}
          className={`rounded`}
        />
      }

      <article className={`text-gray-900  whitespace-pre-line tracking-tighter leading-7`}>
        {paragraphs.map((e) => (
          <>
            <h1 className={`font-bold pt-5`}>{e.header}</h1>
            <p className={`text-inherit`}>{e.description}</p>
          </>
        ))}
      </article>

      <h1 className={`font-bold pt-5`}>기술스택 · 툴</h1>
      {props.job.skill_tags.map((e) => (
        <div className={`inline-block w-fit bg-green-200 rounded-2xl px-2 m-1`} key={e.title}>
          {e.title}
        </div>
      ))}

      <hr className={`border-black mt-14 mb-3 `} />

      <section className={`grid grid-cols-2 `}>
        {additions.map((e) => (
          <>
            <p className={`mr-3 text-gray-400 font-bold`}>{e.header}</p>
            <p className={``}>{e.description}</p>
          </>
        ))}
      </section>
    </div>
  )
}
