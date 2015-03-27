// Copyright [2015] [Banana.ch SA - Lugano Switzerland]
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// @id = ch.banana.script.vatAustria
// @version = 1.0
// @publisher = Banana.ch SA
// @description = Vat Austria 
// @task = app.command
// @outputformat = none
// @inputdatasource = none
// @timeout = -1


/*******************************************************************************************************************************************************************************/
/************************************************************ START part to be filled in by the user ***************************************************************************/

//This is our parameterized structure.
//We create objects filled with parameters that will serve to extract the necessary informations from Banana.
//The parameters are:
// - id		 	 (string) : this is a unique ID for each object contained in the structure. MANDATORY;
// - type 	     (string) : this is a parameter used to differentiate the TYPE of object. MANDATORY;
//							There are three different types: - title, which is a simple row title in the table
//															 - text, that contains all the fundamental informations used for the main content of the table
//															 - total, a total of more object values;
// - description (string) : this is the text content of the object;
// - code		 (string) : this is the GR1 code contained in Banana;
// - vatTaxable	 (string) : this will contain the amount of the taxable column of a certain VAT code;
// - vatAmount	 (string) : this will contain the amount of VAT of a certain VAT code;
// - sum		 (string) : this is a parameter used to specify in which object to add vatTaxable and vatAmount amount values. It is used to SUM objects amounts to create totals.
//							It is possible to add multiple values separated by ";" (for example "4.4;5.1");
// - sub		 (string) : this is a parameter used to specify in which object to subtract vatTaxable and vatAmount amount values. It is used to SUBTRACT objects amounts to create totals.
//							It is possible to add multiple values separated by ";" (for example "4.4;5.1");
// - column		 (string) : this is a parameter used to specify in which column to show the values ("1"=vatTaxable and "2"=vatAmount, or "1;2" both).
var param = [
	{"id": "4.", "type": "title", "description": "Berechnung der Umsatzsteuer", "code": "", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "", "column": "", "invertValue": "no"},
	{"id": "4.1", "type": "text", "description": "Gesamtbetrag der Bemessungsgrundlage für Lieferungen und sonstige Leistungen (ohne den nachstehend angeführten Eigenverbrauch) einschließlich Anzahlungen (jeweils ohne Umsatzsteuer)", "code": "000", "vatTaxable": "", "vatAmount": "", "sum": "4.4", "sub": "", "column": "2", "invertValue": "no"},	
	{"id": "4.2", "type": "text", "description": "zuzüglich Eigenverbrauch (§ 1 Abs. 1 Z 2, § 3 Abs. 2 und § 3a Abs. 1a)", "code": "001", "vatTaxable": "", "vatAmount": "", "sum": "4.4", "sub": "", "column": "2", "invertValue": "no"},
	{"id": "4.3", "type": "text", "description": "abzüglich Umsätze, für die die Steuerschuld gemäß § 19 Abs. 1 zweiter Satz sowie gemäß § 19 Abs. 1a, 1b, 1c, 1d und 1e auf den Leistungsempfänger übergegangen ist.", "code": "021", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "4.4", "column": "2", "invertValue": "no"},
	{"id": "4.4", "type": "total", "description": "SUMME", "code": "", "vatTaxable": "", "vatAmount": "", "sum": "4.13", "sub": "", "column": "2", "invertValue": "no"},
	{"id": "4.5", "type": "text", "description": "§ 6 Abs. 1 Z 1 iVm § 7 (Ausfuhrlieferungen)", "code": "011", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "4.13", "column": "2", "invertValue": "no"},
	{"id": "4.6", "type": "text", "description": "§ 6 Abs. 1 Z 1 iVm § 8 (Lohnveredelungen)", "code": "012", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "4.13", "column": "2", "invertValue": "no"},
	{"id": "4.7", "type": "text", "description": "§ 6 Abs. 1 Z 2 bis 6 sowie § 23 Abs. 5 (Seeschifffahrt, Luftfahrt, grenzüberschreitende Personenbeförderung, Diplomaten, Reisevorleistungen im Drittlandsgebiet usw.).", "code": "015", "vatTaxable": "", "vatAmount": "", "sum": "", "sub" : "4.13", "column": "2", "invertValue": "no"},
	{"id": "4.8", "type": "text", "description": "Art. 6 Abs. 1 (innergemeinschaftliche Lieferungen ohne die nachstehend gesondert anzuführenden Fahrzeuglieferungen)", "code": "017", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "4.13", "column": "2", "invertValue": "no"},	
	{"id": "4.9", "type": "text", "description": "Art. 6 Abs. 1, sofern Lieferungen neuer Fahrzeuge an Abnehmer ohne UID-Nummer bzw. durch Fahrzeuglieferer gemäß Art. 2 erfolgten.", "code": "018", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "", "column": "2", "invertValue": "no"},
	{"id": "4.10", "type": "text", "description": "§ 6 Abs. 1 Z 9 lit. a (Grundstücksumsätze)", "code": "019", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "4.13", "column": "2", "invertValue": "no"},
	{"id": "4.11", "type": "text", "description": "§ 6 Abs. 1 Z 27 (Kleinunternehmer)", "code": "016", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "4.13", "column": "2", "invertValue": "no"},		
	{"id": "4.12", "type": "text", "description": "§ 6 Abs. 1 Z (übrige steuerfreie Umsätze ohne Vorsteuerabzug)", "code": "020", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "4.13", "column": "2", "invertValue": "no"},
	{"id": "4.13", "type": "total", "description": "Gesamtbetrag der steuerpflichtigen Lieferungen, sonstigen Leistungen und Eigenverbrauch (einschließlich steuerpflichtiger Anzahlungen)", "code": "", "vatTaxable": "", "vatAmount": "", "sum": "","sub": "", "column": "2", "invertValue": "no"},
	{"id": "4.14", "type": "text", "description": "20% Normalsteuersatz", "code": "022", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "1;2", "invertValue": "no"},
	{"id": "4.15", "type": "text", "description": "10% ermäßigter Steuersatz", "code": "029", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "1;2", "invertValue": "no"},
	{"id": "4.16", "type": "text", "description": "12% für Weinumsätze durch landwirtschaftliche Betriebe", "code": "025", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "1;2", "invertValue": "no"},		
	{"id": "4.17", "type": "text", "description": "19% für Jungholz und Mittelberg", "code": "037", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "1;2", "invertValue": "no"},		
	{"id": "4.18", "type": "text", "description": "10% Zusatzsteuer für pauschalierte land- und forstwirtschaftliche Betriebe", "code": "052", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "1;2", "invertValue": "no"},
	{"id": "4.19", "type": "text", "description": "8% Zusatzsteuer für pauschalierte land- und forstwirtschaftliche Betriebe", "code": "038", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "1;2", "invertValue": "no"},		
	{"id": "4.20", "type": "text", "description": "Steuerschuld gemäß § 11 Abs. 12 und 14, § 16 Abs. 2 sowie gemäß Art. 7 Abs. 4", "code": "056", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "2", "invertValue": "no"},
	{"id": "4.21", "type": "text", "description": "Steuerschuld gemäß § 19 Abs. 1 zweiter Satz, § 19 Abs. 1c, 1e sowie gemäß Art. 25 Abs. 5", "code": "057", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "2", "invertValue": "no"},		
	{"id": "4.22", "type": "text", "description": "Steuerschuld gemäß § 19 Abs. 1a (Bauleistungen)", "code": "048", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "2", "invertValue": "no"},			
	{"id": "4.23", "type": "text", "description": "Steuerschuld gemäß § 19 Abs. 1b (Sicherungseigentum, Vorbehaltseigentum und Grundstücke im Zwangsversteigerungsverfahren)","code": "044", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub" :"", "column": "2", "invertValue": "no"},			
	{"id": "4.24", "type": "text", "description": "Steuerschuld gemäß § 19 Abs. 1d (Schrott und Abfallstoffe)", "code": "032", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "2", "invertValue": "no"},			
	{"id": "4.25", "type": "text", "description": "Gesamtbetrag der Bemessungsgrundlagen für innergemeinschaftliche Erwerbe", "code": "070", "vatTaxable": "", "vatAmount": "", "sum": "4.27", "sub": "", "column": "1", "invertValue": "no"},
	{"id": "4.26", "type": "text", "description": "Davon steuerfrei gemäß Art. 6 Abs. 2", "code": "071", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "4.27", "column": "1", "invertValue": "no"},
	{"id": "4.27", "type": "total", "description": "Gesamtbetrag der steuerpflichtigen innergemeinschaftlichen Erwerbe", "code": "", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "", "column": "1", "invertValue": "no"},		
	{"id": "4.28", "type": "text", "description": "20% Normalsteuersatz", "code": "072", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "1;2", "invertValue": "no"},
	{"id": "4.29", "type": "text", "description": "10% ermäßigter Steuersatz", "code": "073", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "1;2", "invertValue": "no"},		
	{"id": "4.30", "type": "text", "description": "19% für Jungholz und Mittelberg", "code": "088", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "1;2", "invertValue": "no"},		
	{"id": "4.31", "type": "text", "description": "Erwerbe gemäß Art. 3 Abs. 8 zweiter Satz, die im Mitgliedstaat des Bestimmungslandes besteuert worden sind", "code": "076", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "" ,"column": "1", "invertValue": "no"},			
	{"id": "4.32", "type": "text", "description": "Erwerbe gemäß Art. 3 Abs. 8 zweiter Satz, die gemäß Art. 25 Abs. 2 im Inland als besteuert gelten", "code": "077", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "", "column": "1", "invertValue": "no"},			
	{"id": "5.", "type": "title", "description": "Berechnung der abziehbaren Vorsteuer", "code": "", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "", "column": "", "invertValue": "no"},	
	{"id": "5.1", "type": "text", "description": "Gesamtbetrag der Vorsteuern (ohne die nachstehend gesondert anzuführenden Beträge)", "code": "060", "vatTaxable": "", "vatAmount": "", "sum": "5.13", "sub": "", "column": "2", "invertValue": "no"},
	{"id": "5.2", "type": "text", "description": "Vorsteuern betreffend die entrichtete Einfuhrumsatzsteuer (§ 12 Abs. 1 Z 2 lit. a)", "code": "061", "vatTaxable": "", "vatAmount": "", "sum": "5.13", "sub": "", "column": "2", "invertValue": "no"},
	{"id": "5.3", "type": "text", "description": "Vorsteuern betreffend die geschuldete, auf dem Abgabenkonto verbuchte Einfuhrumsatzsteuer (§ 12 Abs. 1 Z 2 lit. b)", "code": "083", "vatTaxable": "", "vatAmount": "", "sum": "5.13", "sub": "", "column": "2", "invertValue": "no"},	
	{"id": "5.4", "type": "text", "description": "Vorsteuern aus dem innergemeinschaftlichen Erwerb", "code": "065", "vatTaxable": "", "vatAmount": "", "sum": "5.13", "sub": "", "column": "2", "invertValue": "no"},
	{"id": "5.5", "type": "text", "description": "Vorsteuern betreffend die Steuerschuld gemäß § 19 Abs. 1 zweiter Satz, § 19 Abs. 1c, 1e sowie gemäß Art. 25 Abs. 5", "code": "066", "vatTaxable": "", "vatAmount": "" ,"sum": "5.13", "sub": "", "column" : "2", "invertValue": "no"},		
	{"id": "5.6", "type": "text", "description": "Vorsteuern betreffend die Steuerschuld gemäß § 19 Abs. 1a (Bauleistungen)", "code": "082", "vatTaxable": "", "vatAmount": "", "sum": "5.13", "sub": "", "column": "2", "invertValue": "no"},		
	{"id": "5.7", "type": "text", "description": "Vorsteuern betreffend die Steuerschuld gemäß § 19 Abs. 1b (Sicherungseigentum, Vorbehaltseigentum und Grundstücke im Zwangsversteigerungsverfahren)", "code": "087", "vatTaxable": "", "vatAmount": "", "sum": "5.13" ,"sub": "", "column": "2", "invertValue": "no"},			
	{"id": "5.8", "type": "text", "description": "Vorsteuern betreffend die Steuerschuld gemäß § 19 Abs. 1d (Schrott und Abfallstoffe)", "code": "089", "vatTaxable": "", "vatAmount": "", "sum": "5.13", "sub": "", "column": "2", "invertValue": "no"},			
	{"id": "5.9", "type": "text", "description": "Vorsteuern für innergemeinschaftliche Lieferungen neuer Fahrzeuge von Fahrzeuglieferern gemäß Art. 2", "code": "064", "vatTaxable": "", "vatAmount": "", "sum": "5.13", "sub": "", "column": "2", "invertValue": "no"},			
	{"id": "5.10", "type": "text", "description": "Davon nicht abzugsfähig gemäß § 12 Abs. 3 iVm Abs. 4 und 5", "code": "062", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "5.13", "column": "2", "invertValue": "no"},			
	{"id": "5.11", "type": "text", "description": "Berichtigung gemäß § 12 Abs. 10 und 11", "code": "063", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "5.13", "column": "2", "invertValue": "no"},
	{"id": "5.12", "type": "text", "description": "Berichtigung gemäß § 16", "code": "067", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "5.13", "column": "2", "invertValue": "no"},	
	{"id": "5.13", "type": "total", "description": "Gesamtbetrag der abziehbaren Vorsteuer", "code": "", "vatTaxable": "", "vatAmount": "", "sum": "7.1", "sub": "", "column": "2", "invertValue": "no"},
	{"id": "6.", "type": "title", "description": "Sonstige Berichtigungen", "code": "", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "", "column": "", "invertValue": "no"},			
	{"id": "6.1", "type": "text", "description": "", "code": "090", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "", "column": "2", "invertValue": "no"},		
	{"id": "7.1", "type": "total", "description": "Vorauszahlung (Zahllast)", "code": "095", "vatTaxable": "", "vatAmount": "", "sum": "", "sub": "", "column": "2", "invertValue": "no"}
];



//This variable allows the user to choose if print all the VAT codes or not.
//Possible values are: - "true"  => print VAT codes;
//					   - "false" => don't print VAT codes.
var printVatCodes = true;



//This variable allows the user to insert a title and a subtitle for the report.
//If not needed, keep blank inside the "" (example: var title = "";   or    var title;)
var title = "This is the report title";
var subTitle = "and this is a subtitle";



//The purpose of this function is to verify if the balance from Banana euquals the report total.
//It's very important that the user enter the correct total ID value, in order to get the right value to compare.
function balanceVerification(openingDate, closureDate, param, report){
	
	/* Insert the ID below between "" (example: getObject(param, "INSERT_ID_HERE").vatAmount; ) */
	/********************************************************************************************/
	var totalFromReport = getObject(param, "7.1").vatAmount;
	/********************************************************************************************/


	//First, we get the VAT balance table from Banana.
	var vatReportTable = Banana.document.vatReport(openingDate, closureDate);
	
	//Read table rows values.
	for(var i=0; i<vatReportTable.rowCount; i++){
		var tRow = vatReportTable.row(i);
		
		var group = tRow.value("Group");
		var vatBalance = tRow.value("VatBalance");
		
		//Since we know that the balance is calculated in group "_tot_", we check if that value equals the total from report.
		if(group == "_tot_"){

			//Here we check if the vatBalance value (taken from Banana) is null or undefined.
			//This because if the balance in Banana equals 0 (zero), by default in the program the value is not set to 0.
			//In fact, this value is set as "null" or "undefined".
			//In this case, in order to compare correctly the two values, we have to set manually the value to 0.
			if(vatBalance == "" || vatBalance == "undefined"){
				vatBalance = 0;
			}

			//Now we can compare the two values and return a message if they are different.
			if(totalFromReport != vatBalance){
				report.addParagraph(" ");
				report.addParagraph(" ");
				report.addParagraph("Warning! Different values: " + 
				"Total from Banana <" + Banana.Converter.toLocaleNumberFormat(vatBalance) + 
				">, Total from report <" + Banana.Converter.toLocaleNumberFormat(totalFromReport) + ">", "warningMsg");
			
				//total from banana <>  (vatBalance)
				//total from report <0> (vatAmount)
			}
		}
	}
}

//balanceVerification(openingDate, closureDate, param, "7.1", report);

/************************************************************ END part to be filled in by the user ***************************************************************************/
/*******************************************************************************************************************************************************************************/

	
	

function exec(string) {
    
    //Version
	var pubdate = "2015-03-24";

	//Check if we are on an opened document.
	if(!Banana.document){
		return;
	}
	//var transactions = Banana.document.table("Transactions");
	//var accounts = Banana.document.table("Accounts");
	//var exchangeRates = Banana.document.table("ExchangeRates");
	var vatCodes = Banana.document.table("VatCodes");
		
	//Create a new report.
	var report = Banana.Report.newReport("VAT Report");
	
	//Add the title/subtitle to the report (if the user has inserted one).
	if(title){
		report.addParagraph(title, "title");
		if(subTitle){
			report.addParagraph(subTitle, "subtitle");
			report.addParagraph(" ");
		}
		else{
			report.addParagraph(" ");
		}
	}

	//Function call getPeriodSettings() to manage user settings about period time.
	var dateParam = getPeriodSettings();	

	//Check if user has entered period date.
	//If yes, we can get all the informations we need, calculate everything we want and finally create the report.
	//If no, the script execution will be stopped immediately.
	if(dateParam){
		
		//We save "openingDate" and "closureDate" that will be used to specify the accounting period.
		var openingDate = dateParam["selectionStartDate"];
		var closureDate = dateParam["selectionEndDate"];

		//Adding Header to the report.
		var pageHeader = report.getHeader();
		pageHeader.addClass("header");
		pageHeader.addText("Period: from " + Banana.Converter.toLocaleDateFormat(openingDate) + " to " + Banana.Converter.toLocaleDateFormat(closureDate), "header");

		//Adding Footer to the report.
		var pageFooter = report.getFooter();
		pageFooter.addClass("footer");
		pageFooter.addText("Banana Accounting, v. " + Banana.document.info("Base", "ProgramVersion") + ", script v. " + pubdate, "footer");
			
		//Main function call printTable() to get all data and print them in the table.
		printTable(vatCodes, param, openingDate, closureDate, report);
		
		//Print the report.
		var stylesheet = styleSheet();
		Banana.Report.preview(report, stylesheet);
	}
}





//------------------------------------------------------------------------------//
// FUNCTIONS
//------------------------------------------------------------------------------//

//The main purpose of this function is to allow the user to enter the accounting period desired and saving it for the next time the script is run.
//Every time the user runs of the script he has the possibility to change the date of the accounting period.
function getPeriodSettings(){
	
	//The parameters of the period that we need.
	var scriptParam = {
	   "selectionStartDate": "",
	   "selectionEndDate": "",
	   "selectionChecked": "false"
	};

	//Read script settings.
	var data = Banana.document.scriptReadSettings();
	
	//Check if there are previously saved settings and read them.
	if(data.length > 0){
		try{
			var readSettings = JSON.parse(data);
			
			//We check if "readSettings" is not null, then we fill the parameters with the values just read.
			if (readSettings){
				scriptParam = readSettings;
			}
		}
		catch(e){}
	}
	
	//We take the accounting "starting date" and "ending date" from the document. These will be used as default dates.
	var docStartDate = Banana.document.startPeriod();
	var docEndDate = Banana.document.endPeriod();	
	
	//A dialog window is opened asking the user to insert the desired period. By default is the accounting period.
	var selectedDates = Banana.Ui.getPeriod("Period", docStartDate, docEndDate, 
		scriptParam.selectionStartDate, scriptParam.selectionEndDate, scriptParam.selectionChecked);
		
	//We take the values entered by the user and save them as "new default" values.
	//This because the next time the script will be executed, the dialog window will contains the new values.
	if(selectedDates){
		scriptParam["selectionStartDate"] = selectedDates.startDate;
		scriptParam["selectionEndDate"] = selectedDates.endDate;
		scriptParam["selectionChecked"] = selectedDates.hasSelection;

		//Save script settings.
		var paramToString = JSON.stringify(scriptParam);
		var value = Banana.document.scriptSaveSettings(paramToString);		
    }else{
		//User clicked cancel.
		return;
	}
	return scriptParam;
}





//The main purpose of this function is to get all VAT codes of the same group and create a string with them, using the character "|" as separator.
function getVatCodes(vatCodesTable, codeStr){

	var str = [];

	//Loop to take the values of each rows of the table.
	for(var i=0; i<vatCodesTable.rowCount; i++){
		var tRow = vatCodesTable.row(i);
		var gr1 = tRow.value("Gr1");
		var vatCode = tRow.value("VatCode");

		//Check if there are Gr1 and VatCode values
		if(gr1 && vatCode){

			//If Gr1 column contains other characters (in this case ";") we know there are more values.
			//We have to split them and take all values separately.
			//If there are only alphanumeric characters in Gr1 column we know there is only one value and we take it.
			var vatCodeString = gr1;
			var arrVatCodeString = vatCodeString.split(";");
			for(var j=0; j<arrVatCodeString.length; j++){
				var vatCodeString1 = arrVatCodeString[j];
			
				if(vatCodeString1 == codeStr){
					str.push(vatCode);
				}
			}
		}
	}
	//We return the array adding a separator between elements.
	return str.join("|");
}





//The main purpose of this function is to return a specific object.
function getObject(param, id){
	for(var i=0; i<param.length; i++){
		if(param[i]["id"] == id){
			return param[i];
		}
	}
	throw "Couldn't find object with id: " + id;
}





//The main purpose of this function is to invert the sign of negative values.
function invertSign(value){
	//Check if the value is negative then convert to positive
	if(value < 0){
		value *= -1;
	}
	return value;
}





//The main purpose of this function is to get all the informations from the parameterized structure, process them and print the result in the table.
function printTable(vatCodes, param, openingDate, closureDate, report){
		
		//Create a table for print.
		var vatTable = report.addTable("vatTable");
		
		//Add header of the columns table.
		var vatTableHeader = vatTable.getHeader();
		tableRow = vatTableHeader.addRow();

		//Add titles to the columns table.
		tableRow.addCell("Id", "tableHeader");
		tableRow.addCell("Description", "tableHeader");
		tableRow.addCell("Gr1", "tableHeader");
		tableRow.addCell("VatTaxable", "tableHeader");
		tableRow.addCell("VatAmount", "tableHeader");
		
		//Add values to table rows.
		for(i in param){

			//Check if the object is a "title-type", then is simply printed.
			if(param[i]["type"] == "title"){
				tableRow = vatTable.addRow();
				tableRow.addCell(getObject(param, param[i]["id"]).id, "tableTitles");
				tableRow.addCell(getObject(param, param[i]["id"]).description, "tableTitles", 4);
			}
			
			//Check if the object is a "text-type", then is calculated and printed.
			else if(param[i]["type"] == "text"){
				tableRow = vatTable.addRow();
				//We add the id values.
				tableRow.addCell(getObject(param, param[i]["id"]).id);

				//If "true" user wants to add the vatCodes.
				if(printVatCodes){
					//We have to add the vat codes list at the end of the description (on a new line).
					//To do that we add paragraphs inside the cell. 
					var descriptionCell = tableRow.addCell();
					descriptionCell.addParagraph(getObject(param, param[i]["id"]).description);
					descriptionCell.addParagraph(getVatCodes(vatCodes, getObject(param, param[i]["id"]).code), "tableVatCodes");
				}
				//If "false" user doesn't wants to print the vat codes, so we print only the description without the codes at the end.
				else{
					tableRow.addCell(getObject(param, param[i]["id"]).description);
				}
				//We add the Gr1 codes.
				tableRow.addCell(getObject(param, param[i]["id"]).code);
				
				//What we want to do now is sum the amount of taxable column (vatTaxable) and vat amounts (vatAmount) for the vat code belonging to the same group.
				//First we get the "vatTaxable" and "vatAmount" values, and then we can save them into the respective objects parameters.
				param[i]["vatTaxable"] = Banana.document.vatCurrentBalance(getVatCodes(vatCodes, getObject(param, param[i]["id"]).code),openingDate,closureDate).vatTaxable;
				param[i]["vatAmount"] = Banana.document.vatCurrentBalance(getVatCodes(vatCodes, getObject(param, param[i]["id"]).code),openingDate,closureDate).vatAmount;
				
				//Once we have these values, we check the column parameter to choose in which table's columns to show them (vatTaxable=column "1", vatAmount=column "2").
				//We check also if the user wants to invert the sign of the values: if positive return a negative value, if negative return a positive value.
				//And then we finally add the vatTaxable/vatAmount values to the table.
				if(param[i]["column"] == "1"){
					if(param[i]["invertValue"] == "yes"){
							tableRow.addCell(Banana.Converter.toLocaleNumberFormat(invertSign(getObject(param, param[i]["id"]).vatTaxable)), "right");
							tableRow.addCell("");
					}
					else{
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(getObject(param, param[i]["id"]).vatTaxable), "right");
						tableRow.addCell("");
					}
				}
				else if(param[i]["column"] == "2"){
					if(param[i]["invertValue"] == "yes"){
						tableRow.addCell("");
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(invertSign(getObject(param, param[i]["id"]).vatAmount)), "right");
					}
					else{
						tableRow.addCell("");
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(getObject(param, param[i]["id"]).vatAmount), "right");
					}
				}
				else{
					if(param[i]["invertValue"] == "yes"){
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(invertSign(getObject(param, param[i]["id"]).vatTaxable)), "right");
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(invertSign(getObject(param, param[i]["id"]).vatAmount)), "right");
					}
					else{
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(getObject(param, param[i]["id"]).vatTaxable), "right");
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(getObject(param, param[i]["id"]).vatAmount), "right");
					}
				}
			}
			
			//Check if the object is a "total-type", then is calculated and printed.
			else if(param[i]["type"] == "total"){
				tableRow = vatTable.addRow();
				tableRow.addCell(getObject(param, param[i]["id"]).id, "tableTotals");
				
				//If the total has a Gr1 code we print it.
				if(param[i]["code"]){
					tableRow.addCell(getObject(param, param[i]["id"]).description, "tableTotals");
					tableRow.addCell(getObject(param, param[i]["id"]).code, "tableTotals");
					
				}
				else{
					tableRow.addCell(getObject(param, param[i]["id"]).description, "tableTotals", 2);			
				}	
				
				//We check the column parameter to choose in which table's columns to show them (vatTaxable=column "1", vatAmount=column "2").
				//We check also if the user wants to invert the sign of the values: if positive return a negative value, if negative return a positive value.
				//And then we finally add the totals values to the table.
				if(param[i]["column"] == "1"){
					if(param[i]["invertValue"] == "yes"){
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(invertSign(getObject(param, param[i]["id"]).vatTaxable)), "right tableTotals");
						tableRow.addCell("", "right tableTotals");
					}
					else{
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(getObject(param, param[i]["id"]).vatTaxable), "right tableTotals");
						tableRow.addCell("", "right tableTotals");
					}
				}
				else if(param[i]["column"] == "2"){
					if(param[i]["invertValue"] == "yes"){
						tableRow.addCell("", "right tableTotals");
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(invertSign(getObject(param, param[i]["id"]).vatAmount)), "right tableTotals");
					}
					else{
						tableRow.addCell("", "right tableTotals");
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(getObject(param, param[i]["id"]).vatAmount), "right tableTotals");
					}
				}
				else{
					if(param[i]["invertValue"] == "yes"){
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(invertSign(getObject(param, param[i]["id"]).vatTaxable)), "right tableTotals");
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(invertSign(getObject(param, param[i]["id"]).vatAmount)), "right tableTotals");
					}
					else{
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(getObject(param, param[i]["id"]).vatTaxable), "right tableTotals");
						tableRow.addCell(Banana.Converter.toLocaleNumberFormat(getObject(param, param[i]["id"]).vatAmount), "right tableTotals");
					}
				}
			}

			//Sum and/or subtract values.
			//For every object we have to specify where (in which object, tipically a total) the "vatTaxable" and "vatAmount" values will be added to and/or subtracted.
			//It is possible to specify more than one object by entering more IDs number separated by the ";" character.
			//So we have to split the IDs list and calculate them separately.
			var sumTo = getObject(param, param[i]["id"]).sum;
			var subTo = getObject(param, param[i]["id"]).sub;
			
			if(sumTo){
				var arrSumTo = sumTo.split(";");
				for(j=0; j<arrSumTo.length; j++){
					getObject(param, arrSumTo[j]).vatTaxable  = Banana.SDecimal.add(getObject(param, arrSumTo[j]).vatTaxable,  getObject(param, param[i]["id"]).vatTaxable);
					getObject(param, arrSumTo[j]).vatAmount  = Banana.SDecimal.add(getObject(param, arrSumTo[j]).vatAmount,  getObject(param, param[i]["id"]).vatAmount);
				}
			}
			if(subTo){
				var arrSubTo = subTo.split(";");
				for(j=0; j<arrSubTo.length; j++){
					getObject(param, arrSubTo[j]).vatTaxable  = Banana.SDecimal.subtract(getObject(param, arrSubTo[j]).vatTaxable, getObject(param, param[i]["id"]).vatTaxable);
					getObject(param, arrSubTo[j]).vatAmount  = Banana.SDecimal.subtract(getObject(param, arrSubTo[j]).vatAmount, getObject(param, param[i]["id"]).vatAmount);
				}
			}
		}
	//Function call to verify the balances values from report and Banana.
	balanceVerification(openingDate, closureDate, param, report);	
}






