import Link from 'next/link'

interface props {
  children: any
  disabled?: boolean | undefined
  href: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button2 = (props: props) => {
  return (
    <Link
      href={props.href}
      className={`mr-3 group-hover:text-gray-400 min-w-fit tracking-tighter font-semibold`}
    >
      <button className={`duration-300 transition ease-in  align-sub h-full p-3 hover:text-black `}>
        {props.children}
      </button>
    </Link>
  )
}

export default Button2
