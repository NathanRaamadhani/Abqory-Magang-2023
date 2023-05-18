import { gql } from "urql"

export const ARTICLES = gql`
  query getArticles($page: Int, $limit: Int, $categoriesIds: [ID], $sort: [String], $keyword: String, $slug: String) {
    articles(
      sort: $sort
      pagination: { pageSize: $limit, page: $page }
      filters: {
        slug: { eq: $slug }
        categories: { id: { in: $categoriesIds } }
        or: [{ title: { containsi: $keyword } }, { categories: { name: { containsi: $keyword } } }]
      }
    ) {
      data {
        id
        attributes {
          slug
          title
          image {
            data {
              attributes {
                width
                height
                url
              }
            }
          }
          categories {
            data {
              id
              attributes {
                name
                createdAt
                updatedAt
              }
            }
          }
          totalViews
          content
          createdAt
          updatedAt
        }
      }
      meta {
        pagination {
          total
          page
          page
          pageCount
        }
      }
    }
  }
`

export const POPULARARTICLES = gql`
  query getPopularArticles ($limit: Int, $sort: [String] ) {
    articles(sort: $sort, filters: { totalViews: { gt: 0 } }, pagination: { pageSize: $limit }) {
      data {
        id
        attributes {
          slug
          title
          totalViews
          createdAt
          updatedAt
        }
      }
    }
  }
`

export const ARTICLESLUGS = gql`
  {
    articles(pagination: { limit: 999 }) {
      data {
        id
        attributes {
          slug
        }
      }
      meta {
        pagination {
          total
          page
          page
          pageCount
        }
      }
    }
  }
`
