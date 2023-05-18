import Link from "next/link"
import { Box, Title, Text, BoxProps } from "@mantine/core"
import { formatGeneralDate } from "@/utils/date"

type Props = BoxProps & {
  title: string
  date: string
  creator?: string
  slug: string
}

export default function PopularArticleList({ title, date, creator, slug, ...props }: Props) {
  return (
    <Box mb={20} {...props}>
      <Link href={`/artikel/${slug}`}>
        <Title fz={18} fw="bold" c="#022377">
          {title}
        </Title>
      </Link>
      <Box display="flex" sx={{ justifyContent: "space-between" }}>
        <Text fz={16} c="#6D6D6D">
          {formatGeneralDate(date)} by {creator || "Media Abqory"}.
        </Text>
      </Box>
    </Box>
  )
}
