import { getProductWithReviews } from "../../../queries/products.query";
import { Product, Review } from "../../models";

//Server Components
async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const { product, reviews } = await getProductWithReviews(params.productId);
  return (
    <div>
      <h1>Product Detail Page</h1>
      <div>
        {product.name} - {product.price}
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDetailPage;
