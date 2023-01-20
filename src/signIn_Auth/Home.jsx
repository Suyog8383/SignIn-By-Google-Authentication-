import React, { useContext } from "react";
import { createNewContext } from "../App";

function Home() {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  const { emailId, name, photo } = useContext(createNewContext);
  console.log("@SN ", emailId);
  return (
    <>
      <div style={{ border: "2px solid", padding: "35px" }}>
        <h2 style={{ background: "aquamarine" }}>Google Authentication </h2>
        <img
          src={photo}
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "90px",
          }}
          alt="image"
        />
        <hr />
        <div>
          <h2>Name = {name}</h2>
          <h2>Email-Id = {emailId}</h2>
        </div>
      </div>
      <button onClick={logOut}>Logout</button>
    </>
  );
}

export default Home;
