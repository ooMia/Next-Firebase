'use client'

import { Suspense, useCallback, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import NewProduct from '@/components/NewProduct'
import dynamic from 'next/dynamic'

function Page() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [category, setCategory] = useState(searchParams.get('category'))
  const [subcategory, setSubcategory] = useState(searchParams.get('subcategory'))

  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const categoryList = [
    { id: 0, name: '전체' },
    { id: 1, name: '개발' },
    { id: 2, name: '디자인' },
    { id: 3, name: '미디어' },
  ]
  const subCategoryList = [
    { id: 0, name: '전체' },
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
  ]

  return (
    <div className={`p-10`}>
      <form>
        <div className={`flex flex-row`}>
          <select
            value={category ? category : 0}
            className={`font-bold text-2xl`}
            onChange={(e) => {
              setCategory(e.target.value)
              router.push(pathname + '?' + createQueryString('category', e.target.value))
            }}
          >
            {categoryList.map((e) => (
              <option value={e.id} key={e.id} className={``}>
                {e.name}
              </option>
            ))}
          </select>

          {category && parseInt(category) > 0 && (
            <select
              value={subcategory ? subcategory : 0}
              className={`font-bold text-2xl pl-3`}
              onChange={(e) => {
                setSubcategory(e.target.value)
                router.push(pathname + '?' + createQueryString('subcategory', e.target.value))
              }}
            >
              {subCategoryList.map((e) => (
                <option value={e.id} key={e.id} className={``}>
                  {e.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </form>
      <Suspense>
        <div className={`grid  md:grid-cols-4 grid-cols-2`}>
          <NewProduct category={category} subcategory={subcategory} />
        </div>
      </Suspense>
    </div>
  )
}

export default Page
