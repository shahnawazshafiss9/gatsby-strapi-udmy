import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const Hero = () => {
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);
  return (<header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div className="underline"></div>
          <h1>I'm Shahnawaz</h1>
          <h4>Web and Mobile UI/UX developer</h4>
          <Link to="/contact" className="btn">Contact me</Link>
          <SocialLinks />
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>

  );
}

const query = graphql`
  {
    file(relativePath: {eq: "hero-img.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`

export default Hero
