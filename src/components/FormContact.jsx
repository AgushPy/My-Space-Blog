import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "../styles/FormContact.css";

export const FormContact = () => {
  const getCountries = () => {
    return [
      { label: "Argentina", id: 1 },
      { label: "Chile", id: 2 },
    ];
  };

  return (
    <>
      <form action="">
        <div className="nes-field">
          <label for="name_field">Your name</label>
          <input type="text" id="name_field" class="nes-input" />
        </div>

        <div className="nes-field">
          <label htmlFor="nes-input">Your country</label>
          <div className="nes-select">
            {/* Solo dios sabe como funciona este Autocomplete modificado no tocar 
            Pls don't modificate this component and your properties, Only god understand this works this style*/}
            <Autocomplete
              sx={{ font: "Press Start 2P" }}
              disablePortal
              options={getCountries()}
              renderInput={(params) => (
                <TextField {...params} type="text" id="nes-input" />
              )}
            />
          </div>
        </div>
        <div className="nes-field">
          <label for="name_field">Your email</label>
          <input type="email" id="name_field" class="nes-input" />
        </div>

        <div className="nes-field">
          <label for="textarea_field">Your message</label>
          <textarea id="textarea_field" class="nes-textarea"></textarea>
        </div>

            
        <button type="submit" className="nes-btn is-warning">Submit</button>
      </form>
    </>
  );
};
