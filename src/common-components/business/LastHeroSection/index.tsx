import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import Button from '@mui/material/Button';
import delivery from './delivery.png';
import burger from './burger.png';

import './style.scss';

export type Props = {};

const lastHeroSection: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	return (
		<div className="last-hero-container">
			<div className="centered">
				<div className="img-wraper">
					<img src={burger} alt="" />
				</div>
				<div className="info-box">
					<p>we gernted</p>
					<p>30 miunts delvery</p>
					<p>
						We Guarantee 30 Minutes Delivery! If you’re having a meeting, <br /> <br /> working late at
						night and need an extra push. Let us know and we will be there
					</p>
					<Button variant="contained">make an order</Button>
				</div>
				<div className="img-wraper">
					<img src={delivery} alt="" />
				</div>
			</div>
		</div>
	);
};

export default withLocalize<Props & LocalizeContextProps>(lastHeroSection);
