import Image from "next/image"
import {
  Box,
  Text,
  Title,
  createStyles,
  BackgroundImage,
  Button,
  Flex,
  TextInput,
  Divider,
  Badge,
  ActionIcon,
  Modal,
} from "@mantine/core"
import { HiOutlineInformationCircle, HiSearch, HiOutlineTicket } from "react-icons/hi"
import { BsBookmarkPlus, BsShare } from "react-icons/bs"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
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
  title: {
    fontWeight: "bold",
  },
  body: {
    fontWeight: "normal",
  },
}))

export default function Training() {
  const { classes } = useStyles()

  const [silabusOpened, { toggle: silabusToggle, close: closeSilabus }] = useDisclosure(false)
  const [manfaatOpened, { toggle: manfaatToggle, close: closeManfaat }] = useDisclosure(false)
  const [contactOpened, { toggle: contactToggle, close: closeContact }] = useDisclosure(false)

  const largeScreen = useMediaQuery("(min-width: 1200px)")

  return (
    <MainLayout
      showPageHeader
      title="Abqory Training"
      description="Latih bidang tertentu dalam waktu yang ringkas dengan hasil yang maksimal"
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
                  Akad Syariah dan fatwa dsn mui pada pegadaian syariah
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
                      <ActionIcon size="md" onClick={silabusToggle}>
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
                        <HiOutlineInformationCircle size={16} color="black" onClick={manfaatToggle} />
                      </ActionIcon>
                    }
                    mr={10}
                  >
                    Manfaat
                  </Badge>

                  <Badge
                    sx={{ alignItems: "center" }}
                    variant="outline"
                    color="dark"
                    size="lg"
                    rightSection={
                      <ActionIcon size="md">
                        <HiOutlineInformationCircle size={16} color="black" onClick={contactToggle} />
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
              Akad Syariah dan fatwa dsn mui pada pegadaian syariah
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
                    <HiOutlineInformationCircle size={16} color="black" onClick={silabusToggle} />
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
                    <HiOutlineInformationCircle size={16} color="black" onClick={manfaatToggle} />
                  </ActionIcon>
                }
                mr={10}
              >
                Manfaat
              </Badge>

              <Badge
                sx={{ alignItems: "center" }}
                variant="outline"
                color="dark"
                size="lg"
                rightSection={
                  <ActionIcon size="md">
                    <HiOutlineInformationCircle size={16} color="black" onClick={contactToggle} />
                  </ActionIcon>
                }
              >
                Contact Person
              </Badge>
            </Box>
            <Modal
              centered
              size="sm"
              opened={silabusOpened}
              onClose={closeSilabus}
              title="Silabus"
              className={classes.title}
            >
              <ul className={classes.body}>
                <li>Gambaran umum praktik murobahah dalam kehidupan sehari-hari</li>
                <li>Bedah fatwa akad murobahah </li>
                <li>Telisik regulasi terkaid akad murobahah</li>
              </ul>
            </Modal>

            <Modal
              centered
              size="sm"
              opened={manfaatOpened}
              onClose={closeManfaat}
              title="Manfaat"
              className={classes.title}
            >
              <ul className={classes.body}>
                <li>Ilmu bermanfaat</li>
                <li>Sertifikat latihan</li>
                <li>Koneksi dengan pakar secara langsung</li>
              </ul>
            </Modal>

            <Modal
              centered
              size="sm"
              opened={contactOpened}
              onClose={closeContact}
              title="Contact"
              className={classes.title}
            >
              <ul className={classes.body}>
                <li>+62891233211122 (Anwar Budi)</li>
                <li>@infoseminar (instagram)</li>
                <li>@eventmalang (twitter)</li>
              </ul>
            </Modal>

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
    </MainLayout>
  )
}
