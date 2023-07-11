import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-stars";
import { BsCartPlus } from "react-icons/bs";
import { RiArrowDropUpFill, RiArrowDropDownFill } from "react-icons/ri";
import Swal from "sweetalert2";

export default function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState("");
  const [ratingStar, setRatingStar] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingStar,
    };

    console.log(payload);

    Swal.fire({
      title: "Successfully Submitted!",
      text: "Thanks for reviewing our product",
      icon: "success",
      confirmButtonText: "Continue Shopping",
    });

    setReview("");
    setRatingStar(0);
  };

  const addToCart = () => {
    const payload = {
      ...product,
      productQuantity,
      totalPrice: product.price * productQuantity,
    };

    console.log(payload);

    Swal.fire({
      title: "Added to Cart!",
      text: "Check your Cart for Check Out",
      icon: "success",
      confirmButtonText: "Continue Shopping",
    });
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productID}`)
      .then((json) => setProduct(json.data));
  }, [productID]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 align-self-center">
          <h1>{product.title}</h1>
          <p className="text-secondary">{product.description}</p>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-dark me-2"
              disabled={productQuantity <= 1}
              onClick={() => setProductQuantity(productQuantity - 1)}
            >
              <RiArrowDropDownFill />
            </button>
            <span>{productQuantity}</span>
            <button
              className="btn btn-dark ms-2"
              onClick={() => setProductQuantity(productQuantity + 1)}
            >
              <RiArrowDropUpFill />
            </button>
          </div>
          <button className="btn btn-dark mt-4" onClick={addToCart}>
            <BsCartPlus className="me-2" />
            Add to Cart
          </button>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className="d-flex align-items-center">
                <ReactStars
                  count={5}
                  size={24}
                  value={product.rating}
                  edit={false}
                  color2={"#ffd700"}
                />
              </div>
              <button className="btn btn-dark mt-4" onClick={addToCart}>
                <BsCartPlus className="me-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-header">Customer Reviews</div>
            <div className="card-body">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  style={{ height: 100 }}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <label htmlFor="reviewTextArea">Comments</label>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2">Rate Us:</span>
                <div className="d-flex align-items-center">
                  <ReactStars
                    count={5}
                    size={24}
                    value={ratingStar}
                    onChange={ratingChanged}
                    color2={"#ffd700"}
                  />
                </div>
                <span className="ms-2">({ratingStar})</span>
              </div>
              <button
                className="btn btn-dark mt-3"
                onClick={submitReview}
                disabled={!review || ratingStar === 0}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
