import { Box, Button, Container, createStyles, Flex, Text, Title } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"

import abqoryInsituteLogo from "../../public/images/abqory-insitute-logo.png"

const useStyles = createStyles((theme) => ({
  logo: {
    position: "absolute",
    top: -35,
    left: 16,
  },
  title: {
    color: "#6440FB",
    fontSize: 64,
    textAlign: "center",
    [theme.fn.smallerThan("md")]: {
      fontSize: 36,
    },
  },
  subTitle: {
    fontSize: 18,
    textAlign: "center",
    [theme.fn.smallerThan("md")]: {
      fontSize: 14,
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
  },
}))

export default function ErrorPage() {
  const { classes } = useStyles()

  return (
    <Container size="lg">
      <Flex direction="row" justify="center" align="center" h="100vh">
        <Box className={classes.logo}>
          <Image src={abqoryInsituteLogo} alt="abqory-insitute-logo" width={200} height={200} />
        </Box>
        <Box>
          <Title className={classes.title}>Merasa tersesat?</Title>
          <Text mb={10} className={classes.subTitle}>
            404 - Halaman yang anda inginkan tidak ditemukan
          </Text>
          <Link className={classes.button} href="/">
            <Button size="lg">Kembali ke Beranda</Button>
          </Link>
        </Box>
      </Flex>
    </Container>
  )
}
