import { ForkEffect, put, takeEvery, race, delay, take, CallEffect, TakeEffect } from 'redux-saga/effects';

import * as userActions from '../actions/user';

function* loginSaga() {
	const logoutTimeoutCreationDate: string | null = yield localStorage.getItem('logoutTimeoutCreationDate');

	let logoutTimeout: number;

	if (!logoutTimeoutCreationDate || +logoutTimeoutCreationDate + 5000 < new Date().getTime()) {
		yield localStorage.setItem('logoutTimeoutCreationDate', new Date().getTime().toString());

		logoutTimeout = yield 5000;
	} else {
		logoutTimeout = yield +logoutTimeoutCreationDate + 5000 - new Date().getTime();
	}

	const [delayAction]: [CallEffect, TakeEffect] = yield race<CallEffect | TakeEffect>([
		delay(logoutTimeout),
		take(userActions.UNSET_USER),
	]);

	if (delayAction) {
		yield put(userActions.unsetUser());
	}
}

function* logoutSaga() {
	yield sessionStorage.removeItem('token');
	yield localStorage.removeItem('token');
	yield localStorage.removeItem('logoutTimeoutCreationDate');
}

export function* watchUser(): IterableIterator<ForkEffect> {
	yield takeEvery(userActions.SET_USER, loginSaga);
	yield takeEvery(userActions.UNSET_USER, logoutSaga);
}
