"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "@/components/Card";
import { actionGetProducts } from "./action";
import { ProductModel } from "@/db/models/product";

const ProductList = ({ params }: { params: string }) => {
  const [products, setProducts] = useState<ProductModel[]>([]); // State to hold products
  const [hasMore, setHasMore] = useState(true); // Track if more products are available
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false); // Loading state for smoother UX

  // Fetch initial products
  useEffect(() => {
    const fetchInitialProducts = async () => {
      setLoading(true);
      const initialProducts = await actionGetProducts(1); // Load page 1 initially
      setProducts(initialProducts);
      setLoading(false);
    };

    fetchInitialProducts();
  }, []);

  // Function to fetch more products when scrolling
  const fetchMoreProducts = async () => {
    if (loading) return; // Prevent multiple calls if still loading
    setLoading(true); // Set loading state to true

    const newPage = page + 1;
    const newProducts = await actionGetProducts(newPage);

    if (newProducts.length === 0) {
      setHasMore(false); // No more products to fetch
    } else {
      setProducts((prevProducts) => [...prevProducts, ...newProducts]); // Append new products
      setPage(newPage); // Update the page
    }
    
    setLoading(false); // Reset loading state
  };

  return (
    <InfiniteScroll
      dataLength={products.length} // Number of items currently loaded
      next={fetchMoreProducts} // Function to fetch the next page
      hasMore={hasMore} // Boolean to determine if there's more data
      loader={<h4>Loading more products...</h4>} // Loader indicator while fetching
      endMessage={<p>No more products to show</p>} // End message when all data is fetched
      scrollThreshold={0.7} // Start loading more content when the user reaches 70% of the page
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300 ease-in-out">
        {products.map((product) => (
          <Card key={product.slug} product={product} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ProductList;
