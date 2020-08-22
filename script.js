

function displayChipperSuggestions() {

    var movieQueryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=12,28"
        $.ajax({
            url: movieQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)

            console.log(response.list)
            $("#suggestion-bubbles").empty();

            for (var i = 0; i < 5; i++){
            
                // creates the random index
                var randomIndex = Math.floor(Math.random() * response.results.length)
                
                // pulls the movie title 
                var movieTitle1 = (response.results[randomIndex].original_title)
            
                // pulls the movie plot    
                var moviePlot =(response.results[randomIndex].overview)
               
               // creates the p tag for the variables
               var p1 = $("<p class='movie-title'>").text(movieTitle1)
               var p2 = $("<p class='plot'>").text(moviePlot)
            
                // displays the variables 
               $("#suggestion-bubbles").append(p1)
               $("#suggestion-bubbles").append(p2)
            
                // pulls the poster 
               var moviePoster = (response.results[randomIndex].poster_path)
                
                // pulls poster url
                var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                imageURL = $("<img>").attr("src", imageURL)
            
                // displays the poster
                $("#suggestion-bubbles").append(imageURL)
            
            }

            var tvQueryURL = "https://api.themoviedb.org/3/discover/tv?&original_air_date=2019&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=35,18"

            $.ajax({
                url: tvQueryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);

                for (var i = 0; i < 5; i++){
            
                    // creates the random index
                    var randomIndex = Math.floor(Math.random() * response.results.length)
                    
                    // pulls the movie title 
                    var tvTitle = (response.results[randomIndex].original_name)
                
                    // pulls the movie plot    
                    var tvPlot =(response.results[randomIndex].overview)
                   
                   // creates the p tag for the variables
                   var p3 = $("<p class='tv-title'>").text(tvTitle)
                   var p4 = $("<p class='plot'>").text(tvPlot)
                
                    // displays the variables 
                   $("#suggestion-bubbles").append(p3)
                   $("#suggestion-bubbles").append(p4)
                
                    // pulls the poster 
                   var tvPoster = (response.results[randomIndex].poster_path)
                    
                    // pulls poster url
                    var imageURL = ("https://image.tmdb.org/t/p/w500" + tvPoster)
                    imageURL = $("<img>").attr("src", imageURL)
                
                    // displays the poster
                    $("#suggestion-bubbles").append(imageURL)
                
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

            for (var i = 0; i < 5; i++){
            
                // creates the random index
                var randomIndex = Math.floor(Math.random() * response.results.length)
                
                // pulls the movie title 
                var movieTitle1 = (response.results[randomIndex].original_title)
            
                // pulls the movie plot    
                var moviePlot =(response.results[randomIndex].overview)
               
               // creates the p tag for the variables
               var p1 = $("<p class='movie-title'>").text(movieTitle1)
               var p2 = $("<p class='plot'>").text(moviePlot)
            
                // displays the variables 
               $("#suggestion-bubbles").append(p1)
               $("#suggestion-bubbles").append(p2)
            
                // pulls the poster 
               var moviePoster = (response.results[randomIndex].poster_path)
                
                // pulls poster url
                var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)
                imageURL = $("<img>").attr("src", imageURL)
            
                // displays the poster
                $("#suggestion-bubbles").append(imageURL)
            
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
    
            console.log(response.list)
            $("#suggestions").empty();
    
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
    
                card.append(h5, movieImg)
                col.append(card)
                row.append(col)
    
                $("#suggestions").append(suggestTitle)
                $("#suggestions").append(row)
            
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
        $("#suggestions").empty();

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

            $("#suggestions").append(suggestTitle)
            $("#suggestions").append(row)
        
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
        $("#suggestions").empty();

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

            card.append(h5, movieImg)
            col.append(card)
            row.append(col)

            $("#suggestions").append(suggestTitle)
            $("#suggestions").append(row)
        
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