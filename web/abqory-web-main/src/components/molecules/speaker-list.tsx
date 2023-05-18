import { Box, Text, Flex, Avatar, FlexProps } from "@mantine/core"
import { generateAvatarName } from "@/utils/helpers"

interface SpeakerListProps extends FlexProps {
  photo?: string
  name: string
  description?: string
}

export default function SpeakerList({ photo, name, description, ...flexProps }: SpeakerListProps) {
  return (
    <Flex align="center" {...flexProps}>
      {photo ? (
        <Avatar size={64} radius="xl" src={photo} alt={name} />
      ) : (
        <Avatar radius="xl" size={64}>
          {generateAvatarName(name)}
        </Avatar>
      )}
      <Box ml={20}>
        <Text>{name}</Text>
        <Text c="gray.6">{description}</Text>
      </Box>
    </Flex>
  )
}
