import nProgress from 'nprogress';

let isInProgress = false;

nProgress.configure({ showSpinner: false });

export const startProgress = () => {
	if (!isInProgress) {
		isInProgress = true;
		nProgress.start();
	}
};

export const endProgress = () => {
	if (isInProgress) {
		isInProgress = false;
		nProgress.done();
	}
};
