# movies-app  
This repository contains a web application that provides movie information and allows searching by keywords, genres, and trending movies using vanilla JavaScript and DOM manipulation.

# Getting Started
To get started with this project, follow these steps:

1. Clone this repository to your local machine using git clone `https://github.com/jp-cortes/movies-app.git`
2. Navigate to the project directory: cd movies-app
3. Open the index.html file in your web browser

# Implementation Details
The movie information web application is built using vanilla JavaScript and DOM manipulation.

# Searching by Keywords
The user can search for movies by entering keywords in the search bar at the top of the page. The JavaScript code for handling the search functionality is contained in the main.js file. When the user submits a search query, the application makes a request to the TMDB API to retrieve information about the movies that match the query. The response data is then displayed on the page using DOM manipulation.

# Searching by Genres
The user can search for movies by selecting a genre from the dropdown menu at the top of the page. The JavaScript code for handling the genre search functionality is contained in the main.js file. When the user selects a genre from the dropdown menu, the application makes a request to the TMDB API to retrieve information about the movies in that genre. The response data is then displayed on the page using DOM manipulation.

# Trending Movies
The user can view a list of trending movies by clicking on the "Trending" button in the navigation bar at the top of the page. The JavaScript code for handling the trending movies functionality is contained in the main.js file. When the user clicks the "Trending" button, the application makes a request to the OMDb API to retrieve information about the movies that are currently trending. The response data is then displayed on the page using DOM manipulation.

# Emulated Navigation using Window Location Hash
The application uses the window location hash to emulate navigation between the different search and trending results. functionality is contained in the navigation.js file. When the user submits a search query, selects a genre, or clicks the "View More" button, the application updates the window location hash to reflect the current state of the application. This allows the user to navigate back and forward using the browser's back and forward buttons, and also allows the user to bookmark or share a specific search or trending result.
