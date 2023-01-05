import React, { useState } from "react";
import { FormContact } from "../components/FormContact";

export const Contact = () => {

    const [toggleContact,setToggleContact] = useState(false);

    const onShowContact = () =>{
        setToggleContact(true);
    }

    const onHideContact = () =>{
        setToggleContact(false);
    }
  return (
    <>
      <h2 className="nes-text is-warning">Do you want contact me?</h2>
      <label onClick={onShowContact}>
        <input  type="radio" class="nes-radio" name="answer"  />
        <span>Yes</span>
      </label>

      <label onClick={onHideContact}>
        <input  type="radio" class="nes-radio" name="answer" checked />
        <span>No</span>
      </label>

      {toggleContact && <FormContact />}
    </>
  );
};
