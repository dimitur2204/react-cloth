import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emailSignInStart, googleSignInStart } from '../../../redux/user/user.actions'
import { selectSignInError } from '../../../redux/user/user.selectors'
import CustomButton from '../../shared/base/custom-button/custom-button.component'
import FormInput from '../../shared/form/form-input/form-input.component'
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles'

export type SignInCredentials = {
  [key: string]: string
}
const SignIn = () => {
  const dispatch = useDispatch()
  const error = useSelector(selectSignInError)
  const [credentials, setCredentials] = useState<SignInCredentials>({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(credentials)
    const { email, password } = credentials
    dispatch(emailSignInStart(email, password))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as typeof e.target & {
      value: string
      name: string
    }
    const { value, name } = target
    setCredentials({ ...credentials, [name]: value })
  }
  const handleGoogleSignInClicked = () => {
    dispatch(googleSignInStart())
  }
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          name="email"
          value={credentials.email}
          handleChange={handleChange}
          required></FormInput>
        <FormInput
          type="password"
          label="Password"
          name="password"
          value={credentials.password}
          handleChange={handleChange}
          required></FormInput>
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" isGoogleSignIn onClick={handleGoogleSignInClicked}>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
        {error}
      </form>
    </SignInContainer>
  )
}

export default SignIn
