function process() {
		var price = [299.00, 299.00, 299.00, 299.00];
		var qty = 0;
		var itemtot = 0;
		var totsold = 0;
		var i;
		for (i = 0; i <= 3; i++)  {
			qty = parseInt(document.querySelector("#qty" + i).value);
			if (isNaN(qty)) {
				;
			} else {
				itemtot = qty * price[i];
				document.querySelector("#itemtot" + i).value = itemtot.toFixed(2);
				totsold += itemtot;
			}
		}
		document.querySelector("#totsold").value = totsold.toFixed(2);
	}
	
function Paypal() {	
		alert("Execute Paypal()...");
		var aprvlWin = window.open("com3105_approval.html", "approvalWin", width="180", height="150");
}