//The main purpose of this function is to create styles for the report print.
function styleSheet() {
	var docStyles = Banana.Report.newStyleSheet();
	
	//Page margins.
	var pageStyle = docStyles.addStyle("@page");
  	pageStyle.setAttribute("margin", "20m 15mm 15mm 25mm");

  	//Header of the report.
	style = docStyles.addStyle(".header");
	style.setAttribute("font-size", "8pt");
	style.setAttribute("text-align", "right");
	style.setAttribute("font", "Helvetica Neue");

	//Footer of the report.
	style = docStyles.addStyle(".footer");
	style.setAttribute("font-size", "8pt");
	style.setAttribute("text-align", "right");
	style.setAttribute("font", "Times New Roman");
	
	//Title of the report.
	style = docStyles.addStyle(".title");
	style.setAttribute("font-size", "18");
	style.setAttribute("text-align", "left");
	style.setAttribute("font", "Helvetica Neue");
	style.setAttribute("color", "#395870");
	
	//Subtitle of the report.
	style = docStyles.addStyle(".subtitle");
	style.setAttribute("font-size", "15");
	style.setAttribute("text-align", "left");
	style.setAttribute("font", "Helvetica Neue");
	style.setAttribute("color", "#4a4a4d");	
	
	//Text alignment for all the amounts of the table.
	style = docStyles.addStyle(".right");
	style.setAttribute("text-align", "right");
	
	//Header of the table.
	style = docStyles.addStyle(".tableHeader");
	style.setAttribute("font-weight", "bold");
	style.setAttribute("background-color", "#395870");
	style.setAttribute("color", "#fff"); //text
	
  	//Titles of the table.
	style = docStyles.addStyle(".tableTitles");
	style.setAttribute("font-weight", "bold");
	style.setAttribute("color", "#4a4a4d");
	//style.setAttribute("background-color", "#f0f0f2");

	//Totals of the table.
	style = docStyles.addStyle(".tableTotals");
	style.setAttribute("font-weight", "bold");
	style.setAttribute("background-color", "#f0f0f2");
	style.setAttribute("color", "#395870");
	
	//vatCodes of the table.
	style = docStyles.addStyle(".tableVatCodes");
	style.setAttribute("font-size", "8");
	style.setAttribute("font-style", "italic");
	style.setAttribute("color", "#7c7c80");
	
	//Warning message.
	style = docStyles.addStyle(".warningMsg");
	style.setAttribute("font-weight", "bold");
	style.setAttribute("color", "red");
	style.setAttribute("font-size", "10");
	style.setAttribute("font", "Helvetica Neue");
	
	//Attributes of the table.
	var tableStyle1 = docStyles.addStyle(".vatTable");
	tableStyle1.setAttribute("width", "100%");
  	tableStyle1.setAttribute("border-left", "thin solid black");
	tableStyle1.setAttribute("border-top", "thin solid black");
	tableStyle1.setAttribute("border-bottom", "thin solid black");
	tableStyle1.setAttribute("border-right", "thin solid black");
	tableStyle1.setAttribute("border-left-color", "#cecfd5");
	tableStyle1.setAttribute("border-top-color", "#cecfd5");
	tableStyle1.setAttribute("border-bottom-color", "#cecfd5");
	tableStyle1.setAttribute("border-right-color", "#cecfd5");
	tableStyle1.setAttribute("color", "#4a4a4d"); //text
	tableStyle1.setAttribute("font", "Helvetica Neue");	
	tableStyle1.setAttribute("font-size", "11");
  	docStyles.addStyle("table.vatTable td", "border-top: thin solid black; border-left: thin solid black;border-bottom: thin solid black; padding: 3px; border-top-color: #cecfd5; border-left-color: #cecfd5; border-bottom-color: #cecfd5;");	
	
	return docStyles;
}
