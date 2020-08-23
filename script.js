$("#goBtn").on("click", function () {

    window.location.href="moodi.html";
})

$(".moodi-2").on("click", function () {
    alert("hey")
})


var movieList = []
var tvList = []
function displayChipperSuggestions() {

    var movieQueryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=28,12"
    $.ajax({
        url: movieQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)


        $(".suggestions1").empty();
        $(".suggestions2").empty();
        $(".suggestions3").empty();
        $(".suggestions4").empty();
        $(".suggestions5").empty();

        var suggestTitle = $("<h2 class='suggest-title'>").text("Check out one of these kicka$$ hit movies...")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //  movieList.push(response.results[randomIndex])

            var id = response.results[randomIndex].id
            console.log(movieList)
            j = 0
            while (movieList.findIndex(i => i.id === id) > -1) {

                randomIndex = Math.floor(Math.random() * response.results.length)
                id = response.results[randomIndex].id
                console.log(id)
                j++
            }

            movieList.push(response.results[randomIndex])

        }



        for (var i = 0; i < movieList.length; i++) {


            var movieTitle = movieList[i].original_title
            var col = $("<div class='level-right movie-col'>")
            var card = $("<div class='card'>")

            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
            var moviePoster = movieList[i].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)

            var movieImg = $("<img>").attr("src", imageURL)
            //var moviePlot =(response.results[randomIndex].overview)
            //var para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            // if (movieList[j].original_title.includes(movieTitle) === false ) {
            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)
            //}


        }
    
    });

    var movieQueryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&primary_release_year=2019&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=35,18"
    $.ajax({
        url: movieQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        var suggestTitle = $("<h2 class='suggest-title'>").text("OR maybe go with a critically-acclaimed drama...")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //  movieList.push(response.results[randomIndex])

            var id = response.results[randomIndex].id
            console.log(movieList)
            j = 0
            while (movieList.findIndex(i => i.id === id) > -1) {

                randomIndex = Math.floor(Math.random() * response.results.length)
                id = response.results[randomIndex].id
                console.log(id)
                j++
            }

            movieList.push(response.results[randomIndex])

        }



        for (var i = 0; i < movieList.length; i++) {


            var movieTitle = movieList[i].original_title
            var col = $("<div class='level-right movie-col'>")
            var card = $("<div class='card'>")

            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
            var moviePoster = movieList[i].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)

            var movieImg = $("<img>").attr("src", imageURL)
            //var moviePlot =(response.results[randomIndex].overview)
            //var para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            // if (movieList[j].original_title.includes(movieTitle) === false ) {
            $(".suggestions2").append(suggestTitle)
            $(".suggestions2").append(row)
            //}


        }
    
    });

    var tvQueryURL = "https://api.themoviedb.org/3/discover/tv?&original_air_date=2019&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=35,18"

    $.ajax({
        url: tvQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)



        var suggestTitle = $("<h2 class='suggest-title'>").text("OR consider starting a binge-worthy TV series...")
        var row = $("<div class='level'>")

        var j = 0

        tvList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //  movieList.push(response.results[randomIndex])

            var id = response.results[randomIndex].id
            console.log(tvList)
            j = 0
            while (tvList.findIndex(i => i.id === id) > -1) {

                randomIndex = Math.floor(Math.random() * response.results.length)
                id = response.results[randomIndex].id
                console.log(id)
                j++
            }

            tvList.push(response.results[randomIndex])

        }



        for (var i = 0; i < 5; i++) {

          

            var col = $("<div class='level-right movie-col'>")
            var card = $("<div class='card'>")
            var movieTitle = tvList[i].original_name
            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
            var moviePoster = tvList[i].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)

            var movieImg = $("<img>").attr("src", imageURL)
            //var moviePlot =(response.results[randomIndex].overview)
            //var para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = tvList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions3").append(suggestTitle)
            $(".suggestions3").append(row)


        }


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


        $(".suggestions1").empty();
        $(".suggestions2").empty();
        $(".suggestions3").empty();
        $(".suggestions4").empty();
        $(".suggestions5").empty();


        var suggestTitle = $("<h2 class='suggest-title'>").text("Sink in to one of these true crime documentaries...")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //  movieList.push(response.results[randomIndex])

            var id = response.results[randomIndex].id
            console.log(movieList)
            j = 0
            while (movieList.findIndex(i => i.id === id) > -1) {

                randomIndex = Math.floor(Math.random() * response.results.length)
                id = response.results[randomIndex].id
                console.log(id)
                j++
            }

            movieList.push(response.results[randomIndex])

        }



        for (var i = 0; i < movieList.length; i++) {


            var movieTitle = movieList[i].original_title
            var col = $("<div class='level-right movie-col'>")
            var card = $("<div class='card'>")

            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
            var moviePoster = movieList[i].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)

            var movieImg = $("<img>").attr("src", imageURL)
            //var moviePlot =(response.results[randomIndex].overview)
            //var para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            // if (movieList[j].original_title.includes(movieTitle) === false ) {
            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)
            //}


        }


    });
}

