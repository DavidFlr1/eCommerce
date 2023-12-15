import React from 'react'
import { Helmet } from "react-helmet"

const Seo = (props: any) => {

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={'Template website'} />

      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={'/'} />
      <meta property="og:description" content={ 'Template website'} />
      <meta property="og:title" content={'website'} />
      <meta property="og:site_name" content={'Shop'} />
      <meta property="og:image" content={'/'} />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
      <meta property="og:video" content={undefined} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={'/'} />
      <meta name="twitter:url" content={'/'} />
      <meta name="twitter:title" content={'Shop'} />
      <meta name="twitter:description" content={'Template website'} />

      <meta name="keywords" content={('shop,ecommerce,store').replaceAll(' ', '')}/>

      <link rel="shortcut icon" href={"../../assets/icon.png"} />

      <title>{'Shop'}</title>
    </Helmet>
  )
}

export default Seo