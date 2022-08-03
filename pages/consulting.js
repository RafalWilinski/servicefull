import React from 'react'
import { Annotation } from '../src/components/Annotation'
import SEO from '../src/components/seo'
import { ColorExternalLink } from '../src/theme'

export default props => (
  <>
    <SEO
      title="Cloud Native Consulting"
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
      I’ve been working with{' '}
      <Annotation
        type="highlight"
        show={true}
        animationDelay={1000}
        color="rgba(45,200,50, 0.33)"
      >
        software for over 8 years.
      </Annotation>{" "}
      In the last 5 years, I was working with Amazon Web Services (AWS),
      delivering scalable, secure, highly-available, and cost-effective
      solutions for my partners.
    </p>
    <p>
      Moreover,{' '}
      <Annotation
        type="highlight"
        show={true}
        animationDelay={2000}
        color="rgba(45,200,50, 0.33)"
      >
        I’m a certified AWS Architect
      </Annotation>{' '}
      using Terraform, Serverless Framework, and AWS CDK daily to create fully
      reproducible infrastructures as a code.
    </p>
    <p>
      Even though understanding businesses, creating migration strategies, and
      bringing them to the cloud is my primary responsibility, I still love to
      write code in Javascript or Typescript with frameworks like React or
      Node.js - I’m not scared to jump into application development. I have
      experience working not only with small scale startups but also large scale
      enterprise organizations like <b>Riot Games</b> or <b>Fandom</b>.
    </p>
    <p>
      During my career, I’ve built not only APIs but also machine
      learning-powered applications, hybrid cloud data archival solutions, CI/CD pipelines, and
      DevOps tooling, enabling companies to go with much higher velocity.{' '}
    </p>
    <p>
      I am a big proponent of the Open Source, having over 50 projects available
      on my GitHub downloaded thousands of times per day,{' '}
      <b>and one of the main Serverless Framework contributors</b>.
    </p>
    <p>
      Few years ago, I've also started{' '}
      <ColorExternalLink href="https://dynobase.dev">
        Dynobase
      </ColorExternalLink>
      , a professional GUI Client for DynamoDB with mission to onboard thousands
      of developers to DynamoDB and Serverless world.
    </p>
    <p>
      For more information, please email me at{' '}
      <ColorExternalLink href="mailto:raf.wilinski@gmail.com">
        raf.wilinski@gmail.com
      </ColorExternalLink>
    </p>
  </>
)
