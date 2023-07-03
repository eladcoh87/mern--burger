import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import './style.scss';
import FoodCard from 'common-components/business/FoodCard';
// import { HeroSectionActions, heroSectionSelector } from 'actions/redux/heroSection';

export type Props = {};

export interface OwnProps extends Props, LocalizeContextProps {}

export class HeroSection extends React.Component<OwnProps> {
	render() {
		return (
			<div className="hero-section-container">
				<div className="hero-image-wraper">
					<img src="https://cdn.pixabay.com/photo/2019/11/09/17/02/burger-4614022_1280.jpg" alt="" />
				</div>

				<Container className="order-wraper" maxWidth="xl">
					<div className="order-images-wraper">
						<div className="first-image">
							<img
								src="https://cdn.shopify.com/s/files/1/0649/7645/3861/files/banner1-h3.jpg?v=1657964221"
								alt=""
							/>
							<div className="top-left-div-image-main-section">
								<p className="headline">american</p> <p className="type">Burger</p>{' '}
								<p> &#8226; one phone call away </p>{' '}
								<Button className="action-btn" variant="contained">
									hot & spicy
								</Button>
							</div>
						</div>
						<div className="dabel-image-wraper">
							<div className="image-wraper">
								<img
									src="https://cdn.shopify.com/s/files/1/0649/7645/3861/files/banner2-h3.jpg?v=1657964221"
									alt=""
								/>
								<div className="top-left-div-image-main-section">
									<p className="headline">newyork</p> <p className="type">FOOD</p>{' '}
									<p> &#8226; for online orders in wend </p>{' '}
									<Button className="action-btn" variant="contained">
										order now
									</Button>
								</div>
							</div>
							<div className="image-wraper">
								<img
									src="https://cdn.shopify.com/s/files/1/0649/7645/3861/files/banner3-h33.jpg?v=1657964221"
									alt=""
								/>
								<div className="top-left-div-image-main-section">
									<p className="headline">jersy</p> <p className="type">COMBO</p>{' '}
									<p> &#8226; for online orders in sun </p>{' '}
									<Button className="action-btn" variant="contained">
										order now
									</Button>
								</div>
							</div>
						</div>
						<div className="last-image">
							<img
								src="https://cdn.shopify.com/s/files/1/0649/7645/3861/files/banner4-h32.jpg?v=1657965129"
								alt=""
							/>
							<div className="top-left-div-image-main-section">
								<p className="headline">fastboy</p> <p className="type">hotdog</p>{' '}
								<p> &#8226; dubel suoce </p>{' '}
								<Button className="action-btn" variant="contained">
									order now
								</Button>
							</div>
						</div>
					</div>
				</Container>
				<Container className="info-box-container" maxWidth="xl">
					<div className="hero-section-info-box-wraper">
						<div>
							<PedalBikeIcon />
						</div>
						<div>
							<p className="headline">Free Shipping</p>
							<p className="message">Sign up for updates and get free shipping</p>
						</div>
					</div>
					<div className="hero-section-info-box-wraper">
						<div>
							<AccessAlarmIcon />
						</div>
						<div>
							<p className="headline">Free Shipping</p>
							<p className="message">Sign up for updates and get free shipping</p>
						</div>
					</div>
					<div className="hero-section-info-box-wraper">
						<div>
							<LunchDiningIcon />
						</div>
						<div>
							<p className="headline">Free Shipping</p>
							<p className="message">Sign up for updates and get free shipping</p>
						</div>
					</div>
				</Container>

				<Container className="pupularFood-container" maxWidth="xl">
					<FoodCard />
					<FoodCard />
					<FoodCard />
					<FoodCard />
				</Container>
				<div className="last-hero-image-wraper">
					<img
						src="https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750&dpr=1"
						alt=""
					/>
					<div className="top-left-div-image-main-section">
						<p className="headline">american</p> <p className="type">Burger</p>{' '}
						<p> &#8226; one phone call away </p>{' '}
						<Button className="action-btn" variant="contained">
							hot & spicy
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default baseConnect<any, any, Props>(
	HeroSection,
	(state: ApplicationState) => {
		return {};
	},
	{}
);