function displayHangrySuggestions() {


    // tmdb api search chef
    queryURL = "https://api.themoviedb.org/3/search/multi?api_key=97b221ffbf12db5db8bf8eae9e080354&withlanguage=en-US&query=chef&page=1&include_adult=false"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        $(".suggestions1").empty();
        $(".suggestions2").empty();
        $(".suggestions3").empty();
        $(".suggestions4").empty();
        $(".suggestions5").empty();


        var suggestTitle = $("<h2 class='suggest-title'>").text("How about a show about")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //  movieList.push(response.results[randomIndex])

            var id = response.results[randomIndex].id
            console.log(movieList)
            j = 0
            while (movieList.findIndex(i => i.id === id) > -1) {

                randomIndex = Math.floor(Math.random() * response.results.length)
                id = response.results[randomIndex].id
                console.log(id)
                j++
            }

            movieList.push(response.results[randomIndex])

        }

        for (var i = 0; i < movieList.length; i++) {


            var movieTitle = movieList[i].original_title
            var col = $("<div class='level-right movie-col'>")
            var card = $("<div class='card'>")

            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
            var moviePoster = movieList[i].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)

            var movieImg = $("<img>").attr("src", imageURL)
            //var moviePlot =(response.results[randomIndex].overview)
            //var para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            // if (movieList[j].original_title.includes(movieTitle) === false ) {
            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)
            //}


        }


    });
  
     var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://youtube-search1.p.rapidapi.com/primitive%2520survival%2520skills",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "youtube-search1.p.rapidapi.com",
                "x-rapidapi-key": "16213a7de1msh6df8c4fb25bd36ep1bd4e2jsncd1b38d57e57"
            }
        }
        
        var suggestTitle =$("<h2 class='suggest-title'>").text("Let's learn how to forge for food!")
        var row = $("<div class='level'>")

        //youtube for survival skilss
        $.ajax(settings).done(function (response) {
            console.log(response);
        
            for (var i = 0; i < 5; i++){
        
                var randomIndex = Math.floor(Math.random()* response.items.length)

                var col = $("<div class='level-right movie-col'>")
                var card = $("<div class='card'>")
                
                var videoImage = (response.items[randomIndex].thumbAnim)
                var videoTitle = (response.items[randomIndex].channelTitle)
                var videoUrl = (response.items[randomIndex].channelUrl)
        
                var videoImg = $("<img>").attr("src", videoImage)
                var titleP = $("<h5 class='card-header-title'>").text(videoTitle)
                var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More") 

                card.append(titleP, videoImg, learnMore)
                col.append(card)
                row.append(col)
    
                $(".suggestions2").append(suggestTitle)
                $(".suggestions2").append(row)
<<<<<<< HEAD
        
            }
            
        });
=======

        }


    });
