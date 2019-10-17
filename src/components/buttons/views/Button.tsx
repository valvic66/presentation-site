import React from 'react';
import { 
  buttonTheme, 
  hoverRemovedTheme,
  buttonDefaultTheme,
  redTheme,
  blueTheme,
  greenTheme,
  blackTheme
} from '../theme/default-theme';
import { default as classnames } from 'classnames';
import styled from 'styled-components';

export type ButtonSize = 'sm' | 'md' | 'lg' | string;
export type ColorTheme = 'red' | 'blue' | 'green' | 'black';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  className?: string;
  isDisabled?: boolean;
  isTitleReversed?: boolean;
  isFullWidth?: boolean;
  hasShadow?: boolean;
  colorTheme?: ColorTheme;
}

const buttonSizeClass = (size: string | undefined) => {
  return size ? `button--${size}` : '';
}

const buttonClassNames = (props: IButton) => {
  return classnames([
    'button',
    'js-button',
    [buttonSizeClass(props.size)]
  ]);
}

const Btn = styled.button.attrs({
  className: buttonClassNames
})`
  ${buttonTheme};
  ${buttonDefaultTheme};

  &.${buttonSizeClass('sm')} {
    padding: 4px 8px;
    font-size: .9rem;
  };

  ${(props: IButton) => props.size === 'md' &&
    `
    padding: 10px 20px;
    font-size: 1rem;
    `
  };
  
  ${(props: IButton) => props.size === 'lg' &&
    `
    padding: 16px 32px;
    font-size: 1.1rem;
    `
  } ;

  ${(props: IButton) => props.isDisabled &&
    `
    ${hoverRemovedTheme}
    `
  };

  ${(props: IButton) => props.hasShadow &&
    `
    &:hover {
      box-shadow: 2px 2px 7px #888888;
    }
    `
  };

  ${(props: IButton) => props.isFullWidth ? `
    display: block;
    width: 100%;
  ` : ''};

  ${(props: IButton) => props.colorTheme === 'red' &&
    `
    ${redTheme}
    `
  };

  ${(props: IButton) => props.colorTheme === 'blue' &&
    `
    ${blueTheme}
    `
  };

  ${(props: IButton) => props.colorTheme === 'green' &&
    `
    ${greenTheme}
    `
  };

  ${(props: IButton) => props.colorTheme === 'black' &&
    `
    ${blackTheme}
    `
  };
`;

export const Button: React.FC<IButton> = (props: IButton) => {
  console.info(typeof (props.children));
  
  if (typeof (props.children) === 'string' && props.isTitleReversed) {
    const reversedChild = props.children && props.children.split('').reverse().join(' ');
    return (
      <Btn {...props}>{reversedChild}</Btn>
    )
  }
  return <Btn {...props}>{props.children}</Btn>
}