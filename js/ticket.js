
// function buyTicket(e) {
// 	console.log(e);
// 	var ticketNum = e.children[1].innerText;
// 	if (ticketNum > 0) {
// 		e.children[1].innerText --;
// } else {
//       alert("Ticket Sold OUt");
// 	}
// }
// 	var ticketNum = document.getElementById('deadpool').innerText;
// 	if (ticketNum > 0) {
// 		document.getElementById('deadpool').innerText --;
// } else {
// 	alert("Ticket Sold Out");

// }
$('.ticket-btn').click(function() {
	var ticketNum = $($(this).find('span')).html();
	if (ticketNum > 0) {
		$($(this).find('span')).html(ticketNum-1)
	} else {
		$(this).addClass('alert-btn');
		$(this).html('Sold Out');

		}
	//get number of ticket from button span

	//set number of ticket left
});