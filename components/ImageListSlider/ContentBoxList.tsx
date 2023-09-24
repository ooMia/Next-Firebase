import '@/styles/ConentSliderLayout.css'
import ContentBox, { Content } from '@/components/ImageListSlider/ContentBox'

interface Slider {
  length: number
  contents: Content[]
}

export default function ContentBoxList(props: Slider) {
  return (
    <div className={`flex flex-row w-1/3`}>
      {props.contents.map((content: Content) => (
        <ContentBox
          cid={content.cid}
          description={content.description}
          link={content.link}
          source={content.source}
        />
      ))}
    </div>
  )
}
