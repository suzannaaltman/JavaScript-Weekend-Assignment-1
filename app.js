$(document).ready(function(){
	var claim1 = {
		patientName: "John Doe",
		visitType: "Specialist",
		visitCost: 1100
	}

	var claim2 = {
		patientName: "Jane Doe",
		visitType: "Optical",
		visitCost: 100
	}

	var claim3 = {
		patientName: "Joe Johnson",
		visitType: "Emergency",
		visitCost: 31000
	}

	var claim4 = {
		patientName: "Sharon Smith",
		visitType: "Emergency",
		visitCost: 1300
	}

	var claim5 = {
		patientName: "Steve Wright",
		visitType: "Primary Care",
		visitCost: 770
	}

	var initialList = [claim1, claim2, claim3, claim4, claim5]
	//push and create new claims
	var claim6 = initialList.push(new claim("Eli Altman", "Emergency", 3600));
	var claim7 = initialList.push(new claim("Lacey Altman", "Primary Care", 350));
	var claim8 = initialList.push(new claim("Bella Pfeifer", "Optical", 100));
	var claim9 = initialList.push(new claim("Rhonda Schlesinger", "Specialist", 1400));
	var claim10 = initialList.push(new claim("Ezra Schlesinger", "Specialist", 900));

	var totalPaidOut = 0;
	//loop through functions to determine percent, amt to pay, and total payout
	for(i=0;i<initialList.length;i++){
	  ((percentCovered(initialList[i]) * 100) + '%');
		(amtCovered(initialList[i]));
		totalPaidOut += amtToPay;
	}


	$( ".inner2" ).append(("Total paid out: $" + (totalPaidOut).toLocaleString()) + '.');

	console.log(initialList);

	function claim(name, type, cost){
		this.patientName = name;
		this.visitType = type;
		this.visitCost = cost;
	}

	//function to determine percent covered
	function percentCovered(claim){
		var percent = 0.0;
		switch (claim.visitType) {
			case 'Optical':
				percent = 0.0;
				break;
			case 'Specialist':
				percent = 0.1;
				break;
			case 'Emergency':
				percent = 1;
				break;
			case 'Primary Care':
				percent = .5;
				break;
			default:
				percent = 'Percent Not Found';
				break;
		}
		return percent;
	}

	// function to determine amount covered
	var amtToPay = 0;
	function amtCovered(claim){
		amtToPay = claim["visitCost"] * percentCovered(claim);
		$(".inner").append('Paid out $' + Math.round(amtToPay).toLocaleString() + ' for ' + claim["patientName"] + '.<br>');
		return '$' + (amtToPay).toLocaleString();

	}
});
