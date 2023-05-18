import Image from "next/image"
import {
  Box,
  Text,
  Title,
  Container,
  createStyles,
  BackgroundImage,
  Button,
  Flex,
  Accordion,
  TextInput,
  Divider,
  Badge,
  ActionIcon,
} from "@mantine/core"
import { HiOutlineInformationCircle, HiSearch, HiOutlineTicket } from "react-icons/hi"
import { BsBookmarkPlus, BsShare } from "react-icons/bs"
import { useMediaQuery } from "@mantine/hooks"
import { MainLayout } from "@/components/layout"

const useStyles = createStyles((theme) => ({
  imageBg: {
    height: 447,
    [theme.fn.smallerThan("lg")]: {
      height: 467,
    },
  },
  gradientBg: {
    background:
      "linear-gradient(96.28deg, #FEFBF4 33.91%, rgba(254, 251, 244, 0.944044) 42.83%, rgba(254, 251, 244, 0) 95.04%)",
    position: "absolute",
    height: 448,
    width: 1290,

    marginTop: "-448px",
    borderRadius: 16,
    [theme.fn.smallerThan("lg")]: {
      width: "100%",
      marginTop: "-468px",
      height: 468,
    },
  },
  courseContainer: {
    border: "1px solid #DDDDDD",
    borderRadius: 16,
  },
  innerCourseContainer: {
    borderBottom: "1px solid #dddddd",
    borderLeft: "1px solid #dddddd",
  },
  wrapper: {
    paddingTop: Number(theme.spacing.xl) * 2,
    paddingBottom: Number(theme.spacing.xl) * 2,
    minHeight: 650,
  },

  title: {
    marginBottom: Number(theme.spacing.xl) * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },
}))

const placeholder =
  "Online class dibuat untuk mewadahi teman-teman yang ingin mempelajari bidang tertentu bersama pakar."

