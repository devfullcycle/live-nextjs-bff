export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
}

export type Review = {
    id: number;
    content: string;
    product_id: number;
}