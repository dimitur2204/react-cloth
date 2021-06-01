import { ComponentProps, PropsWithChildren } from 'react'
import { CustomButtonContainer } from './custom-button.styles'
export interface CustomButtonProps extends PropsWithChildren<ComponentProps<'button'>> {
  isGoogleSignIn?: boolean
  inverted?: boolean
}
const CustomButton = (props: CustomButtonProps) => {
  return <CustomButtonContainer {...(props as any)}>{props.children}</CustomButtonContainer>
}

export default CustomButton
