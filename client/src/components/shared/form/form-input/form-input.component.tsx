import {
	FormInputContainer,
	FormInputLabel,
	GroupContainer,
} from './form-input.styles';

export interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
	handleChange?: React.ChangeEventHandler<HTMLInputElement>;
	label?: string;
}

const FormInput = ({ handleChange, label, ...props }: FormInputProps) => {
	const value = props.value as string;

	return (
		<GroupContainer className="group">
			<FormInputContainer type="text" onChange={handleChange} />
			{label ? (
				<FormInputLabel
					htmlFor=""
					className={`${value?.length ? 'shrink' : ''}`}
				>
					{label}
				</FormInputLabel>
			) : null}
		</GroupContainer>
	);
};

export default FormInput;
