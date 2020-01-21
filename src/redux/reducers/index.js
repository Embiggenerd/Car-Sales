import { BUY_ITEM, REMOVE_ITEM } from '../constants'
import { buyItemReducer } from './buyItemReducer'
import { initialState } from './initialState'
import { removeItemReducer } from './removeItemReducer';

export const carReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BUY_ITEM:
            return buyItemReducer(state, payload)
        case REMOVE_ITEM:
            return removeItemReducer(state, payload)
        default:
            return state
    }
}