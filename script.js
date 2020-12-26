var url = "https://ghibliapi.herokuapp.com/films"
$(document).ready(function(){
    $("#userInput").keypress(function (e){
        if(e.which == 13){
            location.href = "test.html"
        }
    });
    var test = $("#userInput").val()
    localStorage.setItem("title", test);
    var movieTitle = localStorage.title
    console.log(movieTitle);
    //try sending the userinput to the local storage
    fetch(url)
    .then(response => response.json())
    .then(function(data){
        $("#1").html(data[0].title)
        $("#2").html(data[0].description)
        $("#3").html(data[0].people)
    })
})