>>>>>>> ede9f15af0edee36c3bb25ebd4d065e321c47ece
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

        $(".suggestions1").empty();
        $(".suggestions2").empty();
        $(".suggestions3").empty();
        $(".suggestions4").empty();
        $(".suggestions5").empty();

        var suggestTitle = $("<h2 class='suggest-title'>").text("Cuddle up & watch a Rom-Dram...")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //  movieList.push(response.results[randomIndex])

            var id = response.results[randomIndex].id
            console.log(movieList)
            j = 0
            while (movieList.findIndex(i => i.id === id) > -1) {

                randomIndex = Math.floor(Math.random() * response.results.length)
                id = response.results[randomIndex].id
                console.log(id)
                j++
            }

            movieList.push(response.results[randomIndex])

        }



        for (var i = 0; i < movieList.length; i++) {


            var movieTitle = movieList[i].original_title
            var col = $("<div class='level-right movie-col'>")
            var card = $("<div class='card'>")

            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
            var moviePoster = movieList[i].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)

            var movieImg = $("<img>").attr("src", imageURL)
            //var moviePlot =(response.results[randomIndex].overview)
            //var para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)

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
        $(".suggestions1").empty();
        $(".suggestions2").empty();
        $(".suggestions3").empty();
        $(".suggestions4").empty();
        $(".suggestions5").empty();

        var suggestTitle = $("<h2 class='suggest-title'>").text("How about an exc...")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //  movieList.push(response.results[randomIndex])

            var id = response.results[randomIndex].id
            console.log(movieList)
            j = 0
            while (movieList.findIndex(i => i.id === id) > -1) {

                randomIndex = Math.floor(Math.random() * response.results.length)
                id = response.results[randomIndex].id
                console.log(id)
                j++
            }

            movieList.push(response.results[randomIndex])

        }



        for (var i = 0; i < movieList.length; i++) {


            var movieTitle = movieList[i].original_title
            var col = $("<div class='level-right movie-col'>")
            var card = $("<div class='card'>")

            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
            var moviePoster = movieList[i].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)

            var movieImg = $("<img>").attr("src", imageURL)
<<<<<<< HEAD
                  //var moviePlot =(response.results[randomIndex].overview)
                //var para1 = $("<p class='plot'>").text(moviePlot)
                var movieRating = response.results[randomIndex].vote_average
                var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
                var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")
    
                card.append(h5, movieImg, ratingP, learnMore)
                col.append(card)
                row.append(col)
    
                $(".suggestions1").append(suggestTitle)
                $(".suggestions1").append(row)
=======
            //var moviePlot =(response.results[randomIndex].overview)
            //var para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button type='submit' class='pure-button pure-button-primary' id='learn-more'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)
>>>>>>> ede9f15af0edee36c3bb25ebd4d065e321c47ece
        }


    });
}

function displayStressedSuggestions() {

}


$("#chipper-mood").on("click", function (event) {
    event.preventDefault();

    displayChipperSuggestions();

    $("html").css("background-color", "rgba(235, 233, 47, 0.2)")
});

$("#bummed-mood").on("click", function (event) {
    event.preventDefault();

    displayBummedSuggestions();

    $("html").css("background-color", "rgba(148, 198, 228, 0.2)")
});

$("#curious-mood").on("click", function (event) {
    event.preventDefault();

    displayCuriousSuggestions();

    $("html").css("background-color", "rgba(198, 231, 105, 0.2)")
});

$("#hangry-mood").on("click", function (event) {
    event.preventDefault();

    displayHangrySuggestions();

    $("html").css("background-color", "rgba(221, 83, 58, 0.2)")
});

$("#distracted-mood").on("click", function (event) {
    event.preventDefault();

    displayDistractedSuggestions();

    $("html").css("background-color", "rgba(236, 187, 28, 0.2)")
})

$("#flirty-mood").on("click", function (event) {
    event.preventDefault();

    displayFlirtySuggestions();

    $("html").css("background-color", "rgba(224, 181, 221, 0.2)")
});

$("#grumpy-mood").on("click", function (event) {
    event.preventDefault();

    displayGrumpySuggestions();

    $("html").css("background-color", "rgba(44, 194, 81, 0.2)")
});

$("#stressed-mood").on("click", function (event) {
    event.preventDefault();

    displayStressedSuggestions();

    $("html").css("background-color", "rgba(178, 95, 226, 0.2)")
});

$(document).on("click", "#learn-more", function (event) {
    event.preventDefault();

    console.log("response")
})