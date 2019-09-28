import * as React from 'react';
// import classnames from 'classnames';
import { default as classnames } from 'classnames';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export interface ICard {
  className?: string;
}

const CardWrapper = styled.div`
  border: 1px black solid;
  background-color: light-grey;
  height: 500px;
  width: 100%;
`;

export const Card: React.FC<ICard> = (props: ICard) => {
  const cardClassNames = classnames(props.className, 'js-card');
  
  return (
    <CardWrapper className = {cardClassNames}>
      <div>Card</div>
    </CardWrapper>
  );
}