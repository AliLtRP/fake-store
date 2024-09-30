import Products from "@/services/Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

interface Product {
    title: string,
    category: string
    description: string
    id: number
    image: string
    price: string
    rating: { rate: number, count: number }
}

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        Products.fetchSingleProduct(id)
            .then((res) => setProduct(res));
    }, [id]);

    if (!product) return <div>loading...</div>

    return (
        <div className="w-full h-full flex justify-center">
            <div className="h-full basis-1/2 flex justify-center">
                <img src={product?.image} className="w-[70%] h-[70%] object-contain" alt={product?.title} />
            </div>
            <div className="basis-1/2 flex flex-col gap-8">
                <h1 className="text-3xl font-bold">{product?.title}</h1>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 font-medium">
                        <p>Rating: {product.rating.rate}</p>
                        <p>{product.rating.count}</p>
                    </div>
                    <p className="text-lg font-semibold pr-4">
                        {product.price}$
                    </p>
                </div>

                <p className="text-lg">{product?.description}</p>
            </div>
        </div>
    )
}
