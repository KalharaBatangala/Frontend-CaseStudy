
const FORM_CONFIG = {
    ACC_SETTING_LABEL_WIDTH: 170,
    NOTIFICATION_LABEL_WIDTH: 240,
    INPUT_WIDTH: 400,
    ELEMENT_MARGIN: 10,
    SAVE_BUTTON_WIDTH: 200,
    FORM_MIN_WIDTH: 600,
    FORM_MAX_WIDTH: 1200,
    FORM_PADDING:30,
    TOOLBAR_PADDING: 10,         
    THEME_SETTING_LABEL_WIDTH: 150
};

webix.UIManager.tabControl = true;

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
                        
                        
                        
                            
                                
                                rows:[
                                    {},   // upper flexible
                                    {
                                    view: "form",
                                    id: "accountForm",
                                    css: "form-card",
                                    padding: FORM_CONFIG.FORM_PADDING,
                                    //minWidth: FORM_CONFIG.FORM_MIN_WIDTH,
                                    //maxWidth: FORM_CONFIG.FORM_MAX_WIDTH,
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
                                            inputWidth: 900,
                                            labelWidth: FORM_CONFIG.ACC_SETTING_LABEL_WIDTH,
                                            //width: FORM_CONFIG.INPUT_WIDTH,
                                            placeholder: "Enter your username",
                                            required: true,
                                            invalidMessage: "Username is required"
                                        },
                                        {
                                            view: "text",
                                            name: "email",
                                            label: "Email",
                                            inputWidth: 900,
                                            labelWidth: FORM_CONFIG.ACC_SETTING_LABEL_WIDTH,
                                            //width: FORM_CONFIG.INPUT_WIDTH,
                                            placeholder: "Enter your email",
                                            required: true,
                                            invalidMessage: "Enter a valid email address"
                                        },
                                        {
                                            view: "text",
                                            type: "password",
                                            name: "current_password",
                                            label: "Current Password",
                                            inputWidth: 900,
                                            labelWidth: FORM_CONFIG.ACC_SETTING_LABEL_WIDTH,
                                            //width: FORM_CONFIG.INPUT_WIDTH,
                                            placeholder: "Enter your current password",
                                            required: true,
                                            invalidMessage: "Password must be at least 8 characters",
                                            
                                        },
                                        {
                                            view: "text",
                                            type: "password",
                                            name: "new_password1",
                                            label: "New Password",
                                            inputWidth: 900,
                                            labelWidth: FORM_CONFIG.ACC_SETTING_LABEL_WIDTH,
                                            //width: FORM_CONFIG.INPUT_WIDTH,
                                            placeholder: "Enter a New Password",
                                            required: true,
                                            invalidMessage: "Password must be at least 8 characters",
                                            
                                        },
                                        {
                                            view: "text",
                                            type: "password",
                                            name: "new_password2",
                                            label: "Retype New Password",
                                            inputWidth: 900,
                                            labelWidth: FORM_CONFIG.ACC_SETTING_LABEL_WIDTH,
                                            //width: FORM_CONFIG.INPUT_WIDTH,
                                            placeholder: "Re-type your New Password",
                                            required: true,
                                            invalidMessage: "Password must be at least 8 characters",
                                            
                                        },
                                        {
                                            margin: 10,
                                            cols: [
                                                {},
                                                {
                                                    view: "button",
                                                    label: "Save",
                                                    css: "save-btn",
                                                    //width: FORM_CONFIG.SAVE_BUTTON_WIDTH,
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
                                        current_password: webix.rules.isNotEmpty,
                                        //password: webix.rules.isNotEmpty    // password validated separately

                                    }


                                    },      // account form ends
                                    {}      // lower flexible
                                ]   // rows end
                                   

                        

                              // cols end
                    }   //body ends
                },


