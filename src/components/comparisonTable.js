import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
display: flex;
padding: 20px
`;
const Title = styled.div`

`;
const Point = styled.div`

`;

const ComparisonTable = ({ items }) => (
  <Table>
    {items.map((item) => <div>
      <Title>
        {item.title}
      </Title>
      <div>
        {item.points.map((point) => (<Point>
          {point}
        </Point>))}
      </div>
    </div>)}
  </Table>
);

export default ComparisonTable;
