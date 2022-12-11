import React, { useState } from "react";
import { contact } from "../Feature/UserSlice";

import "../css/ContactStyle.css";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const Contact = () => {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [Email, setEmail] = useState("");
  const [DATE, setDATE] = useState("");
  const [text, setText] = useState("");
  const [tele, setTele] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    //check if the input is empty
    if (!name || !Email || !DATE || !text || !tele) {
      toast.error("Please fill all the fields");
    } else {
      toast.success(
        `Thank you ${name} for your reservation wich is on ${DATE}`
      );
    }

    dispatch(
      contact({
        name: name,
        name2: name,
        Email: Email,
        DATE: DATE,
        text: text,
        tele: tele,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="contact">
      <form className="contact__form" onSubmit={handleSubmit}>
        <h1>Make appointement here </h1>
        <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="name2"
          placeholder="name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
        <input
          type="Email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="TELE"
          placeholder="TELE"
          value={tele}
          onChange={(e) => setTele(e.target.value)}
        />
        <input
          type="DATE"
          placeholder="date of birth"
          value={DATE}
          onChange={(e) => setDATE(e.target.value)}
        />
        <input
          type="text"
          placeholder="reason of visit"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          submit
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 5000,
            }}
          />
        </button>
      </form>
    </div>
  );
};
export default Contact;