export default function Training() {
  const { classes } = useStyles()

  const largeScreen = useMediaQuery("(min-width: 1200px)")

  return (
    <MainLayout
      showPageHeader
      title="Abqory Skill Upgrade"
      description="Kuasai bidang bersama ahlinya dalam kelas intensif yang ringkas dan kredibel"
    >
      <Box w="100%" px={{ base: 15, lg: 0 }}>
        <BackgroundImage
          src="/images/training_banner.png"
          py={{ base: 30, lg: 28 }}
          px={40}
          sx={{ borderRadius: 16 }}
          className={classes.imageBg}
        />

        <Box className={classes.gradientBg} px={15}>
          <Flex
            h={{ base: "100%", lg: "100%" }}
            direction={{ base: "column", lg: "row" }}
            justify={{ base: "center", lg: "space-between" }}
            py={50}
          >
            <Flex align="center">
              <Box w={{ base: "80%", lg: "60%" }}>
                <Title c="#6D6D6D" mb={{ base: 10, lg: 22 }} fz={14}>
                  FEATURED
                </Title>
                <Text mb={10} fz={14}>
                  28 Oktober 2022 - 31 Oktober 2022
                </Text>
                <Title mb={10} fz={{ base: 18, md: 24, lg: 30 }} transform="uppercase">
                  Kupas Tuntas Akad Murabahah
                </Title>
                <Box>
                  <Text c="#6D6D6D" mb={15} fz={14}>
                    Pelatih
                  </Text>
                  <Title fz={16} fw={500} mb={15}>
                    Ust. Ah. Azharuddin Lathif, M.Ag., MH.
                  </Title>
                </Box>
                <Box>
                  <Badge
                    sx={{ alignItems: "center" }}
                    variant="outline"
                    color="dark"
                    size="lg"
                    rightSection={
                      <ActionIcon size="md">
                        <HiOutlineInformationCircle size={16} color="black" />
                      </ActionIcon>
                    }
                    mr={10}
                  >
                    Silabus
                  </Badge>

                  <Badge
                    sx={{ alignItems: "center" }}
                    variant="outline"
                    color="dark"
                    size="lg"
                    rightSection={
                      <ActionIcon size="md">
                        <HiOutlineInformationCircle size={16} color="black" />
                      </ActionIcon>
                    }
                  >
                    Contact Person
                  </Badge>
                </Box>

                <Text c="#6D6D6D" fz={14} mt={16}>
                  {" "}
                  Didukung oleh
                </Text>
                <Flex align="center" mt={{ base: 10, lg: 15 }}>
                  <Image src="/images/kemenag.svg" height={59} width={59} alt="kemenag" style={{ marginRight: 30 }} />
                  <Image src="/images/nu.svg" height={59} width={59} alt="kemenag" />
                </Flex>
              </Box>
            </Flex>
            <Flex align={{ base: "center", lg: "flex-end" }} justify={{ base: "flex-start", lg: "center" }}>
              <Button radius="md" mt={{ base: 15, lg: 0 }} size={largeScreen ? "lg" : "md"}>
                Daftar Pelatihan
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box mt={60}>
        <Box mb={35} w={{ base: "100%", md: "80%", lg: "33%" }}>
          <TextInput placeholder="Masukkan kata pencarian" icon={<HiSearch size={18} />} />
        </Box>

        <Flex className={classes.courseContainer} direction={{ base: "column-reverse", lg: "row" }}>
          <Box>
            <Box className={classes.innerCourseContainer} sx={{ borderRadius: "16px 0 0 0" }} px={30} py={16}>
              <Title fz={{ base: 16, lg: 18 }}>Akad Syariah dan Fatwa DSN MUI pada Pegadaian...</Title>
              <Text fz={{ base: 16, lg: 18 }}>28 Oktober - 29 Oktober 2022</Text>
            </Box>

            <Box className={classes.innerCourseContainer} px={30} py={16}>
              <Title fz={{ base: 16, lg: 18 }}>Akad Syariah dan Fatwa DSN MUI pada Pegadaian...</Title>
              <Text fz={{ base: 16, lg: 18 }}>28 Oktober - 29 Oktober 2022</Text>
            </Box>

            <Box className={classes.innerCourseContainer} px={30} py={16}>
              <Title fz={{ base: 16, lg: 18 }}>Akad Syariah dan Fatwa DSN MUI pada Pegadaian...</Title>
              <Text fz={{ base: 16, lg: 18 }}>28 Oktober - 29 Oktober 2022</Text>
            </Box>

            <Box className={classes.innerCourseContainer} px={30} py={16}>
              <Title fz={{ base: 16, lg: 18 }}>Akad Syariah dan Fatwa DSN MUI pada Pegadaian...</Title>
              <Text fz={{ base: 16, lg: 18 }}>28 Oktober - 29 Oktober 2022</Text>
            </Box>
          </Box>
          <Box className={classes.innerCourseContainer} sx={{ borderRadius: "0 16px 16px 0 " }}>
            <Image
              src="/images/training_banner.png"
              width={768}
              height={280}
              alt="training-banner"
              style={{ width: "100%" }}
            />

            <Title px={15} mt={30} fz={{ base: 18, md: 24, lg: 30 }} transform="uppercase">
              Kupas Tuntas Akad Murabahah
            </Title>
            <Text px={15} mt={10} fz={14}>
              28 Oktober 2022 - 31 Oktober 2022
            </Text>
            <Text px={15} fz={{ base: 14, lg: 16 }}>
              Online Class dengan tema “Kupas Tuntas Akad Murabahah” bersama pakar di bidangnya...
            </Text>

            <Box mt={20} px={18}>
              <Badge
                sx={{ alignItems: "center" }}
                variant="outline"
                color="dark"
                size="lg"
                rightSection={
                  <ActionIcon size="md">
                    <HiOutlineInformationCircle size={16} color="black" />
                  </ActionIcon>
                }
                mr={10}
              >
                Silabus
              </Badge>
              <Badge
                sx={{ alignItems: "center" }}
                variant="outline"
                color="dark"
                size="lg"
                rightSection={
                  <ActionIcon size="md">
                    <HiOutlineInformationCircle size={16} color="black" />
                  </ActionIcon>
                }
              >
                Contact Person
              </Badge>
            </Box>

            <Divider mt={40} />
            <Flex justify="space-around" mt={20}>
              <Flex>
                <HiOutlineTicket color="#053DDA" size={24} />
                <Title ml={10} c="#053DDA" fz={18}>
                  Daftar
                </Title>
              </Flex>

              <Flex>
                <BsBookmarkPlus color="#053DDA" size={24} />
                <Title ml={10} c="#053DDA" fz={18}>
                  Simpan
                </Title>
              </Flex>
              <Flex>
                <BsShare color="#053DDA" size={24} />
                <Title ml={10} c="#053DDA" fz={18}>
                  Share
                </Title>
              </Flex>
            </Flex>
            <Divider mt={20} />

            <Box px={15} mt={25}>
              <Text fz={18} mb={15}>
                Pelatih
              </Text>
              <Flex mb={15} align="center">
                <Image src="/images/avatar.png" width={64} height={64} alt="avatar" />

                <Box ml={20}>
                  <Text fz={16}>Siti Nurjannah M. PdI</Text>
                  <Text fz={16} c="#6D6D6D">
                    Dosen Ushuluddin Universitas Islam Negeri Malang
                  </Text>
                </Box>
              </Flex>

              <Flex mb={15} align="center">
                <Image src="/images/avatar.png" width={64} height={64} alt="avatar" />

                <Box ml={20}>
                  <Text fz={16}>Kartika Putri Chandara M. PdI</Text>
                  <Text fz={16} c="#6D6D6D">
                    Pengurus Pondok Pesantren Turen Malang
                  </Text>
                </Box>
              </Flex>

              <Text c="#6D6D6D" fz={14} mt={16}>
                {" "}
                Disponsori
              </Text>
              <Flex align="center" my={15}>
                <Image src="/images/kemenag.svg" height={59} width={59} alt="kemenag" style={{ marginRight: 30 }} />
                <Image src="/images/nu.svg" height={59} width={59} alt="kemenag" />
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Container size="sm" className={classes.wrapper}>
        <Title align="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion variant="separated">
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>Apa itu Online Class</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>Berapa biaya yang dibutuhkan</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>Apakah ada refund untuk pembatalan kelas</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>Apa manfaat jika menggunakan layanan Abqory Media Online Class</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </MainLayout>
  )
}

