import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../../redux/user/user.actions'
import CustomButton from '../../shared/base/custom-button/custom-button.component'
import FormInput from '../../shared/form/form-input/form-input.component'
import { SignUpContainer, SignUpTitle } from './sign-up.styles'

export type SignUpInfo = {
  [key: string]: string
}

export default function SignUp() {
  const dispatch = useDispatch()
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { displayName, email, password, confirmPassword } = signUpInfo
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    dispatch(signUpStart(email, password, displayName))
  }

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as typeof e.target & {
      value: string
      name: string
    }
    const { value, name } = target
    setSignUpInfo({ ...signUpInfo, [name]: value })
  }

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  )
}
