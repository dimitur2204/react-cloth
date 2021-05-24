import { RouteComponentProps, withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

export type MenuItemProps = {
	title: string;
	imageUrl: string;
	linkUrl: string;
	size?: string;
};
const MenuItem = ({
	title,
	imageUrl,
	linkUrl,
	size,
	history,
	match,
}: MenuItemProps & RouteComponentProps) => {
	return (
		<div
			className={`${size} menu-item`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
