sap.ui.controller("bnote.login", {
    
	onInit: function() {
        var data = {
            login: "",
            password: ""
        }
        var model = new sap.ui.model.json.JSONModel(data);
        this.getView().loginForm.setModel(model);
    },
    
    onLoginPress: function(oEvent) {
        var thisCtrl = this;
        // check credentials and get mobilePin (set to global var)
        var model = oEvent.getSource().getParent().getModel();
        var login = model.getProperty("/login");
        var pw = model.getProperty("/password");
        
        jQuery.ajax({
        	url: backend.get_url("mobilePin"),//"data/login.txt",//backend.get_url("mobilePin"), 
            type: "POST",          	         
            data:  {"login": "admin", "password": "banane"}, //{"login": login, "password": pw},
            success: function(data) {
            	mobilePin = data;
            	setPermissions();
                app.to("start");
            },
            error: function(a,b,c) {
                sap.m.MessageToast.show("Anmeldung fehlgeschlagen");
                console.log(b + ": " + c);
            }
        });
    }
	
});