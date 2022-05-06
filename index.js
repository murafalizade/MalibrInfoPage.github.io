function sendEmail(name,mail,body) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "muradexample7@gmail.com",
	Password : "Murad1979.",
	To : 'office@malibr.com',
	From : "muradexample7@gmail.com",
	Subject : "Malibr Information",
	Body : `Mail:${mail} \n Name:${name} \n Message:${body}`,
	}).then(
		message => alert("mail sent successfully")
	);
}
$('#joins').click(function(e){
	console.log("asas");
	e.preventDefault();
	sendEmail($('#cnt_name').val(),$('#cnt_mail').val(),$('#cnt_body').body);
})