import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import bannerPic from '../public/bcc_banner.svg'

import styles from '../styles/styles.module.scss'

export default function Home() {
  return (
    <Layout home>
      Hello
    </Layout>
  )
}
