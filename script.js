<<<<<<< Updated upstream
=======
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


        var suggestTitle = $("<h2 class='suggest-title'>").text("Check out one of these kicka$$ hit movies...")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"'data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html(moviePlot)
               
            $(".modal").modal()
            return false;
          });
    
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
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions2").append(suggestTitle)
            $(".suggestions2").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });
    
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
            //movieList.push(response.results[randomIndex])

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



        for (var i = 0; i < tvList.length; i++) {


            var movieTitle = tvList[i].original_name
            var col = $("<div class='level-right movie-col'>")
            var card = $("<div class='card'>")

            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
             
            var moviePoster = tvList[i].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)

            var movieImg = $("<img>").attr("src", imageURL)
            moviePlot =(tvList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = tvList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions3").append(suggestTitle)
            $(".suggestions3").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });


    });
}

function displayBummedSuggestions() {

    var tvQueryURL = "https://api.themoviedb.org/3/discover/tv?&original_air_date=2019&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=35"

    $.ajax({
        url: tvQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        var suggestTitle = $("<h2 class='suggest-title'>").text("Relax and watch one of these comedies...")
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
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });


    });

    var movieQueryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&primary_release_year=2018&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=9648,53"
    $.ajax({
        url: movieQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        var suggestTitle = $("<h2 class='suggest-title'>").text("OR get lost in a mystery thriller...")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions2").append(suggestTitle)
            $(".suggestions2").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });
    
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


        var suggestTitle = $("<h2 class='suggest-title'>").text("How about watching a tv show about chefs")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });


    });
  


    //movie api search bakery

    queryURL = "https://api.themoviedb.org/3/search/multi?api_key=97b221ffbf12db5db8bf8eae9e080354&withlanguage=en-US&query=bakery&page=1&include_adult=false"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

    

        var suggestTitle = $("<h2 class='suggest-title'>").text("How about a movie about bakeries?")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions2").append(suggestTitle)
            $(".suggestions2").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });


    });
   //food tv show api

   queryURL = "https://api.themoviedb.org/3/search/multi?api_key=97b221ffbf12db5db8bf8eae9e080354&withlanguage=en-US&query=food&page=1&include_adult=false"
   $.ajax({
       url: queryURL,
       method: "GET"
   }).then(function (response) {
       console.log(response)

   

       var suggestTitle = $("<h2 class='suggest-title'>").text("How about a movie about food?")
       var row = $("<div class='level'>")
       var j = 0

       movieList = []

       for (let index = 0; index < 5; index++) {

           var randomIndex = Math.floor(Math.random() * 5)

           //console.log(response.results[randomIndex])
           //movieList.push(response.results[randomIndex])

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
           moviePlot =(movieList[i].overview)
           para1 = $("<p class='plot'>").text(moviePlot)
           var movieRating = movieList[i].vote_average
           var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
           var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

           card.append(h5, movieImg, ratingP, learnMore)
           col.append(card)
           row.append(col)

           $(".suggestions3").append(suggestTitle)
           $(".suggestions3").append(row)

       }

       $('.modal-button').on("click", function(event) {
           var movieTitle = $(this).attr("data-title")
           $(".modal-title").html("<b>"+ movieTitle)
              var moviePlot=$(this).attr("data-plot")
              $(".modal-plot").html("<b>"+moviePlot)
              
           $(".modal").modal()
           return false;
         });


   });
 
}

