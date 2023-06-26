import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendUserAuthRequest } from "../../api-helpers/api-helpers";
import { userActions } from "../../store";
import AuthForm from "./AuthForm";


const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const onResReceived = (data) => {
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
    navigate("/");
  };

  const getData = (data) => {
    console.log(data);
    sendUserAuthRequest(data.inputs, data.signup)
      .then(onResReceived)
      .catch((err) => {
        console.log(err);
       alert("Invalid credentials. Please try again."); // Set error message
      });
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
      {errorMessage && <p>{errorMessage}</p>} {/* Display error message */}
    </div>
  );
};

export default Auth;
