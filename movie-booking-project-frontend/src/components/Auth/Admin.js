import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendAdminAuthRequest } from "../../api-helpers/api-helpers";
import { adminActions } from "../../store";
import AuthForm from "./AuthForm";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const onResReceived = (data) => {
    console.log(data);
      dispatch(adminActions.login());
      localStorage.setItem("adminId", data.id);
      localStorage.setItem("token", data.token);
      navigate("/");
   
  };

  const getData = (data) => {
    console.log("Admin", data);
    sendAdminAuthRequest(data.inputs)
      .then(onResReceived)
      .catch((err) => {
        console.log(err);
        alert("Invalid credentials. Check Your password and email and Verify that you are admin or not."); // Set error message for general error
      });
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
      {errorMessage && <p>{errorMessage}</p>} {/* Display error message */}
    </div>
  );
};

export default Admin;
