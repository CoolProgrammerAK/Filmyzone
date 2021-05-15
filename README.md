# Filmyzone API - Node.js
Filmyzone API using plain node.js.

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
 
### Endpoints 
 - **/ping/** : 
    - Methods: **GET**
    - Description: Return a 200 status code showing that the API still alive.
    - Query Strings: none

 - **/users/** : 
    - Method: **POST**
      - Description: Create a new user.
      - Body: first_name, last_name, phone, password, tos_agreement

    - Method: **GET**
      - Description: Return a user data.
      - Query String: phone

    - Method: **UPDATE**
      - Description: Update the user's fields.
      - Body: first_name, last_name, password

    - Method: **DELETE**
      - Description: Delete a given user.
      - Query String: phone

 - **/tokens/** : 
    - Method: **POST**
      - Description: Create a new authentication token for a given user.
      - Body: phone, password
      
    - Method: **GET**
      - Description: Return a token
      - Query String: id

    - Method: **UPDATE**
      - Description: Update the token expiration time to extend one more hour.
      - Body: id, extend

    - Method: **DELETE**
      - Description: Delete a given token.
      - Query String: id
 
 - **/checks/** : 
    - Method: **POST**
      - Description: Create a new API check.
      - Body: protocol, url, method, success_codes, timeout_seconds
      
    - Method: **GET**
      - Description: Return a existing check
      - Query String: id

    - Method: **UPDATE**
      - Description: Update a check configuration
      - Body: id, protocol, url, method, success_codes, timeout_seconds

    - Method: **DELETE**
      - Description: Delete a existing check.
      - Query String: id



