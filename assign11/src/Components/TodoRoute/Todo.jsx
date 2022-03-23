import { useSelector } from "react-redux";

export const Todo = () => {
  const data = useSelector((store) => store.todo);

  return (
    <div>
      <h1>well come lwde</h1>
    </div>
  );
};
