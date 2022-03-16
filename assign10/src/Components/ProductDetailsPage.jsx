import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

export const ProductsDetailsPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  //   const value = false;
  const [value, setValue] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:4001/Products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((Error) => {
        setValue(true);
        console.log(Error, "Errorrr");
      });
  }, []);

  //   if (product.length === 0) {
  //     console.log("length is empty");
  //   } else {
  // }
  if (value === true) {
    return <Navigate to={"/notfound"} />;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={""} alt="" />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{product.name}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
            {id}
          </div>
        </div>
      </div>
    </>
  );
};
