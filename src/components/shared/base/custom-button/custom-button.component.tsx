import { ComponentProps, PropsWithChildren } from 'react';
import './custom-button.styles.scss';

export interface CustomButtonProps
	extends PropsWithChildren<ComponentProps<'button'>> {
	isGoogleSignIn?: boolean;
	inverted?: boolean;
}
const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...props
}: CustomButtonProps) => {
	return (
		<button
			className={`${inverted ? 'inverted' : ''} ${
				isGoogleSignIn ? 'google-sign-in' : ''
			} custom-btn`}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;
