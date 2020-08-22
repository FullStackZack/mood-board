$("goBtn").on("click", function() {
})

$(".moodi-2").on("click", function() {
})

function displayChipperSuggestions() {

    var movieQueryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres="
        $.ajax({
            url: movieQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)

            $("#suggestion-bubbles").empty();

            //var fiveMovies = response.results;
            var suggestTitle =$("<h2 class='suggest-title'>").text("Check out one of these kicka$$ movies...")
            var row = $("<div class='row'>")

            for (var i = 0; i < 5; i++) {
                
                var randomIndex = Math.floor(Math.random() * response.results.length)

                    var col = $("<div class='col-sm-2'>")
                    var card = $("<div class='card'>")
                    var cardBody = $("<div class='card-body'>")
                    var movieTitle = response.results[randomIndex].original_title
                    var h5 = $("<h5 class='card-title'>").text(movieTitle)
                    var moviePoster = response.results[randomIndex].poster_path
                    var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                    
                    var movieImg = $("<img>").attr("src", imageURL)
                    //var moviePlot =(response.results[randomIndex].overview)
                    //var para1 = $("<p class='plot'>").text(moviePlot)
                    var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")
                    var movieRating = response.results[randomIndex].vote_average
                    var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")

                    cardBody.append(h5, movieImg, ratingP, learnMore)
                    card.append(cardBody)
                    col.append(card)
                    row.append(col)

                    $("#suggestion-bubbles").append(suggestTitle)
                    $("#suggestion-bubbles").append(row)
                    
            }

            var tvQueryURL = "https://api.themoviedb.org/3/discover/tv?&original_air_date=2019&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=35,18"

            $.ajax({
                url: tvQueryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);

                var suggestTitle =$("<h2 class='suggest-title'>").text("OR consider starting a binge-worthy TV series...")
                var row = $("<div class='row'>")

                for (var i = 0; i < 5; i++) { 

                    var randomIndex = Math.floor(Math.random() * response.results.length)
            
                    var col = $("<div class='col-sm-2'>")
                    var card = $("<div class='card'>")
                    var cardBody = $("<div class='card-body'>")
                    var movieTitle = response.results[randomIndex].original_name
                    var h5 = $("<h5 class='card-title'>").text(movieTitle)
                    var moviePoster = response.results[randomIndex].poster_path
                    var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                    
                    var movieImg = $("<img>").attr("src", imageURL)
                    //var moviePlot =(response.results[randomIndex].overview)
                    //var para1 = $("<p class='plot'>").text(moviePlot)
                    var movieRating = response.results[randomIndex].vote_average
                    var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
                    var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

                    cardBody.append(h5, movieImg, ratingP, learnMore)
                    card.append(cardBody)
                    col.append(card)
                    row.append(col)

                    $("#suggestion-bubbles").append(suggestTitle)
                    $("#suggestion-bubbles").append(row)
                
                }
            });
        });
}

function displayBummedSuggestions() {

}

function displayCuriousSuggestions() {

    // tmdb api for true crime documentaries
    queryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=99,80"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)

            console.log(response.list)
            $("#suggestion-bubbles").empty();

            var suggestTitle =$("<h2 class='suggest-title'>").text("Sink in to one of these true crime documentaries...")
            var row = $("<div class='row'>")

            for (var i = 0; i < 5; i++) {

                var randomIndex = Math.floor(Math.random() * response.results.length)
            
                var col = $("<div class='col-sm-2'>")
                var card = $("<div class='card'>")
                var cardBody = $("<div class='card-body'>")
                var movieTitle = response.results[randomIndex].original_title
                var h5 = $("<h5 class='card-title'>").text(movieTitle)
                var moviePoster = response.results[randomIndex].poster_path
                var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                    
                var movieImg = $("<img>").attr("src", imageURL)
                //var moviePlot =(response.results[randomIndex].overview)
                //var para1 = $("<p class='plot'>").text(moviePlot)
                var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")
                var movieRating = response.results[randomIndex].vote_average
                var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")

                cardBody.append(h5, movieImg, ratingP, learnMore)
                card.append(cardBody)
                col.append(card)
                row.append(col)

                $("#suggestion-bubbles").append(suggestTitle)
                $("#suggestion-bubbles").append(row)
            
            }

        });
}

function displayHangrySuggestions() {

}

function displayDistractedSuggestions() {

}

function displayFlirtySuggestions() {

    queryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&primary_release_year=2019&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=10749,18"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)

            $("#suggestion-bubbles").empty();

            var suggestTitle =$("<h2 class='suggest-title'>").text("Cuddle up & watch a Rom-Dram...")
            var row = $("<div class='row'>")

            for (var i = 0; i < 5; i++){
            
                var randomIndex = Math.floor(Math.random() * response.results.length)
            
                var col = $("<div class='col-sm-2'>")
                var card = $("<div class='card'>")
                var cardBody = $("<div class='card-body'>")
                var movieTitle = response.results[randomIndex].original_title
                var h5 = $("<h5 class='card-title'>").text(movieTitle)
                var moviePoster = response.results[randomIndex].poster_path
                var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                    
                var movieImg = $("<img>").attr("src", imageURL)
                //var moviePlot =(response.results[randomIndex].overview)
                //var para1 = $("<p class='plot'>").text(moviePlot)
                var movieRating = response.results[randomIndex].vote_average
                var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
                var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

                cardBody.append(h5, movieImg, ratingP, learnMore)
                card.append(cardBody)
                col.append(card)
                row.append(col)

                $("#suggestion-bubbles").append(suggestTitle)
                $("#suggestion-bubbles").append(row)
            
            }


        });
}

function displayGrumpySuggestions() {

}

function displayStressedSuggestions() {

}


$("#chipper-mood").on("click", function(event) {
    event.preventDefault();

    $("#suggestion-bubbles").empty();

    displayChipperSuggestions();

    $("body").css("background-color", "rgba(228, 215, 41, 0.2)");
});

$("#bummed-mood").on("click", function(event) {
    event.preventDefault();

    $("#suggestion-bubbles").empty();

    displayBummedSuggestions();

    $("body").css("background-color", "rgba(148, 198, 228, 0.2)");
});

$("#curious-mood").on("click", function(event) {
    event.preventDefault();

    $("#suggestion-bubbles").empty();

    displayCuriousSuggestions();

    $("body").css("background-color", "rgba(152, 214, 100, 0.2)");
});

$("#hangry-mood").on("click", function(event) {
    event.preventDefault();

    $("#suggestion-bubbles").empty();

    displayHangrySuggestions();

    $("body").css("background-color", "rgba(221, 83, 58, 0.2)");
});

$("#distracted-mood").on("click", function(event) {
    event.preventDefault();

    $("#suggestion-bubbles").empty();

    displayDistractedSuggestions();

    $("body").css("background-color", "rgba(236, 181, 28, 0.2)");
})

$("#flirty-mood").on("click", function(event) {
    event.preventDefault();

    $("#suggestion-bubbles").empty();

    displayFlirtySuggestions();

    $("body").css("background-color", "rgba(224, 181, 221, 0.2)");
});

$("#grumpy-mood").on("click", function(event) {
    event.preventDefault();

    $("#suggestion-bubbles").empty();

    displayGrumpySuggestions();

    $("body").css("background-color", "rgba(44, 194, 81, 0.2)");
});

$("#stressed-mood").on("click", function(event) {
    event.preventDefault();

    $("#suggestion-bubbles").empty();

    displayStressedSuggestions();

    $("body").css("background-color", "rgba(178, 95, 226, 0.2)");
});