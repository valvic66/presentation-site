// tslint:disabled

export const buttonTheme = `
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #4CAF50;
  border-color: #4CAF50;
  color: #000000;
  &:hover {
    color: #ffffff;
  }
  font-family: Verdana, sans-serif;
  letter-spacing: 1.1px;
  `;
  
  export const buttonDefaultTheme = `
    padding: 10px 20px;
    font-size: 1rem;
  `;

export const hoverRemovedTheme = `
  cursor: default;
  &:hover {
    box-shadow: none;
    // color: #d3d3d3;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const redTheme = `
  background-color: #ff0000;
  color: #ffffff;
  &:hover {
    background-color: #cc0000;
  }
`;

export const blueTheme = `
  background-color: #0000ff;
  color: #ffffff;
  &:hover {
    background-color: #0066ff;
  }
`;

export const greenTheme = `
  background-color: #4CAF50;
  color: #000000;
  &:hover {
    color: #ffffff;
  }
`;

export const blackTheme = `
  background-color: #000000;
  color: #ffffff;
  &:hover {
    background-color: #333333;
  }
`;