// *************************** ACCOUNT SETTINGS END *************************************//

                    {     
                        
                    header: "Notification Settings",
                    body: {
                        
                             // left flexible space
                            
                                rows: [
                                    { }, // vertical spacer from top
                                    {
                                        view: "form",
                                        id: "notificationForm",
                                        padding: FORM_CONFIG.FORM_PADDING,
                                        //minWidth: FORM_CONFIG.FORM_MIN_WIDTH,
                                        //maxWidth: FORM_CONFIG.FORM_MAX_WIDTH,
                                        css: "form-card",
                                        elements: [
                                            {
                                                view: "label",
                                                id: "notificationStatus",
                                                label: "",
                                                css: "status-label",
                                                height: 30
                                            },

                                            // Email Notifications
                                            {
                                                view: "checkbox",
                                                label: "Receive Marketing Emails",
                                                name: "marketingEmail",
                                                labelWidth: FORM_CONFIG.NOTIFICATION_LABEL_WIDTH,
                                                value: 1,
                                            },
                                            {
                                                view: "checkbox",
                                                label: "Receive Product Updates",
                                                name: "productUpdates",
                                                labelWidth: FORM_CONFIG.NOTIFICATION_LABEL_WIDTH,
                                                value: 0
                                            },

                                            // Push Notifications
                                            {
                                                view: "checkbox",
                                                label: "Push Notifications",
                                                name: "pushNotifications",
                                                labelWidth: FORM_CONFIG.NOTIFICATION_LABEL_WIDTH
                                            },

                                            
                                            {
                                                view: "richselect",
                                                label: "Notification Frequency",
                                                name: "frequency",
                                                inputWidth: 420,
                                                labelWidth: FORM_CONFIG.NOTIFICATION_LABEL_WIDTH,
                                                options: [
                                                    
                                                    { id: "immediate", value: "Immediate"},
                                                    { id: "daily", value: "Daily" },
                                                    { id: "weekly", value: "Weekly" }
                                                ],
                                                value: "daily"  
                                            },

                                            
                                            {
                                                margin: FORM_CONFIG.ELEMENT_MARGIN,
                                                cols: [
                                                    {},
                                                    {
                                                        view: "button",
                                                        label: "Save",
                                                        css: "save-btn",
                                                        click: saveNotificationSettings,
                                                        width: FORM_CONFIG.SAVE_BUTTON_WIDTH
                                                    },
                                                    {}
                                                ]
                                            }
                                        ]   // elements enda
                                    },
                                    {}  // bottom flexible in notification tab
                                ]   // row ends
                            
                             
                        
                    }
},

