import { useContext, useEffect, useState } from "react";
import { Auth } from "../../Context/AuthContext";
import axios from "axios";
export const Toogle = () => {
  const [logedata, setLogedata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios({
      url: " https://reqres.in/api/login",
      type: "POST",
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
      success: function (response) {
        console.log(response, "reeeeeeeeeeeee");
      },
    });
  };
  return <h1>Hey hello Wellcome</h1>;
};
