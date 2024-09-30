import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export default function ProductListing() {
    const products = useSelector((state) => state?.allProducts?.products);
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex flex-wrap justify-center gap-8">
            {
                products?.map((v: any) => {
                    return (
                        <div className="min-w-64 max-w-64 h-72" onClick={() => navigate(`/product/${v.id}`)} key={v.id}>
                            <Card className="w-full h-full">
                                <CardHeader>
                                    <img src={v.image} className="h-32 object-contain" alt={v.title} />
                                </CardHeader>
                                <CardContent className="text-sm flex flex-col gap-2">
                                    <p className="h-16 overflow-clip">
                                        {v.title}
                                    </p>

                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2 font-medium">
                                            <p>{v.rating.rate}</p>
                                            <p>{v.rating.count}</p>
                                        </div>
                                        <p className="text-lg font-semibold">
                                            {v.price}$
                                        </p>
                                    </div>

                                </CardContent>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}
