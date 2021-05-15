# Filmyzone API - Node.js
Filmyzone API using node.js and puppetter.[API](https://moviezonal-api-download.herokuapp.com/)

This api is built using web scraping from one of the movie sites.
## About the project
This project is entirely made for entertainment purposes. We can download any  movies , series by first viewing their desciption,video quality or viewing their screenshots


## How To Run
Download Node.js from the [official  site](https://nodejs.org/en/download/)(like I did) or from [here](https://github.com/creationix/nvm) , and run the following at the terminal:

```
node index.js
```
### Project Structure
 * **index.js** : Main project file, it has it initialize all the necessary files.
 * **router/router.js**:  It has it's logic to create routing system and the API services.
 * **puppetter/page.js**: Contain puppetter function to return latest movie collection(page wise) 
 * **puppetter/details.js** :Contain puppetter function to return move description upon movie url entered
  * **puppetter/download.js** : Contain puppetter function to screenshots and movie downloading link.
  * **puppetter/search.js** : Contain puppetter function to return movie that the user will search
  * **puppetter/filmyzilla.js** : Contain puppetter function to return category wise movie collection(page wise).
  * **ProcFile** : Configuration file for heroku.
### API Endpoints 
     These endpoints allow you to handle multiple request.
 - **/latest/:page** : 
    - Methods: **GET**
      - Description: Return a 200 status code showing all the latest movies depending upon the page number entered in url.
      - Params: page

  - **/category/:category/page/:page** : 
    - Methods: **GET**
      - Description: Return a 200 status code showing all the movies which fall in the entered category in url depending upon the page number entered in url.
      - Params: category and page

 - **/search/q=:name** : 
    - Methods: **GET**
      - Description: Return a 200 status code showing all the movies which matched with the name entered in url.
      - Params: name
 
 - **/movie-description** : 
    - Methods: **POST**
      - Description: Return a 200 status code showing all the details of the movie requested by the user.
      - Params: none
      
  - **/download** : 
    - Methods: **POST**
      - Description: Return a 200 status code showing screenshots and downloading link of the movie .
      - Params: name



