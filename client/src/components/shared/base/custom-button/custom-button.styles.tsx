import styled, { css } from 'styled-components'
import { CustomButtonProps } from './custom-button.component'

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

const googleButtonStyles = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`

const getButtonStyles = (props: CustomButtonProps) => {
  if (props.isGoogleSignIn) {
    return googleButtonStyles
  }

  return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button<CustomButtonProps>`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  ${getButtonStyles}
`
