import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "./../store/actions";
const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const products = await res.json();
        setData(products);
        // console.log(products);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  function loadingDiv() {
    return (
      <div class="text-center col-12">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div id="products" className="container">
      <div className="row mt-5">
        <div className="col-12 text-center pb-3 border-bottom">
          <h3 className="mb-0">Latest Product</h3>
        </div>
      </div>
      <div className="row mt-3">
        {loading && loadingDiv()}
        {data.map((product, index) => {
          return (
            <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
              <div className="card-product">
                <img src={product.image}></img>
                <div className="card-info">
                  <h6 className="mt-2">{product.title}</h6>
                  <div>{product.price}$</div>
                  <div className="card-info-btn-container">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      Read more
                    </button>
                    <button
                      onClick={() => dispatch(actions.addItem(product))}
                      className="btn btn-outline-dark"
                    >
                      <i class="fa-solid fa-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
