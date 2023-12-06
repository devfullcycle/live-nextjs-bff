import { Suspense } from "react";
import { ProductsList } from "../../components/ProductList";

async function ProductsListPage() {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <ProductsList />
      </Suspense>
    </div>
  );
}

export default ProductsListPage;

//over fetching
//over requesting