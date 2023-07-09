import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import './style.scss';
import { BurgerProduct } from 'actions/burger/interface';

export type Props = {
	product: BurgerProduct;
	addToCartProduct: (productFood: BurgerProduct) => void;
};

const foodCard: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	const { product, addToCartProduct } = props;
	const { name, imageUrl, price } = product;

	return (
		<Card className="food-card-wraper">
			<CardActionArea>
				<CardMedia component="img" height="140" image={imageUrl} alt="green iguana" />
				<div className="div-color" />
			</CardActionArea>
			<CardActions>
				<div className="rating-box">
					<Rating name="read-only" size="small" value={2.4} readOnly />
					<p> 2 reviews</p>
				</div>
				<p className="food-name">{name}</p>
				<div className="price-wraper">
					<p>{price}</p>
					<div>
						<IconButton onClick={() => addToCartProduct(product)}>
							<ShoppingBasketOutlinedIcon />
						</IconButton>
					</div>
				</div>
			</CardActions>
		</Card>
	);
};

export default withLocalize<Props & LocalizeContextProps>(foodCard);
