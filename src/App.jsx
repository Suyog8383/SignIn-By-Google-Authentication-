import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SignIn from "./signIn_Auth/SignIn";
import { auth, provider } from "./signIn_Auth/Config";
import { signInWithPopup } from "firebase/auth";

export const createNewContext = createContext("");
const CreateContextProvider = createNewContext.Provider;
function App() {
  const [emailId, setEmailId] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setEmailId(data.user.email);
      setName(data.user.displayName);
      setPhoto(data.user.photoURL);

      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.displayName);
      localStorage.setItem("photo", data.user.photoURL);
    });
  };

  useEffect(() => {
    setEmailId(localStorage.getItem("email"));
    setName(localStorage.getItem("name"));
    setPhoto(localStorage.getItem("photo"));
  });
  return (
    <CreateContextProvider value={{ emailId, name, photo, handleClick }}>
      <div>
        <SignIn />
      </div>
    </CreateContextProvider>
  );
}

export default App;

//photoURL
