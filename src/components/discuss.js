import React from 'react';
import { ColorExternalLink } from "../theme";

const Discuss = ({url}) => (
  <ColorExternalLink target="_blank" href={`https://twitter.com/search?q=https://servicefull.cloud/${url}`}>Discuss it on Twitter</ColorExternalLink>
);

export default Discuss;
