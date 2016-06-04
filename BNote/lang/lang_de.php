<?php

require_once 'lang_base.php';

/**
 * German translation of BNote.
 * @author mattimaier
 *
 */
class Translation extends BNoteTranslation {
	
	protected $texts = array(
			"welcome" => "Willkommen",
			"autoActivation" => "Die automatische Registrierung ist aktiviert. Bitte Sicherheitshinweise beachten.",
			"back" => "Zurück",
			"delete" => "löschen",
			"deleted" => "gelöscht",
			"reallyDeleteQ" => "Wollen sie diesen Eintrag wirklich l&ouml;schen?",
			"noUserId" => "Bitte geben Sie eine Benutzer ID an.",
			"selectEntryText" => "Bitte wählen Sie einen Eintrag um diesen anzuzeigen oder zu bearbeiten.",
			"add" => "hinzufügen",
			"saved" => "gespeichert",
			"entrySaved" => "Der Eintrag wurde erfolgreich gespeichert.",
			"details" => "Details",
			"edit" => "bearbeiten",
			"changed" => "geändert",
			"entryChanged" => "Der Eintrag wurde erfolgreich ge&auml;ndert.",
			"entryDeleted" => "Der Eintrag wurde erfolgreich gel&ouml;scht.",
			"yes" => "ja",
			"no" => "nein",
			"showAll" => "Alle anzeigen",
			"begin" => "Beginn",
			"end" => "Ende",
			"location" => "Ort",
			"news" => "Nachrichten",
			"nonIntegratedUsers" => 'Es gibt inaktive oder nicht integrierte Nutzer. Bitte gehe auf Kontakte/Einphasung und kümmere dich darum.',
			"rehearsals" => "Proben",
			"rehearsal" => "Probe",
			"rehearsalphase" => "Probenphase",
			"rehearsalphases" => "Probenphasen",
			"concerts" => "Konzerte",
			"concert" => "Konzert",
			"votes" => "Abstimmungen",
			"vote" => "Abstimmung",
			"tasks" => "Aufgaben",
			"task" => "Aufgabe",
			"discussions" => "Diskussionen",
			"comment" => "Anmerkung",
			"participants" => "Teilnehmer",
			"contact" => "Kontakt",
			"program" => "Programm",
			"title" => "Titel",
			"description" => "Beschreibung",
			"dueAt" => "Fällig am",
			"name" => "Name",
			"vote" => "Abstimmen",
			"discussion" => "Diskussion",
			"surname" => "Nachname",
			"name" => "Name",
			"firstname" => "Vorname",
			"discussion" => "Diskussion",
			"add_entity" => "%p hinzufügen",
			"edit_entity" => "%p bearbeiten",
			"delete_entity" => "%p löschen",
			"saved_entity" => "%p gespeichert",
			"details_entity" => "%p Details",
			"deleted_entity" => "%p gelöscht",
			"user" => "Benutzer",
			"date" => "Datum",
			"mail_footerText" => "Diese E-Mail wurde automatisch von BNote versandt:",
			"error" => "Fehler",
			"street" => "Straße",
			"city" => "Stadt",
			"phone" => "Telefon",
			"mobile" => "Mobil",
			"birthday" => "Geburtstag",
			"print" => "Drucken",
			
			// navigation
			"mod_Login" => "Anmeldung",
			"mod_Start" => "Start",
			"mod_User" => "Benutzer",
			"mod_Kontakte" => "Kontakte",
			"mod_Konzerte" => "Konzerte",
			"mod_Proben" => "Proben",
			"mod_Repertoire" => "Repertoire",
			"mod_Kommunikation" => "Kommunikation",
			"mod_Locations" => "Locations",
			"mod_Kontaktdaten" => "Kontaktdaten",
			"mod_Hilfe" => "Hilfe",
			"mod_Website" => "Website",
			"mod_Share" => "Share",
			"mod_Mitspieler" => "Mitspieler",
			"mod_Abstimmung" => "Abstimmungen",
			"mod_Konfiguration" => "Konfiguration",
			"mod_Aufgaben" => "Aufgaben",
			"mod_Nachrichten" => "Nachrichten",
			"mod_Probenphasen" => "Probephasen",
			"mod_Finance" => "Finanzen",
			"mod_Calendar" => "Kalender",
			"mod_Passwort" => "Passwort vergessen",
			"mod_Warum BNote?" => "Warum BNote?",
			"mod_Registrierung" => "Registrierung",
			"mod_Bedingungen" => "Bedingungen",
			"mod_Impressum" => "Impressum",
			"mod_Equipment" => "Equipment",
			"mod_Tour" => "Tour",
			
			// widgets
			"addFolder" => "Ordner hinzufügen",
			"addFile" => "Datei hinzufügen",
			"favorites" => "Favoriten",
			"myFiles" => "Meine Dateien",
			"commonShare" => "Tauschordner",
			"userFolder" => "Benutzerordner",
			"groupFolder" => "Gruppenorder",
			"selectFolder" => "Bitte w&auml;hle einen Ordner.",
			"folderUp" => "In Überordner wechseln",
			"folderAsZip" => "Ordner als Zip-Archiv herunterladen",
			"filename" => "Dateiname",
			"filesize" => "Dateigröße",
			"fileoptions" => "Optionen",
			"createFolder" => "Ordner erstellen",
			"foldername" => "Ordnername",
			"createFile" => "Datei hinzufügen",
			"file" => "Datei",
			"uploadFile" => "Datei hochladen",
			"noFileAddPermission" => "Du hast keine Berechtigung eine Datei hinzuzuf&uuml;gen.",
			"errorWithFile" => "Es trat ein Fehler beim verarbeiten der Datei auf. Bitte versuche es noch einmal.",
			"errorFileMaxSize" => "Die maximale Dateigr&ouml;&szlig;e wurde &uuml;berschritten.",
			"errorFileAbort" => "Die Datei wurde nur teilweise hochgeladen. Bitte &uuml;berpr&uuml;fe deine Internetverbindung.",
			"errorNoFile" => "Es wurde keine Datei hochgeladen.",
			"errorSavingFile" => "Serverfehler beim Speichern der Datei.",
			"errorUploadingFile" => "Die Datei konnte nicht hochgeladen werden.",
			"errorDeletingFile" => "Du hast keine Berechtigung eine Datei zu l&uml;schen.",
			"errorFileNotFound" => "Die Datei konnte nicht gefunden werden.",
			"noFolderAddPermission" => "Du hast keine Berechtigung einen Order hinzuzuf&uuml;gen.",
			"errorReservedFolderNames" => "Der neue Ordner darf nicht \"users\" oder \"groups\" heißen.",
			"open" => "Öffnen",
			"download" => "Download",
			"archiveCreated" => "Das Archiv wurde erstellt und kann unter folgendem Link heruntergeladen werden.",
			"downloadArchive" => "Archiv herunterladen",
			"noEntries" => "Keine Eintr&auml;ge vorhanden",
			"table_no_entries" => "Es wurden keine Eintr&auml;ge gefunden.",
			"sum" => "Summe",
			"equipment" => "Equipment",
			"tour" => "Tour",
			
			// module: start
			"start_calendarExport" => "Kalender Export",
			"start_calendarSubscribe" => "Kalender abonnieren",
			"start_pleaseGiveReason" => "Bitte gebe einen Grund an.",
			"start_noRehearsalsScheduled" => "Keine Proben angesagt.",
			"start_showNumRehearsals" => "Es werden nur die ersten %p Proben angezeigt.",
			"start_songsToPractise" => "Stücke zum üben",
			"start_iParticipate" => "Ich nehme teil.",
			"start_iMightParticipate" => "Ich nehme vielleicht teil.",
			"start_iDoNotParticipate" => "Ich kann leider nicht.",
			"start_setParticipation" => "Teilnahme angeben",
			"start_participationOver" => "Teilnahmefrist abgelaufen",
			"start_rehearsalParticipate" => "Du nimmst an der Probe teil.",
			"start_rehearsalMaybeParticipate" => "Du nimmst an der Probe vielleicht teil.",
			"start_rehearsalNotParticipate" => "Du nimmst an der Probe nicht teil.",
			"start_noConcertsScheduled" => "Keine Konzerte angesagt.",
			"start_viewProgram" => "Programm ansehen",
			"start_iPlay" => "Ich werde mitspielen.",
			"start_iMayPlay" => "Ich werde vielleicht mitspielen.",
			"start_iDontPlay" => "Ich kann nicht mitspielen.",
			"start_youParticipate" => "Du nimmst am Konzert teil.",
			"start_youMayParticipate" => "Du nimmst am Konzert vielleicht teil.",
			"start_youDontParticipate" => "Du nimmst am Konzert nicht teil.",
			"start_noTasks" => "Keine Aufgaben vorhanden.",
			"start_markAsCompleted" => "Als abgeschlossen markieren",
			"start_noVotes" => "Keine Abstimmungen offen.",
			"start_endOfVote" => "Abstimmungsende",
			"start_newDiscussion" => "Neue Diskussion",
			"start_participation" => "Teilnahme",
			"start_youCannotParticipateVote" => "Sie können an dieser Abstimmung nicht teilnehmen.",
			"start_worksForMeNot" => "Geht nicht",
			"start_worksForMe" => "Geht",
			"start_worksForMeMaybe" => "Vielleicht",
			"start_noOptionsYet" => "Es wurden noch keine Optionen angegeben. Schau später noch einmal nach.",
			"start_selectionSavedTitle" => "Auswahl gespeichert", 
			"start_selectionSavedMsg" => "Deine Auswahl wurde gespeichert.",
			"start_taskCompletedTitle" => "Aufgabe abgeschlossen",
			"start_taskCompletedMsg" => "Die Aufgabe wurde als abgeschlossen markiert.",
			"start_editProgram" => "Programm bearbeiten",
			"start_rank" => "Nr.",
			"start_title" => "Titel",
			"start_composer" => "Komponist/Arrangeuer",
			"start_notes" => "Notizen",
			"start_participantsOfRehearsal" => "Teilnehmer der Probe am %p",
			"start_noNews" => "Keine Neuigkeiten",
			"start_discussionsDeactivated" => "Diskussionen sind in dieser Anwendung deaktiviert.",
			"start_giveDiscussionReason" => "Bitte geben Sie den Dikussionsgegenstand an.",
			"start_noComments" => "Keine Kommentare",
			"start_noCommentsInDiscussion" => "Keine Kommentare in dieser Diskussion.",
			"start_addComment" => "Kommentar hinzufügen",
			"start_sendComment" => "Kommentar senden",
			
			// module: vote
			"vote_yourVotes" => "Deine Abstimmungen",
			"vote_archive" => "Archiv",
			"vote_voters" => "Abstimmungsberechtigte",
			"vote_fields_id" => "Abstimmungsnr.",
			"vote_fields_name" => "Titel",
			"vote_fields_author" => "Ersteller",
			"vote_fields_end" => "Abstimmungsende",
			"vote_fields_is_date" => "Datumsabstimmung",
			"vote_fields_is_multi" => "Mehrere Optionen möglich",
			"vote_fields_is_finished" => "Abstimmung beendet",
			"vote_details_header" => "Abstimmungsdetails",
			"vote_edit" => "Abstimmung bearbeiten",
			"vote_now" => "Jetzt Abstimmen",
			"vote_finish" => "Abstimmung beenden",
			"vote_saved_message" => "Die Abstimmung wurde erfolgreich gespeichert.",
			"vote_add_options" => "Optionen hinzufügen",
			"vote_remove_option_tip" => "Klicke auf eine Option um diese von der Liste zu löschen.",
			"vote_options" => "Optionen",
			"vote_no_options_yet" => "Diese Abstimmung hat noch keine Optionen.",
			"vote_option" => "Option",
			"vote_addSingleOption" => "Eine Option hinzufügen",
			"vote_addMultipleOptions" => "Mehrere Optionen hinzufügen",
			"vote_firstDay" => "Erster Tag",
			"vote_lastDay" => "Letzter Tag",
			"vote_end" => "Abstimmungsende",
			"vote_notification" => "Abstimmungsbenachrichtigung",
			"vote_result" => "Ergebnis",
			"vote_clickToRemoveUser" => "Klicke auf einen Benutzer um diesen von der Liste zu löschen.",
			"vote_noVotersYet" => "Diese Abstimmung hat noch keine Abstimmungsberechtigten.",
			"vote_addVoter" => "Abstimmungsberechtigte hinzufügen",
			"vote_voter" => "Abstimmungsberechtigter",
			"vote_multipleAnswersPossible" => "Mehrere Antworten waren möglich.",
			"vote_singleOnlyPossible" => "Jeder Abstimmungsberechtigte konnte nur eine Stimme abgeben.",
			"vote_votes" => "Stimmen",
			"vote_archive" => "Abstimmungsarchiv",
			
			// module: finance
			"finance_account" => "Konto",
			"finance_account_id" => "Kontonummer",
			"finance_account_name" => "Kontobezeichnung",
			"finance_filter_items" => "Buchungen filtern",
			"finance_date_from" => "Datum von",
			"finance_date_to" => "bis",
			"finance_date_filter" => "Filter",
			"finance_add_booking" => "Buchung hinzufügen",
			"finance_booking_bdate" => "Datum",
			"finance_booking_id" => "Buchungsnummer",
			"finance_booking_subject" => "Betreff",
			"finance_booking_amount_net" => "Netto",
			"finance_booking_amount_tax" => "Steuer",
			"finance_booking_amount_total" => "Brutto",
			"finance_booking_notes" => "Anmerkungen",
			"finance_booking_btype" => "Typ",
			"finance_booking_type_0" => "Einnahme",
			"finance_booking_type_1" => "Ausgabe",
			"finance_bookings_filter" => "Filtern",
			"finance_booking_saved_title" => "Buchung gespeichert.",
			"finance_booking_saved" => "Die Buchung wurde erfolgreiche gespeichert.",
			"finance_metrics_header" => "Ergebnisse",
			"finance_metrics_income" => "Einnahmen",
			"finance_metrics_expenses" => "Ausgaben",
			"finance_metrics_total" => "Saldo",
			"finance_metrics_margin" => "Marge",
			"finance_metrics_sum" => "Summe",
			
			"finance_recpay" => "Laufende Zahlungen",
			"recurringpayment" => "Laufende Zahlung",
			"recpay_account" => "Konto",
			"recpay_otype" => "Referenztyp",
			"recpay_oid" => "Referenz",
			"recpay_accountname" => "Konto",
			"recpay_book" => "Buchen",
			"recpay_book_title" => "Laufende Zahlungen Buchen",
			"recpay_add_form_title" => "Laufende Zahlung hinzufügen",
			"recpay_no_otype" => "[keine Referenz]",
			"recpay_book_success_title" => "Buchung erfolgreich",
			"recpay_book_success_msg" => "Alle Buchungen wurden erfolgreich eingefügt.",
			
			"calendar_rehearsal" => "Probe",
			"calendar_concert" => "Konzert",
			"calendar_end_vote" => "Abst.-Ende:",
			"calendar_birthday" => "Geb.:",
			
			"equipment_model" => "Modell",
			"equipment_make" => "Marke",
			"equipment_purchase_price" => "Einkaufspreis",
			"equipment_current_value" => "Aktueller Wert",
			"equipment_quantity" => "Menge",
			
			"tour_heading" => "Tourplanung",
			"tour_summarysheet" => "Toursheet",
			"accommodation_price" => "Preis (geplant)",
			"accommodation_locationname" => "Unterkunftsname",
			"accommodation_tourname" => "Tour",
			"tour_add_rehearsal" => "Probe hinzufügen",
			"tour_rehearsal_created" => "Probe hinzugefügt",
			"tour_rehearsal_created_msg" => "Die Probe wurde der Tour erfolgreich hinzugefügt.",
			"tour_rehearsal_tab_begin" => "Probenbeginn",
			"tour_rehearsal_tab_notes" => "Probennotizen",
			"tour_rehearsal_tab_location" => "Ort",
			"tour_rehearsal_tab_location_notes" => "Notizen zum Ort",
			"tour_add_contacts" => "Teilnehmer hinzufügen",
			"add_contacts_form_title" => "Teilnehmer für Tour auswählen",
			"tour_add_contacts_success_title" => "Teilnehmer hinzugefügt",
			"tour_add_contacts_success_msg" => "Die Teilnehmer wurden der Tour erfolgreich hinzugefügt.",
			"tour_contact_remove_ref" => "Teilnehmer entfernen",
			"tour_add_concert" => "Konzert hinzufügen",
			"travel" => "Reise",
			"travel_num" => "Reise Nr.",
			"travel_departure_datetime" => "Abreise",
			"travel_departure_location" => "Von",
			"travel_arrival_datetime" => "Ankunft",
			"travel_arrival_location" => "Nach",
			"travel_planned_cost" => "Vorauss. Reisekosten",
			"tour_add_task" => "Aufgabe hinzufügen",
			"tour_task_title" => "Aufgabe",
			"tour_task_assigned_to" => "Verantwortlicher",
			"tour_task_due_at" => "Fälligkeit",
			"tour_task_is_complete" => "Abgeschlossen",
			"tour_todos" => "Ausstehende Aufgaben",
			"tour_completed_tasks" => "Abgeschlossene Aufgaben"
	);
	
