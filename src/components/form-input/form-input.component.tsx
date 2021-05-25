import React from 'react';
import './form-input.styles.scss';

export interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
	label?: string;
}

const FormInput = ({ handleChange, label, ...props }: FormInputProps) => {
	const value = props.value as string;

	return (
		<div className="group">
			<input
				type="text"
				className="form-input"
				onChange={handleChange}
				{...props}
			/>
			{label ? (
				<label
					htmlFor=""
					className={`${value?.length ? 'shrink' : ''} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
