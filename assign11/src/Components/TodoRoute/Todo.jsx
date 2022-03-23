import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Todo = () => {
  const { id } = useParams();
  const [tododata, setTododata] = useState({});

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios.get(`http://localhost:8080/TODOS/${id}`).then((res) => {
      setTododata(res.data);
      console.log(res.data, "datas");
    });
  };

  const chnage = (id) => {
    axios
      .patch(`http://localhost:8080/TODOS/${id}`, {
        status: true,
      })
      .then((res) => {
        getdata();
        console.log(res.data, "put");
      });
  };

  return (
    <div>
      <h1> {tododata.name}</h1>
      <div>{tododata.id}</div>
      <button
        onClick={() => {
          console.log("clicked");
          chnage(id);
        }}
      >
        {tododata.status ? "Completed" : "Not Completed"}
      </button>
    </div>
  );
};
