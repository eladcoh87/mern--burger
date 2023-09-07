/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

import './style.scss';

export type Props = {};

const customerRecomended: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	return (
		<Container className="recomended-container" maxWidth="lg">
			<div>
				<h2>WHAT YOUR CLIENT SAYS</h2>
			</div>
			<div className="recomended-section">
				<div className="recomended-wraper">
					<div className="recomended-first-row">
						<div className="avatar-box">
							<Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=52" />
							<div>
								<p>rami swarez</p>
								<p>ceo,apple inc</p>
							</div>
						</div>
						<div className="rating-box">
							<Rating size="small" name="read-only" value={2} readOnly />
						</div>
					</div>
					<div className="recomended-last-row">forgat the trendy pizza,eat all the burger</div>
				</div>
				<div className="recomended-wraper">
					<div className="recomended-first-row">
						<div className="avatar-box">
							<Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=52" />
							<div>
								<p>rami swarez</p>
								<p>ceo,apple inc</p>
							</div>
						</div>
						<div className="rating-box">
							<Rating size="small" name="read-only" value={2} readOnly />
						</div>
					</div>
					<div className="recomended-last-row">forgat the trendy pizza,eat all the burger</div>
				</div>
			</div>
		</Container>
	);
};

export default withLocalize<Props & LocalizeContextProps>(customerRecomended);
