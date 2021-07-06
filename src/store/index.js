/* aqui a gente cria a store passando o reducer
porém só pode passar apenas um reducer por isso a gente cria
o arquivo rootreducer
*/

import {createStore} from 'redux';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;