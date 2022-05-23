export default function validateInfo(isLogin, values) {
  let errors = {};

  if (isLogin) {
  } else if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  if (!values.password) {
    errors.password = 'Password required';
  } else if (isLogin) {
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 characters or more';
  }

  if (isLogin) {
  } else if (!values.password2) {
    errors.password2 = 'Password required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }

  return errors;
}
