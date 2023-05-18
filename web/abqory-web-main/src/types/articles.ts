import { CategoryResponse } from "./categories"

export type ArticleAttribute = {
  slug: string
  title: string
  image: {
    data: {
      attributes: {
        width: number
        height: number
        url: string
      }
    }
  }
  categories: {
    data: CategoryResponse["categories"]["data"]
  }
  totalViews: number
  content: string
  createdAt: string
  updatedAt: string
}

export type Article = {
  id: string
  attributes: ArticleAttribute
}

export type Articles = Article[]

export type ArticleResponse = {
  articles: {
    data: Articles
    meta: {
      pagination: {
        total: number
        page: number
        pageCount: number
      }
    }
  }
}
