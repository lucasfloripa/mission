import React from 'react'
import Head from "next/head"
import { Navbar } from '../src/components/Navbar'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>home Page</title>
      </Head>

      <Navbar />

      <main>
        <h1 className="text-center">Hello World</h1>
      </main>
    </div>
  )
}

export default Home