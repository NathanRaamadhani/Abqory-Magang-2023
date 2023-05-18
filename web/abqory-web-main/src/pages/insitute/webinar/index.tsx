import { debounce } from "lodash"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { StringParam, useQueryParams, withDefault } from "use-query-params"
import { Box, TextInput, Grid } from "@mantine/core"
import { HiSearch } from "react-icons/hi"
import { initServerUrqlClient } from "@/utils/urql"
import { MainLayout } from "@/components/layout"
import { WEBINARS } from "@/queries/webinars"
import { WebinarResponse } from "@/types/webinars"
import { EventGallery } from "@/components/organisms"

export const getServerSideProps: GetServerSideProps<{
  webinars: WebinarResponse["webinars"]
}> = async (ctx) => {
  try {
    const { search } = ctx.query
    const { client } = initServerUrqlClient()
    const res = await client
      .query(WEBINARS, {
        keyword: search || "",
      })
      .toPromise()

    return {
      props: {
        webinars: res.data?.webinars || [],
      },
    }
  } catch (error) {
    return {
      props: {
        webinars: [],
      },
    }
  }
}

export default function Training({ webinars }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [query, setQuery] = useQueryParams({
    search: withDefault(StringParam, ""),
  })

  const handleSearch = debounce((search) => setQuery({ search }), 600)

  return (
    <MainLayout
      showPageHeader
      title="Abqory Webinar"
      description="Hadir dan diskusi bersama pakar terbaik di bidangnya"
    >
      <Grid>
        <Grid.Col xs={12} md={4}>
          <TextInput
            placeholder="Masukkan kata pencarian"
            size="lg"
            icon={<HiSearch size={18} />}
            value={query.search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
          />
        </Grid.Col>
      </Grid>
      <Box mt={35}>
        <EventGallery events={webinars.data} />
      </Box>
    </MainLayout>
  )
}
