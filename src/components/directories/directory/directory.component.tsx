import { useSelector } from 'react-redux';
import { selectSections } from '../../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
	const sections = useSelector(selectSections);
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...sectionProps }) => (
				<MenuItem key={id} {...sectionProps} />
			))}
		</div>
	);
};

export default Directory;
