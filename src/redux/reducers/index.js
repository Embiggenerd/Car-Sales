import { BUY_ITEM, REMOVE_ITEM } from '../constants'
import { buyItemReducer } from './buyItemReducer'
import { initialState } from './initialState'

export const carReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BUY_ITEM:
            return buyItemReducer(state, payload)
        case REMOVE_ITEM:
            const newAdditionalPrice = state.additionalPrice - payload.item.price
            const newFeatures = state.car.features.filter(f => f.id !== payload.item.id)
            const newAddtionalFeatures = [...state.additionalFeatures, payload.item]
            return {
                ...state,
                additionalPrice: newAdditionalPrice,
                car: {
                    ...state.car,
                    features: newFeatures,
                },
                additionalFeatures: newAddtionalFeatures
            }
        default:
            return state
    }
}