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

     
            $("#suggestions1").empty();
            $("#suggestions2").empty();
            $("#suggestions3").empty();
            $("#suggestions4").empty();
            $("#suggestions5").empty();
    
            var suggestTitle =$("<h2 class='suggest-title'>").text("Cuddle up & turn on a Rom-Com...")
            var row = $("<div class='level'>")
    
            for (var i = 0; i < 5; i++){
            
                var randomIndex = Math.floor(Math.random() * response.results.length)
            
                var col = $("<div class='level-right'>")
                var card = $("<div class='card'>")
                var movieTitle = response.results[randomIndex].original_title
                var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
                var moviePoster = response.results[randomIndex].poster_path
                var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                    
                var movieImg = $("<img>").attr("src", imageURL)
                //var moviePlot =(response.results[randomIndex].overview)
                //var para1 = $("<p class='plot'>").text(moviePlot)
                var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")
                var movieRating = response.results[randomIndex].vote_average
                var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
    
                card.append(h5, movieImg, ratingP, learnMore)
                col.append(card)
                row.append(col)
    
                $("#suggestions1").append(suggestTitle)
                $("#suggestions1").append(row)
            
            }

        });

            var tvQueryURL = "https://api.themoviedb.org/3/discover/tv?&original_air_date=2019&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=35,18"

            $.ajax({
                url: tvQueryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response)

     
        
                var suggestTitle =$("<h2 class='suggest-title'>").text("Cuddle up & turn on a Rom-Com...")
                var row = $("<div class='level'>")
        
                for (var i = 0; i < 5; i++){
                
                    var randomIndex = Math.floor(Math.random() * response.results.length)
                
                    var col = $("<div class='level-right'>")
                    var card = $("<div class='card'>")
                    var movieTitle = response.results[randomIndex].original_title
                    var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
                    var moviePoster = response.results[randomIndex].poster_path
                    var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                        
                    var movieImg = $("<img>").attr("src", imageURL)
                    //var moviePlot =(response.results[randomIndex].overview)
                    //var para1 = $("<p class='plot'>").text(moviePlot)
        
                    card.append(h5, movieImg)
                    col.append(card)
                    row.append(col)
        
                    $("#suggestions2").append(suggestTitle)
                    $("#suggestions2").append(row)
                
                }
        
        
            });
}

function displayBummedSuggestions() {

    var tvQueryURL = "https://api.themoviedb.org/3/discover/tv?&original_air_date=2019&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=35"

            $.ajax({
                url: tvQueryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response)


                var suggestTitle =$("<h2 class='suggest-title'>").text("Relax and watch some comedies...")
                var row = $("<div class='level'>")
        
                for (var i = 0; i < 5; i++){
                
                    var randomIndex = Math.floor(Math.random() * response.results.length)
                
                    var col = $("<div class='level-right'>")
                    var card = $("<div class='card'>")
                    var movieTitle = response.results[randomIndex].original_title
                    var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
                    var moviePoster = response.results[randomIndex].poster_path
                    var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                        
                    var movieImg = $("<img>").attr("src", imageURL)
                    //var moviePlot =(response.results[randomIndex].overview)
                    //var para1 = $("<p class='plot'>").text(moviePlot)
        
                    card.append(h5, movieImg)
                    col.append(card)
                    row.append(col)
        
                    $("#suggestions2").append(suggestTitle)
                    $("#suggestions2").append(row)
                
                }
            });

        
}

function displayCuriousSuggestions() {

    // tmdb api for true crime documentaries
    queryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=99,80"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)

     
            $("#suggestions1").empty();
            $("#suggestions2").empty();
            $("#suggestions3").empty();
            $("#suggestions4").empty();
            $("#suggestions5").empty();

    
            var suggestTitle =$("<h2 class='suggest-title'>").text("Cuddle up & turn on a Rom-Com...")
            var row = $("<div class='level'>")
    
            for (var i = 0; i < 5; i++){
            
                var randomIndex = Math.floor(Math.random() * response.results.length)
            
                var col = $("<div class='level-right'>")
                var card = $("<div class='card'>")
                var movieTitle = response.results[randomIndex].original_title
                var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
                var moviePoster = response.results[randomIndex].poster_path
                var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                    
                var movieImg = $("<img>").attr("src", imageURL)
                //var moviePlot =(response.results[randomIndex].overview)
                //var para1 = $("<p class='plot'>").text(moviePlot)
    
                card.append(h5, movieImg)
                col.append(card)
                row.append(col)
    
                $("#suggestions1").append(suggestTitle)
                $("#suggestions1").append(row)
            
            }
    
        });
}

