import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { CustomRoute } from '@base/features/base-decorator';
import { setCurrentStep } from 'actions/flowManager/manager';
// import { Container } from '@mui/material';

const routeDecorator = (WrappedComponent: any, step?: string) => {
	class PageContainer extends React.Component<any> {
		componentDidMount() {
			if (step) {
				setCurrentStep(step);
			} else {
				setCurrentStep('OUT_FROM_FLOW');
			}
		}

		render() {
			return (
				<div>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	}

	return baseConnect(PageContainer, (/* state: any */) => ({}), {});
};

export default CustomRoute(routeDecorator);
