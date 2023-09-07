/* eslint-disable object-curly-newline */
import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import Rating from '@mui/material/Rating';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import IconButton from '@mui/material/IconButton';
import './style.scss';
import { BurgerProduct } from 'actions/burger/interface';

export type Props = {
	product: BurgerProduct;
};

const menuCard: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	const { product } = props;
	const { name, imageUrl, price, description } = product;
	return (
		<div className="menu-card-container">
			<div className="menu-card-wraper">
				<div className="menu-card-img-wraper">
					<img src={imageUrl} alt="" />
				</div>

				<div className="menu-card-desc-wraper">
					<h3>{name}</h3>
					<Rating size="small" name="read-only" value={2.3} readOnly />
					<p>{description}</p>
					<div className="menu-card-price-wraper">
						<p>${price}</p>
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
