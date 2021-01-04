var url = "https://ghibliapi.herokuapp.com/films"
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
    $("#review_submit").click(function(){
        var user = $("#username").val();
        var review = $("#review_input").val()
        var html = 
        "<h4>User: <label class='text-primary'>" + user + "</label></h4>"
        +"<h4>Review</h4>"
        +"<p>"+review+"</p>"
        $(".user").append(html);
        

        //$(".user").append($("#username").val());
        //$(".review").append($("#review_input").val());
    })
    $("#back-btn").click(function(){
        location.href = "index.html"
    })
})



