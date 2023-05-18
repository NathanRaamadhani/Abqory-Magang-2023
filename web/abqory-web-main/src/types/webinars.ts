import { Sponsor } from "./sponsors"
import { Speaker } from "./speakers"

export type WebinarAttribute = {
  title: string
  description: string
  banner: {
    data: {
      id: string
      attributes: {
        width: number
        height: number
        url: string
      }
    }[]
  }
  start_date: string
  end_date: string
  register_url: string
  sponsor: Sponsor[]
  speakers: {
    data: Speaker[]
  }
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type Webinar = {
  id: string
  attributes: WebinarAttribute
}

export type WebinarResponse = {
  webinars: {
    data: Webinar[]
  }
}
