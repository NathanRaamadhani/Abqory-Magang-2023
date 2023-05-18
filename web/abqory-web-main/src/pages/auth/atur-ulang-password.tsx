import { NextPage } from "next"
import Image from "next/image"
import { Container, Grid, createStyles, Title, Text, TextInput, Button, Flex } from "@mantine/core"
import abqoryInsituteLogo from "../../../public/images/abqory-insitute-logo.png"
import Link from "next/link"

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

const ForgotPassword: NextPage = () => {
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
                Atur ulang sandi
              </Title>
              <Text>Masukkan emailmu untuk mendapatkan tautan reset password</Text>
              <TextInput placeholder="email" type="email" size="md" mt={20} />
              <Link href="/auth/login">
                <Button fullWidth size="lg" mt={15}>
                  Kirim
                </Button>
              </Link>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default ForgotPassword
