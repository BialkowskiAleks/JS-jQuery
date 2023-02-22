$(function () {
	$("#przycisk1").click(function () {
		$("p:last").insertBefore("p:first");
	});
	$("#przycisk2").click(function () {
		$("p:first").insertAfter("p:last");
	});
});
