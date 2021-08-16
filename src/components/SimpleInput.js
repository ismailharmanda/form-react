import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const fromSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      return;
    }
    setEnteredName("");
  };
  return (
    <form onSubmit={fromSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
