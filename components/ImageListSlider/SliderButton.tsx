export default function SliderButton(props: { onClickCallback: any; value: any }) {
  return (
    <button className='SliderButton bg-black' onClick={props.onClickCallback}>
      {props.value}
    </button>
  )
}
