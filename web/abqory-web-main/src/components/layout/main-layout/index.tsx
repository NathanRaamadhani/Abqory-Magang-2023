import Head from "next/head"
import MainHeader from "./main-header"
import MainFooter from "./main-footer"
import PageHeader from "./page-header"
import { Container } from "@mantine/core"

interface P {
  children: React.ReactNode
  title: string
  description?: string
  image?: string
  url?: string
  showPageHeader?: boolean
  subtitle?: string
  headerAlign?: "left" | "center"
}

const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export default function MainLayout({
  children,
  title,
  description,
  image,
  url,
  showPageHeader,
  headerAlign,
  subtitle,
}: P) {
  const webTitle = title ? `${title} - Abqory Sharia` : "Abqory Sharia"
  const combinedUrl = url ? `${NEXT_PUBLIC_SITE_URL}${url}` : NEXT_PUBLIC_SITE_URL

  return (
    <div className="abqory-main-layout">
      <Head>
        <title>{webTitle}</title>
        <meta name="description" content={description} />

        {/* facebook meta */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        {url && <meta property="og:url" content={combinedUrl} />}
        {description && <meta property="og:description" content={description} />}
        {image && <meta property="og:image" content={image} />}

        {/* twitter meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={NEXT_PUBLIC_SITE_URL} />
        <meta name="twitter:title" content={title} />
        {url && <meta property="twitter:url" content={url} />}
        {description && <meta name="twitter:description" content={description} />}
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      <MainHeader />
      {showPageHeader && <PageHeader title={title} subTitle={subtitle || description} align={headerAlign} />}
      <Container size="xl" py={60}>
        {children}
      </Container>
      <MainFooter />
    </div>
  )
}
