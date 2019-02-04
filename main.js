var queryURL = "http://api.petfinder.com/pet.getRandom?key=dd7aa4d6efe006b84f11f26d8b43d6ca&animal=cat&output=basic&format=json"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    
    var cat = response.petfinder.pet.media.photos.photo[2].$t
    var name = response.petfinder.pet.name.$t
    var age = response.petfinder.pet.age.$t
    var breed = response.petfinder.pet.breeds.breed.$t


    console.log(cat)
    $("#p1").attr("src", cat)
    $("#name").text(name)
    $("#age").text(age)
    $("#breed").text(breed)
console.log(cat)
})


//click handler for arrows
$("#carousel-fade").on("click", function(){


//request for the cat data
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    
    var cat = response.petfinder.pet.media.photos.photo[2].$t
    var name = response.petfinder.pet.name.$t
    var age = response.petfinder.pet.age.$t
    var breed = response.petfinder.pet.breeds.breed.$t


    console.log(cat)
    $("#p1").attr("src", cat)
    $("#name").text(name)
    $("#age").text(age)
    $("#breed").text(breed)



})



//display the image on the screen

})
