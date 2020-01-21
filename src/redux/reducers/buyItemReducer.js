export const buyItemReducer = (state, payload) => {
    const newAdditionalPrice = state.additionalPrice + payload.item.price
    const newFeatures = [...state.car.features, payload.item]
    const newAdditionalFeatures = state.additionalFeatures.filter(f => f.id !== payload.item.id)
    return {
        ...state,
        car: {
            ...state.car,
            features: newFeatures
        },
        additionalPrice: newAdditionalPrice,
        additionalFeatures: newAdditionalFeatures

    }
}