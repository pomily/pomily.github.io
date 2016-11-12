import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0em 3.8em;
  text-decoration: none;
  border-radius: 15px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 13px;
  border: 2px solid #5E5E60;
  color: #5E5E60;
  height: 34px;
  width: 200px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  transition: .5s;
  &:hover {
    background: #5E5E60;
    color: #fff;
    width: 240px;
  }
`;

export default buttonStyles;
