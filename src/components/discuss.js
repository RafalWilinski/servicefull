import React from 'react';
import { ColorExternalLink } from "../theme";

const Discuss = ({url}) => (
  <ColorExternalLink target="_blank" href={`https://twitter.com/search?q=${url}`}>Discuss it on Twitter</ColorExternalLink>
);

export default Discuss;
