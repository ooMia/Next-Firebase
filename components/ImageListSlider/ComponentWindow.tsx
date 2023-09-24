import '@/styles/ComponentWindow.css'
import ContentBoxListSlider from '@/components/ImageListSlider/ContentBoxListSlider'

const ComponentWindow = (props: { viewWidth: number }) => {
  const imageWidth = props.viewWidth / 3
  const blockWidth = (props.viewWidth - imageWidth) / 2

  return (
    <div>
      <div className='Blur' style={{ width: blockWidth, left: 0 + 'px' }}></div>
      <ContentBoxListSlider viewWidth={props.viewWidth} imageWidth={imageWidth} />
      <div className='Blur' style={{ width: blockWidth, right: 0 + 'px' }}></div>
    </div>
  )
}

export default ComponentWindow
