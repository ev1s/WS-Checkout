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

let companyId = document.querySelector("#company_id");
let businessDetails = document.querySelector(".business__details");
companyId.addEventListener("keyup", function (e) {
	if(companyId.value.length > 0) {
		businessDetails.classList.add("business__details_open")
	} else {
		businessDetails.classList.remove("business__details_open")
	}
});

let businessPaymentsType = Array.from(document.getElementsByClassName("business-type__option"));
businessPaymentsType.forEach(function (el) {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		businessPaymentsType.forEach(function (e) {
			e.classList.remove("business-type__option_selected");
		});
		this.classList.toggle("business-type__option_selected");
	});
});

let deliverySelectors = Array.from(document.getElementsByClassName("delivery-selector__change"));
let deliveryPopup = document.querySelector(".delivery-popup");
deliverySelectors.forEach(function (el) {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		deliveryPopup.classList.add("popup_open")
	});
});

let deliveryPopupTabsButtons = Array.from(document.getElementsByClassName("delivery-popup__tabs-item"));
let deliveryPopupTabs = Array.from(document.getElementsByClassName("delivery-popup__tab"));
deliveryPopupTabsButtons.forEach(function (el) {
	let target = el.dataset.deliveryPopupTarget;

	el.addEventListener("click", function (e) {
		e.preventDefault();
		deliveryPopupTabsButtons.forEach(function (e) {
			if(e.dataset.deliveryPopupTarget == target) {
				e.classList.add("delivery-popup__tabs-item_selected");
			} else {
				e.classList.remove("delivery-popup__tabs-item_selected");
			}
		});

		deliveryPopupTabs.forEach(function (e) {
			if(e.classList.contains(target)){
				e.classList.add("delivery-popup__tab_open")
			} else {
				e.classList.remove("delivery-popup__tab_open")
			}
		});
	});
});

function selectDeliveryMethod(target) {
	console.log(target);

	Array.from(document.getElementsByClassName("popup")).forEach(function (el) {
		el.classList.remove("popup_open");
	});

	Array.from(document.getElementsByClassName("delivery-selector")).forEach(function (el) {
		if(el.classList.contains(target)){
			el.classList.add("delivery-selector_selected");
		} else {
			el.classList.remove("delivery-selector_selected");
		}
	});
}

let selectorCourier = document.querySelector(".select_courier");
let selectorPickup = document.querySelector(".select_pickup");

selectorPickup.addEventListener("click", function (e) {
	e.preventDefault();
	selectDeliveryMethod("delivery-selector_pickup");
});
selectorCourier.addEventListener("click", function (e) {
	e.preventDefault();
	selectDeliveryMethod("delivery-selector_courier");
});

let initialSelectors = document.querySelector(".delivery-selector__initial-body");
let initialSelectorOffice = document.querySelector(".delivery-selector_initial-office");
let initialSelectorPickup = document.querySelector(".delivery-selector_initial-pickup");
let initialSelectorCourier = document.querySelector(".delivery-selector_initial-courier");

initialSelectorOffice.addEventListener("click", function (e) {
	e.preventDefault();
	initialSelectors.classList.add("delivery-selector__initial-body_hidden");
	Array.from(document.getElementsByClassName("delivery-selector")).forEach(function (el) {
		if(el.classList.contains("delivery-selector_office")){
			el.classList.add("delivery-selector_selected");
		} else {
			el.classList.remove("delivery-selector_selected");
		}
	});
});
initialSelectorPickup.addEventListener("click", function (e) {
	e.preventDefault();
	initialSelectors.classList.add("delivery-selector__initial-body_hidden");
	selectDeliveryMethod("delivery-selector_pickup");
});
initialSelectorCourier.addEventListener("click", function (e) {
	e.preventDefault();
	initialSelectors.classList.add("delivery-selector__initial-body_hidden");
	selectDeliveryMethod("delivery-selector_courier");
});








// Можно удалить
let popupCloseButtons = Array.from(document.getElementsByClassName("popup__close"));
let popups = Array.from(document.getElementsByClassName("popup"));
popupCloseButtons.forEach(function (el) {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		popups.forEach(function (e) {
			e.classList.remove("popup_open");
		});
	});
});