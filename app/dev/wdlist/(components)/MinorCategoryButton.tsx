import React from 'react'

export default function MinorCategoryButton(props: {
  pk: string
  name: any
  checked?: boolean
  onClick?: any
}) {
  const classDefault =
    'my-1 w-fit cursor-pointer py-2 px-4  border text-sm text-black tracking-tighter bg-gray-200 rounded-2xl hover:border-blue-400'
  const peerChecked = `peer-checked:bg-white peer-checked:text-blue-600 peer-checked:border-blue-600 peer-checked:font-semibold `
  return (
    <label className={`relative cursor-pointer`} onClick={props.onClick}>
      <input
        type={'checkbox'}
        value=''
        className={`peer sr-only`}
        name={props.pk}
        defaultChecked={props.checked}
      />
      <div className={`text-xs ${classDefault} ${peerChecked}`}>{props.name}</div>
    </label>
  )
}
