import { Box, createStyles, Footer, Grid, Text, Title, Container, Flex } from "@mantine/core"
import { BsInstagram, BsYoutube, BsSpotify } from "react-icons/bs"
import { FiMap } from "react-icons/fi"
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"
import Link from "next/link"

const useStyles = createStyles({
  categorySubTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: "#6D6D6D",
  },
  addressSubtitle: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    paddingRight: 10,
    marginTop: 10,
  },
  IconStyle: {
    fontSize: 28,
    color: "#6D6D6D",
    "&:active": {
      transform: "scale(0.9)",
    },
  },
  iconMapStyle: {
    fontSize: 40,
    color: "#6D6D6D",
  },
  siteMapText: {
    lineHeight: 1.8,
    fontSize: 16,
    ":hover": {
      textDecoration: "underline",
    },
  },
})

export default function MainFooter() {
  const { classes } = useStyles()

  return (
    <Footer w="100%" bg="#F7F8FB" height="auto" display="flex" py={40}>
      <Container size="xl">
        <Grid justify="space-between" mt={2.5} gutter={20}>
          <Grid.Col xs={12} md={4}>
            <Title mb={8} fz={18}>
              PT Abqory Sharia Group{" "}
            </Title>
            <Text mb={20} className={classes.categorySubTitle}>
              Komitmen kuat dalam mengembangkan Ekonomi Syariah demi terwujudnya kesejahtaraan bangsa.
            </Text>
            <Box>
              <Box className={classes.addressSubtitle}>
                <FiMap className={classes.iconMapStyle} color="#6D6D6D" />{" "}
                <Text ml={20} fz={14}>
                  Jl. Permai Raya IV Blok AX 32 No.67, Pamulang, Kota Tangerang Selatan 15417
                </Text>
              </Box>
              <Box className={classes.addressSubtitle}>
                <AiOutlineWhatsApp className={classes.IconStyle} color="#6D6D6D" />{" "}
                <Text ml={20} fz={14}>
                  +62 856 4664 8652
                </Text>
              </Box>
              <Box className={classes.addressSubtitle}>
                <AiOutlineMail className={classes.IconStyle} color="#6D6D6D" />{" "}
                <Text ml={20} fz={14}>
                  abqorysharia@gmail.com
                </Text>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col xs={12} md={4}>
            <Title mb={8} fz={18}>
              Sitemap
            </Title>
            <Box display="flex" sx={{ gap: 40 }}>
              <div>
                <Link href="/media/abqory-tv" className={classes.addressSubtitle}>
                  <Text className={classes.siteMapText}>Abqory TV</Text>
                </Link>
                <Link href="/media/abqory-talk" className={classes.addressSubtitle}>
                  <Text className={classes.siteMapText}>Abqory Talk</Text>
                </Link>
                {/* <Link href="/" className={classes.addressSubtitle}>
                  <Text className={classes.siteMapText}>Abqory Book</Text>
                </Link> */}
                <Link href="/artikel" className={classes.addressSubtitle}>
                  <Text className={classes.siteMapText}>Artikel</Text>
                </Link>
              </div>
              <div>
                <Link href="/insitute/webinar" className={classes.addressSubtitle}>
                  <Text className={classes.siteMapText}>Webinar</Text>
                </Link>
                <Link href="/insitute/skill-upgrade" className={classes.addressSubtitle}>
                  <Text className={classes.siteMapText}>Skill Upgrade</Text>
                </Link>
                <Link href="/insitute/training" className={classes.addressSubtitle}>
                  <Text className={classes.siteMapText}>Pelatihan</Text>
                </Link>
                <Link href="/consultant" className={classes.addressSubtitle}>
                  <Text className={classes.siteMapText}>Consultant</Text>
                </Link>
              </div>
            </Box>
          </Grid.Col>
          <Grid.Col xs={12} md={3}>
            <Title mb={8} fz={18}>
              Find Us On
            </Title>
            <Flex sx={{ gap: 20 }}>
              <a href="https://www.instagram.com/abqoryshariamedia/" target="_blank" rel="noreferrer">
                <BsInstagram className={classes.IconStyle} />
              </a>
              <a href="https://www.youtube.com/channel/UCQ5dUW39QsNAtLRJkxwkpNg" target="_blank" rel="noreferrer">
                <BsYoutube className={classes.IconStyle} />
              </a>
              <a
                href="https://open.spotify.com/show/6WE4qDypH6PfGrHh7xnaaY?si=D7LIEBl8TAeW9_oL-RGv3w&nd=1"
                target="_blank"
                rel="noreferrer"
              >
                <BsSpotify className={classes.IconStyle} />
              </a>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </Footer>
  )
}
