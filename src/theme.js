import styled from 'styled-components'
import Image from 'next/image'

const THEME_COLOR = 'rgb(45, 200, 50)'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 10px;
`

const Title = styled.h1`
  margin-bottom: 0;
`

const Subtitle = styled.h2`
  font-size: 1.25em;
  font-weight: 800;
`

const Subsubtitle = styled.h3`
  margin-block-start: 1.2em;
  margin-block-end: 0.8em;
`

const Meta = styled.p`
  margin: 10px 0 0;
  color: #666;
  font-size: 0.8em;
`

const Text = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #303030;
  line-height: 1.7;
`

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
`


const HiddenExternalLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    background-color: ${THEME_COLOR};
    color: white !important;
  }
`

const ColorLink = styled.a`
  box-shadow: none;
  color: ${THEME_COLOR};
  font-weight: 500;
`

const ColorExternalLink = styled.a`
  box-shadow: none;
  color: ${THEME_COLOR};
  cursor: pointer;
  text-decoration: underline;
`

const ColorInternalLink = styled.a`
  box-shadow: none;
  color: ${THEME_COLOR};
  cursor: pointer;
  text-decoration: underline;
`

const Avatar = styled.img`
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
`

export {
  Code,
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
  BioWrapper,
  HiddenExternalLink,
  ColorExternalLink,
  ColorInternalLink,
  THEME_COLOR,
}
