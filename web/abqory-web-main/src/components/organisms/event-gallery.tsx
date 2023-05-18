import dayjs from "dayjs"
import { useState } from "react"
import Image from "next/image"
import { Box, Text, Title, Flex, Grid, Stack, Button } from "@mantine/core"
import { HiOutlineTicket } from "react-icons/hi"
import { BsShare } from "react-icons/bs"

import { EventList, SpeakerList } from "@/components/molecules"
import { Webinar } from "@/types/webinars"

interface EventGalleryProps {
  events: Webinar[]
}

export default function EventGallery({ events }: EventGalleryProps) {
  const [activeEvent, setActiveEvent] = useState(events[0])

  return (
    <Grid sx={{ border: "1px solid #dddddd", borderRadius: 16 }}>
      <Grid.Col p={0} xs={12} md={4} sx={{ borderRight: "1px solid #dddddd" }}>
        {events.map((event, i) => (
          <EventList
            key={i}
            isActive={activeEvent.id === event.id}
            date={event.attributes.start_date}
            title={event.attributes.title}
            onClick={() => setActiveEvent(event)}
          />
        ))}
      </Grid.Col>
      <Grid.Col p={0} xs={12} md={8}>
        <Box sx={{ position: "relative", height: 280, width: "100%" }}>
          <Image fill src="/images/training_banner.png" alt="training-banner" />
        </Box>
        <Flex py={34} px={30}>
          <Box>
            <Text align="center" fz={28} fw="700">
              {dayjs(activeEvent.attributes.start_date).format("DD")}
            </Text>
            <Text fz={18} className="event-list-sub" fw="500">
              {dayjs(activeEvent.attributes.start_date).format("MMM")}
            </Text>
          </Box>
          <Box ml={36}>
            <Title fz={28}>{activeEvent.attributes.title}</Title>
            <Text c="gray.6" fz={18}>
              19.00 - 22.00 at Zoom
            </Text>
            <Text fz={16} mt={8}>
              {activeEvent.attributes.description}
            </Text>
          </Box>
        </Flex>
        <Box sx={{ borderTop: "1px solid #dddddd", borderBottom: "1px solid #dddddd" }}>
          <Button.Group>
            <Button fullWidth variant="subtle" size="lg" leftIcon={<HiOutlineTicket size={24} />}>
              Daftar
            </Button>
            <Button fullWidth variant="subtle" size="lg" leftIcon={<BsShare size={24} />}>
              Bagikan
            </Button>
          </Button.Group>
        </Box>
        <Box py={20} px={30}>
          <Text fz={18} fw="500">
            Pembicara
          </Text>
          <Stack mt={16}>
            {activeEvent.attributes.speakers.data.map((speaker, i) => (
              <SpeakerList
                key={i}
                name={speaker.attributes.name}
                description={speaker.attributes.title}
                photo={speaker.attributes.photo.data.attributes.url}
              />
            ))}
          </Stack>
        </Box>
      </Grid.Col>
    </Grid>
  )
}
