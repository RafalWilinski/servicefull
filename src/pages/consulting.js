import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default props => (
  <Layout
    location={props.location}
    title={props.data.site.siteMetadata.title}
    description={props.data.site.siteMetadata.description}
  >
    <SEO
      title="Consulting - Rafal Wilinski"
      keywords={['blog', 'aws', 'javascript', 'serverless', 'typescript']}
    />
    <h1
      style={{
        fontWeight: 800,
        fontSize: '3em',
        marginTop: '1em',
        letterSpacing: '-2.5px',
      }}
    >
      Consulting
    </h1>
    <p>
      I run a consulting practice helping companies leverage the power of AWS
      Cloud and go fully Serverless.
    </p>
    <p>
      I’ve been working in IT for over 7 years, and for over 4 years, I was
      working with Amazon Web Services cloud, delivering scalable, secure,
      highly-available, and cost-effective solutions for my partners.
    </p>
    <p>
      Moreover, <b>I’m a certified AWS Architect</b> using Terraform, Serverless
      Framework, and AWS CDK daily to create fully reproducible infrastructures
      as a code.
    </p>
    <p>
      Even though understanding businesses, creating migration strategies, and
      bringing them to the cloud is my primary responsibility, I still love to
      write code in Javascript or Typescript with frameworks like React or
      Node.js, so I’m not scared to jump into application development. I have
      experience working not only with small scale startups but also large scale
      enterprise organizations like <b>Riot Games</b> or <b>Fandom</b>.
    </p>
    <p>
      During my career, I’ve built not only APIs and CRUDs but also machine
      learning-powered applications, hybrid cloud data archival solutions, and
      DevOps tooling, enabling companies to go with much higher velocity.{' '}
    </p>
    <p>
      I am a big proponent of the Open Source, having over 50 projects available
      on my GitHub downloaded thousands of times per day,{' '}
      <b>and one of the main Serverless Framework contributors</b>. I share my
      thoughts on my blog.
    </p>
    <p>
      Recently, I've also started Dynobase, a professional GUI Client for
      DynamoDB with mission to onboard thousands of developers to Cloud-native
      and Serverless world.
    </p>
    <p>For more information, please email me at raf.wilinski@gmail.com</p>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`