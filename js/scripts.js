let spiderman = new Movie ("Spiderman", 5.00);
let dune = new Movie ("Dune", 10.00)
let homeAlone = new Movie ("Home Alone", 15.00)
let child = new Age ("Child", 5.00);
let adult = new Age ("Adult", 10.00)
let senior = new Age ("Senior", 15.00)
let morning = new Time ("Morning", 5.00);
let afternoon = new Time ("Afternoon", 10.00)
let evening = new Time ("Evening", 15.00)


function ticket(movie, age, time){
  finalPrices =  movie.moviePrice + age.agePrice + time.timePrice
  return finalPrices
  }
  
  function Movie(name, moviePrice){
    this.name = name;
    this.moviePrice = moviePrice
  }
  
  function Age(age, agePrice){
    this.age = age;
    this.agePrice = agePrice
  }
  
  function Time(time, timePrice){
    this.time = time;
    this.timePrice = timePrice;
  }

//User Interface
$(document).ready(function() {
  $("#new-movie").submit(function(event) {
  event.preventDefault();
  let movieName = $("select#new-movie").val();
  let newTime = $("select#new-time").val();
  let newAge = $("select#new-age").val();
  finalPrice = ticket(movieName, newAge, newTime);
  $(".ticket-price").html(finalPrice);
});
});