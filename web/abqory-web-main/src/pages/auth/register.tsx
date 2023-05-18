import { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import { Container, Grid, createStyles, Title, Text, TextInput, Checkbox, Button, Flex } from "@mantine/core"
import abqoryInsituteLogo from "../../../public/images/abqory-insitute-logo.png"

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
  cardLogo: {
    display: "block",
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
}))

const Register: NextPage = () => {
  const { classes } = useStyles()

  return (
    <Container fluid sx={{ padding: 0 }}>
      <Grid sx={{ minHeight: "100vh" }}>
        <Grid.Col className={classes.leftLogo} xs={0} md={4} lg={4}>
          <Image src={abqoryInsituteLogo} alt="abqory-insitute-logo" width={400} height={400} />
        </Grid.Col>
        <Grid.Col xs={12} md={8} lg={8} className={classes.authSection}>
          <Grid justify="center" align="center" className="full-height">
            <Grid.Col xs={11} md={10} lg={8} className="auth-card">
              <Flex justify="center" align="center">
                <Image src={abqoryInsituteLogo} className={classes.cardLogo} alt="abqory-insitute-logo" width={180} />
              </Flex>
              <Title order={1} size="h2">
                Daftar
              </Title>
              <Text>
                Sudah punya akun? <Link href="/auth/login">Masuk Sekarang</Link>
              </Text>
              <Grid mt={20}>
                <Grid.Col xs={12} md={6}>
                  <TextInput label="Email" type="email" size="md" />
                  <TextInput label="Username" size="md" mt={10} />
                </Grid.Col>
                <Grid.Col xs={12} md={6}>
                  <TextInput label="Kata Sandi" type="password" size="md" />
                  <TextInput label="Konfirmasi Kata Sandi" type="password" size="md" mt={10} />
                </Grid.Col>
              </Grid>
              <Checkbox label="Terima syarat dan kebijakan privasi" mt={15} />
              <Button fullWidth size="lg" mt={20}>
                Daftar
              </Button>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Register
