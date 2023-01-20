import React, { useContext, useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import { createNewContext } from "../App";

function SignIn() {
  const { emailId, handleClick } = useContext(createNewContext);
  return (
    <div>
      {emailId ? (
        <Home />
      ) : (
        <button onClick={handleClick}>SignIn with Google </button>
      )}
    </div>
  );
}

export default SignIn;
