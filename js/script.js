let mobCheckboxes = Array.from(document.getElementsByClassName("checkbox-mob"));
mobCheckboxes.forEach(function (el) {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		this.classList.toggle("checkbox-mob_checked");
	});
});

let paymentsFilters = Array.from(document.getElementsByClassName("payments-filter__option"));
let paymentsTabs = Array.from(document.getElementsByClassName("payments-filter__tab"));
paymentsFilters.forEach(function (el) {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		let targetTab = this.dataset.payments;
		paymentsFilters.forEach(function (e) {
			e.classList.remove("payments-filter__option_selected");
		});
		paymentsTabs.forEach(function (e) {
			let tab = e.dataset.paymentsTab;
			if(tab == targetTab) {
				e.classList.add("payments-filter__tab_open");
			} else {
				e.classList.remove("payments-filter__tab_open");
			}
		});
		this.classList.add("payments-filter__option_selected");
	});
});

let notificationOptions = Array.from(document.getElementsByClassName("notifications-radio__option"));
notificationOptions.forEach(function (el) {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		notificationOptions.forEach(function (e) {
			e.classList.remove("notifications-radio__option_selected");
		});
		this.classList.toggle("notifications-radio__option_selected");
	});
});

