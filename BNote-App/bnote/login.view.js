sap.ui.jsview("bnote.login", {
    
    login_form: null,

	getControllerName: function() {
		return "bnote.login";
	},
	
	createContent: function(oController) {        
		this.loginForm = new sap.ui.layout.form.SimpleForm({
			layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            content: [
                // login
                new sap.m.Label({text: "Benutzername / E-Mail-Adresse"}),
                new sap.m.Input("loginField",{
                    type: sap.m.InputType.Text,
                    value: "{/login}",
                    valueLiveUpdate: true
                }),
                
                // end
                new sap.m.Label({text: "Password"}),
                new sap.m.Input("passwordField",{
                    type: sap.m.InputType.Password,
                    value: "{/password}",
                    valueLiveUpdate: true
                }),
                new sap.m.CheckBox("saveuser",{
        			text: "Benutzer speichern",
        			selected: "{/save}"
        		}),
                
                // submit
                new sap.m.Label({text: ""}),  // spacer
                new sap.m.Button({
                    text: "Login",
                    press: oController.onLoginPress
                }),                
                   
                new sap.m.Label({
        			text: "Noch keinen Account? Jetzt registrieren"
        		}),
        		new sap.m.Button({
        			text: "Registrierung",
        			press: function() {
        				signupView.getController().prepareModel();
        				app.to("signup");
        			}
        		})        		
            ]
        });
		
	

		var bnoteImg = new sap.m.Image({
			src: "img/BNote_Logo_blue_on_white_192px.png",
			height: "128px"
		});
		var logo_layout = new sap.m.HBox({
			justifyContent: sap.m.FlexJustifyContent.SpaceAround,
			alignItems: sap.m.FlexAlignItems.Center,
			items: [bnoteImg]
		});
		logo_layout.addStyleClass("bnote_logo");
		
		var desktopButton = new sap.m.Button({
			text: "Desktop",
			press: function(){
				window.location = desktop_path;
			}
		});
					
		var page = new sap.m.Page("LoginPage", {
            title: "Login",
            headerContent : [ desktopButton ],
			content: [ logo_layout, this.loginForm ]
		});
		
		return page;
	}
});