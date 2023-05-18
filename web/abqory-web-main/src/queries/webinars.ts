import { gql } from "urql"

export const WEBINARS = gql`
  query getWebinars($keyword: String) {
    webinars(filters: { or: [{ title: { containsi: $keyword } }] }) {
      data {
        id
        attributes {
          title
          description
          banner {
            data {
              id
              attributes {
                width
                height
                url
              }
            }
          }
          start_date
          end_date
          register_url
          sponsor {
            id
            name
            logo {
              data {
                id
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
          speakers {
            data {
              id
              attributes {
                name
                title
                photo {
                  data {
                    id
                    attributes {
                      width
                      height
                      url
                    }
                  }
                }
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`
