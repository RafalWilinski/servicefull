import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
display: flex;
padding: 20px
`;
const Title = styled.h3`
text-align: center;

`;
const Point = styled.p`

`;

const ComparisonTable = ({ items }) => (
  <Table>
    {items.map((item) => <div>
      <Title>
        {item.title}
      </Title>
      <div style={{padding: 10}}>
        {item.points.map((point) => (<Point key={point}>
          {point}
        </Point>))}
      </div>
    </div>)}
  </Table>
);

export default ComparisonTable;
