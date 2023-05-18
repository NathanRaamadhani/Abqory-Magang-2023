import Image from "next/image"
import { Box, Text, Title, createStyles, Flex } from "@mantine/core"
import { AbqoryTvVideo } from "@/types/youtube"

interface P extends AbqoryTvVideo {
  onLinkClick?: (id: string) => void
}

export default function TvThumbnail({ id, title, description, viewCount, thumbnail, duration, onLinkClick }: P) {
  const { classes } = useStyles()

  return (
    <div className={classes.videoCard}>
      <div className={classes.imgContainer}>
        <Image src={thumbnail as string} fill alt={title as string} />
      </div>
      <Flex justify="space-between" mt={8}>
        <Text>{viewCount}X ditonton</Text>
        <Text>{duration}</Text>
      </Flex>
      <Box mt={8}>
        <Title
          fz={20}
          fw="700"
          lineClamp={2}
          onClick={() => onLinkClick && onLinkClick(id)}
          dangerouslySetInnerHTML={{ __html: title || "" }}
          className={classes.titleLink}
        />
        <Text fz={16} c="#6D6D6D" mt={8} lineClamp={3}>
          {description}
        </Text>
      </Box>
    </div>
  )
}

const useStyles = createStyles((theme) => ({
  videoCard: {
    border: "1px solid #EDEDED",
    borderRadius: 16,
    padding: 16,
    height: "100%",
  },
  titleLink: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
      color: "inherit",
    },
  },
  imgContainer: {
    height: 250,
    width: "100%",
    position: "relative",
  },
}))
