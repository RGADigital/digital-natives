/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { AppConfig } from '@/utils/AppConfig'

type IMetaProps = {
  title?: string
  description?: string
  canonical?: string
}

const Meta = (props: IMetaProps) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${router.basePath}/favicon-32x32.png`} key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href={`${router.basePath}/favicon-16x16.png`} key="icon16" />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://genonereport.com.au ",
        "name": "GenOne Report",
        "alternateName": " Digital Native Research Project",
        "description": "Discover the digital behaviors of Digital Natives and Digital Immigrants in Australia. Our research report outlines key strategies to enhance digital engagement.",
        "publisher": {
            "@type": "Organization",
            "name": "R/GA Australia",
            "url": "https://rga.com/offices/australia"
        }
    }`,
          }}
        />
      </Head>
      <NextSeo
        title={props.title ?? AppConfig.title}
        description={props.description ?? AppConfig.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title ?? AppConfig.title,
          description: props.description ?? AppConfig.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  )
}

export { Meta }
