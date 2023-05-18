import { Box, Container, createStyles, Text, Title } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  pageTitleBox: {
    background: "#F7F8FB",
    padding: "70px 0",
  },
  pageSubTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#6D6D6D",
  },
}))

interface PageHeaderProps {
  title: string
  subTitle?: string
  align?: "left" | "center"
}

export default function PageHeader({ title, subTitle, align }: PageHeaderProps) {
  const { classes } = useStyles()

  return (
    <Box className={classes.pageTitleBox}>
      <Container size="xl">
        <Title fz={45} lh={1.5} align={align}>
          {title}
        </Title>
        {subTitle && (
          <Text className={classes.pageSubTitle} align={align}>
            {subTitle}
          </Text>
        )}
      </Container>
    </Box>
  )
}
