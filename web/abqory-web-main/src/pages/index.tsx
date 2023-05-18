import "aos/dist/aos.css"

import { useEffect } from "react"
import type { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import { useMediaQuery } from "@mantine/hooks"
import { createStyles, Container, Grid, Title, Text, Button, Box, Group, Paper, Stack } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import AOS from "aos"
import { benefits } from "@/constants/benefits"
import { testimonials } from "@/constants/testimonials"
import { MainLayout } from "@/components/layout"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import dubaiPhoto from "../../public/images/dubai.jpg"

const useStyles = createStyles((theme) => ({
  heroTitle: {
    fontSize: 40,
  },
  heroSubtitle: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 10,
    color: "#6D6D6D",
  },
  textHightlight: {
    color: theme.colors[theme.primaryColor][6],
  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: 500,
  },
  categorySubTitle: {
    fontSize: 18,
    fontWeight: 400,
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
  testimonialsCard: {
    display: "flex",
    minHeight: 192,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    border: "1px solid #EDEDED",
    borderRadius: 16,
    [theme.fn.smallerThan("lg")]: {
      flexDirection: "column",
      padding: 8,
    },
  },
  partnerCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #EDEDED",
    padding: "30px 55px",
    filter: "grayscale(100)",
    "&:hover": {
      filter: "grayscale(0)",
    },
  },
  testimonialContent: {
    color: "#6D6D6D",
    fontSize: 18,
    marginBottom: 15,
    textAlign: "justify",
    [theme.fn.smallerThan("lg")]: { fontSize: 16 },
  },
  promotionImageIllustration: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  ImgContainer: {
    [theme.fn.smallerThan("lg")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  bannerButton: {
    width: 220,
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
  carouselIndicator: {
    ".mantine-Carousel-indicators": {
      top: 190,
    },
  },
}))

const Home: NextPage = () => {
  const { classes } = useStyles()
  const largeScreen = useMediaQuery("(min-width: 1200px)")

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <MainLayout
      title="Home"
      description="Mencari Berkah, Bersama Ekonomi Syariah. Bergabunglah dengan Kami untuk Mendalami ekonomi Syariah yang lebih baik"
    >
      <Container size="xl">
        <Grid data-aos="fade-down" data-aos-duration="3000" align="center" justify="center">
          <Grid.Col xs={12} md={6}>
            <Title order={1} className={classes.heroTitle}>
              Mencari <span className={classes.textHightlight}>Berkah</span> <br />
              Bersama <span className={classes.textHightlight}>Ekonomi Syariah</span>
            </Title>
            <Title order={3} className={classes.heroSubtitle}>
              Bergabunglah dengan Kami untuk Mendalami Ekonomi Syariah yang Lebih Baik
            </Title>
            <Button component={Link} mt={16} size="lg" href="#benefit" sx={{ width: 300, mt: 16 }}>
              Pelajari
            </Button>
            <Group mt={40} spacing={50}>
              <Image src="/logo/basyarnas-logo.png" alt="logo sertifikasi1" width={100} height={100} />
            </Group>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <Box sx={{ height: 400, position: "relative" }}>
              <Image src={dubaiPhoto} fill alt="dubai-photo" style={{ borderRadius: 10 }} />
            </Box>
          </Grid.Col>
        </Grid>
        <Box id="benefit" component="section" data-aos="zoom-in" data-aos-duration="3000" mt={120}>
          <Box>
            <Title align="center" order={4} className={classes.categoryTitle}>
              <span className={classes.textHightlight}>Keuntungan Belajar</span> di Abqory Sharia
            </Title>
            <Title align="center" order={6} className={classes.categorySubTitle}>
              Beberapa manfaat yang kamu dapatkan di Abqory Sharia
            </Title>
          </Box>
          <Grid mt={40} gutter={40} justify="center">
            {benefits.map((benefit, i) => (
              <Grid.Col xs={12} sm={10} md={6} key={i}>
                <Grid className={classes.benefitCard} justify="space-evenly" gutter={20}>
                  <Grid.Col xs={12} sm={4} md={6} className={classes.benefitSectionSmall}>
                    <Image src={benefit.img} alt="benefit" width={221} height={188} />
                  </Grid.Col>
                  <Grid.Col xs={12} sm={6} md={6}>
                    <Text fz={20} fw={600} className={classes.benefitSectionSmall}>
                      {benefit.title}
                    </Text>
                    <Text fz={18} mt={6} align="justify">
                      {benefit.description}
                    </Text>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        <Box data-aos="zoom-in-up" data-aos-duration="3000" mt={100}>
          <Box sx={{ textAlign: "center" }}>
            <Title order={4} className={classes.categoryTitle}>
              <span className={classes.textHightlight}>Kata Mereka</span> tentang Abqory Sharia
            </Title>
            <Title order={6} className={classes.categorySubTitle}>
              Mereka sudah membuktikan proses belajar dari berbagai latar belakang
            </Title>
          </Box>
          <Carousel
            withIndicators
            mt={40}
            slideSize="100%"
            slideGap="xl"
            loop
            nextControlIcon={<FiChevronRight size={36} />}
            previousControlIcon={<FiChevronLeft size={36} />}
            styles={{
              controls: {
                marginLeft: largeScreen ? -80 : 0,
                marginRight: largeScreen ? -80 : 0,
              },
              indicator: {
                marginTop: 200,
                width: 10,
                height: 10,
                transition: "width 250ms ease",
                borderRadius: "50%",
                backgroundColor: "#E4E7EA",
                "&[data-active]": {
                  background: "#053DDA",
                },
              },
            }}
          >
            {testimonials.map((testi, i) => (
              <Carousel.Slide key={i}>
                <Paper className={classes.testimonialsCard}>
                  <div className={classes.ImgContainer}>
                    <Image
                      src={testi.img}
                      style={{
                        borderRadius: "100%",
                        objectFit: "cover",
                      }}
                      width={120}
                      height={120}
                      alt={testi.name}
                    />
                    <Title
                      display={{ base: "block", lg: "none" }}
                      order={largeScreen ? 5 : 6}
                      mt={5}
                      className={classes.textHightlight}
                    >
                      {testi.name}
                    </Title>
                    <Title
                      display={{ base: "block", lg: "none" }}
                      order={largeScreen ? 5 : 6}
                      className={classes.categorySubTitle}
                      mb={5}
                    >
                      {testi.position}
                    </Title>
                  </div>
                  <div style={{ width: "70%" }}>
                    <Text className={classes.testimonialContent}>{testi.description}.</Text>
                    <Title display={{ base: "none", lg: "block" }} order={5} mt={5} className={classes.textHightlight}>
                      {testi.name}
                    </Title>
                    <Title display={{ base: "none", lg: "block" }} className={classes.categorySubTitle}>
                      {testi.position}
                    </Title>
                  </div>
                </Paper>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>

        <Box data-aos="zoom-in-up" data-aos-duration="3000" mt={100}>
          <Box mb={40} sx={{ textAlign: "center" }}>
            <Title order={4} className={classes.categoryTitle}>
              Berkolaborasi dengan<span className={classes.textHightlight}> mitra ahli dan berpengalaman</span>
            </Title>
            <Title order={6} className={classes.categorySubTitle}>
              Kami berkomitmen memberikan konten terbaik dengan partner multidispliner
            </Title>
          </Box>

          <Carousel
            className={classes.carouselIndicator}
            loop
            withIndicators
            my={"auto"}
            height={"100%"}
            slideSize="25%"
            slideGap="xl"
            align="start"
            nextControlIcon={<FiChevronRight size={36} />}
            previousControlIcon={<FiChevronLeft size={36} />}
            styles={{
              controls: {
                marginLeft: largeScreen ? -80 : 0,
                marginRight: largeScreen ? -80 : 0,
              },
              indicator: {
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#E4E7EA",
                "&[data-active]": {
                  background: "#053DDA",
                },
              },
            }}
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
          >
            <Carousel.Slide>
              <Paper className={classes.partnerCard}>
                <Image src="/images/mitra/basyarnas.png" alt="gadai cahaya abadi" width={100} height={100} />
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper className={classes.partnerCard}>
                <Image src="/images/mitra/DSN-MUI-institute.png" alt="DSN-MUI-institute" width={100} height={100} />
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper className={classes.partnerCard}>
                <Image src="/images/mitra/ASHESI.png" alt="ASHESI" width={100} height={100} />
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper className={classes.partnerCard}>
                <Image src="/images/mitra/HISSI.png" alt="HISSI" width={100} height={100} />
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper className={classes.partnerCard}>
                <Image src="/images/mitra/POSDHESI.png" alt="POSDHESI" width={100} height={100} />
              </Paper>
            </Carousel.Slide>
          </Carousel>
        </Box>

        <Box data-aos="zoom-in-up" data-aos-duration="3000" mt={100}>
          <Box mb={40} sx={{ textAlign: "center" }}>
            <Title order={4} className={classes.categoryTitle}>
              <span className={classes.textHightlight}>Tumbuh bersama</span> mereka yang mengandalkan layanan kami
            </Title>
            <Title order={6} className={classes.categorySubTitle}>
              Membantu klien kami mencapai kesuksesan bisnis secara syariah bersama-sama!
            </Title>
          </Box>
          <Carousel
            className={classes.carouselIndicator}
            loop
            withIndicators
            my={"auto"}
            height={"100%"}
            slideSize="25%"
            slideGap="xl"
            align="start"
            nextControlIcon={<FiChevronRight size={36} />}
            previousControlIcon={<FiChevronLeft size={36} />}
            styles={{
              controls: {
                marginLeft: largeScreen ? -80 : 0,
                marginRight: largeScreen ? -80 : 0,
              },
              indicator: {
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#E4E7EA",
                "&[data-active]": {
                  background: "#053DDA",
                },
              },
            }}
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
          >
            <Carousel.Slide>
              <Paper className={classes.partnerCard}>
                <Image
                  src="/images/client/klien-gadai-cahaya-dana-abadi.jpg"
                  alt="gadai-cahaya-dana-abadi"
                  width={150}
                  height={100}
                />
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper className={classes.partnerCard}>
                <Image
                  src="/images/client/klien-gadai-hartadinata-abadi.png"
                  alt="klien-gadai-hartadinata-abadi"
                  width={150}
                  height={100}
                />
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper className={classes.partnerCard}>
                <Image src="/images/client/klien-gadai-terang-abadi-mulia.jpg" alt="bsi" width={150} height={100} />
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper className={classes.partnerCard}>
                <Image src="/images/client/klien-lorin-hotel-sentul.jpg" alt="bsi" width={150} height={100} />
              </Paper>
            </Carousel.Slide>
          </Carousel>
        </Box>

        <Box data-aos="zoom-out" data-aos-duration="3000" mt={100}>
          <Box
            py={55}
            px={20}
            w="100%"
            bg="#F7F8FB"
            display="flex"
            sx={{
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: 24,
            }}
          >
            <Box mb={-55} className={classes.promotionImageIllustration}>
              <Image src="/images/female.svg" alt="female-img" width={264} height={320} />
            </Box>
            <Box>
              <Text className={classes.textHightlight} fz={18}>
                Tunggu Apa Lagi?
              </Text>
              <Title>Ambil Posisi Belajar Terbaik Hari Ini!</Title>
              <Text className={classes.categorySubTitle}>Daftar sekarang, belajar besok, berkah di masa mendatang</Text>
              <Button mt={16} size="md" className={classes.bannerButton}>
                Mulai Belajar
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  )
}

export default Home
