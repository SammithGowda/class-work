import { Routes, Route } from "react-router-dom";

import { Home } from "../Components/HomeRoute/Home";
import { Navbar } from "../Components/NavBar/Navbar";
import { Todo } from "../Components/TodoRoute/Todo";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todo/:id" element={<Todo />} />
      </Routes>
    </>
  );
};
