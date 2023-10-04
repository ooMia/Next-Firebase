import { JobRecommendation } from '@/types/JobRecommendation'
import Image from 'next/image'
import Link from 'next/link'
import ResponseRate from '@/app/dev/wd/(components)/ResponseRate'

export function JobCard({ props }: { props: JobRecommendation }) {
  return (
    <Link href={`/dev/wd/${props.id}`} key={props.id} className={``}>
      <div className={`max-w-full`}>
        <div className={`flex flex-col gap-2`}>
          <div className={`relative w-full h-[230px] lg:h-[185px]`}>
            <Image
              src={props.title_img.origin}
              alt={`a`}
              fill
              sizes='(max-width: 991px) 400px, (max-width: 1040px) 200px, 400px'
              priority
              className={`rounded-xl border border-gray-400 lg:object-cover object-fill`}
            />
          </div>
          <h4 className={`overflow whitespace-nowrap overflow-hidden`}>{props.position}</h4>
          <h5>{props.company.name}</h5>
          <ResponseRate type={props.company.application_response_stats.level} />
          <h5 className={`text-gray-400 `}>
            {props.address.location} · {props.address.country}
          </h5>
          <h4 className={`text-sm`}>합격보상금 {props.reward.formatted_total}</h4>
        </div>
      </div>
    </Link>
  )
}