	protected $regex = array(
			"positive_amount" => '/^\d{1,12}$/',
			"positive_decimal" => '/^\d{0,8}\,\d{0,2}$/',
   			"signed_amount" => '/^-?\d{1,12}$/',
			"date" => '/^\d{1,2}.\d{1,2}.\d{4}$/',
			"datetime" => '/^\d{1,2}.\d{1,2}.\d{4}\ \d{2}:\d{2}$/'
	);
	
	public function formatDate($day, $month, $year, $hour, $minute) {
		$time = "";
		if($hour != null && $minute != null) {
			$time = " $hour:$minute";
		} 
		return "$day.$month.$year" . $time;
	}
	
	public function formatDateForDb($formattedDate) {
		if(strlen($formattedDate) > 10) {
			// datetime conversion
			$dot1 = strpos($formattedDate, ".");
			$dot2 = strpos($formattedDate, ".", $dot1+1);
				
			$time = substr($formattedDate, $dot2+6, 5);
			$year = substr($formattedDate, $dot2+1, 4);
			$month = substr($formattedDate, $dot1+1, $dot2-$dot1-1);
			$day = substr($formattedDate, 0, $dot1);
			return $year . "-" . $month . "-" . $day . " $time";
		}
		else if(strlen($formattedDate) > 5) {
			// standard conversion
			$dot1 = strpos($formattedDate, ".");
			$dot2 = strpos($formattedDate, ".", $dot1+1);
			$year = substr($formattedDate, $dot2+1);
			$month = substr($formattedDate, $dot1+1, $dot2-$dot1-1);
			$day = substr($formattedDate, 0, $dot1);
			return $year . "-" . $month . "-" . $day;
		}
		else {
			return $formattedDate;
		}
	}
	
