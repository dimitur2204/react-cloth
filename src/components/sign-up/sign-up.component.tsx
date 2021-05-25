import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';

export type SignUpInfo = {
	[key: string]: string;
};

export default function SignUp() {
	const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { displayName, email, password, confirmPassword } = signUpInfo;
	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDoc(user, { displayName });
			setSignUpInfo({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (e: ChangeEvent) => {
		const target = e.target as typeof e.target & {
			value: string;
			name: string;
		};
		const { value, name } = target;
		setSignUpInfo({ ...signUpInfo, [name]: value });
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
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
		</div>
	);
}
