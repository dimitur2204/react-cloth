import { ComponentType } from 'react'
import SpinnerComponent from '../spinner/spinner.component'

export type WithSpinnerProps = {
  isLoading: boolean
  props: any
}
const withSpinner = (WrappedComponent: ComponentType<WithSpinnerProps>) => {
  const Spinner = ({ isLoading, ...props }: WithSpinnerProps) => {
    return isLoading ? <SpinnerComponent /> : <WrappedComponent {...(props as any)} />
  }
  return Spinner
}

export default withSpinner