	public function getMonths() {
		return array(
				1 => "Januar",
				2 => "Februar",
				3 => "M&auml;rz",
				4 => "April",
				5 => "Mai",
				6 => "Juni",
				7 => "Juli",
				8 => "August",
				9 => "September",
				10 => "Oktober",
				11 => "November",
				12 => "Dezember"
		);
	}
	
	public function convertEnglishWeekday($wd) {
		$res = "";
		switch($wd) {
			case "Mon": $res = "Montag"; break;
			case "Monday": $res = "Montag"; break;
			case "Tue": $res = "Dienstag"; break;
			case "Tuesday": $res = "Dienstag"; break;
			case "Wed": $res = "Mittwoch"; break;
			case "Wednesday": $res = "Mittwoch"; break;
			case "Thu": $res = "Donnerstag"; break;
			case "Thursday": $res = "Donnerstag"; break;
			case "Fri": $res = "Freitag"; break;
			case "Friday": $res = "Freitag"; break;
			case "Sat": $res = "Samstag"; break;
			case "Saturday": $res = "Samstag"; break;
			case "Sun": $res = "Sonntag"; break;
			case "Sunday": $res = "Sonntag"; break;
		}
		return $res;
	}
	
	public function getDateTimeFormatPattern() {
		return "d.m.Y H:i";
	}
	
	public function getDateFormatPattern() {
		return "d.m.Y";
	}
	
	public function getRegex($patternCode) {
		if(!isset($this->regex[$patternCode])) {
			return null;
		}
		return $this->regex[$patternCode];
	}
	
	public function decimalToDb($decimal) {
		return Data::convertToDb($decimal);
	}
	
	public function formatDecimal($dbDecimal) {
		return number_format($dbDecimal, 2, ',', '.');
	}
}

?>