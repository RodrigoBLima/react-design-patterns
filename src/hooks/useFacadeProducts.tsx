import axios from "axios";
import React from "react";
import IProducts from "../entities/products";

export const useFacadeProductsAPI = () => {
  const [products, setProducts] = React.useState<IProducts[]>([]);
  const [actionExecuting, setActionExecuting] = React.useState<boolean>(false);

  async function getProducts() {
    setActionExecuting(true);
    try {
      const resp = await axios.get("/api/products");
      setProducts(resp.data);
    } catch (err) { 
      console.log(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function createProducts(product: IProducts) {
    setActionExecuting(true);
    try {
      await axios.post("/api/products", product);
      setProducts([...products, product]);
    } catch (err) {
      console.log(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function deleteProducts(id: string) {
    setActionExecuting(true);
    try {
      await axios.delete(`/api/prod/${id}`);
      setProducts(products.filter((product: IProducts) => product.id !== id));
    } catch (err) {
      console.log(err);
    } finally {
      setActionExecuting(false);
    }
  }

  return {
    products,
    actionExecuting,
    getProducts,
    createProducts,
    deleteProducts,
  };
};