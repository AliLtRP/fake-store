import { actionType } from "../constants/action-types"

export const setProducts = (products: any) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product: any) => {
    return {
        type: actionType.SELECTED_PRODUCT,
        payload: product
    }
}