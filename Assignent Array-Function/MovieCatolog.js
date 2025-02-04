const movies = [
    { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
    { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
    { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
    { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
    { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
    { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
  ];
  
  // Task 1: Sort the Movies by Rating (Highest to Lowest)
  const sortedMoviesByRating = [...movies].sort((a, b) => b.rating - a.rating);
  console.log('Sorted Movies by Rating:', sortedMoviesByRating);
  
  // Task 2: Find a Movie by Title
  function findMovieByTitle(title) {
    const movie = movies.find(movie => movie.title === title);
    return movie ? movie : 'Movie not found in the catalog.';
  }
  console.log('Find Movie by Title:', findMovieByTitle('The Dark Knight')); // Example
  console.log('Find Movie by Title:', findMovieByTitle('Interstellar')); // Not in catalog
  
  // Task 3: Get Movies with a Rating Greater Than 8
  const highRatedMovies = movies.filter(movie => movie.rating > 8);
  console.log('Movies with Rating > 8:', highRatedMovies);
  
  // Task 4: List All Movie Titles
  const movieTitles = movies.map(movie => movie.title);
  console.log('All Movie Titles:', movieTitles);
  
  // Task 5: Count Movies in a Specific Genre
  function countMoviesByGenre(genre) {
    return movies.filter(movie => movie.genre === genre).length;
  }
  console.log('Number of Sci-Fi Movies:', countMoviesByGenre('Sci-Fi')); // Example
  
  // Task 6: Check if All Movies Are Rated Above 7
  const allMoviesAbove7 = movies.every(movie => movie.rating > 7);
  console.log('Are all movies rated above 7?', allMoviesAbove7);
  
  // Task 7: Get Movies Released After 2000
  const moviesAfter2000 = movies.filter(movie => movie.releaseYear > 2000);
  console.log('Movies Released After 2000:', moviesAfter2000);