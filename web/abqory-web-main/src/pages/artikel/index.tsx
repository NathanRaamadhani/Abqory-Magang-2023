import { truncate, debounce } from "lodash"
import { BsSortUp } from "react-icons/bs"
import { useState } from "react"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { NumberParam, StringParam, ArrayParam, withDefault, useQueryParams } from "use-query-params"
import { Box, createStyles, Title, Grid, Input, Select, Pagination, Flex, Chip, Group } from "@mantine/core"
import { stripHtml } from "string-strip-html"

import { initServerUrqlClient, withUrql } from "@/utils/urql"
import { ArticleList, PopularArticleList } from "@/components"
import { MainLayout } from "@/components/layout"
import { ARTICLES, POPULARARTICLES } from "@/queries/articles"
import { CATEGORIES } from "@/queries/categories"
import { ArticleResponse } from "@/types/articles"
import { CategoryResponse } from "@/types/categories"

export const getServerSideProps: GetServerSideProps<{
  articles: ArticleResponse["articles"]
  categories: CategoryResponse["categories"]
  popular: ArticleResponse["articles"]
}> = async (ctx) => {
  try {
    const { page, sort, search, categoriesIds } = ctx.query
    const { client } = initServerUrqlClient()
    const [resCategories, resArticles, resPopular] = await Promise.all([
      client.query(CATEGORIES, {}).toPromise(),
      client
        .query(ARTICLES, {
          limit: 5,
          page: Number(page) || 1,
          sort: [`createdAt:${sort || "desc"}`],
          keyword: search || "",
          categoriesIds: categoriesIds?.length ? categoriesIds : undefined,
        })
        .toPromise(),
      client
        .query(POPULARARTICLES, {
          limit: 5,
          sort: ['totalViews:desc']
        })
        .toPromise(),
    ])
    return {
      props: {
        articles: resArticles.data?.articles || [],
        categories: resCategories?.data?.categories || [],
        popular: resPopular?.data?.articles || [],
      },
    }
  } catch (error) {
    return {
      props: {
        articles: [],
        categories: [],
        popular: [],
      },
    }
  }
}

const Blog = ({ articles, categories, popular }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { classes } = useStyles()
  const [search, setSearch] = useState("")
  const [query, setQuery] = useQueryParams({
    search: withDefault(StringParam, ""),
    page: withDefault(NumberParam, 1),
    sort: withDefault(StringParam, "desc"),
    categoriesIds: withDefault(ArrayParam, []),
  })

  const handleSearch = debounce((search) => setQuery({ search }), 600)


  return (
    <MainLayout
      showPageHeader
      title="Artikel"
      description="Perkaya dengan ilmu-ilmu baru bersama kami"
      headerAlign="center"
    >
      <Grid gutter={50}>
        <Grid.Col md={3}>
          <Input
            defaultValue={query.search}
            placeholder="Masukkan kata pencarian"
            size="md"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
          />
          <Title fz={18} fw="bold" mt={34}>
            Topic
          </Title>
          <Group mt={24} spacing={10}>
            <Chip.Group
              multiple
              value={query.categoriesIds as string[]}
              onChange={(value) => setQuery({ categoriesIds: value, page: 1 })}
            >
              {categories.data.map((category, i) => (
                <Chip key={i} variant="filled" className={classes.label} size="md" value={category.id}>
                  {category.attributes.name}
                </Chip>
              ))}
            </Chip.Group>
          </Group>

          <Box mt={40}>
            <Title fz={18} fw="bold" mb={24}>
              Populer
            </Title>
            {popular.data.map(
              (article, i) =>
                article.attributes.totalViews  && (
                  <PopularArticleList
                    key={i}
                    title={article.attributes.title}
                    date={article.attributes.createdAt}
                    slug={article.attributes.slug}
                  />
                )
            )}
          </Box>
        </Grid.Col>
        <Grid.Col md={9}>
          <Flex align="center" justify="space-between">
            <Title order={1} fz={30} fw={500}>
              Semua Artikel
            </Title>
            <Select
              size="md"
              value={query.sort}
              onChange={(sort: string) => setQuery({ sort })}
              rightSection={<BsSortUp />}
              data={[
                { label: "Terbaru", value: "desc" },
                { label: "Terlama", value: "asc" },
              ]}
              rightSectionWidth={30}
            />
          </Flex>

          <Box mt={34}>
            {articles.data.map((art, i) => (
              <ArticleList
                key={i}
                title={art.attributes.title}
                slug={art.attributes.slug}
                desc={stripHtml(truncate(art.attributes.content, { length: 180 })).result}
                categories={art.attributes.categories.data.map((cat) => cat.attributes.name)}
                createdAt={art.attributes.createdAt}
                imageUrl={art.attributes.image.data.attributes.url}
              />
            ))}
          </Box>
          <Box className={classes.paginationContainer}>
            <Pagination
              value={query.page}
              onChange={(page) => setQuery({ page })}
              total={articles.meta.pagination.pageCount}
              radius="xl"
              size="lg"
            />
          </Box>
        </Grid.Col>
      </Grid>
    </MainLayout>
  )
}

const useStyles = createStyles((theme) => ({
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
  label: {
    display: "inline-block",
    "&[data-checked]": {
      "&, &:hover": {
        backgroundColor: "#F5F7FE",
        color: theme.white,
      },
      "&:hover": {
        backgroundColor: "#F5F7FE",
      },
    },
  },
}))

export default withUrql(Blog)