function displayDistractedSuggestions() {

        var movieQueryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=10752"
        $.ajax({
            url: movieQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
    
    
            $(".suggestions1").empty();
            $(".suggestions2").empty();
            $(".suggestions3").empty();
    
    
            var suggestTitle = $("<h2 class='suggest-title'>").text("Man your battle stations!")
            var row = $("<div class='level'>")
            var j = 0
    
            movieList = []
    
            for (let index = 0; index < 5; index++) {
    
                var randomIndex = Math.floor(Math.random() * 5)
    
                //console.log(response.results[randomIndex])
                //movieList.push(response.results[randomIndex])
    
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
                moviePlot =(movieList[i].overview)
                var movieRating = movieList[i].vote_average
                var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
                var learnMore = $("<button data-title='"+ movieTitle +"'data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")
    
                card.append(h5, movieImg, ratingP, learnMore)
                col.append(card)
                row.append(col)
    
                $(".suggestions1").append(suggestTitle)
                $(".suggestions1").append(row)
    
            }
    
            $('.modal-button').on("click", function(event) {
                var movieTitle = $(this).attr("data-title")
                $(".modal-title").html("<b>"+ movieTitle)
                   var moviePlot=$(this).attr("data-plot")
                   $(".modal-plot").html(moviePlot)
                   
                $(".modal").modal()
                return false;
              });
        
        });
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
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });

    });

    var movieQueryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&primary_release_year=2020&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=35,10749"
    $.ajax({
        url: movieQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        var suggestTitle = $("<h2 class='suggest-title'>").text("OR perhaps a Rom-Com...")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions2").append(suggestTitle)
            $(".suggestions2").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });
    
    });

    var tvQueryURL = "https://api.themoviedb.org/3/discover/tv?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=10764,18"

    $.ajax({
        url: tvQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)



        var suggestTitle = $("<h2 class='suggest-title'>").text("OR maybe a little reality TV...")
        var row = $("<div class='level'>")

        var j = 0

        tvList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //movieList.push(response.results[randomIndex])

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



        for (var i = 0; i < tvList.length; i++) {


            var movieTitle = tvList[i].original_name
            var col = $("<div class='level-right movie-col'>")
            var card = $("<div class='card'>")

            var h5 = $("<h5 class='card-header-title'>").text(movieTitle)
             
            var moviePoster = tvList[i].poster_path
            var imageURL = ("https://image.tmdb.org/t/p/w500" + moviePoster)

            var movieImg = $("<img>").attr("src", imageURL)
            moviePlot =(tvList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = tvList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions3").append(suggestTitle)
            $(".suggestions3").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });


    });
}

function displayGrumpySuggestions() {

    // tmdb api for comedy
    queryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=35"
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

        var suggestTitle = $("<h2 class='suggest-title'>").text("Lets watch a comedy and have a good laugh!")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)
        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });


    });
    // tmdb api for adventure
    queryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=12"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
      

        var suggestTitle = $("<h2 class='suggest-title'>").text("Nothing makes you feel better like a great adventure!")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions2").append(suggestTitle)
            $(".suggestions2").append(row)
        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });


    });
    // tmdb api for music
    queryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=10402"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
     

        var suggestTitle = $("<h2 class='suggest-title'>").text("Or let's dance it off with some great music?")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            para1 = $("<p class='plot'>").text(moviePlot)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"' data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions3").append(suggestTitle)
            $(".suggestions3").append(row)
        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html("<b>"+moviePlot)
               
            $(".modal").modal()
            return false;
          });


    });
}

function displayStressedSuggestions() {

    var movieQueryURL = "https://api.themoviedb.org/3/discover/movie?&popular?&api_key=97b221ffbf12db5db8bf8eae9e080354&with_original_language=en&with_genres=14"
    $.ajax({
        url: movieQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)


        $(".suggestions1").empty();
        $(".suggestions2").empty();
        $(".suggestions3").empty();


        var suggestTitle = $("<h2 class='suggest-title'>").text("Take a trip into a world of fantasy!")
        var row = $("<div class='level'>")
        var j = 0

        movieList = []

        for (let index = 0; index < 5; index++) {

            var randomIndex = Math.floor(Math.random() * 5)

            //console.log(response.results[randomIndex])
            //movieList.push(response.results[randomIndex])

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
            moviePlot =(movieList[i].overview)
            var movieRating = movieList[i].vote_average
            var ratingP = $("<p class='rating'>").text("Rating: " + movieRating + "/10")
            var learnMore = $("<button data-title='"+ movieTitle +"'data-plot='"+ moviePlot +"' class='button is-primary is-large modal-button' data-target='modal' aria-haspopup='true'>").text("Learn More")

            card.append(h5, movieImg, ratingP, learnMore)
            col.append(card)
            row.append(col)

            $(".suggestions1").append(suggestTitle)
            $(".suggestions1").append(row)

        }

        $('.modal-button').on("click", function(event) {
            var movieTitle = $(this).attr("data-title")
            $(".modal-title").html("<b>"+ movieTitle)
               var moviePlot=$(this).attr("data-plot")
               $(".modal-plot").html(moviePlot)
               
            $(".modal").modal()
            return false;
          });
    
    });
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
>>>>>>> Stashed changes
