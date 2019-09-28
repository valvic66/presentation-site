import * as React from 'react';
// import classnames from 'classnames';
import { default as classnames } from 'classnames';
import styled from 'styled-components';
import { Card } from '../single/Card';
import Grid from '@material-ui/core/Grid';

export interface ICardGrid {
  className?: string;
}

const CardGridWrapper = styled.div`

`;

const CARD_NUMBERS = ['1', '2', '3', '4'];

export const CardGrid: React.FC<ICardGrid> = (props: ICardGrid) => {
  const cardGridClassNames = classnames(props.className, 'js-card-grid');
  
  return (
    <CardGridWrapper className = {cardGridClassNames}>
      <Grid container spacing={1}>
        {
          CARD_NUMBERS.map((card, index) => (
              <Grid item xs={3} sm={6}>
                <Card />
              </Grid>
          ))
        }
      </Grid>
    </CardGridWrapper>
  );
}