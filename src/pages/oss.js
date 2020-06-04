import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

function LightenDarkenColor(col, amt) {
  var usePound = false

  if (col[0] == '#') {
    col = col.slice(1)
    usePound = true
  }

  var num = parseInt(col, 16)

  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

const colors = {
  'Node.js': '#3c873a',
  Serverless: '#ffac31',
  AWS: '#ffac31',
  Lambda: '#ffac31',
  Typescript: '#007acc',
  GraphQL: '#e535ab',
  Golang: '#00FFFF',
  Terraform: '#888888',
  Docker: '#00BFFF',
}

const projects = [
  {
    url: 'https://github.com/RafalWilinski/express-status-monitor',
    name: 'Express Status Monitor',
    description:
      'Realtime Monitoring solution for Node.js/Express.js apps, inspired by status.github.com',
    tags: ['Node.js'],
  },
  {
    url: 'https://github.com/serverless/serverless',
    name: 'Serverless Framework',
    description:
      'Serverless Framework – Build web, mobile and IoT applications with serverless architectures using AWS Lambda',
    tags: ['Node.js', 'Serverless', 'AWS', 'Lambda'],
  },
  {
    url: 'https://github.com/RafalWilinski/AWS-xray-ts-decorator',
    name: 'AWS X-Ray Typescript Decorator',
    description:
      'Instrument your Typescript code with AWS X-Ray using elegant decorators',
    tags: ['Node.js', 'Lambda', 'Typescript', 'AWS'],
  },
  {
    url: 'https://github.com/RafalWilinski/edge-graphql-dynamodb-api',
    name: 'GraphQL@Edge + Global DynamoDB Boilerplate',
    description: 'Serverless GraphQL API on Edge with Global DynamoDB Tables',
    tags: ['Node.js', 'Lambda', 'Typescript', 'AWS', 'GraphQL'],
  },
  {
    url: 'https://github.com/RafalWilinski/elastic-beanstalk-terraform-setup',
    name: 'Elastic Beanstalk Terraform Setup',
    description:
      'Playbook for setting up & deploying AWS Beanstalk Applications on Docker with 1 command',
    tags: ['Docker', 'AWS', 'Terraform'],
  },
  {
    url: 'https://github.com/RafalWilinski/aws-lambda-golang-cdk',
    name: 'AWS Lambda Golang CDK',
    description: 'Higher level CDK construct for Golang Lambda functions',
    tags: ['AWS', 'Serverless', 'Golang'],
  },
  {
    url: 'https://github.com/RafalWilinski/serverless-puppeteer-layers',
    name: 'Serverless Puppeteer Layer',
    description: 'Serverless Framework + AWS Lambda Layers + Puppeteer = ❤️',
    tags: ['AWS', 'Serverless', 'Node.js'],
  },
  {
    url: 'https://github.com/RafalWilinski/cloudwatch-public-metrics',
    name: 'CloudWatch Public Metrics',
    description:
      'Expose AWS Cloudwatch Metrics as a public HTML page using AWS Lambda and server-side rendering',
    tags: ['AWS', 'Serverless', 'Node.js'],
  },
  {
    url: 'https://github.com/RafalWilinski/fargate-calc',
    name: 'Fargate Pricing Calculator',
    description: 'AWS Fargate Pricing Calculator in Vue.js',
    tags: ['AWS', 'Serverless'],
  },
  {
    url: 'https://github.com/RafalWilinski/serverless-pagespeed-monitoring',
    name: 'Serverless PageSpeed Monitoring',
    description:
      'Measure your webpage real speed from multiple regions in a serverless way',
    tags: ['AWS', 'Serverless', 'Node.js'],
  },
  {
    url: 'https://github.com/RafalWilinski/serverless-go-graphql',
    name: 'Serverless Golang + GraphQL Boilerplate',
    description:
      'Serverless Framework template with Golang, GraphQL and DynamoDB',
    tags: ['AWS', 'Serverless', 'Golang', 'GraphQL'],
  },
]

export default props => (
  <Layout
    location={props.location}
    title={props.data.site.siteMetadata.title}
    description={props.data.site.siteMetadata.description}
  >
    <SEO
      title="Open Source - Rafal Wilinski"
      keywords={['blog', 'AWS', 'javascript', 'serverless', 'Typescript']}
    />
    <h1
      style={{
        fontWeight: 800,
        fontSize: '3em',
        marginTop: '1em',
        letterSpacing: '-2.5px',
      }}
    >
      Open Source
    </h1>
    <p>My attempts of giving back to the community.</p>
    {projects.map(project => (
      <a
        className="hover-shadow"
        href={project.url}
        rel="noreferrer noopener"
        target="_blank"
        style={{
          width: '100%',
          boxShadow: '0 0.3rem 0.8rem rgba(0,0,0,.12)',
          borderRadius: '10px',
          padding: '15px 30px',
          marginBottom: '2em',
          cursor: 'pointer',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        <h2 style={{ marginBottom: '0.25em' }}>{project.name}</h2>
        <p style={{ marginBottom: 0, textDecoration: 0 }}>
          {project.description}
        </p>
        {project.tags.map(tag => (
          <div
            style={{
              color: colors[tag],
              borderRadius: '6px',
              // padding: '4px 10px',
              marginRight: '15px',
              display: 'inline',
              fontSize: '0.75em',
              fontWeight: '700',
              // backgroundColor: LightenDarkenColor(colors[tag], 150),
            }}
          >
            #{tag}
          </div>
        ))}
      </a>
    ))}
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
