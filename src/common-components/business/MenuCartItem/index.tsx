import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';

import './style.scss';
import { BurgerProduct } from 'actions/burger/interface';

export type Props = {
	product: BurgerProduct;
	removeFromCartProduct: (productId: string, productName: string) => void;
};

const menuCartItem: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	const { product, removeFromCartProduct } = props;
	return (
		<div className="menu-cart-item-box">
			<img src={product.imageUrl} alt="" />
			<div>
				<p className="name-para">{product.name}</p>
				<div className="info-box">
					<p className="price-para"> {product.price}$</p>
					<IconButton onClick={() => removeFromCartProduct(product.id, product.name)} aria-label="delete">
						<DeleteIcon />
					</IconButton>{' '}
				</div>
			</div>
		</div>
	);
};

export default withLocalize<Props & LocalizeContextProps>(menuCartItem);
