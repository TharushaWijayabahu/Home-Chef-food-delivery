$(document).ready(function() {
    let message = localStorage.getItem("message");



    message == null || message == undefined ? message = '':
        console.log('review is : ', message)
    $('#message').text(message);
})
$(document).ready(function() {
    let customerName = localStorage.getItem("customerName");




    customerName == null || customerName == undefined ? customerName = '':
        console.log('review is : ', customerName)
    $('#customerName').text(customerName);
})