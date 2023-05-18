import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import Image from "next/image"
import { truncate } from "lodash"
import { stripHtml } from "string-strip-html"
import { Box, createStyles, Title } from "@mantine/core"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share"

import { initServerUrqlClient, withUrql } from "@/utils/urql"
import { ARTICLES, ARTICLESLUGS } from "@/queries/articles"
import { BsTwitter, BsFacebook, BsWhatsapp } from "react-icons/bs"
import { ArticleResponse, Article } from "@/types/articles"
import { formatGeneralDate } from "@/utils/date"
import { MainLayout } from "@/components/layout"
import { isSsr } from "@/utils/helpers"
import { useEffect } from "react"
import axios from "axios"

export const getStaticPaths: GetStaticPaths = async () => {
  const { client } = initServerUrqlClient()
  const res = await client.query(ARTICLESLUGS, {}).toPromise()
  const articles = res.data.articles

  return {
    paths: articles.data.map((article: any) => ({
      params: { slug: article.attributes.slug },
    })),
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<{
  data: Article
}> = async (ctx) => {
  const slug = ctx.params?.slug
  const { client } = initServerUrqlClient()
  const res = await client
    .query(ARTICLES, {
      limit: 1,
      slug,
    })
    .toPromise()

  const articles: ArticleResponse["articles"] = res.data.articles
  const article = articles.data[0]

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: article,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}

const BlogDetail = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { classes } = useStyles()
  let contentUrl = ""

  if (isSsr()) {
    contentUrl = window.location.href
  }

  const putRequest = async () => {
    return await axios.put(`${process.env.NEXT_PUBLIC_CMS_URL}/api/articles/${data.id}/count-view`)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      putRequest()
    }, 10000)

    return () => clearTimeout(timer)
  }, [putRequest])

  return (
    <MainLayout
      showPageHeader
      headerAlign="center"
      title={data.attributes.title}
      url={`/blog/${data.attributes.slug}`}
      description={stripHtml(truncate(data.attributes.content, { length: 150 })).result}
      image={data.attributes.image.data.attributes.url}
      subtitle={`${formatGeneralDate(data.attributes.createdAt)} by Abqory Media`}
    >
      <Box className={classes.blogImageContainer}>
        <Image className={classes.blogImage} src={data.attributes.image.data.attributes.url} alt="img-post" fill />
      </Box>
      <Box component="article" mt={36} dangerouslySetInnerHTML={{ __html: data.attributes.content }}></Box>
      <Box display="flex" sx={{ alignItems: "center" }}>
        <Title fz={18} fw={700}>
          Bagikan:
        </Title>
        <div className={classes.sosmedContainer}>
          <Box className={classes.sosmedCard}>
            <BsFacebook />
            <FacebookShareButton url={contentUrl} className={classes.sosmedCardItem}>
              Facebook
            </FacebookShareButton>
          </Box>
          <Box className={classes.sosmedCard}>
            <BsWhatsapp />{" "}
            <WhatsappShareButton url={contentUrl} className={classes.sosmedCardItem}>
              Whatsapp
            </WhatsappShareButton>
          </Box>
          <Box className={classes.sosmedCard}>
            <BsTwitter />{" "}
            <TwitterShareButton url={contentUrl} className={classes.sosmedCardItem}>
              Twitter
            </TwitterShareButton>
          </Box>
        </div>
      </Box>
      {/* <Divider my="xl" /> */}
      {/* <Box>
          <Title fz={18}>Artikel Terkait</Title>
          <Grid mt={20} gutter={30}>
            <Grid.Col className={classes.postCard} md={3.5} mx={5} sm={6} xs={12}>
              <Image src="/images/dummy.png" height={200} width={260} alt="artikel" />
              <Box mt={10}>
                <Text fz={18} c="#6D6D6D">
                  December, 12 2022
                </Text>
              </Box>
              <Box>
                <Title fz={18} fw="700">
                  Orang Muslim Harus Tahu Macam-macam Zakat
                </Title>
              </Box>
            </Grid.Col>

            <Grid.Col className={classes.postCard} md={3.5} mx={5} mt={{ base: 10, lg: 0 }} sm={6} xs={12}>
              <Image src="/images/dummy.png" height={200} width={260} alt="artikel" />
              <Box mt={10}>
                <Text fz={18} c="#6D6D6D">
                  December, 12 2022
                </Text>
              </Box>
              <Box>
                <Title fz={18} fw="700">
                  Orang Muslim Harus Tahu Macam-macam Zakat
                </Title>
              </Box>
            </Grid.Col>
            <Grid.Col className={classes.postCard} md={3.5} mx={5} mt={{ base: 10, lg: 0 }} sm={6} xs={12}>
              <Image src="/images/dummy.png" height={200} width={260} alt="artikel" />
              <Box mt={10}>
                <Text fz={18} c="#6D6D6D">
                  December, 12 2022
                </Text>
              </Box>
              <Box>
                <Title fz={18} fw="700">
                  Orang Muslim Harus Tahu Macam-macam Zakat
                </Title>
              </Box>
            </Grid.Col>
          </Grid>
        </Box> */}
    </MainLayout>
  )
}

const useStyles = createStyles((theme) => ({
  blogImageContainer: {
    position: "relative",
    width: "100%",
    height: "700px",
    [theme.fn.smallerThan("sm")]: {
      height: "350px",
    },
  },
  blogImage: {
    borderRadius: 16,
    objectFit: "cover",
  },
  pageSubTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#6D6D6D",
    textAlign: "center",
  },
  tagContainer: {
    marginTop: 16,
    display: "flex",
    justifyContent: "center",
  },
  tagCard: {
    fontSize: 16,
    fontWeight: 700,
    border: "1px solid #EDEDED",
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: "6px 12px",
    marginRight: 4,
  },
  sosmedContainer: {
    display: "flex",
    marginLeft: 16,
  },
  sosmedCard: {
    borderRadius: 24,
    padding: "8px 12px",
    fontWeight: 500,
    border: "1px solid #EDEDED",
    display: "flex",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    span: {
      marginLeft: 6,
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#EDEDED",
    },
  },
  sosmedCardItem: {
    marginLeft: 10,
  },
  postCard: {
    border: "1px solid #EDEDED",
    borderRadius: 16,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
}))

export default withUrql(BlogDetail)
