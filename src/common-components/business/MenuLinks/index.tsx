/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './style.scss';

export type Props = {
	name: string;
};

const menuLinks: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	const { name } = props;
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log('over');
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		console.log('colse');
		setAnchorEl(null);
	};

	return (
		<div className="btn-nav-wraper">
			<Button
				className="btn-nav-link"
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				
			>
				{name}
				<KeyboardArrowDownIcon />
			</Button>
			<Menu
				className="menu-link"
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
};

export default withLocalize<Props & LocalizeContextProps>(menuLinks);
