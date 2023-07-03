import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import Rating from '@mui/material/Rating';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import IconButton from '@mui/material/IconButton';
import burger1 from './burger-1.png';
import './style.scss';

export type Props = {};

const menuCard: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	return (
		<div className="menu-card-container">
			<div className="menu-card-wraper">
				<div className="menu-card-img-wraper">
					<img src={burger1} alt="" />
				</div>

				<div className="menu-card-desc-wraper">
					<h3>Burger NewYork</h3>
					<Rating size="small" name="read-only" value={2.3} readOnly />
					<p>My weaknesses have always been food and men, in that order</p>
					<div className="menu-card-price-wraper">
						<p>$8.00</p>
						<div>
							<IconButton aria-label="delete">
								<ShoppingBasketOutlinedIcon />
							</IconButton>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
	);
};

export default withLocalize<Props & LocalizeContextProps>(menuCard);
