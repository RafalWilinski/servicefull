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
    stars: '3k',
  },
  {
    url: 'https://github.com/serverless/serverless',
    name: 'Serverless Framework (Core Contributor)',
    description:
      'Serverless Framework – Build web, mobile and IoT applications with serverless architectures using AWS Lambda',
    tags: ['Node.js', 'Serverless', 'AWS', 'Lambda'],
    stars: '36k',
  },
  {
    url: 'https://github.com/RafalWilinski/AWS-xray-ts-decorator',
    name: 'AWS X-Ray Typescript Decorator',
    description:
      'Instrument your Typescript code with AWS X-Ray using elegant decorators',
    tags: ['Node.js', 'Lambda', 'Typescript', 'AWS'],
    stars: '13',
  },
  {
    url: 'https://github.com/RafalWilinski/edge-graphql-dynamodb-api',
    name: 'GraphQL@Edge + Global DynamoDB Boilerplate',
    description: 'Serverless GraphQL API on Edge with Global DynamoDB Tables',
    tags: ['Node.js', 'Lambda', 'Typescript', 'AWS', 'GraphQL'],
    stars: '19',
  },
  {
    url: 'https://github.com/RafalWilinski/elastic-beanstalk-terraform-setup',
    name: 'Elastic Beanstalk Terraform Setup',
    description:
      'Playbook for setting up & deploying AWS Beanstalk Applications on Docker with 1 command',
    tags: ['Docker', 'AWS', 'Terraform'],
    stars: '62',
  },
  {
    url: 'https://github.com/RafalWilinski/aws-lambda-golang-cdk',
    name: 'AWS Lambda Golang CDK',
    description: 'Higher level CDK construct for Golang Lambda functions',
    tags: ['AWS', 'Serverless', 'Golang'],
    stars: '2',
  },
  {
    url: 'https://github.com/RafalWilinski/serverless-puppeteer-layers',
    name: 'Serverless Puppeteer Layer',
    description: 'Serverless Framework + AWS Lambda Layers + Puppeteer = ❤️',
    tags: ['AWS', 'Serverless', 'Node.js'],
    stars: '209',
  },
  {
    url: 'https://github.com/RafalWilinski/cloudwatch-public-metrics',
    name: 'CloudWatch Public Metrics',
    description:
      'Expose AWS Cloudwatch Metrics as a public HTML page using AWS Lambda and server-side rendering',
    tags: ['AWS', 'Serverless', 'Node.js'],
    stars: '27',
  },
  {
    url: 'https://github.com/RafalWilinski/fargate-calc',
    name: 'Fargate Pricing Calculator',
    description: 'AWS Fargate Pricing Calculator in Vue.js',
    tags: ['AWS', 'Serverless'],
    stars: '31',
  },
  {
    url: 'https://github.com/RafalWilinski/serverless-pagespeed-monitoring',
    name: 'Serverless PageSpeed Monitoring',
    description:
      'Measure your webpage real speed from multiple regions in a serverless way',
    tags: ['AWS', 'Serverless', 'Node.js'],
    stars: '22',
  },
  {
    url: 'https://github.com/RafalWilinski/serverless-go-graphql',
    name: 'Serverless Golang + GraphQL Boilerplate',
    description:
      'Serverless Framework template with Golang, GraphQL and DynamoDB',
    tags: ['AWS', 'Serverless', 'Golang', 'GraphQL'],
    stars: '20',
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
        <img
          src="data:image/png;base64,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"
          style={{
            height: '0.8em',
            marginBottom: 0,
            display: 'inline',
            marginBottom: '-2px',
          }}
        />
        <div
          style={{
            display: 'inline',
            margin: '0 15px 0 4px',
            fontSize: '0.75em',
          }}
        >
          {project.stars}
        </div>
        {project.tags.map(tag => (
          <div
            style={{
              color: colors[tag],
              borderRadius: '6px',
              marginRight: '15px',
              display: 'inline',
              fontSize: '0.75em',
              fontWeight: '600',
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
