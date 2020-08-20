

function displayChipperSuggestions() {

    queryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_genres=35"
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

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://dad-jokes.p.rapidapi.com/random/jokes",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
                    "x-rapidapi-key": "16213a7de1msh6df8c4fb25bd36ep1bd4e2jsncd1b38d57e57"
                }
            }
            
            $.ajax(settings).done(function (response) {
                console.log(response);
            
                var punchlineEl = response.punchline
                var setupEl = response.setup
            
                var question = $("<p class='joke-question'>").text(setupEl)
                var joke = $("<p class='dad-joke'>").text(punchlineEl)
            
                $("#suggestion-bubbles").append(question, joke)
            });

        });
}

function displayFlirtySuggestions() {

    queryURL = "https://api.themoviedb.org/3/discover/movie?&primary_release_year=2019&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_genres=10749,35"
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
                var movieTitle = (response.results[randomIndex].original_title)
            
                // pulls the movie plot    
                var moviePlot =(response.results[randomIndex].overview)
               
               // creates the p tag for the variables
               var p1 = $("<p class='movie-title'>").text(movieTitle)
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

function displayStressedSuggestions() {

}

function displayDistractedSuggestions() {

}

displayChipperSuggestions();