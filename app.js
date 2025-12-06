
const FORM_CONFIG = {
    LABEL_WIDTH: 120,
    INPUT_WIDTH: 400,
    SAVE_BUTTON_WIDTH: 200,
    FORM_MIN_WIDTH: 600,
    FORM_MAX_WIDTH: 1200,
    FORM_PADDING:20,
    TOOLBAR_PADDING: 10         // MAKE THIS IN ALPHEBATICAL ORDER
};

webix.ready(function () {

    webix.ui({
        container: "app",
        responsive: true,

        rows: [
            {
                view: "toolbar",
                css: "webix_dark",
                padding: FORM_CONFIG.TOOLBAR_PADDING,
                elements: [
                    { view: "label", label: "User Preferences", align: "center" }
                ]
            },

            {
                view: "tabview",
                cells: [
                    
                    {
                    header: "Account Settings",
                    body: {
                        
                        cols: [
                        {},
                            {
                                rows:[
                                    {height: 50},   // upper flexible
                                    {
                                    view: "form",
                                    id: "accountForm",
                                    css: "form-card",
                                    padding: FORM_CONFIG.FORM_PADDING,
                                    minWidth: FORM_CONFIG.FORM_MIN_WIDTH,
                                    maxWidth: FORM_CONFIG.FORM_MAX_WIDTH,
                                    elements: [
                                        {
                                            view: "label",
                                            id: "accountStatus",
                                            label: "",
                                            css: "status-label",
                                            height: 30
                                        },

                                        {
                                            view: "text",
                                            name: "username",
                                            label: "Username",
                                            labelWidth: FORM_CONFIG.LABEL_WIDTH,
                                            width: FORM_CONFIG.INPUT_WIDTH,
                                            placeholder: "Enter your username",
                                            required: true,
                                            invalidMessage: "Username is required"
                                        },
                                        {
                                            view: "text",
                                            name: "email",
                                            label: "Email",
                                            labelWidth: FORM_CONFIG.LABEL_WIDTH,
                                            width: FORM_CONFIG.INPUT_WIDTH,
                                            placeholder: "Enter your email",
                                            required: true,
                                            invalidMessage: "Enter a valid email address"
                                        },
                                        {
                                            view: "text",
                                            type: "password",
                                            name: "password",
                                            label: "Password",
                                            labelWidth: FORM_CONFIG.LABEL_WIDTH,
                                            width: FORM_CONFIG.INPUT_WIDTH,
                                            placeholder: "Minimum 8 characters",
                                            required: true,
                                            invalidMessage: "Password must be at least 8 characters"
                                        },
                                        {
                                            margin: 10,
                                            cols: [
                                                {},
                                                {
                                                    view: "button",
                                                    label: "Save",
                                                    css: "save-btn",
                                                    width: FORM_CONFIG.SAVE_BUTTON_WIDTH,
                                                    click: function () {
                                                        saveAccountSettings();
                                                    }
                                                },
                                                {}
                                            ]
                                        }
                                    ],

                                    rules: {
                                        username: webix.rules.isNotEmpty,
                                        email: webix.rules.isEmail,
                                        password: webix.rules.isNotEmpty    // password validated separately

                                    }


                                    },      // account form ends
                                    {}      // lower flexible
                                ]
                        },       

                        {}

                        ]   
                    }   //body ends
                },

                    { header: "Notification Settings", body: { template: "Notification Settings Content" }},
                    { header: "Theme Settings", body: { template: "Theme Settings Content" }},
                    { header: "Privacy Settings", body: { template: "Privacy Settings Content" }}
                ]
            }
        ]
    });

});




function saveAccountSettings() {
  const form = $$("accountForm");

  if (!form.validate()) return;

  const values = form.getValues();

  
  const passwordCheck = validatePassword(values.password);

  if (passwordCheck !== true) {
    webix.message({
      type: "error",
      text: passwordCheck   
    });
    return;
  }

  
  console.log("Saved Account Data:", {
    username: values.username,
    email: values.email,
    
  });

  webix.message({
    type: "success",
    text: "Account Settings Saved Successfully!"
  });
}



function validatePassword(password) {
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must include at least one lowercase letter";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must include at least one uppercase letter";
  }

  if (!/\d/.test(password)) {
    return "Password must include at least one number";
  }

  if (!/[@$!%*?&]/.test(password)) {
    return "Password must include at least one special character";
  }

  return true; 
}
