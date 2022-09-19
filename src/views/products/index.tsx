import React from "react";
import IProducts from "../../entities/products";
import { useFacadeProductsAPI } from "../../hooks/useFacadeProducts";
import CreateProductsModal from "./components/CreateProducts";
import Table from "./components/Table";

function ProductView() {
  const { products, getProducts, createProducts, deleteProducts } =
    useFacadeProductsAPI();

  const fetchProducts = React.useCallback(async () => {
    await getProducts();
  }, [getProducts]);

  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleProductDelete = async (id: string) => {
    await deleteProducts(id);
  };

  const handleCreateProducts = async (product: IProducts) => {
    await createProducts(product);
  };

  return (
    <div>
      <h1>ProductView</h1>

      <Table products={products} onDelete={handleProductDelete} />
      <CreateProductsModal onCreate={handleCreateProducts} />
    </div>
  );
}

export default ProductView;
