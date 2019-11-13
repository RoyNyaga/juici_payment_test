

$(function (){
	$("#send").on("click", function() {

		$.ajax({
			type: "POST",
			url: "https://api.monetbil.com/payment/v1/placePayment",
			data: {	
			 "service": "u7mFjGzx5Gn8UVMHYFgJgJP4oxNRMcXR",
			 "phonenumber": "671172775",
			 "amount": "300",
			 "notify_url": "https://your.server.com/monetbil/notifications"
			 
				},
			dataType: "json",
			cache: false,
			error: function(e) {
				alert("errors")
			}
		});
	});
});
