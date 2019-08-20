import 'jquery.maskedinput/src/jquery.maskedinput';


$(function () {
	$("[data-maskType='data']").mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });
	alert('nya');
});