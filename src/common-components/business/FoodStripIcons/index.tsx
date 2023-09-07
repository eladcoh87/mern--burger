/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import Container from '@mui/material/Container';
import burger1 from './burger-1.png';
import burger2 from './burger-2.png';
import burger3 from './burger-3.png';
import burger4 from './burger-4.png';
import './style.scss';

export type Props = {};

const foodStripIcons: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	return (
		<div className="foodStripIcons-container">
			<Container className="foodStripIcons-wraper" maxWidth="xl">
				<div className="icon-wraper icon-wraper1">
					<img src={burger1} alt="" /> <p>newyork burger</p>
				</div>
				<div className="icon-wraper icon-wraper2">
					<img src={burger2} alt="" /> <p>single burger</p>
				</div>
				<div className="icon-wraper icon-wraper3">
					<img src={burger3} alt="" /> <p>jersy burger</p>
				</div>
				<div className="icon-wraper icon-wraper4">
					<img src={burger4} alt="" /> <p>royal burger</p>
				</div>
				<div className="icon-wraper icon-wraper5">
					<img src={burger1} alt="" /> <p>spaicy burger</p>
				</div>
				<div className="icon-wraper icon-wraper6">
					<img src={burger2} alt="" /> <p>chill burger</p>
				</div>
				<div className="icon-wraper icon-wraper7">
					<img src={burger3} alt="" /> <p>colorado burger</p>
				</div>
				<div className="icon-wraper icon-wraper8">
					<img src={burger4} alt="" /> <p>usa burger</p>
				</div>
			</Container>
		</div>
	);
};

export default withLocalize<Props & LocalizeContextProps>(foodStripIcons);
