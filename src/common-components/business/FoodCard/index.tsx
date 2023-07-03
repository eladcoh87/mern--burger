import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import burger1 from './burger-1.png';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import './style.scss';

export type Props = {};

const foodCard: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	return (
		<Card className="food-card-wraper">
			<CardActionArea>
				<CardMedia component="img" height="140" image={burger1} alt="green iguana" />
				<div className="div-color" />
			</CardActionArea>
			<CardActions>
				<div className="rating-box">
					<Rating name="read-only" size="small" value={2.4} readOnly />
					<p> 2 reviews</p>
				</div>
				<p className="food-name">Burger King york</p>
				<div className="price-wraper">
					<p>$80.00</p>
					<div>
						<IconButton>
							<ShoppingBasketOutlinedIcon />
						</IconButton>
					</div>
				</div>
			</CardActions>
		</Card>
	);
};

export default withLocalize<Props & LocalizeContextProps>(foodCard);
