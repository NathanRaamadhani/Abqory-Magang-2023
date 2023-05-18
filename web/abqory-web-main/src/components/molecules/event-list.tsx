import dayjs, { Dayjs } from "dayjs"
import { Box, Text, createStyles, Flex } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  eventList: {
    padding: "16px 24px",
    borderBottom: "1px solid #dddddd",
    ".event-list-sub": {
      color: theme.colors.gray[6],
    },
    "&:hover,&.active": {
      backgroundColor: theme.colors.abqory[5],
      cursor: "pointer",
      color: "#fff",
      ".event-list-sub": {
        color: "#fff",
      },
    },
  },
}))

interface EventListProps {
  date: string | Dayjs
  title: string
  isActive?: boolean
  onClick?: (e: any) => void
}

export default function EventList({ date, title, isActive, onClick }: EventListProps) {
  const { classes, cx } = useStyles()
  const eventDate = dayjs(date)

  return (
    <Flex align="center" className={cx(classes.eventList, isActive && "active")} onClick={onClick}>
      <Box>
        <Text align="center" fz={28} fw="700">
          {eventDate.format("DD")}
        </Text>
        <Text fz={18} className="event-list-sub" fw="500">
          {eventDate.format("MMM")}
        </Text>
      </Box>
      <Box ml={16}>
        <Text fz={18} fw="700">
          {title}
        </Text>
        <Text fz={18} fw="500" className="event-list-sub">
          18.00 - 19.00 WIB
        </Text>
      </Box>
    </Flex>
  )
}