// *************************** NOTIFICATIONS SETTINGS END *************************************//
                    { 
                        
                    header: "Theme Settings",
                    body: {
                             
                                rows: [
                                    { height: 50 }, 

                                    {
                                        view: "form",
                                        id: "themeForm",
                                        padding: FORM_CONFIG.FORM_PADDING,
                                        //minWidth: FORM_CONFIG.FORM_MIN_WIDTH,
                                        //maxWidth: FORM_CONFIG.FORM_MAX_WIDTH,
                                        css: "form-card",

                                        elements: [
                                            {
                                                view: "label",
                                                id: "themeStatus",
                                                label: "",
                                                css: "status-label",
                                                height: 30
                                            },

                                            
                                            {
                                                view: "radio",
                                                label: "Theme Mode",
                                                name: "themeMode",
                                                labelWidth: FORM_CONFIG.THEME_SETTING_LABEL_WIDTH,
                                                options: [
                                                    { id: "light", value: "Light" },
                                                    { id: "dark", value: "Dark" }
                                                ],
                                                value: "light"
                                            },

                                            
                                            {
                                                view: "colorpicker",
                                                label: "Primary Color",
                                                name: "primaryColor",
                                                inputWidth:900,
                                                labelWidth: FORM_CONFIG.THEME_SETTING_LABEL_WIDTH,
                                                value: "#4CAF50"
                                            },

                                            
                                            {
                                                view: "richselect",
                                                id: "fontSelector",
                                                label: "Font Style",
                                                name: "fontStyle",
                                                inputWidth: 420,
                                                labelWidth: FORM_CONFIG.THEME_SETTING_LABEL_WIDTH,
                                                options: [
                                                    { id: "Segoe UI", value: "Segoe UI" },
                                                    { id: "Arial", value: "Arial" },
                                                    { id: "Roboto", value: "Roboto" },
                                                    { id: "Montserrat", value: "Montserrat" }
                                                ],
                                                value: "Segoe UI",
                                                on: {
                                                    onChange: function (newFont) {      // preview on 
                                                        applyFont(newFont);             // change
                                                    }
                                                }
                                            },

                                            
                                            {
                                                view: "radio",
                                                id: "layoutSelector",
                                                label: "Layout Style",
                                                name: "layoutStyle",
                                                labelWidth: FORM_CONFIG.THEME_SETTING_LABEL_WIDTH,
                                                options: [
                                                    { id: "comfortable", value: "Comfortable" },
                                                    { id: "compact", value: "Compact" }
                                                ],
                                                value: "comfortable"
                                            },

                                            
                                            {
                                                margin: FORM_CONFIG.ELEMENT_MARGIN,
                                                cols: [
                                                    {},
                                                    {
                                                        view: "button",
                                                        label: "Save",
                                                        css: "save-btn",
                                                        width: FORM_CONFIG.SAVE_BUTTON_WIDTH,
                                                        click: saveThemeSettings
                                                    },
                                                    {}
                                                ]
                                            }
                                        ]
                                    },
                                    {}
                                ]   // row ends
                           
                            
                    }
},
                    { 
                    header: "Privacy Settings",
                    
                    body: {
                    rows: [
                    {},

                    {
                        view: "form",
                        id: "privacyForm",
                        css: "form-card",
                        padding: FORM_CONFIG.FORM_PADDING,

                        elements: [
                        {
                            view: "label",
                            id: "privacyStatus",
                            label: "",
                            css: "status-label",
                            height: 30
                        },

                        {
                            view: "richselect",
                            label: "Profile Visibility",
                            name: "visibility",
                            inputWidth: 900,
                            labelWidth: FORM_CONFIG.THEME_SETTING_LABEL_WIDTH,
                            options: [
                            { id: "public", value: "Public" },
                            { id: "friends", value: "Friends Only" },
                            { id: "private", value: "Private" }
                            ],
                            value: "public"
                        },

                        {
                            view: "switch",
                            label: "Allow Search Engine Indexing",
                            name: "searchIndexing",
                            labelWidth: 250,
                            value: 1
                        },

                        {
                            view: "switch",
                            label: "Share Data with Partners",
                            name: "dataSharing",
                            labelWidth: 250,
                            value: 0
                        },

                        {
                            view: "switch",
                            label: "Show Read Receipts",
                            name: "readReceipts",
                            labelWidth: 250,
                            value: 1
                        },

                        {
                            view: "switch",
                            label: "Enable Two-Factor Authentication",
                            name: "twoFactor",
                            labelWidth: 250,
                            value: 0
                        },
                        {
                            view: "switch",
                            label: "Allow Camera & Microphone Access",
                            name: "mediaAccess",
                            labelWidth: 250,
                            value: 0
                        },

                        { height: 20 },

                        {
                            template: "<b>Danger Zone</b>",
                            type: "section"
                        },

                        {
                            view: "button",
                            label: "Download My Data",
                            css: "webix_secondary",
                            click: function () {
                            webix.message("Your data export is being prepared...");
                            }
                        },

                        {
                            view: "button",
                            label: "Delete My Account",
                            css: "webix_danger",
                            click: function () {
                            webix.confirm({
                                title: "Confirm Account Deletion",
                                text: "This action is permanent and cannot be undone. Are you sure?",
                                callback: function (res) {
                                if (res) {
                                    webix.message({
                                    type: "error",
                                    text: "Your account has been scheduled for deletion."
                                    });
                                }
                                }
                            });
                            }
                        },

                        {
                            margin: FORM_CONFIG.ELEMENT_MARGIN,
                            cols: [
                            {},
                            {
                                view: "button",
                                label: "Save Privacy Settings",
                                css: "save-btn",
                                width: FORM_CONFIG.SAVE_BUTTON_WIDTH,
                                click: savePrivacySettings
                            },
                            {}
                            ]
                        }
                        ]
                    },

                    {}
                    ]
                }
}


                ]
            },
            
        ]
    });

});




