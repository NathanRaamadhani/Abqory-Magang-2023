import type { NextPage } from "next"
import { Box, createStyles, Title, Text, Container, Divider, Grid, Flex, Badge, ActionIcon } from "@mantine/core"
import Image from "next/image"
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs"
import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"

import dummyImage from "../../../../public/images/dummy.png"
import { MainLayout } from "@/components/layout"

const useStyles = createStyles((theme) => ({
  tagContainer: {
    marginTop: 8,
    display: "flex",
    justifyContent: "center",
    gap: 8,
  },
  tagCard: {
    fontSize: 18,
    fontWeight: 700,
    border: "1px solid #EDEDED",
    borderRadius: 24,
    padding: "6px 12px",
  },
  sosmedContainer: {
    display: "flex",
  },
  bookCard: {
    border: "1px solid #EDEDED",
    borderRadius: 16,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  bookImg: {
    height: 180,
    width: 185,
    [theme.fn.smallerThan("xl")]: {
      objectFit: "cover",
      width: "100%",
    },
  },
}))

const BookDetail: NextPage = ({}) => {
  const { classes } = useStyles()

  return (
    <MainLayout title="Orang Muslim Harus Tahu Macam-macam Zakat" description="by Ahmad Zain">
      <Container mt={40}>
        <Box>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js">
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
                height: "750px",
              }}
            >
              <Viewer fileUrl="/dummy.pdf" defaultScale={SpecialZoomLevel.PageFit} />
            </div>
          </Worker>

          <Flex mt={70} align="center">
            <div>
              <Title fz={18} fw={700} mr={10}>
                Bagikan:
              </Title>
            </div>
            <div className={classes.sosmedContainer}>
              <Badge
                sx={{ alignItems: "center" }}
                variant="outline"
                color="dark"
                size="lg"
                rightSection={
                  <ActionIcon size="md">
                    <BsFacebook size={16} color="black" />
                  </ActionIcon>
                }
                mr={10}
              >
                Facebook
              </Badge>

              <Badge
                sx={{ alignItems: "center" }}
                variant="outline"
                color="dark"
                size="lg"
                rightSection={
                  <ActionIcon size="md">
                    <BsWhatsapp size={16} color="black" />
                  </ActionIcon>
                }
                mr={10}
              >
                Whatsapp
              </Badge>

              <Badge
                sx={{ alignItems: "center" }}
                variant="outline"
                color="dark"
                size="lg"
                rightSection={
                  <ActionIcon size="md">
                    <BsInstagram size={16} color="black" />
                  </ActionIcon>
                }
              >
                Instagram
              </Badge>
            </div>
          </Flex>
          <Divider my="sm" />
        </Box>

        <Box>
          <Title fz={18}>Buku Terkait</Title>
          <Grid mt={20}>
            <Grid.Col className={classes.bookCard} mb={30} mr={30} xl={2.5} lg={3.5} md={5.5} xs={11}>
              <Flex>
                <Image src={dummyImage} className={classes.bookImg} alt="dummy-book" />
              </Flex>
              <Text fz={18} c="#6D6D6D">
                Ahmad Zain
              </Text>
              <Title fz={18} order={3}>
                Orang Muslim Harus Tahu Macam-macam Zakat
              </Title>
            </Grid.Col>

            <Grid.Col className={classes.bookCard} mb={30} mr={30} xl={2.5} lg={3.5} md={5.5} xs={11}>
              <Flex>
                <Image src={dummyImage} className={classes.bookImg} alt="dummy-book" />
              </Flex>
              <Text fz={18} c="#6D6D6D">
                Ahmad Zain
              </Text>
              <Title fz={18} order={3}>
                Orang Muslim Harus Tahu Macam-macam Zakat
              </Title>
            </Grid.Col>

            <Grid.Col className={classes.bookCard} mb={30} mr={30} xl={2.5} lg={3.5} md={5.5} xs={11}>
              <Flex>
                <Image src={dummyImage} className={classes.bookImg} alt="dummy-book" />
              </Flex>
              <Text fz={18} c="#6D6D6D">
                Ahmad Zain
              </Text>
              <Title fz={18} order={3}>
                Orang Muslim Harus Tahu Macam-macam Zakat
              </Title>
            </Grid.Col>

            <Grid.Col className={classes.bookCard} mb={30} mr={30} xl={2.5} lg={3.5} md={5.5} xs={11}>
              <Flex>
                <Image src={dummyImage} className={classes.bookImg} alt="dummy-book" />
              </Flex>
              <Text fz={18} c="#6D6D6D">
                Ahmad Zain
              </Text>
              <Title fz={18} order={3}>
                Orang Muslim Harus Tahu Macam-macam Zakat
              </Title>
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
    </MainLayout>
  )
}

export default BookDetail
