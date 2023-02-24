import nProgress from 'nprogress';

nProgress.configure({
	showSpinner: false,
});

export const startProgress = () => {
	nProgress.start();
};

export const endProgress = () => {
	nProgress.done();
};
