import Inputmask from "inputmask";


$(function () {
	let input = $("[data-maskType='data']");
	input.attr('placeholder', 'ДД.ММ.ГГГГ');
	Inputmask("99.99.9999").mask(input.get(0));
});