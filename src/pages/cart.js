import React from "react";

function Cart() {
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <h3>Idli</h3>
                    <p>199</p>
                  </div>
                  <div className="col-4">
                    <button className="btn btn-primary btn-sm">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">Cart</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