function saveAccountSettings() {
  const form = $$("accountForm");

  if (!form.validate()) return;

  const values = form.getValues();


  if (!values.current_password) {
    webix.message({ type: "error", text: "Please enter your current password." });
    return;
  }
  if (!values.new_password1 || !values.new_password2) {
    webix.message({ type: "error", text: "Please fill both new password fields." });
    return;
  }

  
  if (values.new_password1 !== values.new_password2) {
    webix.message({ type: "error", text: "New passwords do not match." });
    return;
  }

  // Validate new password 
  const passwordCheck = validatePassword(values.new_password1);
  if (passwordCheck !== true) {
    webix.message({ type: "error", text: passwordCheck });
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


function saveNotificationSettings() {
    const form = $$("notificationForm");

    if (!form.validate()) return; 

    const data = form.getValues();
    console.log("Saved Notification Settings:", data);

    webix.message({
        text: "Notification settings saved successfully!",
        type: "success",
        expire: 3000,
        css: "webix_success"
    });
}


function saveThemeSettings() {
    const form = $$("themeForm");

    if (!form.validate()) return;

    const data = form.getValues();
    console.log("Saved Theme Settings:", data);

    webix.message({
        type: "success",
        text: "Theme settings saved successfully!",
        expire: 3000
    });

    applyThemePreview(data); 
}

function applyThemePreview(theme) {

    const font = $$("fontSelector").getValue();

    if (font) {
        applyFont(font);
    }

    const layout = $$("layoutSelector").getValue();

    if (layout) {
        applyLayout(layout);
    }

    
    document.body.style.fontFamily = theme.fontStyle;

    
    document.body.classList.remove("dark-theme", "light-theme");

    if (theme.themeMode === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.add("light-theme");
    }

    
    document.documentElement.style.setProperty(
        "--primary-color",
        theme.primaryColor
    );

    // ✅ SAFE LAYOUT DENSITY
    document.querySelectorAll(".webix_el_box input, .webix_el_box select").forEach(el => {
        if (theme.layoutStyle === "compact") {
            el.style.padding = "4px 6px";
        } else {
            el.style.padding = "10px 12px";
        }
    });
}



function applyFont(fontName) {
    document.documentElement.style.setProperty(
        "--app-font",
        fontName
    );
}


function applyLayout(layoutType) {
    if (layoutType === "Comfortable") {
        document.documentElement.style.setProperty("--form-padding", "24px");
        document.documentElement.style.setProperty("--field-gap", "12px");
        document.documentElement.style.setProperty("--form-max-width", "650px");
    }

    if (layoutType === "Compact") {
        document.documentElement.style.setProperty("--form-padding", "12px");
        document.documentElement.style.setProperty("--field-gap", "6px");
        document.documentElement.style.setProperty("--form-max-width", "500px");
    }

    if (layoutType === "Wide") {
        document.documentElement.style.setProperty("--form-padding", "24px");
        document.documentElement.style.setProperty("--field-gap", "12px");
        document.documentElement.style.setProperty("--form-max-width", "1000px");
    }
}


function savePrivacySettings() {
  const form = $$("privacyForm");

  if (!form.validate()) return;

  const values = form.getValues();

  console.log("Saved Privacy Settings:", values);

  webix.message({
    type: "success",
    text: "Privacy Settings Saved Successfully!"
  });
}
