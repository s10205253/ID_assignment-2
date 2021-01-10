var url = "https://ghibliapi.herokuapp.com/films";
var img_url = "https://api.jikan.moe/v3/search/anime?q=";
// list of trailers for the films
var film_trailer = [
    {"title" : "Castle in the Sky", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8ykEy-yPBFc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Grave of the Fireflies", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4vPeTSRd580" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "My Neighbor Totoro", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/92a7Hj0ijLs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Kiki's Delivery Service", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4bG17OYs-GA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Only Yesterday", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/OfkQlZArxw0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Porco Rosso", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/awEC-aLDzjs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Pom Poko", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_7cowIHjCD4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Whisper of the Heart", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/0pVkiod6V0U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Princess Mononoke", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4OiMOHRDs14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "My Neighbors the Yamadas", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1C9ujuCPlnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Spirited Away", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ByXuk9QqQkk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "The Cat Returns", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Gp-H_YOcYTM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Howl's Moving Castle", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/iwROgK94zcM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Tales from Earthsea", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8hxYx3Jq3kI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Ponyo", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/CsR3KVgBzSM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Arrietty", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9CtIXPhPo0g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "From Up on Poppy Hill", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9nzpk_Br6yo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "The Wind Rises", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jGr8XDxB-9I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "The Tale of the Princess Kaguya", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/W71mtorCZDw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "When Marnie Was There", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jjmrxqcQdYg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
];
$(document).ready(function(){
  $("#film_submit").click(function(){
    if ($("#userInput").val() === "")
    {
        alert("please pick a valid option");
    }
    else{
        location.href = "info.html";
    }
    // save the title the user choose into local storage
      localStorage.setItem("title", $("#userInput").val());
  });
    var movieTitle = localStorage.title;
    // retrieves info of the films from the api
    fetch(url)
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        for (i = 0; i < data.length; i++){
            //append the film titles to the dropdown selection bar
            var option = document.createElement("option");
            option.value = data[i].title;
            option.text = data[i].title;
            $("#userInput").append(option);
            // adds the film information to the page
            if (data[i].title == movieTitle){
                $(".title").html("Film Title: " + data[i].title);
                $(".dir").html("Director: " + data[i].director);
                $(".relDate").html("Release Date: " + data[i].release_date);
                $(".rt_score").html("Score: " + data[i].rt_score + "/100");
                $(".prod").html("Producer: " + data[i].producer);
                $(".desc").html(data[i].description);
            }
        }
    });
    // retrieves the img url from the api and adds the film img to the page
    fetch(img_url + movieTitle + "&page=1")
    .then(response => response.json())
    .then(function(data){
        var film_img = data.results[0].image_url;
        $("#film_img").attr("src", film_img);
    });
    /* adds the trailers to the page by matching the title with the film trailer list and adding the 
    youtube link*/
    for (i = 0; i < film_trailer.length; i++){
        if (movieTitle == film_trailer[i].title){
            console.log(film_trailer[i].link);
            $("#vid").html(film_trailer[i].link);
        }
    }
    // appends the user review to the page
    $("#review_submit").click(function(){
        var user = $("#username").val();
        var review = $("#review_input").val();
        var words = 
        " <h3 class='m-2'>User: </h3>" + "<h5 class='m-2'>" + user + "</h5>"
        +"<h3 class='m-2'>Review: </h3>"
        +"<p class='m-2' style = '1.3rem'>"+review+"</p>";
        // checks if either of the text boxes are empty
        if ((user == "" || review == ""))
        {
            alert("Username or Review is missing");
        }
        else{
            $(".user").append(words);
        }
    });
    $("#back-btn").click(function(){
        location.href = "index.html";
    });
});






