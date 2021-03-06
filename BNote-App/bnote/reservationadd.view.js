sap.ui.jsview("bnote.reservationadd", {

	getControllerName : function() {
		return "bnote.reservationadd";
	},
	
	loadlocations: function(locations){
		this.locationitems.destroyItems();		
		this.locationitems.addItem(new sap.ui.core.Item({text : "Neue Location hinzufügen", key : "-1"}));
		
		for(var i=0; i < locations.getProperty("/locations").length; i++){
			var name = locations.getProperty("/locations/" + i + "/name");
			var key = locations.getProperty("/locations/" + i + "/id");
			this.locationitems.addItem(new sap.ui.core.Item({text : name, key : key}));
		};
		
	},
	
	loadcontacts: function(contacts){
		this.contactitems.destroyItems();
		
		for(var i=0; i < contacts.getProperty("/contacts").length; i++){
			var name = contacts.getProperty("/contacts/" + i + "/name");
			var surname = contacts.getProperty("/contacts/" + i + "/surname");
			var key = contacts.getProperty("/contacts/" + i + "/id");
			this.contactitems.addItem(new sap.ui.core.Item({text : surname + "," + " " +  name, key : key}));
		};
	},
	
	createContent: function(oController) {
		var view = this;
		
		this.locationitems = new sap.m.Select({
			change: function(){
					oController.setdirtyflag();
					oController.checknewlocation();					
			},	
      	  	items: []
        });
        
        this.contactitems = new sap.m.Select({
			change: function(){
				oController.setdirtyflag();
			},
      	  	items: []
        });
        
        this.locationaddForm = new sap.ui.layout.form.SimpleForm({        	
        	visible: true,
        	content:[
			        new sap.m.Label({text: "Straße"}),
			        new sap.m.Input("reservationadd_addlocation_street",{
			        	change: oController.addlocation_setdirtyflag,
			        	liveChange: validator.street
			        
			        }),
			        
			        new sap.m.Label({text: "Stadt"}),
			        new sap.m.Input("reservationadd_addlocation_city",{
			        	change: oController.addlocation_setdirtyflag,
			        	liveChange: validator.city
			        }),
			        
			        new sap.m.Label({text: "Postleitzahl"}),
			        new sap.m.Input("reservationadd_addlocation_zip",{
			        	change: oController.addlocation_setdirtyflag,
			        	liveChange: validator.zip
			        }),
			        
			        new sap.m.Label({text: "Location Notizen"}),
			        new sap.m.Input("reservationadd_addlocation_notes",{
			        	change: oController.addlocation_setdirtyflag,
			        	liveChange: validator.text
			        }),
			        
			        new sap.m.Label({text: "Location Name"}),			        
			        new sap.m.Input("reservationadd_addlocation_name",{
			        	change: oController.addlocation_setdirtyflag,
			        	liveChange: validator.name
			        }),
		   ]
        });
		 
		var reservationaddForm = new sap.ui.layout.form.SimpleForm({
			layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
			content:[			         
					new sap.m.Label({text: "Beginn"}),
					new sap.m.DateTimeInput("reservationadd_begin",{
						type: sap.m.DateTimeInputType.DateTime,
						change: function(){					
							oController.setdirtyflag();
			        		var oldtime = sap.ui.getCore().byId("reservationadd_begin").getDateValue();
			        		sap.ui.getCore().byId("reservationadd_end").setDateValue(new Date(oldtime.getTime() + 120*60000)); // 120 (minutes) * 60000 (milliseconds) = 2 hours
			        	},
						dateValue: "{/begin}",
			        	liveChange: validator.datetime
					}),
					
					
					new sap.m.Label({text: "Ende"}),
					new sap.m.DateTimeInput("reservationadd_end",{
						type: sap.m.DateTimeInputType.DateTime,
						change: oController.setdirtyflag,
						dateValue: "{/end}",
			        	liveChange: validator.datetime
					}),
					
	
			        new sap.m.Label({text: "Name"}),
			        new sap.m.Input({
			        	value: "{/name}",
			        	valueLiveUpdate: true,
			        	change: oController.setdirtyflag,
			        	liveChange: validator.name
			        }),
			         
			        new sap.m.Label({text: "Ort"}),
			        this.locationitems,
			              
			        // Invisible until Buttonpress	
			        this.locationaddForm,
			        
			        new sap.m.Label({text: "Kontakt"}),
			        this.contactitems,
			        
			        new sap.m.Label({text: "Notizen"}),
			        new sap.m.Input({
			        	value: "{/notes}",
			        	valueLiveUpdate: true,
			        	change: oController.setdirtyflag,
			        	liveChange: validator.text
			        })
			]  
	});
		
		var createReservationButton = new sap.m.Button({
			icon: sap.ui.core.IconPool.getIconURI("save"),			
			press: oController.addReservation
		});
		
		var page = new sap.m.Page("ReservationaddPage", {
	        title: "Reservierung hinzufügen",
	        showNavButton: true,
	        navButtonPress: function() {
	        	view.getModel().destroy();
	            app.back();
	        },
	        headerContent: [ createReservationButton ],
			content: [ reservationaddForm ],
	        footer: [ getNaviBar() ]
		});
		return page;
		}		
});