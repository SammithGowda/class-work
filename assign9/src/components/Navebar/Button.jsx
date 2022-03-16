import { useContext } from "react";
import { Auth } from "../../Context/AuthContext";
export const Button = () => {
  const { handlechanger } = useContext(Auth);
  return (
    <button
      onClick={() => {
        handlechanger();
      }}
    >
      LOGIN
    </button>
  );
};
