// src/validation.js
export function validatePassword(password) {
  if (typeof password !== "string") return "Invalid password";
  if (password.length < 8) return "Password must be at least 8 characters long";
  if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter";
  if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter";
  if (!/\d/.test(password)) return "Password must include at least one number";
  if (!/[@$!%*?&]/.test(password)) return "Password must include at least one special character";
  return true;
}
