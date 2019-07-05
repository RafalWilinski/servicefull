import styled from "styled-components"
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const THEME_COLOR = 'rgb(45, 200, 58)';

const Container = styled.div`
  margin: 3rem auto;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 10px;
`;

const Title = styled.h1`
  font-family: neue-haas-grotesk-display, sans-serif;
  margin-bottom: 0;
`;

const Subtitle = styled.h2`
  font-family: neue-haas-grotesk-display, sans-serif;
`;

const Subsubtitle = styled.h3`
  margin-block-start: 1.2em;
  margin-block-end: 0.8em;
  font-family: neue-haas-grotesk-display, sans-serif;
`;

const Meta = styled.p`
  font-family: neue-haas-grotesk-display, sans-serif;
  margin: 10px 0 -15px;
  color: #666;
  font-size: 0.8em;
`;

const Text = styled.p`
  width: 100%;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #303030;
  line-height: 1.4;
`;

const Point = styled(Text)`
  display: list-item;
`

const Line = styled.hr`
  background-color: black;
  height: 3px;
  content: ' ';
  width: 100%;
  margin: 0;
  border-style: none;
`;

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const HiddenExternalLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    background-color: ${THEME_COLOR};
    color: white !important;
  }
`;

const ColorLink = styled(Link)`
  font-family: neue-haas-grotesk-text, sans-serif;
  box-shadow: none;
  color: ${THEME_COLOR};
`

const ColorExternalLink = styled.a`
  font-family: neue-haas-grotesk-text, sans-serif;
  box-shadow: none;
  color: ${THEME_COLOR};
`

const Avatar = styled(Image)`
  min-height: 50px;
  width: 50px;
  height: 50px;
  min-width: 50px;
  margin: 10px;
  border-radius: 100%;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const BioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

const Code = styled.div`
  background-color: #eee;
  padding: 10px;
`;

export {
  Code,
  Description,
  Avatar,
  Container,
  Title,
  Point,
  StyledLink,
  Subtitle,
  Subsubtitle,
  Text,
  Meta,
  Line,
  ColorLink,
  BioWrapper,
  HiddenExternalLink,
  ColorExternalLink
}