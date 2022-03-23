import { Routes, Route } from "react-router-dom";

import { Home } from "../Components/HomeRoute/Home";
import { Todo } from "../Components/TodoRoute/Todo";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
};
