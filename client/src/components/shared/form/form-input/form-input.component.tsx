import { FormInputContainer, FormInputLabel, GroupContainer } from './form-input.styles'

export interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
  handleChange?: React.ChangeEventHandler<HTMLInputElement>
  label?: string
  name?: string
}

const FormInput = ({ handleChange, label, name, ...props }: FormInputProps) => {
  const value = props.value as string
  const type = props.type as string

  return (
    <GroupContainer className="group">
      <FormInputContainer onChange={handleChange} name={name} type={type} />
      {label ? (
        <FormInputLabel htmlFor="" className={`${value?.length ? 'shrink' : ''}`}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  )
}

export default FormInput
