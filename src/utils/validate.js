export const checkValidateData = (email, password) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordsValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!isEmailValid) {
    return "Email is not Valid.";
  }
  if (!isPasswordsValid) {
    return "Password is not Valid.";
  }
  return null;
};
