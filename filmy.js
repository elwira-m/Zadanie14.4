var movies = [
     {
       id: 1,
	     title: 'Harry Potter',
       desc: 'Film o czarodzieju',
	     image: './images/harry.jpg'
     },
     {
       id: 2,
    	 title: 'Król Lew',
       desc: 'Film o królu sawanny',
	     image: './images/lew.jpg'
     },
     {
     	id: 3,
     	title: 'Blade runner',
      desc: 'Film sci-fi',
	    image: './images/bladerunner2.jpg'
     },
    {
    	id: 4,
    	title: 'Star Wars',
    	desc: 'Słynna gwiezdna saga',
    	image: './images/starwars.jpg'
	  }
];		

var MovieTitle = React.createClass({
     propTypes: {
         title: React.PropTypes.string.isRequired,
    },
     render: function() {
         return (
            React.createElement('h2', {}, this.props.title)
         )
    },
});

var MovieDescription = React.createClass({
     propTypes: {
          desc: React.PropTypes.string.isRequired,
     },
     render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
     },
});

var MovieImage = React.createClass({
     propTypes: {
         img: React.PropTypes.string.isRequired,
     },
     render: function() {
         return (
             React.createElement('img', {src: this.props.img})
         )
     },
});

var Movie = React.createClass({
     propTypes: {
           movie: React.PropTypes.object.isRequired,
     },
     render: function() {
          return (
              React.createElement('li', {key: this.props.movie.id},
              React.createElement(MovieTitle, {title: this.props.movie.title}),
              React.createElement(MovieDescription, {desc: this.props.movie.desc}),
              React.createElement(MovieImage, {img: this.props.movie.image})
               )
         )
     },
});

var moviesElements = movies.map(function(movie) {
      return React.createElement(Movie, {key: movie.id, movie: movie});
});

var moviesList = React.createClass({
      render: function() {
           return (React.createElement('ul', {}, moviesElements));
     }
});

var element = React.createElement('div', {},
     React.createElement('h1', {}, 'Lista filmów'),
     React.createElement(moviesList, {})
);
  
ReactDOM.render(element, document.getElementById('app'));
