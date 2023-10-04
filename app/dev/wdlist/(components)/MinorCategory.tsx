'use client'

import CenteredComponent from '@/app/dev/(components)/CenteredComponent'
import useWdSearchParams from '@/app/dev/(components)/UseWdSearchParams'
import ArrowButton from '@/app/dev/wdlist/(components)/ArrowButton'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MinorCategory({ majorCategory }: { majorCategory?: number }) {
  const router = useRouter()

  const { data, selected, getDataUpdatedBySelected } = useWdSearchParams(majorCategory?.toString())

  const [hidden, setHidden] = useState(true)
  const [selectedByUser, setSelectedByUser] = useState(selected)

  useEffect(() => {
    // console.log(hidden)
    if (selectedByUser) {
      let params = new URLSearchParams()
      hidden && selectedByUser.map((e) => params.append('selected', e))
      hidden && router.push(`?${decodeURIComponent(params.toString())}`)
      // console.log(selectedByUser)
    }
  }, [hidden])

  return majorCategory ? (
    <div className={`relative`}>
      <div
        className={`cursor-pointer w-fit flex`}
        onClick={(e) => {
          setHidden((p) => !p)
        }}
      >
        <div className={`text-xl mx-1`}>
          {getDataUpdatedBySelected(selected).map(
            (e) => selected.includes(e.key.toString()) && `${e.name}, `,
          )}
        </div>

        <ArrowButton />
      </div>

      <div
        className={`w-100vw bg-white fixed top-0 left-0 lg:absolute lg:top-12 lg:-left-[262px] lg:w-[70vw] lg:max-w-[860px] drop-shadow-2xl border rounded p-3`}
        hidden={hidden}
      >
        <div className={` border-b-2 mb-5 lg:hidden`}>
          <CenteredComponent>
            <div className={`flex items-center justify-between `}>
              <button>초기화</button>
              <div>직무</div>
              <svg width={24} viewBox='0 0 24 24' className={`cursor-pointer`}>
                <path
                  d='M5.93289 4.6068C5.56201 4.33162 5.03569 4.36219 4.69935 4.69853C4.32938 5.0685 4.32938 5.66834 4.69935 6.03831L10.6611 12L4.69935 17.9617L4.60763 18.0679C4.33244 18.4388 4.36302 18.9651 4.69935 19.3015L4.80561 19.3932C5.17649 19.6684 5.7028 19.6378 6.03914 19.3015L12.0009 13.3402L17.9626 19.3015L18.0688 19.3932C18.4397 19.6684 18.966 19.6378 19.3023 19.3015C19.6723 18.9315 19.6723 18.3317 19.3023 17.9617L13.3406 12L19.3023 6.03831L19.3941 5.93206C19.6693 5.56118 19.6387 5.03487 19.3023 4.69853L19.1961 4.6068C18.8252 4.33162 18.2989 4.36219 17.9626 4.69853L12.0009 10.6598L6.03914 4.69853L5.93289 4.6068Z'
                  fill='#999'
                ></path>
              </svg>
            </div>
          </CenteredComponent>
        </div>
        <p className={`text-xs mx-3 my-2`}>직무를 선택해주세요.</p>
        <div className={`flex flex-6 gap-1 flex-wrap `}>
          {data?.map((data) => (
            <label className={`relative cursor-pointer`} key={data.key}>
              <input
                type={'checkbox'}
                value=''
                className={`peer sr-only`}
                defaultChecked={data.selected}
                onClick={(event) => {
                  const val = data.key.toString()
                  // console.log(val)

                  const res: string[] = []
                  let needPush = true
                  selectedByUser.map((e) => {
                    if (e === val) needPush = false
                    else res.push(e)
                  })
                  if (needPush) res.push(val)
                  setSelectedByUser(res)
                }}
              />
              <div
                className={
                  `text-xs ` +
                  `peer-checked:bg-white peer-checked:text-blue-600 peer-checked:border-blue-600 peer-checked:font-semibold ` +
                  'my-1 w-fit cursor-pointer py-2 px-4' +
                  '  border text-sm text-black tracking-tighter bg-gray-200 rounded-2xl hover:border-blue-400'
                }
              >
                {data.name}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <p className={`text-gray-300 text-xl font-bold`}>직군을 선택해주세요.</p>
  )
}
