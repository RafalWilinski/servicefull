import Link from 'next/link'

const THEME_COLOR = 'rgb(45, 200, 50)'

const Container = ({ children }) => (
  <div
    style={{
      margin: '3rem auto',
      maxWidth: '700px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
      padding: '0 10px',
    }}
  >
    {children}
  </div>
)

const Title = ({ children }) => (
  <h1
    style={{
      marginBottom: '0',
    }}
  >
    {children}
  </h1>
)

const Subtitle = ({ children, style = {} }) => (
  <h2
    style={{
      fontSize: '1.25em',
      fontWeight: '800',
      ...style,
    }}
  >
    {children}
  </h2>
)

const Subsubtitle = ({ children }) => (
  <h2
    style={{
      marginBlockStart: '1.2em',
      marginBlockEnd: '0.8em',
    }}
  >
    {children}
  </h2>
)

const Meta = ({ children, style = {} }) => (
  <div
    style={{
      margin: '10px 0 0',
      color: '#666',
      fontSize: '0.8em',
      ...style,
    }}
  >
    {children}
  </div>
)

const Text = ({ children, style = {} }) => (
  <p
    style={{
      width: '100%',
      fontSize: '16px',
      fontWeight: '400',
      color: '#303030',
      lineHeight: '1.7',
      ...style,
    }}
  >
    {children}
  </p>
)

const Point = ({ children }) => (
  <Text style={{ display: 'list-item' }}>{children}</Text>
)

const Line = () => (
  <hr
    style={{
      backgroundColor: 'black',
      height: '3px',
      content: '',
      width: '100%',
      margin: '0',
      borderStyle: 'none',
    }}
  />
)

const ColorLink = ({ children }) => (
  <a
    style={{
      boxShadow: 'none',
      color: THEME_COLOR,
      fontWeight: '500',
    }}
  >
    {children}
  </a>
)

const ColorExternalLink = ({ children, href }) => (
  <Link href={href}>
    <a
      style={{
        boxShadow: 'none',
        color: THEME_COLOR,
        cursor: 'pointer',
        textDecoration: 'underline',
      }}
    >
      {children}
    </a>
  </Link>
)

const Avatar = () => (
  <img
    style={{
      minHeight: '50px',
      width: '50px',
      height: '50px',
      minWidth: '50px',
      margin: '10px',
      borderRadius: '100%',
    }}
  />
)

const Description = ({ children }) => (
  <div
    style={{
      flex: '1',
      marginLeft: '18px',
      padding: '12px',
    }}
  >
    {children}
  </div>
)

export {
  Description,
  Avatar,
  Container,
  Title,
  Point,
  Subtitle,
  Subsubtitle,
  Text,
  Meta,
  Line,
  ColorLink,
  ColorExternalLink,
  THEME_COLOR,
}
