interface IProduct {
    id: number;
    title: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    image: string;
}

interface IState {
    allProducts: {
        products: IProduct[];
    };
}

const initState: IState = {
    allProducts: {
        products: []
    }
};

export const productReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state.allProducts,
                products: action.payload
            };
        case "SELECTED_PRODUCT":
            return {
                ...state.allProducts,
                selectedProduct: action.payload
            };
        case "REMOVE_SELECTED_PRODUCT":
            return {
                ...state.allProducts,
                selectedProduct: {}
            };
        default:
            return state;
    }
};