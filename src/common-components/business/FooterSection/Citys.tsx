/* eslint-disable operator-linebreak */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-tabs */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable indent */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';

interface Countrys {
	country: string;
	capital: string;
}

export type Props = {
	countrys: Countrys[];
};

const citysComp: React.FC<Props & LocalizeContextProps> = (props: Props & LocalizeContextProps) => {
	const { countrys } = props;
	const [citys, setCity] = useState<string[]>([]);
	const [citysRec, setCityRec] = useState<string[]>([]);

	const handleClick = (event: any) => {
		const cityName = event.target.innerText.toLowerCase();

		// if (!citys.includes(cityName) && citys.length === 2) {
		// 	setCity((prevState) => [cityName]);
		// 	return;
		// }

		// if (!citys.includes(cityName) && citys.length < 2) {
		// 	setCity((prevState) => [cityName, ...prevState]);
		// } else {
		// 	setCity((prevState) => {
		// 		return prevState.filter((city) => city !== cityName);
		// 	});
		// }

		if (citys.length === 2) {
			setCity((prevState) => [cityName]);
			setCityRec((prevState) => [cityName, ...prevState]);
			return;
		}

		if (!citys.includes(cityName)) {
			setCity((prevState) => [cityName, ...prevState]);

			setCityRec((prevState) => [cityName, ...prevState]);
		} else {
			setCity((prevState) => {
				return prevState.filter((city) => city !== cityName);
			});
		}
	};

	const towCitysMatch = (city1: string, city2: string) => {
		const indexOfCity1 = citysRec.findIndex((city) => city === city1);
		if (indexOfCity1 === -1) {
			return false;
		}

		if (citysRec[indexOfCity1 + 1] === city2) {
			return true;
		}

		if (citysRec[indexOfCity1 - 1] === city2) {
			return true;
		}

		return false;
	};

	const aAfterB = (word: string) => {
		return word.includes('ba') ? false : true;
	};
	return (
		<div>
			{towCitysMatch('israel', 'tel aviv') ? null : (
				<button
					onClick={handleClick}
					className={
						citys.includes('israel')
							? `${!citys.includes('tel aviv') && citys.length === 2 ? 'notmetchCity' : 'pressedBtn'}`
							: 'noPressed'
					}
				>
					Israel
				</button>
			)}
			{towCitysMatch('tel aviv', 'israel') ? null : (
				<button
					onClick={handleClick}
					className={
						citys.includes('tel aviv')
							? `${!citys.includes('israel') && citys.length === 2 ? 'notmetchCity' : 'pressedBtn'}`
							: 'noPressed'
					}
				>
					Tel Aviv
				</button>
			)}
			{towCitysMatch('germany', 'berlin') ? null : (
				<button
					onClick={handleClick}
					className={
						citys.includes('germany')
							? `${!citys.includes('berlin') && citys.length === 2 ? 'notmetchCity' : 'pressedBtn'}`
							: 'noPressed'
					}
				>
					Germany
				</button>
			)}
			{towCitysMatch('berlin', 'germany') ? null : (
				<button
					onClick={handleClick}
					className={
						citys.includes('berlin')
							? `${!citys.includes('germany') && citys.length === 2 ? 'notmetchCity' : 'pressedBtn'}`
							: 'noPressed'
					}
				>
					Berlin
				</button>
			)}
			{towCitysMatch('france', 'paris') ? null : (
				<button
					onClick={handleClick}
					className={
						citys.includes('france')
							? `${!citys.includes('paris') && citys.length === 2 ? 'notmetchCity' : 'pressedBtn'}`
							: 'noPressed'
					}
				>
					France
				</button>
			)}
			{towCitysMatch('paris', 'france') ? null : (
				<button
					onClick={handleClick}
					className={
						citys.includes('paris')
							? `${!citys.includes('france') && citys.length === 2 ? 'notmetchCity' : 'pressedBtn'}`
							: 'noPressed'
					}
				>
					Paris
				</button>
			)}
			{console.log(aAfterB('ababa'))}
			<br />
			<br />
			<br />
			<br />

			<div>
				{countrys.map((countryItem) => {
					return (
						<div key={countryItem.country}>
							{towCitysMatch(
								countryItem.country.toLowerCase(),
								countryItem.capital.toLowerCase()
							) ? null : (
								<button
									onClick={handleClick}
									className={
										citys.includes(countryItem.country.toLowerCase())
											? `${
													!citys.includes(countryItem.capital.toLowerCase()) &&
													citys.length === 2
														? 'notmetchCity'
														: 'pressedBtn'
											  }`
											: 'noPressed'
									}
								>
									{countryItem.country}
								</button>
							)}
							{towCitysMatch(
								countryItem.capital.toLowerCase(),
								countryItem.country.toLowerCase()
							) ? null : (
								<button
									onClick={handleClick}
									className={
										citys.includes(countryItem.capital.toLowerCase())
											? `${
													// eslint-disable-next-line operator-linebreak
													!citys.includes(countryItem.country.toLowerCase()) &&
													citys.length === 2
														? 'notmetchCity'
														: 'pressedBtn'
											  }`
											: 'noPressed'
									}
								>
									{countryItem.capital}
								</button>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default withLocalize<Props & LocalizeContextProps>(citysComp);
