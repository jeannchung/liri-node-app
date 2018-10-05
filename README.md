# liri-node-app
LIRI is a command line node app that takes in parameters and returns data to a user. 

# Bands

## Walkthrough

# Disclaimer: Have yet to find a reliable method to redirect users to the relevant prompt when an error is thrown due to a certain song, artist, movie not being available in their respective API's db.

### Initialization

* User initializes the program with `node liri.js init`

  ![Image of Initialization](https://raw.githubusercontent.com/jeannchung/liri-node-app/master/images/init.png)

* User then decides whether he/she wants to search for a `song`, `movie`, or an `artist's next concert`.

### Search for a song

* If the user decides to search for a `song`, the program returns 3 unique results which include the `artist`, `song name`, a `preview url`, and the `album` from where it's from.

  ```bash
        Your Spotify Search Results

        Result 1
        --------------------
        Artist: Jai Wolf
        Song Name: Starlight
        Preview: https://p.scdn.co/mp3-preview/e0108094dce5c08294e25575cd2fea5c90727c77?cid=e8ca001c7b774c21a083b17d6dbb6525
        Album: Starlight
        --------------------
        Result 2
        --------------------
        Artist: Muse
        Song Name: Starlight
        Preview: https://p.scdn.co/mp3-preview/f7a1b8a270f310e43ced2720c9af5f29f6476b79?cid=e8ca001c7b774c21a083b17d6dbb6525
        Album: Black Holes And Revelations
        --------------------
        Result 3
        --------------------
        Artist: Steffany Gretzinger
        Song Name: King of My Heart (Live)
        Preview: https://p.scdn.co/mp3-preview/09ecf3e556df7b692c8915859e5f9e3db2af25e4?cid=e8ca001c7b774c21a083b17d6dbb6525
        Album: Starlight (Live)
  ```
![Image of result retrieval](https://raw.githubusercontent.com/jeannchung/liri-node-app/master/images/result1.png)

* It then logs the results to the `log.txt` file.

![Image of result logging](https://raw.githubusercontent.com/jeannchung/liri-node-app/master/images/resultlog1.png)

### Search for a movie

* In the scenario that the user decides to search for a `movie`, they are prompted for a movie name.

 ![Image of movie search prompt](https://raw.githubusercontent.com/jeannchung/liri-node-app/master/images/movieprompt.png)

* They are then returned multiple properties of the `movie`.

![Image of movie search results](https://raw.githubusercontent.com/jeannchung/liri-node-app/master/images/movieresults.png)

* Results are logged.

![Image of logging movie search result](https://raw.githubusercontent.com/jeannchung/liri-node-app/master/images/movieresultslog.png)

### Search for artist concert

* In the final scenario where the user decides to search for an `artist's next concert`, they are prompted for an artist.

![Image of artist concert prompt](https://raw.githubusercontent.com/jeannchung/liri-node-app/master/images/concertprompt.png)

* Results are returned.

![Image of artist concert results](https://raw.githubusercontent.com/jeannchung/liri-node-app/master/images/concertresults.png)

* Results are logged.

![Image of logging artist concert results](https://raw.githubusercontent.com/jeannchung/liri-node-app/master/images/concertresultslog.png)
