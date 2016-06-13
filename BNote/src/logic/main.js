/**
 * Main JavaScript file.
 */

// NORMAL EDITOR -> used for rich text fields, e.g. communication
tinyMCE.init({
	mode: "exact",
	elements: "tinymce",
	language: "de",
	theme: "modern",
	plugins: "textcolor",
	toolbar: "bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor backcolor | fontsizeselect",
	menubar: false,
	statusbar: false
});

// FULL EDITOR -> used for website editing
tinyMCE.init({
	mode: "exact",
	elements: "tinymcefull",
	language: "de",
	theme: "modern",
	plugins: "preview table hr print textcolor code",
	menubar: "edit format tools table",
	toolbar: "preview | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor backcolor | fontsizeselect | cut copy paste | undo redo | hr | print",
	statusbar: false,
	tools: "inserttable"
});

$(document).ready(function() {
	$(".dateChooser").datepicker({
		autoSize: true,
		dateFormat: 'dd.mm.yy',
		dayNames: [ "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag" ],
		dayNamesMin: [ "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa" ],
		monthNames: [ "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ],
		firstDay: 1
	});
	
	$(".datetimeChooser").datetimepicker({
		 lang:'de',
		 i18n:{
		  de:{
		   months:[
		    'Januar','Februar','März','April',
		    'Mai','Juni','Juli','August',
		    'September','Oktober','November','Dezember',
		   ],
		   dayOfWeek:[
		    "So", "Mo", "Di", "Mi", 
		    "Do", "Fr", "Sa",
		   ]
		  }
		 },
		 format:'d.m.Y H:i',
		 defaultTime: '18:00',
		 step: 15,
		 weeks: true,
		 dayOfWeekStart: 1,
		 scrollMonth: true
	});
	
	$("#sortable").sortable();
	$("#sortable").disableSelection();
	
	$('#calendar').fullCalendar({
		height: "auto",
		lang: "de",
		eventClick: function(calEvent, jsEvent, view) {
			if(calEvent.bnoteType) {
				window.location.href = "main.php" + calEvent.link;
			}
		}
    });
	
	$(".copyDateOrigin").on('change', function(event) {
		// get all origin values and build target values
		var h = "";
		var m = "";
		var dt = "";
		$(".copyDateOrigin").each(function(i, obj) {
			if($(obj).hasClass("hour")) {
				h = $(obj).val();
			}
			else if($(obj).hasClass("minute")) {
				m = $(obj).val();
			}
			else {
				dt = $(obj).val();
			}
		});
		var val = "";
		if(h == "" || m == "") {
			val = dt;
		}
		else if(dt == "") {
			val = h + ":" + m;
		}
		else {
			val = dt + " " + h + ":" + m;
		}
		$('.copyDateTarget').val(val);
	});
	
	$("#fb-fileupload").dropzone({
		url: $('#fb-fileupload-form').attr('action')
	});
});