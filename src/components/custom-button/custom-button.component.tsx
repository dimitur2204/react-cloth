import { ComponentProps, PropsWithChildren } from 'react';
import './custom-button.styles.scss';

export interface CustomButtonProps
	extends PropsWithChildren<ComponentProps<'button'>> {}
const CustomButton = ({ children, ...props }: CustomButtonProps) => {
	return (
		<button className="custom-btn" {...props}>
			{children}
		</button>
	);
};

export default CustomButton;
