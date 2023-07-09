import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
// eslint-disable-next-line import/extensions
import CitysComp from './Citys';
import visa from './visa.png';

import './style.scss';

export type Props = {};

/*

const countrys = {
	"Israel": "Tel-Aviv",
	"Germany": "Berlin",
	"France": "Paris"
};

*/

const countrys = [
	{ country: 'Israel', capital: 'Tel Aviv' },
	{ country: 'Germany', capital: 'Berlin' },
	{ country: 'France', capital: 'Paris' },
];

const footerSection: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	return (
		<div className="footer-section-container">
			<div className="logo-box">
				<hr className="hr-line" />
				<p>BURGER</p>
				<hr className="hr-line" />
			</div>
			<Container maxWidth="lg" className="info-box">
				<div className="info-col">
					<h3>ADDRESS</h3>
					<p>570 8th Ave,</p>
					<p>New York, NY 10018</p>
					<p>United States</p>
				</div>
				<div className="info-col">
					<h3>BOOK A TABLE</h3>
					<p>Dogfood och Sliders foodtruck.</p>
					<p>Under Om oss kan ni läsa</p>
					<br />
					<p className="phone">(850) 435-4155</p>
				</div>
				<div className="info-col">
					<h3>OPENING HOURS</h3>
					<p>Monday – Friday: 8am – 4pm</p>
					<p>Saturday: 9am – 5pm</p>
				</div>
				<div className="info-col">
					<h3>NEWSLETTER</h3>
					<p>Subscribe to the weekly newsletter for all the</p>
					<p>latest updates</p>
					<div className="info-col-email-wraper">
						<TextField id="filled-basic" label="Enter email" variant="filled" />
						<Button variant="contained">subscribe</Button>
					</div>
				</div>
			</Container>
			<div className="visa-box">
				<p>Copyright © 2023, borger Powered by exavir</p>
				<img src={visa} alt="" />
				<div className="sociel-centered">
					<IconButton aria-label="delete">
						<FacebookOutlinedIcon />
					</IconButton>
					<IconButton aria-label="delete">
						<TwitterIcon />
					</IconButton>
					<IconButton aria-label="delete">
						<InstagramIcon />
					</IconButton>
					<IconButton aria-label="delete">
						<PinterestIcon />
					</IconButton>
				</div>
			</div>
			<div className="citys-box">
				<CitysComp countrys={countrys} />
			</div>
		</div>
	);
};

export default withLocalize<Props & LocalizeContextProps>(footerSection);
