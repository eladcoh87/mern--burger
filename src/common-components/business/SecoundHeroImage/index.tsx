import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import burger3 from './burger-3.png';
import Button from '@mui/material/Button';

import './style.scss';

export type Props = {};

const secoundHeroImage: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	return (
		<div className="secoundHeroImage-container">
			<div className="centered">
				<div className="image-wraper">
					<img src={burger3} alt="" />
				</div>
				<div className="desc-wraper">
					<p>About Our Food</p>
					<p>From Texas With</p>
					<p>American Love</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui reprehenderit cumque eos vero
						amet ex dignissimos corrupti consequuntur perspiciatis!,mos corrupti consequuntur perspiciatis!
					</p>
					<Button variant="contained">order now</Button>
				</div>
			</div>
		</div>
	);
};

export default withLocalize<Props & LocalizeContextProps>(secoundHeroImage);
