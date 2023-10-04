import { CategoryTag, Company, Reward, TitleImg } from '@/types/Region'

export interface JobRecommendation {
  status: string
  reward: Reward
  is_like: boolean
  is_bookmark: boolean
  company: Company
  has_analysis: boolean
  title_img: TitleImg
  compare_country: boolean
  due_time: any
  like_count: number
  id: number
  logo_img: LogoImg
  address: Address
  matching_score: any
  position: string
  hidden: boolean
  score: any
  category_tags: CategoryTag[]
}

export interface LogoImg {
  origin: string
  thumb: string
}

export interface Address {
  country: string
  location: string
}
