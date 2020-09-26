import React from 'react'
import {AppProps} from 'next/app'

// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>  {
  return <Component {...pageProps} />
}

export default MyApp