// const Faq = () => (
//   <Container size="sm" className={classes.wrapper}>
//     <Title align="center" className={classes.title}>
//       Frequently Asked Questions
//     </Title>

//     <Accordion variant="separated">
//       <Accordion.Item className={classes.item} value="reset-password">
//         <Accordion.Control>Apa itu Online Class</Accordion.Control>
//         <Accordion.Panel>{placeholder}</Accordion.Panel>
//       </Accordion.Item>

//       <Accordion.Item className={classes.item} value="another-account">
//         <Accordion.Control>Berapa biaya yang dibutuhkan</Accordion.Control>
//         <Accordion.Panel>{placeholder}</Accordion.Panel>
//       </Accordion.Item>

//       <Accordion.Item className={classes.item} value="newsletter">
//         <Accordion.Control>Apakah ada refund untuk pembatalan kelas</Accordion.Control>
//         <Accordion.Panel>{placeholder}</Accordion.Panel>
//       </Accordion.Item>

//       <Accordion.Item className={classes.item} value="credit-card">
//         <Accordion.Control>Apa manfaat jika menggunakan layanan Abqory Media Online Class</Accordion.Control>
//         <Accordion.Panel>{placeholder}</Accordion.Panel>
//       </Accordion.Item>
//     </Accordion>
//   </Container>
// )
