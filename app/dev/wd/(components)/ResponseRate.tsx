import { ResponseRateType } from '@/types/Region'

interface ResponseRateTagType {
  text: '매우 낮음' | '낮음' | '평균 이상' | '높음' | '매우 높음'
  text_color: 'text-purple-600' | 'text-blue-600' | 'text-green-600' | 'text-gray-600'
  bg_color: 'bg-purple-200' | 'bg-blue-200' | 'bg-green-200' | 'bg-gray-200'
  rate: '25%' | '50%' | '75%' | '90%' | '95%'
}

const ResponseRateTag = ({ bg_color, rate, text, text_color }: ResponseRateTagType) => {
  return (
    <div
      className={`relative group ${bg_color} ${text_color} rounded text-[11px] font-bold tracking-tighter w-fit p-[3px]`}
    >
      응답률 {text}
      <div className={`absolute top-[25px] hidden group-hover:block`}>bas</div>
    </div>
  )
}

export default function ResponseRate({ type }: { type: ResponseRateType }) {
  const typeToIndex = { very_high: 0, high: 1, normal: 2, low: 3, very_low: 4 }
  const attributes: ResponseRateTagType[] = [
    { bg_color: 'bg-green-200', text_color: 'text-green-600', rate: '95%', text: '매우 높음' },
    { bg_color: 'bg-blue-200', text_color: 'text-blue-600', rate: '90%', text: '높음' },
    { bg_color: 'bg-purple-200', text_color: 'text-purple-600', rate: '75%', text: '평균 이상' },
    { bg_color: 'bg-gray-200', text_color: 'text-gray-600', rate: '50%', text: '낮음' },
    { bg_color: 'bg-gray-200', text_color: 'text-gray-600', rate: '25%', text: '매우 낮음' },
  ]
  const attr = attributes[typeToIndex[type]]
  return (
    attr && (
      <ResponseRateTag
        rate={attr.rate}
        bg_color={attr.bg_color}
        text={attr.text}
        text_color={attr.text_color}
      />
    )
  )
}
