import * as React from 'react';
// import classnames from 'classnames';
import { default as classnames } from 'classnames';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface IBox {
  className?: string;
}

const BoxWrapper = styled.div`
  border: 1px black solid;
`;

export const Box: React.FC<IBox> = (props: IBox) => {
  const boxClassNames = classnames(props.className, 'js-box');
  
  return (
    <BoxWrapper className = {boxClassNames}>
      <div>Box</div>

      <Link to={'/'}>Home</Link>
    </BoxWrapper>
  );
}