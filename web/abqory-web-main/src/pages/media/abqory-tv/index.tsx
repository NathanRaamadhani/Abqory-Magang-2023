import "react-modal-video/scss/modal-video.scss"

import dayjs from "dayjs"
import { useCallback, useState } from "react"
import { matchSorter } from "match-sorter"
import type { GetStaticProps, InferGetStaticPropsType } from "next"
import { Grid, Select, Title, TextInput } from "@mantine/core"
import ModalVideo from "react-modal-video"
import { BsSortUp } from "react-icons/bs"
import { MainLayout } from "@/components/layout"
import { fetchAbqoryTvVideos } from "@/services/youtube"
import { AbqoryTvVideo } from "@/types/youtube"
import TvThumbnail from "@/components/tv-thumbnail"

export const getStaticProps: GetStaticProps<{
  data: AbqoryTvVideo[]
}> = async () => {
  let data = await fetchAbqoryTvVideos()
  data = data.sort((a, b) => {
    return dayjs(a.publishedAt).isBefore(dayjs(b.publishedAt)) ? 1 : -1
  })

  return {
    props: {
      data: data,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}

const AbqoryTv = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [videos, setVideos] = useState<AbqoryTvVideo[]>(data)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("desc")
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleSearch = useCallback(
    (search: string) => {
      setSearch(search)
      setVideos(
        matchSorter(data, search, {
          keys: ["title"],
        })
      )
    },
    [data]
  )

  const handleSort = useCallback(
    (sort: string) => {
      setSort(sort)
      setVideos(
        [...videos].sort((a, b) => {
          if (sort === "asc") {
            return dayjs(a.publishedAt).isAfter(dayjs(b.publishedAt)) ? 1 : -1
          } else {
            return dayjs(a.publishedAt).isBefore(dayjs(b.publishedAt)) ? 1 : -1
          }
        })
      )
    },
    [videos]
  )

  return (
    <MainLayout showPageHeader title="Abqory TV" description="Pelajari ekonomi syariah dengan ahlinya">
      <Title order={1} fz={30} fw={500}>
        Semua Video
      </Title>
      <Grid justify="space-between" mt={20}>
        <Grid.Col md={4} xs={12}>
          <TextInput
            width="100%"
            placeholder="Masukkan kata pencarian"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            size="md"
          />
        </Grid.Col>
        <Grid.Col md={2} sm={6} xs={12}>
          <Select
            value={sort}
            onChange={handleSort}
            size="md"
            rightSection={<BsSortUp />}
            data={[
              { label: "Terbaru", value: "desc" },
              { label: "Terlama", value: "asc" },
            ]}
            rightSectionWidth={30}
          />
        </Grid.Col>
      </Grid>
      <Grid mt={34} gutter={30}>
        {videos.map((item, i) => (
          <Grid.Col key={i} md={4} sm={6} xs={12}>
            <TvThumbnail {...item} onLinkClick={setSelectedId} />
          </Grid.Col>
        ))}
      </Grid>
      {selectedId && (
        <ModalVideo channel="youtube" videoId={selectedId} isOpen={!!selectedId} onClose={() => setSelectedId(null)} />
      )}
    </MainLayout>
  )
}

export default AbqoryTv
