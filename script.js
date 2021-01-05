var url = "https://ghibliapi.herokuapp.com/films"
var img_url = "https://api.jikan.moe/v3/search/anime?q="
$(document).ready(function(){
  $("#film_submit").click(function(){
      location.href = "test.html"
      localStorage.setItem("title", $("#userInput").val());
      console.log($("#userInput").val());
  })
    var movieTitle = localStorage.title;
    console.log(movieTitle);
    fetch(url)
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        for (i = 0; i < data.length; i++){
            var option = document.createElement("option");
            option.value = data[i].title;
            option.text = data[i].title;
            $("#userInput").append(option);
            if (data[i].title == movieTitle){
                $(".title").html("Movie Title: " + data[i].title);
                $(".dir").html("Director: " + data[i].director);
                $(".relDate").html("Release Date: " + data[i].release_date);
                $(".prod").html("Producer: " + data[i].producer);
                $(".desc").html(data[i].description);
            }
        }
    })
    fetch("https://api.jikan.moe/v3/search/anime?q=" + movieTitle + "&page=1")
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        //var anime_id = data.results[0].mal_id
        localStorage.setItem("mal_id", data.results[0].mal_id);
        var test_img = data.results[0].image_url;
        console.log(test_img);
        $("#movie_img").attr("src", test_img);
    })
    /*var anime_id = localStorage.mal_id;
    fetch("https://api.jikan.moe/v3/anime/" + anime_id + "/")
        .then(response => response.json())
        .then(function(data){
            $("vid").html(data[0].trailer_url);
        })
        */
    
    $("#review_submit").click(function(){
        var user = $("#username").val();
        var review = $("#review_input").val()
        var html = 
        "<h4>User: " + user + "</h4>"
        +"<h4>Review: </h4>"
        +"<p>"+review+"</p>"
        $(".user").append(html);
    })
    $("#back-btn").click(function(){
        location.href = "index.html"
    })
})



