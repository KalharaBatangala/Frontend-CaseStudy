import { validatePassword } from "../validation";

describe("validatePassword", () => {
  test("rejects non-string", () => {
    expect(validatePassword(null)).toBe("Invalid password");
  });

  test("rejects short passwords", () => {
    expect(validatePassword("Aa1@")).toBe("Password must be at least 8 characters long");
  });

  test("rejects missing lowercase", () => {
    expect(validatePassword("AAAAAA1@")).toBe("Password must include at least one lowercase letter");
  });

  test("rejects missing uppercase", () => {
    expect(validatePassword("aaaaaa1@")).toBe("Password must include at least one uppercase letter");
  });

  test("rejects missing number", () => {
    expect(validatePassword("Aaabcdef@")).toBe("Password must include at least one number");
  });

  test("rejects missing special char", () => {
    expect(validatePassword("Aa1aaaaa")).toBe("Password must include at least one special character");
  });

  test("accepts a strong password", () => {
    expect(validatePassword("Strong@123")).toBe(true);
  });
});
