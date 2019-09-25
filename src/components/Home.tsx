import * as React from 'react';
// import classnames from 'classnames';
import { default as classnames } from 'classnames';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface IHome {
  className?: string;
}

const HomeWrapper = styled.div`
  border: 1px black solid;
`;

export const Home: React.FC<IHome> = (props: IHome) => {
  const boxClassNames = classnames(props.className, 'js-box');
  
  return (
    <HomeWrapper className = {boxClassNames}>
      <div>Home</div>

      <Link to='/box/'>Box</Link>
    </HomeWrapper>
  );
}