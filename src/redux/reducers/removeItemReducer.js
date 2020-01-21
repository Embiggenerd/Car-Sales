export const removeItemReducer = (state, payload) => {
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
}