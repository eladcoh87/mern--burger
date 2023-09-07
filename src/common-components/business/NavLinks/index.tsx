/* eslint-disable array-callback-return */
import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import './style.scss';
import MenuLinks from '../MenuLinks';
import { BurgerProduct } from 'actions/burger/interface';
import MenuCartItem from '../MenuCartItem';
import { history } from '@base/features';
import { Link } from 'react-router-dom';

export type Props = {
	cart: BurgerProduct[];
	removeFromCartProduct: (productId: string) => void;
	totalCartProducts: number;
	totalCartValue: number;
};

const navLinks: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	const { cart, removeFromCartProduct, totalCartProducts, totalCartValue } = props;
	console.log(cart.length > 3);
	return (
		<nav className="nav-links-container">
			<Container className="nav-links-wraper" maxWidth="xl">
				<div className="logo-wraper">
					<Link to="/">
						{' '}
						<span>BURGER</span> HUB
					</Link>
				</div>
				<ul className="links-wraper">
					<li>
						<MenuLinks name="Home" />
					</li>
					<li>
						<MenuLinks name="Menu" />
					</li>
					<li>About</li>
					<li>Shop</li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
				<div className="contact-wraper">
					{' '}
					<p>
						Call and Order in <span>London</span>{' '}
					</p>{' '}
					<p className="phone">+1 718-904-4450</p>
				</div>
				<div className="actions-btn-wraper">
					<div className="icon-wraper">
						<IconButton aria-label="person">
							<Person2Icon />
						</IconButton>
						<div className="icon-menu user-menu">
							<Link to="/sign-page">Sign-in</Link>
							<Link to="/register-page">Register</Link>
							<Link to="/wish-page">Wishlist</Link>
						</div>
					</div>
					<div className="icon-wraper">
						<IconButton aria-label="person">
							<Badge badgeContent={totalCartProducts} color="primary">
								<ShoppingCartIcon />
							</Badge>
						</IconButton>
						<div className="icon-menu cart-menu">
							{cart.length > 0 && (
								<div className="menu-cart-item-wraper">
									{cart.map((productItam) => (
										<MenuCartItem
											removeFromCartProduct={removeFromCartProduct}
											product={productItam}
											key={productItam.id}
										/>
									))}
								</div>
							)}
							<div className="spend-price-wraper">
								<p>Spend ${(1000 - totalCartValue).toFixed(2)} for FREE SHIPPING</p>
							</div>
							<div className="subtotal-wraper">
								<p>Subtotal: ${totalCartValue.toFixed(2)}</p>
							</div>
							<div>
								<Button
									onClick={() => history.push('/cart-page')}
									className="btn-cart"
									variant="contained"
								>
									go to cart
								</Button>
							</div>
							<div>
								<Button
									disabled={cart.length === 0}
									onClick={() => history.push('/checkout-page')}
									className="btn-checkout"
									variant="contained"
								>
									go to checkout
								</Button>
							</div>
						</div>
					</div>

					<Button className="btn-ordernow" variant="contained">
						order now
					</Button>
				</div>
			</Container>
		</nav>
	);
};

export default withLocalize<Props & LocalizeContextProps>(navLinks);
