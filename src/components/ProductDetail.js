import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "./../store/actions";

const ProductDetail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(actions.addItem(data));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const product = await (
          await fetch(`https://fakestoreapi.com/products/${params.id}`)
        ).json();

        setData(product);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  const loadingDiv = () => {
    return (
      <div className="col-12">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  };

  const showProduct = () => {
    return (
      <>
        <div className="col-12 col-sm-12 col-md-6">
          <div className="img-container">
            <img src={data.image}></img>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <h1>{data.title}</h1>
          <h2>{data.price}$</h2>
          <p>{data.description}</p>
          <button className="btn btn-outline-dark" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </>
    );
  };

  return (
    <div id="product-detail" className="container mt-5">
      <div className="row">
        {loading && loadingDiv()}
        {!loading && showProduct()}
        {/* <div className="col-6">
            <div className="img-container">
              <img src={data.image}></img>
            </div>
          </div>
          <div className="col-6">
            <h1>{data.title}</h1>
            <h2>{data.price}</h2>
            <p>{data.description}</p>
            <button className="btn btn-outline-dark">Add To Cart</button>
          </div> */}
      </div>
    </div>
  );
};

export default ProductDetail;
