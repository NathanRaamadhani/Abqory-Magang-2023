import dayjs from "dayjs"
import Link from "next/link"
import Image from "next/image"
import { createStyles, Title, Text, Grid, Chip, LoadingOverlay, Group } from "@mantine/core"

type Props = {
  title: string
  slug: string
  desc: string
  categories: string[]
  createdAt: string
  creator?: string
  imageUrl: string
  loading?: boolean
}

export default function ArticleList({ title, desc, categories, createdAt, creator, imageUrl, slug, loading }: Props) {
  const { classes } = useStyles()

  return (
    <Grid key={title} className={classes.articleCard} gutter={25} sx={{ position: "relative" }}>
      <LoadingOverlay visible={!!loading} overlayBlur={2} />
      <Grid.Col md={4}>
        <div className={classes.imageContainer}>
          <Image src={imageUrl} fill alt="article-img" />
        </div>
      </Grid.Col>

      <Grid.Col md={8}>
        <div className={classes.dateContainer}>
          <Text fz={18} c="#6D6D6D">
            {dayjs(createdAt).format("MMMM, DD YYYY")} by {creator || "Media Abqory"}
          </Text>
        </div>
        <Link href={`/artikel/${slug}`} className={classes.linkText}>
          <Title fz={18} mt={10}>
            {title}
          </Title>
        </Link>
        <Text fz={16} c="#6D6D6D" fw={400} mt={6} align="justify">
          {desc}
        </Text>
        <Group mt={10} spacing={10}>
          <Chip.Group>
            {categories.map((category, i) => (
              <Chip key={i} size="sm">
                {category}
              </Chip>
            ))}
          </Chip.Group>
        </Group>
      </Grid.Col>
    </Grid>
  )
}

const useStyles = createStyles((theme) => ({
  articleCard: {
    padding: 16,
    marginTop: 25,
    border: "1px solid #EDEDED",
    borderRadius: 16,
  },
  dateContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  imageContainer: {
    // minHeight: 160,
    height: 160,
    width: "100%",
    position: "relative",
  },
  linkText: {
    color: theme.colors.dark[9],
    "&:visited": {
      color: theme.colors.dark[4],
    },
  },
}))
