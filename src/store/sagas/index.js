import { all, takeLatest } from 'redux-saga/effects';
import { asyncSetRootState, asyncResetRootState } from './root';

export default function* root() {
  yield all([
    // Root Actions
    takeLatest('ASYNC_SET_ROOT_STATE', asyncSetRootState),
    takeLatest('ASYNC_RESET_ROOT_STATE', asyncResetRootState),
  ]);
}
