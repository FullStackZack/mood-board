$("#goBtn").on("click", function(event) {
    event.preventDefault();

    window.location.href = "moodi.html";
    return false;

});

function changeColor() {
    
}

var movieQueryURL = "https://api.themoviedb.org/3/trending/movie/day?api_key=ec99a176cace44f78bc5aa86b27b4186";


    $.ajax({
        url: movieQueryURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);

        var movieTitle = response.results[15].title;

        var p1 = $("<p>").text(movieTitle);

        $("#suggestion-bubbles").append(p1)

    })