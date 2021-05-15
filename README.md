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
## GET
`latest movies` [/latest/:page](/latest/:page) <br/>
`category wise movies` [/category/:category/page/:page](/category/:category/page/:page) <br/>
`movies upon seraching` [/search/q=:name](/search/q=:name) <br/>

## POST
`movie description` [/movie-description](/movie-description) <br/>
`download` [/download](/download) <br/>
___

### GET /latest/:page
Return a 200 status code showing all the latest movies depending upon the page number entered in url.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `page` | required | number  | Display all the latest movies on the entered page number <br/><br/> Supported values: `1` or `2`.                                                                     
                                                                   

**Response**

```
// With page param entered equal to null
{
    "error": "Something went wrong"
}

or

//  With page param entered equal to 1
{
    "result": [
        {
            "pageno":string
        },
        {
            "title": string,
            "link": string,
            "image": string
        },
         + 11 more items
    ]
}
```
___

### GET /category/:category/page/:page
Return a 200 status code showing all the latest movies depending upon the page number entered in url.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `category` | required | string  | Display all the movies whch fall under the entered category <br/><br/> Supported values: `hindi-movies` or `old-movies`.      
|
|     `page` | required | number | Display all the movies whch fall under the entered category on the entered page number <br/><br/> Supported values: `1` or `2`.  
                                                                   

**Response**

```
// With page or category param entered equal to null
{
    "error": "Something went wrong"
}

or

//  With page param entered equal to 1 and category param = `hindi-movies`
{
     "result": [
        {
            "pageno": string
        },
        {
            "title": string,
            "link": string,
            "image": string
        },
         + 11 more items
    ]
}
```
___
### GET /search/q=:name
Return a 200 status code showing all the movies which matched with the name entered in url.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `name` | required | string  | Display all the movies which matched with the name entered in url. <br/><br/> Supported values: `radhe` or `extraction`.                                                                     
                                                                   

**Response**

```
=

//  With page param entered equal to sk
{
    "result": [
       
        {
            "title": string,
            "link": string,
            "image": string
        },
         + 11 more items
    ]
}
```
___

### POST /movie-description
Return a 200 status code showing all the details of the movie requested by the user.

**Post data**

|          Name | Required |  Type   | Description                                                                                                                                                         |
| -------------:|:--------:|:-------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `link` | required | string  | Required movie url from above get request <br/><br/> Supported values: `2019-movies/skyfire-full-movie-download-free-hindi-dubbed-hd/` or `2003-movies/x2-x-men-united-full-movie-download-free-dual-audio-hd`.                      

**Response**

```
// With link entered equal to null
{
    "error": "Something went wrong"
}

or

//  With link entered equal to `2019-movies/skyfire-full-movie-download-free-hindi-dubbed-hd/`
{
    "result": [
        {
            "single_post": {
                "category": string,
                "heading": string,
                "time":  string,
                "title":  string,
                "photo": string,
                "language":string,
                "size": string,
                "quality": string,
                "genre": string,
                "country": "China",
                "actors": string,
                "desc": string,
                "fname": string,
                "fsip": string,
                "download_title": string,
                "coming_soon": string,
                "review_default": string,
                "review_heading": string,
                "review_details": string
            },
            "related_post": {
                "related": [
                    {
                        "article_text":string,
                        "article_photo": string,
                        "article_link":string
                    },
                    + 2 more items
                ]
            }
        }
    ]
}
```
___

### POST /download
 Return a 200 status code showing screenshots and downloading link of the movie.

**Post data**

|          Name | Required |  Type   | Description                                                                                                                                                         |
| -------------:|:--------:|:-------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `fname` | required | string  | Required movie fname from above movie-desrciption post request <br/><br/>   
 |
| -------------:|:--------:|:-------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `fsip` | required | string  | Required movie fsip from above movie-desrciption post request <br/><br/> 

**Response**

```
// With fname or fsip entered equal to null
{
    "error": "Something went wrong"
}

or

//  With link entered equal to `2019-movies/skyfire-full-movie-download-free-hindi-dubbed-hd/`
{
    "result": [
        {
            "ss1": string,
            "ss2": string,
            "ss3": string,
            "link": string
        }
    ]
}
```

### Hope you like it. Programmer from India
