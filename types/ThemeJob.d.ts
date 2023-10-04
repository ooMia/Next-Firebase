export interface ThemeJob {
  total: number
  data: Data[]
  links: Links
}

export interface Data {
  status: string
  reward_recommender: number
  title_thumb_img: string
  is_bookmark: boolean
  formatted_reward_total: string
  logo_thumb_img: string
  like_count: number
  logo_img: string
  address: Address
  confirm_time: string
  id: number
  reward_recommendee: number
  like: any
  company_application_response_stats: CompanyApplicationResponseStats
  company_id: number
  title_img: string
  due_time?: string
  location: string
  position: string
  reward: number
  category_tags: CategoryTag[]
  company_name: string
}

export interface Address {
  country: string
  id: number
  location: string
}

export interface CompanyApplicationResponseStats {
  avg_day: number
  type: string
  avg_rate: number
  level: string
}

export interface CategoryTag {
  parent_id: number
  id: number
}

export interface Links {
  prev: any
  next: string
}
