export function isStrongPassword(password) {
  if (password.length === 0 || password.length < 8) return false;

  const check = RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return check.test(password);
}
