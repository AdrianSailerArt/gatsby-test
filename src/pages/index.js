import { graphql, Link } from 'gatsby'
import React from "react"
import Layout from "../components/Layout"
import styles from '../styles/home.module.css'

export default function Home({data}) {
  console.log(data)
  const {description, title} = data.site.siteMetadata
  return (
    <Layout>
      <section >
        <div>
        <p>{title} {description}</p>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link to="/projects" style={{ color: 'red', border: '2px solid blue', padding: '14px' }}>My Portfolio Projects</Link>
        </div>
        <img src="/favicon.ico" alt="site banner" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  )
}

export const query = graphql `query SiteInfo {
  site {
    siteMetadata {
      
      description
      title
    }
  }
}
`