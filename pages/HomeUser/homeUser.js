/*const vendorList = localStorage.getItem('vendorList');

if(vendorList == null) {
    vendorList = [
        {'Id':'1','imageurl':'../../Assets/img/pizza.jpg','name':'Arthur\'s Pizza','address':'No 10, Temple\'s Road, Rathmalana', 'rating':'4.5'},
        {'Id':'2','imageurl':'../../Assets/img/burger.jpg','name':'Burger Palace','address':'No 4, 3rd Lane, Koswatta', 'rating':'4.2'},
        {'Id':'3','imageurl':'../../Assets/img/drinks.jpg','name':'Udeni\'s Juice Bar','address':'169, High level Rd, Nugegoda', 'rating':'4.8'},
        {'Id':'1','imageurl':'../../Assets/img/pizza.jpg','name':'Arthur\'s Pizza','address':'No 10, Temple\'s Road, Rathmalana', 'rating':'4.5'},
        {'Id':'2','imageurl':'../../Assets/img/burger.jpg','name':'Burger Palace','address':'No 4, 3rd Lane, Koswatta', 'rating':'4.2'}
    ]
}*/

$(document).ready(function(){
    var vendorList = [
        {'id':'1','imageurl':'../../Assets/img/pizza.jpg','name':'Arthur\'s Pizza','address':'No 10, Temple\'s Road, Rathmalana', 'rating':'4.5'},
        {'id':'2','imageurl':'../../Assets/img/burger.jpg','name':'Burger Palace','address':'No 4, 3rd Lane, Koswatta', 'rating':'4.2'},
        {'id':'3','imageurl':'../../Assets/img/drinks.jpg','name':'Udeni\'s Juice Bar','address':'169, High level Rd, Nugegoda', 'rating':'4.8'},
        {'id':'4','imageurl':'../../Assets/img/pizza.jpg','name':'Arthur\'s Pizza','address':'No 10, Temple\'s Road, Rathmalana', 'rating':'4.5'},
        {'id':'5','imageurl':'../../Assets/img/burger.jpg','name':'Burger Palace','address':'No 4, 3rd Lane, Koswatta', 'rating':'4.2'}
    ]
    vendorList.forEach(function(obj) {
        console.log(obj.name);
        document.getElementById("favourites").innerHTML +='<a href="../Vendor/"><div class="card" id="cardItem"> <img src="'+ obj.imageurl+'" class="cardImage"><div class="row" id="customCard"><div class="desc"><p class="name"><b>'+ obj.name+'</b></p><span class="address">'+ obj.address + '</span></div><div class="stars"><span class="fa fa-star checked fa-xs" style="color: #FFCC36;margin-left:19%; font-size: 1rem;"></span><span class="fa checked fa-xs" style="font-size: 1rem;">'+obj.rating+'</span></div></div></div></a>';
        console.log(obj.name);
    })

    var topVendorList = [
        {'id':'1','imageurl':'../../Assets/img/kottu.jpg','name':'Kottu Kottu','address':'No 10, Temple\'s Road, Dompe', 'rating':'4.5'},
        {'id':'2','imageurl':'../../Assets/img/cupcakes.jpg','name':'Cream Cakes','address':'No ,5 4th Lane, Kottawa', 'rating':'4.2'},
        {'id':'3','imageurl':'../../Assets/img/kottu.jpg','name':'Kottu Kottu','address':'No 10, Temple\'s Road, Dompe', 'rating':'4.5'},
        {'id':'4','imageurl':'../../Assets/img/cupcakes.jpg','name':'Cream Cakes','address':'No ,5 4th Lane, Kottawa', 'rating':'4.2'}
    ]
    topVendorList.forEach(function(obj) {
        console.log(obj.name);
        document.getElementById("topOutlets").innerHTML +='<div class="card" id="cardItem"> <img src="'+ obj.imageurl+'" class="cardImage"><div class="row" id="customCard"><div class="desc"><p class="name"><b>'+ obj.name+'</b></p><span class="address">'+ obj.address + '</span></div><div class="stars"><span class="fa fa-star checked fa-xs" style="color: #FFCC36;margin-left:19%; font-size: 1rem;"></span><span class="fa checked fa-xs" style="font-size: 1rem;">'+obj.rating+'</span></div></div></div>';
        console.log(obj.name);
    });
});