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
  let formIsValid = false;
  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
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
        <div className={lastNameClasses}>
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
      <div className={emailClasses}>
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
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
