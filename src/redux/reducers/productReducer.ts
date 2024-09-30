const initState = {
    products: []
};

export const productReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            };
        case "SELECTED_PRODUCT":
            return {
                ...state,
                selectedProduct: action.payload
            };
        case "REMOVE_SELECTED_PRODUCT":
            return {
                ...state,
                selectedProduct: {}
            };
        default:
            return state;
    }
};