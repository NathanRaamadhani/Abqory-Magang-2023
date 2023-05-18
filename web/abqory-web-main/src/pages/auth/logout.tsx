import { useEffect, useState } from "react"
import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { Container, createStyles, Title, Text, Modal } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  authSection: {
    backgroundColor: "#FEFBF4",
    minHeight: "100vh",
  },
  textHightlight: {
    color: theme.colors[theme.primaryColor][6],
    textDecoration: "none",
  },
}))

const ForgotPassword: NextPage = () => {
  const [count, setCount] = useState(5)
  const { classes } = useStyles()
  const router = useRouter()

  // useEffect(() => {}, [count])

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)

    const interval = setInterval(() => {
      setCount((count) => count - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Container fluid sx={{ padding: 0 }} className={classes.authSection}>
      <Modal opened onClose={() => {}} size="lg" centered withCloseButton={false}>
        <Title fz={30} ta="center" mb={15}>
          Logout
        </Title>
        <Text fz={16} ta="center">
          Anda akan diarahkan ke halaman awal dalam {count} detik. Jika halaman tidak merespon,
          <Link className={classes.textHightlight} href="/">
            <span> klik untuk menuju halaman awal.</span>
          </Link>
        </Text>
      </Modal>
    </Container>
  )
}

export default ForgotPassword
