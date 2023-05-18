import { gql } from "urql"

export const CATEGORIES = gql`
  {
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
  }
`
