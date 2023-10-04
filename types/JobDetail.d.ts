export interface WdJobDetail {
  application: any
  job: Job
  like_users: any
}

export interface Job {
  address: Address
  is_crossboarder: boolean
  like_count: number
  id: number
  is_like: boolean
  detail: Detail
  due_time: any
  score: any
  company_images: CompanyImage[]
  hidden: boolean
  skill_tags: any[]
  status: string
  is_bookmark: boolean
  company: Company
  has_analysis: boolean
  is_company_follow: boolean
  compare_country: boolean
  logo_img: LogoImg
  company_tags: CompanyTag[]
  matching_score: any
  short_link: any
  title_img: TitleImg
  position: string
  reward: Reward
  category_tags: CategoryTag[]
}

export interface Address {
  country: string
  full_location: string
  geo_location: GeoLocation
  location: string
  country_code: string
}

export interface GeoLocation {
  n_location: NLocation
  location: Location
  location_type: string
  viewport: Viewport
  bounds: any
}

export interface NLocation {
  lat: number
  lng: number
  address: string
}

export interface Location {
  lat: number
  lng: number
}

export interface Viewport {
  northeast: Northeast
  southwest: Southwest
}

export interface Northeast {
  lat: number
  lng: number
}

export interface Southwest {
  lat: number
  lng: number
}

export interface Detail {
  requirements: string
  main_tasks: string
  intro: string
  benefits: string
  preferred_points: string
}

export interface CompanyImage {
  url: string
  id: number
}

export interface Company {
  id: number
  industry_name: string
  application_response_stats: ApplicationResponseStats
  name: string
}

export interface ApplicationResponseStats {
  avg_rate: number
  level: string
  delayed_count: number
  avg_day: any
  remained_count: number
  type: string
}

export interface LogoImg {
  origin: string
  thumb: string
}

export interface CompanyTag {
  title: string
  id: number
  kind_title: string
}

export interface TitleImg {
  origin: string
  thumb: string
}

export interface Reward {
  formatted_total: string
  formatted_recommender: string
  formatted_recommendee: string
}

export interface CategoryTag {
  parent_id: number
  id: number
}
