import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../store/actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const btnForPayment = () => {
    return (
      <button className="btn btn-outline-dark">Confirm Your Payment</button>
    );
  };

  const emptyCart = () => {
    return (
      <div className="row">
        <div className="col-12">
          <h3>Your cart is empty!</h3>
        </div>
      </div>
    );
  };

  const handleDeleteItem = (product) => {
    dispatch(actions.deleteItem(product));
  };

  const showTotal = () => {
    let total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].product.price * cart[i].quantity;
    }
    return total.toFixed(2);
  };

  return (
    <>
      <div id="cart-page" className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8">
            {cart.length == 0 ? emptyCart() : ""}
            {cart.map((cartItem, index) => {
              return (
                <div className="row" key={index}>
                  <div className="cart-item col-12">
                    <div className="img-container">
                      <img
                        alt="sdasd"
                        src={
                          cartItem.product.image ? cartItem.product.image : ""
                        }
                      ></img>
                    </div>
                    <div className="cart-info">
                      <h3>{cartItem.product.title}</h3>
                      <h5>{cartItem.product.price.toFixed(2)}$</h5>
                      <div className="cart-info-quantity-control">
                        <button
                          className="btn btn-outline-dark"
                          onClick={() =>
                            dispatch(actions.updateItem(cartItem, -1))
                          }
                        >{`<`}</button>
                        <span className=" cart-info-quantity">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(actions.updateItem(cartItem, +1))
                          }
                          className="btn btn-outline-dark"
                        >{`>`}</button>
                      </div>
                    </div>
                    <i
                      class="cart-icon fa-solid fa-square-xmark cart-page-close-btn"
                      onClick={() => handleDeleteItem(cartItem)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-12 col-sm-12 col-md-4">
            <div className="row">
              <div class="col-12">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-muted">Your cart</span>
                  <span class="badge badge-secondary badge-pill">Total</span>
                </h4>
                <ul class="list-group mb-3">
                  {cart.map((cartItem, index) => {
                    return (
                      <li
                        key={index}
                        class="list-group-item d-flex justify-content-between lh-condensed"
                      >
                        <div>
                          <h6 class="my-0">{cartItem.product.title}</h6>
                        </div>
                        <span class="text-muted">
                          {(cartItem.product.price * cartItem.quantity).toFixed(
                            2
                          )}
                          $
                        </span>
                      </li>
                    );
                  })}
                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>{showTotal()}$</strong>
                  </li>
                </ul>
              </div>
            </div>
            {cart.length > 0 ? btnForPayment() : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
