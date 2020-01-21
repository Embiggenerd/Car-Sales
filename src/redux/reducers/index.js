import { BUY_ITEM, REMOVE_FEATURE } from '../constants'
import { buyItemReducer } from './buyItemReducer'
import { initialState } from './initialState'

export const carReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BUY_ITEM:
            return buyItemReducer(state, payload)
        default:
            return state
    }
}