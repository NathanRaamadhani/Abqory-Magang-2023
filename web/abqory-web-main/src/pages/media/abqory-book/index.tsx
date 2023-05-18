import type { NextPage } from "next"
import Image from "next/image"
import { Box, createStyles, Flex, Grid, Input, Pagination, Select, Text, Title, Chip, Group } from "@mantine/core"
import { BsSortUp } from "react-icons/bs"

// import { AbqoryTvDummyData } from "../../../constants/benefits"
import dummyImage from "../../../../public/images/dummy.png"
import { MainLayout } from "@/components/layout"

const useStyles = createStyles((theme) => ({
  bookCard: {
    border: "1px solid #EDEDED",
    borderRadius: 16,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  topicFilter: {
    padding: "10px 24px",
    border: "1px solid #EDEDED",
    borderRadius: 24,
    marginTop: 5,
  },
  bookImg: {
    height: 180,
    width: 185,
    [theme.fn.smallerThan("xl")]: {
      objectFit: "cover",
      width: "100%",
    },
  },
  label: {
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

const AbqoryBook: NextPage = () => {
  const { classes } = useStyles()
  return (
    <MainLayout title="Abqory Book" description="Belajar dengan referensi terbaik">
      <Grid>
        <Grid.Col md={3} xs={12}>
          <Box>
            <Input placeholder="Masukkan kata pencarian" />
            <Title fz={18} fw="500" mt={20}>
              Topic
            </Title>
          </Box>
          <Group mt={8}>
            <Chip.Group>
              <Chip variant="filled" className={classes.label} size="md" value="dialog">
                Dialog
              </Chip>
              <Chip variant="filled" className={classes.label} size="md" value="monolog">
                Monolog
              </Chip>
              <Chip variant="filled" size="md" className={classes.label} value="kajian">
                Kajian
              </Chip>
              <Chip variant="filled" size="md" className={classes.label} value="investasi">
                Investasi
              </Chip>
              <Chip variant="filled" size="md" className={classes.label} value="hukum">
                Dasar Hukum
              </Chip>
            </Chip.Group>
          </Group>
        </Grid.Col>
        <Grid.Col md={9} xs={12}>
          <Box display="flex" sx={{ justifyContent: "space-between" }}>
            <Title fz={30} order={3} weight="normal">
              Semua Buku
            </Title>
            <Select
              placeholder="Terbaru"
              rightSection={<BsSortUp />}
              data={["Terbaru", "Terlama", "Terbanyak ditonton"]}
              rightSectionWidth={30}
            />
          </Box>
          <Box
            display="flex"
            sx={{
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid mt={20}>
              {/* {AbqoryTvDummyData.map((data, i) => (
                <Grid.Col key={i} className={classes.bookCard} mb={30} mr={30} xl={2.5} lg={3.5} md={5.5} xs={11}>
                  <Flex>
                    <Image src={dummyImage} className={classes.bookImg} alt={data.title} />
                  </Flex>
                  <Text fz={18} c="#6D6D6D">
                    Ahmad Zain
                  </Text>
                  <Title fz={18} order={3}>
                    Orang Muslim Harus Tahu Macam-macam Zakat
                  </Title>
                </Grid.Col>
              ))} */}
            </Grid>
            <Pagination total={20} radius="xl" size="lg" mt={30} />
          </Box>
        </Grid.Col>
      </Grid>
    </MainLayout>
  )
}

export default AbqoryBook
