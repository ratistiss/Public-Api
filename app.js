//Global Variables
const gallery = $('#gallery');
const search = $('.search-container');
//API call for 12 users from US and lego heads- found it was easier to retrieve all data and sort it out myself
fetch('https://randomuser.me/api/?results=12&&nat=us&lego').then(response => response.json()).then(response => generateCards(response))
// Search Markup 
// $('.search-container').append('<form></form>');
// const form = $('form').attr("action", "#").attr("method", "get");
// form.append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
// form.append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');
//Gallery Markup for the 12 users
function generateCards(response) {
    for (let i = 0; i < response.results.length; i++) {
        const picture = response.results[i].picture.thumbnail;
        const name = response.results[i].name.first + ', ' + response.results[i].name.last;
        const email = response.results[i].email;
        const location = response.results[i].location.city + ', ' + response.results[i].location.state;
        const galleryHTML = `<div class="card">
            <div class="card-img-container">
                <img class="card-img" src='${picture}' alt="profile picture">
                    </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${name}</h3>
                    <p class="card-text">${email}</p>
                    <p class="card-text cap">${location}</p>
                </div>
            </div>
         `
        gallery.append(galleryHTML);
    }
    // this function generates the modal and the next prev buttons
    function generateModal(i) {
        const picture = response.results[i].picture.thumbnail;
        const name = response.results[i].name.first + ', ' + response.results[i].name.last;
        const email = response.results[i].email;
        const location = response.results[i].location.city + ', ' + response.results[i].location.state;
        const phone = response.results[i].cell;
        const address = response.results[i].location.street.number + ' ' + response.results[i].location.street.name + "." + " " + response.results[i].location.city + ', ' + response.results[i].location.state;
        const birthday = response.results[i].dob.date.slice(0, 10);
        const modalHTML = `<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${picture}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${name}</h3>
                <p class="modal-text">${email}</p>
                <p class="modal-text cap">${location}</p>
                <hr>
                    <p class="modal-text">${phone}</p>
                    <p class="modal-text">${address}</p>
                    <p class="modal-text">Birthday: ${birthday}</p>
                    </div>
                </div>
                 <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>`
        $("body").append(modalHTML);
        $("#modal-close-btn").on("click", function () {
            $(".modal-container").remove();
        });
        // Both next next and prev buttons should loop around the users without any errors
        $(".modal-next").on("click", function () {
            if (i < 11) {
                $(".modal-container").remove();
                generateModal((i + 1));
            } else if (i = 12) {
                i = 0;
                $(".modal-container").remove();
                generateModal((i));
            }
        });
        $(".modal-prev").on("click", function () {
            if (i >= 1) {
                $(".modal-container").remove();
                generateModal((i - 1));
            } else {
                i = 11;
                $(".modal-container").remove();
                generateModal((i));
            }
        });
        // Modal background color changed for readability
        $('.modal').css("background-color", "wheat");
        $('.modal-btn-container').css("background-color", "wheat");
    }
    //Event Listener call the generateModal function
    $('#gallery').on("click", ".card", function () {
        i = ($(this).index());
        generateModal(i);
    })
    // $('#search-input').on("keydown", function () {
    //     event.preventDefault();
    //     const card = $(".card");
    //     for(let i = 0; i < card.length; i++)
    //     if(){
    //     } else {
    //     }
    // })
    // Card background color changed for readability
    $('.card').css("background-color", "khaki");
    

}
// Body background color changed for readability
$('body').css("background-color", "aquamarine");