function displayHangrySuggestions() {


    // tmdb api search chef
    queryURL = "https://api.themoviedb.org/3/search/multi?api_key=97b221ffbf12db5db8bf8eae9e080354&language=en-US&query=chef&page=1&include_adult=false"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
    
            $("#suggestions1").empty();
            $("#suggestions2").empty();
            $("#suggestions3").empty();
            $("#suggestions4").empty();
            $("#suggestions5").empty();

    
            var suggestTitle =$("<h2 class='suggest-title'>").text("How about a show about")
            var row = $("<div class='level'>")
    
            for (var i = 0; i < 5; i++){
            
                var randomIndex = Math.floor(Math.random() * response.results.length)
            
                var col = $("<div class='level-right'>")
                var card = $("<div class='card'>")
                var movieTitle = response.results[randomIndex].original_title
                var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
                var moviePoster = response.results[randomIndex].poster_path
                var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                    
                var movieImg = $("<img>").attr("src", imageURL)
                //var moviePlot =(response.results[randomIndex].overview)
                //var para1 = $("<p class='plot'>").text(moviePlot)
                var movieRating = response.results[randomIndex].vote_average
                var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
                var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")
    
                card.append(h5, movieImg, ratingP, learnMore)
                col.append(card)
                row.append(col)
    
                $("#suggestions1").append(suggestTitle)
                $("#suggestions1").append(row)
            
            }
    
    
        });
}

function displayDistractedSuggestions() {

}

function displayFlirtySuggestions() {

    queryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&primary_release_year=2019&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=10749"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        console.log(response.list)
        $("#suggestions1").empty();
        $("#suggestions2").empty();
        $("#suggestions3").empty();
        $("#suggestions4").empty();
        $("#suggestions5").empty();

        var suggestTitle =$("<h2 class='suggest-title'>").text("Cuddle up & turn on a Rom-Com...")
        var row = $("<div class='level'>")

        for (var i = 0; i < 5; i++){
        
            var randomIndex = Math.floor(Math.random() * response.results.length)
        
            var col = $("<div class='level-right'>")
            var card = $("<div class='card'>")
            var movieTitle = response.results[randomIndex].original_title
            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
            var moviePoster = response.results[randomIndex].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                
            var movieImg = $("<img>").attr("src", imageURL)
            //var moviePlot =(response.results[randomIndex].overview)
            //var para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = response.results[randomIndex].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $("#suggestions1").append(suggestTitle)
            $("#suggestions1").append(row)
        
        }


    });
}

function displayGrumpySuggestions() {

  // tmdb api for adventure and comedy
  queryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=12,35"
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
        console.log(response)

        console.log(response.list)
        $("#suggestions1").empty();
        $("#suggestions2").empty();
        $("#suggestions3").empty();
        $("#suggestions4").empty();
        $("#suggestions5").empty();

        var suggestTitle =$("<h2 class='suggest-title'>").text("How about an exc...")
        var row = $("<div class='level'>")

        for (var i = 0; i < 5; i++){
        
            var randomIndex = Math.floor(Math.random() * response.results.length)
        
            var col = $("<div class='level-right'>")
            var card = $("<div class='card'>")
            var movieTitle = response.results[randomIndex].original_title
            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
            var moviePoster = response.results[randomIndex].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                
            var movieImg = $("<img>").attr("src", imageURL)
            //var moviePlot =(response.results[randomIndex].overview)
            //var para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = response.results[randomIndex].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $("#suggestions1").append(suggestTitle)
            $("#suggestions1").append(row)
        
        }


    });
}

function displayStressedSuggestions() {

}


$("#chipper-mood").on("click", function(event) {
    event.preventDefault();

    displayChipperSuggestions();
});

$("#bummed-mood").on("click", function(event) {
    event.preventDefault();

    displayBummedSuggestions();
});

$("#curious-mood").on("click", function(event) {
    event.preventDefault();

    displayCuriousSuggestions();
});

$("#hangry-mood").on("click", function(event) {
    event.preventDefault();

    displayHangrySuggestions();
});

$("#distracted-mood").on("click", function(event) {
    event.preventDefault();

    displayDistractedSuggestions();
})

$("#flirty-mood").on("click", function(event) {
    event.preventDefault();

    displayFlirtySuggestions();
});

$("#grumpy-mood").on("click", function(event) {
    event.preventDefault();

    displayGrumpySuggestions();
});

$("#stressed-mood").on("click", function(event) {
    event.preventDefault();

    displayStressedSuggestions();
});