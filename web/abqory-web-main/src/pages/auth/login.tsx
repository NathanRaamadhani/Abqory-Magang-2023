import { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import { Container, Grid, createStyles, Title, Text, TextInput, Stack, Checkbox, Button, Flex } from "@mantine/core"
import abqoryInsituteLogo from "../../../public/images/abqory-insitute-logo.png"
import { AiOutlineGoogle } from "react-icons/ai"

const useStyles = createStyles((theme) => ({
  authSection: {
    backgroundColor: "#FEFBF4",
  },
  leftLogo: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rememberMe: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
  },
  cardLogo: {
    display: "block",
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
}))

const Login: NextPage = () => {
  const { classes } = useStyles()

  return (
    <Container fluid sx={{ padding: 0 }}>
      <Grid sx={{ minHeight: "100vh" }}>
        <Grid.Col className={classes.leftLogo} xs={0} md={6} lg={4}>
          <Image src={abqoryInsituteLogo} alt="abqory-insitute-logo" width={400} height={400} />
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={8} className={classes.authSection}>
          <Grid justify="center" align="center" className="full-height">
            <Grid.Col xs={11} md={10} lg={6} className="auth-card">
              <Flex justify="center" align="center">
                <Image src={abqoryInsituteLogo} className={classes.cardLogo} alt="abqory-insitute-logo" width={180} />
              </Flex>
              <Title order={1} size="h2">
                Masuk
              </Title>
              <Text>
                Belum punya akun? <Link href="/auth/register">Daftar sekarang gratis</Link>
              </Text>
              <Stack spacing="sm" mt={20}>
                <TextInput label="Email" type="email" size="md" />
                <TextInput label="Kata Sandi" type="password" size="md" />
              </Stack>
              <div className={classes.rememberMe}>
                <Checkbox label="Ingat Saya" />
                <Link href="/auth/forgot-password">Lupa password?</Link>
              </div>
              <Button fullWidth size="lg" mt={15}>
                Masuk
              </Button>
              <Text mt={10} align="center">
                Atau masuk menggunakan
              </Text>
              <Button fullWidth variant="outline" size="md" mt={10} color="red.7" leftIcon={<AiOutlineGoogle />}>
                Log in via Google
              </Button>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Login
