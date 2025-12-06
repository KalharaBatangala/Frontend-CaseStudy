
import { saveAccountSettingsForTest } from "../app"; // 

describe("saveAccountSettings", () => {
  beforeEach(() => {
    global.$$ = jest.fn();                 
    global.webix = { message: jest.fn() }; 
  });

  test("rejects when form.validate() returns false", () => {
    const fakeForm = { validate: jest.fn(() => false) };
    $$.mockReturnValue(fakeForm);

    saveAccountSettingsForTest(); 
    expect(global.webix.message).not.toHaveBeenCalled();
  });

  test("shows error when new passwords dont match", () => {
    const fakeForm = {
      validate: jest.fn(() => true),
      getValues: jest.fn(() => ({
        username: "u",
        email: "e",
        current_password: "old",
        new_password1: "Aaaa@123",
        new_password2: "Aaa@1234"
      })),
      setValues: jest.fn()
    };
    $$.mockReturnValue(fakeForm);

    saveAccountSettingsForTest();
    expect(global.webix.message).toHaveBeenCalledWith(expect.objectContaining({ type: "error" }));
  });
});
