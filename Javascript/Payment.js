
function paypal() {	
		alert("Execute Paypal()...");
		var aprvlWin = window.open("http://localhost:3000/check_out?username=", "approvalWin", width="180", height="150");
}