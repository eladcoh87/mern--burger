import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { PendingTasks } from '@base/features/base-global-spinner/reducer';
import { Media } from '@base/features/base-render-mobile';
import ErrorHandler from 'containers/ErrorHandler';
import { ApplicationState } from 'actions';
import { Spinner } from 'common-components/business';
import HeaderSection from 'containers/HeaderSection';
import FooterSection from 'common-components/business/FooterSection';

interface Props {
	children: any;
	pendingTasks: PendingTasks;
}

class App extends React.Component<Props> {
	render() {
		const { children, pendingTasks } = this.props;
		const loading = pendingTasks?.length;

		return (
			<>
				<ErrorHandler />
				{!!loading && <Spinner />}
				<HeaderSection />
				<Media greaterThan="sm">{children}</Media>
				<Media at="sm">{children}</Media>
				<FooterSection />
			</>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => ({
	pendingTasks: state.globalSpinner.pendingTasks,
});

export default baseConnect(App, mapStateToProps, {});
