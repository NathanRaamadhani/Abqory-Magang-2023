import "../styles/index.scss"

import { AppProps } from "next/app"
import Script from "next/script"
import qs from "query-string"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import { QueryParamProvider } from "use-query-params"
import { FloatingWhatsApp } from "react-floating-whatsapp"

import NextQueryParamsAdapter from "@/components/next-query-params-adapter"
import { RouterTransition } from "@/components/molecules"
import theme from "../config/theme"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Abqory Sharia</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6FKNMLE7CC" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6FKNMLE7CC');
        `}
      </Script>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <QueryParamProvider
          adapter={NextQueryParamsAdapter}
          options={{
            searchStringToObject: qs.parse,
            objectToSearchString: (e) => qs.stringify(e, { skipEmptyString: true, skipNull: true }),
          }}
        >
          <RouterTransition />
          <Component {...pageProps} />
          <FloatingWhatsApp
            phoneNumber="+6285646648652"
            accountName="Abqory Sharia Admin"
            avatar="/logo/abqory-logo.png"
            chatMessage="Halo! Apa yang bisa kami bantu sekarang?"
          />
        </QueryParamProvider>
      </MantineProvider>
    </>
  )
}
