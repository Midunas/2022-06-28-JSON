fetch('movies.json')
    .then(res => res.json())
    .then(movies => {

        let moviesList = document.querySelector('#movie-list');

        
        movies.map((movie) => {
            console.log(movie);
            console.log(Object.values(movie.reviews));
            console.log(movie.image)

            let ratingObject = Object.values(movie.reviews);
    
            let mainBox = document.createElement('div')
            mainBox.classList.add('main-box')
            let movieBox = document.createElement('div')
            movieBox.classList.add('movie-box')
            
            let movieName = document.createElement('h3');

            let movieYear = document.createElement('p');

            let movieRating = document.createElement('div');
            movieRating.classList.add('ratings');

            let movieRatingBox = document.createElement('div');
            movieRatingBox.setAttribute('id', 'ratingStar')

            let movieDescription = document.createElement('p');
            let movieGenres = document.createElement('div');
            movieGenres.classList.add('genres');
            let movieDirector = document.createElement('p');
            let movieStars = document.createElement('p');

            let img = document.createElement('img');
            img.src = movie.image;

            let goldenStar = document.createElement('img');
            goldenStar.classList.add('star')
            goldenStar.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_4M9qBrV5BejDGezWMn36Abvc_s4YOpOUg&usqp=CAU";

            movieName.textContent = movie.name;
            movieYear.textContent = movie.releaseYear;
            movieRating.textContent = `${ratingObject[1]} / 10 User Score`;
            movieRatingBox.append(goldenStar,movieRating);
            movieDescription.textContent = movie.description;
            movieGenres.innerHTML = movie.genres.join(' '+'-'+' ');
            movieDirector.textContent = `Directed by: ${movie.director}.`;
            movieStars.textContent = `Starring: ${movie.stars.join(',' + ' ')}.`;
           
            
            moviesList.append(mainBox);
            movieBox.append(movieName,movieYear,movieRatingBox,movieDescription,movieDirector,movieGenres,movieStars);
            mainBox.append(img,movieBox);
        })

    })

    //Išvestu viską į ekraną su stiliumi. 
 