export interface Region {
  domain: string
  sub_lang: string
  currency: string
  country_number: string
  country_code: string
  active: boolean
  timezone: string
  id: number
  lang: string
  lcid: string
  country_name: string
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

export interface Company {
  id: number
  industry_name: string
  application_response_stats: ApplicationResponseStats
  name: string
}

export interface TitleImg {
  origin: string
  thumb: string
}

export type ResponseRateType = 'very_high' | 'high' | 'normal' | 'low' | 'very_low'

export interface ApplicationResponseStats {
  avg_rate: number
  level: ResponseRateType
  delayed_count: number
  avg_day: any
  remained_count: number
  type: string
}
