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
    getdata();
  }, []);
  const getdata = () => {
    axios.get("http://localhost:8080/TODOS ").then(({ data }) => {
      // setData1(res.data);
      dispatch(AddTodo(data));
    });
  };

  const Addata = () => {
    axios({
      method: "POST",
      url: "http://localhost:8080/TODOS",
      data: {
        name: text,
        status: false,
      },
    }).then(() => {
      getdata();
    });
  };

  const Deletedata = (id) => {
    axios.delete(`http://localhost:8080/TODOS/${id}`).then(getdata());
  };

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
          Addata();
        }}
      >
        ADD TODO
      </button>
      {data.map((e) => (
        <div key={e.id}>
          <span>{e.name}</span>
          <button
            onClick={() => {
              Deletedata(e.id);
            }}
          >
            Delete
          </button>
          <span>
            <Link to={`todo/${e.id}`}>View</Link>
          </span>
        </div>
      ))}
    </div>
  );
};
