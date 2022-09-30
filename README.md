# Weather App Client


This is the client for a Weather App built using node and React.
Requires Node 18+ to run as it uses the fetch() API in node 18.

It is a single page application that uses proxy to send requests to the backend server deployed on heroku. Here are the links to the code and the deployed api link for the same

Github : https://github.com/bhaskar-ruthvik/weather-app-crux

Heroku : https://pacific-reef-72424.herokuapp.com/

# Features

1. You can search for almost any location using the text searchbox. 
2. Not sure about the exact place you want to search for? The included google powered autocomplete provides suggestions for the places you might want to search for.
3. Want to search for any location in the world using a map? Use the included Map to look for the place you want to know the weather at and click Go to retrieve the weather at that location.
4. The included get your location button allows you to search for the weather at your specific location and also integrates with the map so you can find the weather at the places closest to you
5. Changes the background dynamically based on the weather conditions in the place you have searched for. 
6. Shows upto the most recent 5 searches when the searchbox is first clicked
7. Runs on most aspect ratios with custom backdrops for each class of device

# How to run

1. Clone the github repository or download the zip file provided
2. Make sure you have node installed on the device
3. Run `npm install` to install the node modules
4. Start the frontend server with `npm start`. The website will now run on port 3000.
5. You can now use all the functinalities provided with the weather-webapp.

# Hosted Front-end

URL : https://cheery-kangaroo-dda5dd.netlify.app/

### What works?
 * Purely Front-end features 
 * Can use the map to look around the world but cannot look for the weather
 * Same applies to the searchbox and its autocomplete,recent searches features
### What doesn't?
 Unfortunately the proxy to the backend is not working upon deployment. Therefore, the Backend requests do not work as of now...
