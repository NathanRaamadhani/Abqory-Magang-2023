import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "@mantine/hooks"
import { Container, Grid, Title, createStyles, Box, Button, Text, Flex } from "@mantine/core"
import { MainLayout } from "@/components/layout"
import { consultants } from "@/constants/consultants"
import consultantImage from "../../public/photos/consultant.jpg"

const useStyles = createStyles((theme) => ({
  heroTitle: {
    fontSize: 45,
  },
  heroSubtitle: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 10,
    color: "#6D6D6D",
  },
  benefitCard: {
    display: "flex",
    minHeight: 282,
    padding: 24,
    borderRadius: 16,
    border: "1px solid #EDEDED",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  benefitSectionSmall: {
    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },
  },
  contactCard: {
    border: "1px solid #EDEDED",
    borderRadius: 24,
    padding: 36,
  },
}))

export default function Jasa() {
  const { classes } = useStyles()

  const largeScreen = useMediaQuery("(min-width: 1200px)")
  const smallScreen = useMediaQuery("(max-width: 768px)")

  return (
    <MainLayout title="Jasa">
      <Container size="xl">
        <Grid gutter={16} align="center" justify="space-between">
          <Grid.Col xs={12} md={5}>
            <Title order={1} className={classes.heroTitle}>
              Layanan Kami
            </Title>
            <Text className={classes.heroSubtitle}>
              Anda memiliki kesulitan tertentu dalam hal ilmu syariah? Mari kita cari solusinya bersama!
            </Text>
            <Box sx={{ width: largeScreen ? "40%" : "100%" }}>
              <Button component={Link} href="#solusi" mt={16} size="md" fullWidth>
                Solusi
              </Button>
            </Box>
          </Grid.Col>
          <Grid.Col xs={12} md={7} mt={{ base: 15, lg: 0 }}>
            <Box sx={{ height: 400, position: "relative" }}>
              <Image fill src={consultantImage} alt="ilustrasi" style={{ borderRadius: 10 }} />
            </Box>
          </Grid.Col>
        </Grid>

        <Box id="solusi" component="section" mt={120}>
          <Title align="center" fz={{ base: 24, md: 32, lg: 45 }}>
            Kami siap membantu Anda
          </Title>
          <Grid mt={40} gutter={40} justify="center">
            {consultants.map((jasa, i) => (
              <Grid.Col xs={12} sm={10} md={6} key={i}>
                <Grid className={classes.benefitCard} justify="space-evenly" gutter={20}>
                  <Grid.Col xs={12} sm={4} md={6} className={classes.benefitSectionSmall}>
                    <Image src={jasa.img} alt="jasa" width={221} height={188} />
                  </Grid.Col>
                  <Grid.Col xs={12} sm={6} md={6}>
                    <Text fz={18} fw={500} className={classes.benefitSectionSmall}>
                      {jasa.title}
                    </Text>
                    <Text fz={18} mt={6} align="justify">
                      {jasa.desc}
                    </Text>
                    <Button component="a" mt={13} radius="md" size="md" fullWidth href={jasa.link} target="_blank">
                      Daftar
                    </Button>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        <Flex mt={175} justify="center">
          <Flex
            bg="#F7F8FB"
            direction={{ base: "column", sm: "row" }}
            align="center"
            className={classes.contactCard}
            justify="space-between"
            w={{ base: "100%", md: "60%" }}
          >
            <Box>
              <Text c="#053DDA" fz={{ base: 14, md: 18 }}>
                Tidak menemukan layanan yang cocok?
              </Text>
              <Title fz={{ base: 18, md: 30 }}>Hubungi tim Abqory Sharia</Title>
            </Box>
            <Button
              radius="md"
              size={smallScreen ? "sm" : "md"}
              mt={{ base: 15, md: 0 }}
              fullWidth={smallScreen ? true : false}
            >
              Hubungi
            </Button>
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  )
}
