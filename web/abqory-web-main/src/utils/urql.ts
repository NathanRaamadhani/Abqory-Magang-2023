import { withUrqlClient, initUrqlClient } from "next-urql"
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, Client } from "urql"

const URL = process.env.NEXT_PUBLIC_CMS_GRAPHQL_URL as string

export const withUrql = (page: any) =>
  withUrqlClient((_ssrExchange, ctx) => ({
    // ...add your Client options here
    url: URL,
  }))(page)

export const initServerUrqlClient = () => {
  const ssrCache = ssrExchange({ isClient: false })
  const client = initUrqlClient(
    {
      url: URL,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    false
  ) as Client

  return { client, ssrCache }
}
