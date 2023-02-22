$(document).ready(function () {
	$("#przycisk").click(function () {
		$("#kwadrat").animate(
			{
				left: "+=100px",
				width: "100px",
				height: "100px",
			},
			3000,
			function () {
				$(this)
					.css("background-color", "blue")
					.animate(
						{
							color: "white",
						},
						5000,
						function () {
							$(this).append("<h2>Animacja zakończona</h2>");
						}
					);
			}
		);
	});
});
