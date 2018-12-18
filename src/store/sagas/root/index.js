// @flow strict
import type { Saga } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { ActionInterface } from '../../../utils/interfaces/action';

export function* asyncSetRootState(action: ActionInterface): Saga {
  yield put({ type: 'SET_ROOT_STATE', payload: action.payload });
}

export function* asyncResetRootState(action: ActionInterface): Saga {
  yield put({ type: 'RESET_ROOT_STATE', payload: action.payload });
}
