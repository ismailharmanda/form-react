import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: nameInput,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameInput,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailNameReset,
  } = useInput((value) => value.includes("@"));

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!nameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }
    nameReset();
    lastNameReset();
    emailNameReset();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            value={nameInput}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            id="name"
          />
          {nameHasError && (
            <p className="error-text">You must enter a First Name.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastNameInput}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="lastName"
          />
          {lastNameHasError && (
            <p className="error-text">You must enter a Last Name.</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={emailInput}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
        />
        {emailHasError && (
          <p className="error-text">You must enter a valid E-mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
