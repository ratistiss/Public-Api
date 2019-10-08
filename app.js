
$.ajax({
    url: 'https://randomuser.me/api/?results=12&&inc=picture,name,email,location,phone,dob',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        generateCards(data);
    }
});


// Search Markup 
$('.search-container').append('<form></form>');
const form = $('form').attr("action", "#").attr("method", "get");
form.append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
form.append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');



//Gallery Markup
let card = $('#gallery').append('<div class="card">');
let imgCont = $('.card').append('<div class="card-img-container">');
let infoCont = $('.card').append('<div class="card-info-container"></div>');
let img = $('.card-img-container').append('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture"></img>');
let name = $('.card-info-container').append('<h3 id="name" class="card-name cap">first last</h3>');
let email = $('.card-info-container').append('<p class="card-text">email</p>');
let place = $('.card-info-container').append('<p class="card-text cap">city, state</p>');

    function generateCards(people) {
            console.log(people.dob);

   }

//Modal markup

    