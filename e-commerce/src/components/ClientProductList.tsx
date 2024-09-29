"use client";

import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "@/components/Card";
import SkeletonCard from "@/components/SkeletonCard"; 
import { actionGetProducts } from "@/app/products/action"; 
import { ProductModel } from "@/db/models/product";

interface ClientProductListProps {
  initialProducts: ProductModel[]; 
}

const ClientProductList = ({ initialProducts }: ClientProductListProps) => {
  const [products, setProducts] = useState<ProductModel[]>(initialProducts); 
  const [page, setPage] = useState(1); 
  const [hasMore, setHasMore] = useState(initialProducts.length > 0); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); 

  const fetchProducts = useCallback(async (page: number, searchTerm: string) => {
    setLoading(true);
    setError(null);
    try {
      const newProducts: ProductModel[] = await actionGetProducts(page, 8, searchTerm); 
      return newProducts || [];
    } catch (err) {
      setError(`Failed to fetch products. Please try again later. ${err}`); 
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMoreProducts = async () => {
    if (loading || !hasMore) return;
    const newPage = page + 1;
    const newProducts = await fetchProducts(newPage, searchTerm);

    if (newProducts.length === 0) {
      setHasMore(false); 
    } else {
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setPage(newPage);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setPage(1); 
      const filteredProducts = await fetchProducts(1, searchTerm); 
      setProducts(filteredProducts); 
      setHasMore(filteredProducts.length > 0);
    }, 300);

    return () => clearTimeout(delayDebounceFn); 
  }, [searchTerm, fetchProducts]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      {error && <div className="text-red-500">{error}</div>} 

      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreProducts} 
        hasMore={hasMore} 
        loader={<h4>Loading more products...</h4>} 
        endMessage={<p>No more products to show</p>} 
        scrollThreshold={0.7} 
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading && products.length === 0 ? (
            
            [...Array(8)].map((_, index) => <SkeletonCard key={index} />)
          ) : (
            products.map((product: ProductModel) => (
              <Card key={product.slug} product={product} />
            ))
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ClientProductList;
