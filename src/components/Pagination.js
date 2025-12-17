import React, { useEffect, useState } from "react";
import "./Pagination.css";

function Pagingation() {
  const [products, setProducts] = useState([]);
  const [page, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const geProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${page * 20 - 20}`
    );
    const products = await response.json();
    if (products && products.products) {
      setProducts(products.products);
      setTotalPages(products.total / 20);
    }
  };

  useEffect(() => {
    geProducts();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.round(totalPages) &&
      selectedPage !== page
    )
      setPages(selectedPage);
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((product) => {
            return (
              <span className="products__single" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "disabled"}
            onClick={() => selectPageHandler(page - 1)}
          >
            left
          </span>
          {[...Array(Math.round(totalPages))].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : " "}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < Math.round(totalPages) ? " " : "disabled"}
          >
            right
          </span>
        </div>
      )}
    </div>
  );
}

export default Pagingation;
