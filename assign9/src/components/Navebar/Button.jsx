import { useContext } from "react";
import { Auth } from "../../Context/AuthContext";
export const Button = () => {
  const { handlechanger, handlechnager2, token, isAuth } = useContext(Auth);

  console.log(isAuth, token, "booo");
  return (
    <>
      <div>
        <button
          onClick={() => {
            handlechanger();
          }}
        >
          LOGIN
        </button>

        <button
          onClick={() => {
            handlechnager2();
          }}
        >
          out
        </button>
      </div>
      {/* <div>{token}</div> */}
    </>
  );
};
