# nyt-react
a React-based rendition of the New York Times Article Search application

# instructions
* `$ fork repo` 
* `$ npm repo` 

This will install all necessary components and create the MongoDB database marked 'nytreact'

# purpose
Using mongoose we are going to create an Article schema and model
Articles will have each of the following fields:
  title (Title of the stored article from nytimes.com)
  date (publish date and time of the article)
  url (URL of the article on nytimes.com)

# example:
 {
   title: 'Ali Sells Jersey House And Moves to Chicago',
   date: '1974-07-18T00:00:00Z',
   url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
 }
 
# libraries/frameworks/languages
NodeJS
Express
Handlebars
MongoDB
ReactJS
Bootstrap
Javascript
JQuery

This app will be set up as an SPA (Single Page Application) that utilizes the react-router to navigate. This will hide and show our React components without changing the routes within Express.

* `/api/saved` (get) - our components will use this to query MongoDB for all saved articles

* `/api/saved` (post) - our components will use this to save an article to the database

* `/api/saved` (delete) - our components will use this to delete a saved article in the database

* `*` (get) - will load our single HTML page (with ReactJS) in public/index.html. We must make sure to put this after all other GET routes
 
The layout will include three React Components named Main, Search and Saved.
* **Main** - contains the main-container div that holds the main layout and navigation. This component should also be able to hold sub-components Search and Saved

* **Search** - queries the NYT API for articles. Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.

* **Saved** - displays the Saved Articles that were searched and stored in the database

# Bonus - Live Updates to Saved Articles

Use React routing and socket.io to create a notification or a component that triggers whenever a user saves an article. Your message should include the title of the saved article.

Say we have multiple browsers open, each one visiting your site. If you save an article in one browser, then all of your browsers should notify you that a new article was saved.
Socket.io NPM package

# One More Thing
Nothing more
