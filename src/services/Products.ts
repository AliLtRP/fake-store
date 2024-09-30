import { setProducts } from './../redux/actions/productActions';
import axios from "axios";

class Products {

    async fetchProducts(dispatch: any) {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");

            if (!response || !response.data) {
                throw new Error("something happend");
            }

            dispatch(setProducts(response?.data));
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    async fetchSingleProduct(id?: string) {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

            if (!response || !response?.data) {
                throw new Error("something happend!");
            }

            return response.data;
        } catch (e) {
            throw e;
        }
    }

}

export default new Products();