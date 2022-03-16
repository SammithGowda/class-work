import { useContext, useEffect, useState } from "react";
import { Auth } from "../../Context/AuthContext";
import axios from "axios";
export const Toogle = () => {
  const [logedata, setLogedata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios.get(`https://reqres.in/api/login`).then((res) => {
      setLogedata(res.data);
      console.log(res.data);
    });
  };
  return <h1>Hey hello Wellcome</h1>;
};
