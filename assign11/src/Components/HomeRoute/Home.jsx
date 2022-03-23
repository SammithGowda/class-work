import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "../../Redux/Action";
import { Link } from "react-router-dom";
import axios from "axios";
export const Home = () => {
  const [text, setText] = useState("");
  // const [status, setStatus] = useState("");
  const data = useSelector((store) => store.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8080/TODOS").then(({ data }) => {
      // setData1(res.data);
      dispatch(AddTodo(data));
    });
  }, []);
  // console.log(data1, "data from db");

  console.log(data, "x");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          axios({
            method: "POST",
            url: "  http://localhost:8080/TODOS",
            data: {
              name: text,
            },
          }).then(() => {
            alert("done");
          });
        }}
      >
        ADD TODO
      </button>
      {data.map((e) => (
        <h6>{e.name}</h6>
      ))}
    </div>
  );
};
