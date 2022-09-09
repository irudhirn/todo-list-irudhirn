import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Form = ({ submitHandler, inputVal, inputHandler }) => {
  const focusInp = useRef();

  useEffect(() => {
    if (focusInp.current) focusInp.current.focus();
  }, [inputVal]);

  return (
    <form action="submit" className="form__field" onSubmit={submitHandler}>
      <input
        type="text"
        className="input__field"
        placeholder="e.g. get milk..."
        ref={focusInp}
        value={inputVal}
        onChange={(e) => inputHandler(e.target.value)}
      />
    </form>
  );
};

export default Form;
