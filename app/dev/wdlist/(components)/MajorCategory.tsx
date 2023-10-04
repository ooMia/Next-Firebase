'use client'

import { useRouter } from 'next/navigation'

export interface MajorCategory {
  key: number
  value: string
  name: string
}

// segment : number
export default function MajorCategory(props: { default: number[] | undefined }) {
  const list: MajorCategory[] = [
    { key: 0, value: 'all', name: '전체' },
    { key: 518, value: 'IT', name: '개발' },
    { key: 507, value: 'Management &amp; Business', name: '경영·비즈니스' },
    { key: 523, value: 'Marketing &amp; Advertising', name: '마케팅·광고' },
    { key: 511, value: 'Design', name: '디자인' },
    { key: 530, value: 'Sales', name: '영업' },
    { key: 510, value: 'Customer Service', name: '고객서비스·리테일' },
    { key: 524, value: 'Media &amp; Communication', name: '미디어' },
    { key: 513, value: 'Engineering', name: '엔지니어링·설계' },
    { key: 959, value: 'Game Production', name: '게임 제작' },
    { key: 517, value: 'HR', name: 'HR' },
    { key: 508, value: 'Finance', name: '금융' },
    { key: 522, value: 'Manufacturing', name: '제조·생산' },
    { key: 515, value: 'Bio, Medical', name: '의료·제약·바이오' },
    { key: 532, value: 'Logistics&amp; Trade', name: '물류·무역' },
    { key: 10101, value: 'Education', name: '교육' },
    { key: 521, value: 'Law', name: '법률·법집행기관' },
    { key: 509, value: 'Construction', name: '건설·시설' },
    { key: 10057, value: 'F&amp;B', name: '식·음료' },
    { key: 514, value: 'Public·Social Work', name: '공공·복지' },
  ]

  const router = useRouter()

  return (
    <select
      title={`MajorCategory`}
      value={props.default?.at(0)}
      onChange={(e) => {
        router.push(`/dev/wdlist/${e.currentTarget.value}`)
      }}
      className={`font-bold text-xl drop-shadow cursor-pointer p-3`}
    >
      {list.map((e) => (
        <option value={e.key > 500 ? e.key : ''} key={e.key}>
          {e.name}
        </option>
      ))}
    </select>
  )
}
