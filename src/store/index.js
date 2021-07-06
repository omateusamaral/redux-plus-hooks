/* aqui a gente cria a store passando o reducer
porém só pode passar apenas um reducer por isso a gente cria
o arquivo rootreducer
*/

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import { rootSaga } from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhacer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer,enhacer);

sagaMiddleware.run(rootSaga);
export default store;