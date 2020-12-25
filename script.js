let url = "https://ghibliapi.herokuapp.com/films"


$(document).ready(function(){
    //let movieData = GetMovieData();
    //console.log(movieData);
    $("#userInput").keypress(function (e){
        if(e.which == 13){
            location.href = "test.html"
        }
    });
})
function GetMovieData(){
    return fetch(url)
    .then(response => response.json)
    .then(data => {
        return data;
    })
}
function SendToPage(){
    var input = $("#userInput")
    console.log(input)
}


