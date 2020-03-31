import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
function* fetchUser(action) {
   
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* rootSaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}


export default rootSaga;