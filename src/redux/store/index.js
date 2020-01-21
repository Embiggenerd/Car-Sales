import { createStore } from 'redux';
import { carReducer } from '../reducers'

export const store = createStore(carReducer)