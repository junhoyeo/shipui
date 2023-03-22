import Head from 'next/head'
import { useRouter } from 'next/router'

export type MetaData = {
  title: string
  description: string
  image: string
  url: string
  canonical: string
  themeColor: string
}

export type MetaHeadProps = MetaData & {
  children?: React.ReactNode
}

export const MetaHead: React.FC<MetaHeadProps> = ({ children, ...meta }) => {
  const router = useRouter()
  const currentTitle = meta.title
  const imageURL = meta.image

  return (
    <Head>
      <title>{currentTitle}</title>
      <meta key="title" name="title" content={currentTitle} />
      <meta key="description" name="description" content={meta.description} />
      <link key="canonical" rel="canonical" href={`${meta.url}${router.asPath.split('?')[0]}`} />

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:url" property="og:url" content={meta.url} />
      <meta key="og:title" property="og:title" content={currentTitle} />
      <meta key="og:description" property="og:description" content={meta.description} />
      <meta key="og:image" property="og:image" content={imageURL} />

      <meta key="twitter:card" property="twitter:card" content="summary_large_image" />
      <meta key="twitter:url" property="twitter:url" content={meta.url} />
      <meta key="twitter:title" property="twitter:title" content={currentTitle} />
      <meta key="twitter:description" property="twitter:description" content={meta.description} />
      <meta key="twitter:image" property="twitter:image" content={imageURL} />
      <meta key="theme-color" name="theme-color" content={meta.themeColor} />
      {children}
    </Head>
  )
}
