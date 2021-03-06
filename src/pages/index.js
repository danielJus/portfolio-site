import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Daniel Justavino" />
    <Hero />
    <About />
    <Experience />
    <Contact />
  </Layout>
)

export default IndexPage
