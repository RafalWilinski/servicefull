import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SEO({ description, lang, meta, keywords, title, image, url }) {
  const metaDescription =
    description ||
    'Because Serverless is a terrible name. Blog about AWS Cloud, Serverless and more'

  let titleTemplate = 'Rafal Wilinski - Software Engineer'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: `https://servicefull.cloud${url}`,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'twitter:image',
          content: image,
        },
        {
          property: 'og:image:width',
          content: '1366',
        },
        {
          property: 'og:image:height',
          content: '786',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: '@RafalWilinski',
        },
        {
          name: 'twitter:site',
          content: '@RafalWilinski',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [
    'aws',
    'serverless',
    'amazon web services',
    'faas',
    'function as a service',
    'serverless framework',
    'nosql',
    'dynamodb',
    'aws lambda',
  ],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
