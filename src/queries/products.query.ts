import { Product, Review } from "../app/models";

export async function getProductWithReviews(
    id: string
  ): Promise<{ product: Product; reviews: Review[] }> {
    //over requesting
    const productFetch = fetch(`http://localhost:3000/api/products/${id}`, {
      next: {
        revalidate: 10, //cache dinamico
        //tags: ['products'] //sob demanda
      },
    });
  
    const reviewsFetch = fetch(
      `http://localhost:3000/api/products/${id}/reviews`,
      {
        next: {
          revalidate: 1 * 60 * 60, //1 hora
          //tags: ['products'] //sob demanda
        },
      }
    );
  
    const [productResponse, reviewsResponse] = await Promise.all([
      productFetch,
      reviewsFetch,
    ]);
  
    const [product, reviews] = await Promise.all([
      productResponse.json(),
      reviewsResponse.json(),
    ]);
    return { product, reviews };
  }