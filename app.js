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

var totalPaidOut = 0;

for(i=0;i<initialList.length;i++){
  console.log((percentCovered(initialList[i]) * 100) + '%');
	console.log(amtCovered(initialList[i]));
	totalPaidOut += amtToPay;
}
console.log('Total paid out: $' + (totalPaidOut).toLocaleString());

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
	console.log('Paid out $' + Math.round(amtToPay).toLocaleString() + ' for ' + claim["patientName"]);
	return '$' + (amtToPay).toLocaleString();
}
