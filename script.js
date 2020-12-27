var url = "https://ghibliapi.herokuapp.com/films"
$(document).ready(function(){
  $("#submit").click(function(){
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
                $("#1").html(data[i].title);
                $("#2").html(data[i].description);
                $("#3").html(data[i].director);
            }
        }
    })
})



