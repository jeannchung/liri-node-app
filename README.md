# liri-node-app
LIRI is a command line node app that takes in parameters and returns data to a user. 

# Bands

## Walkthrough

* User initializes the program with `node liri.js init`

  ![Image of Initialization](https://raw.githubusercontent.com/jeannchung/liri-node-app/master/images/init.png)

* User then decides whether he/she wants to search for a `song`, `movie`, or an `artist's next concert`.

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
![Image of result retrieval](https://gyazo.com/c2e6aeb84b771cf398b6635d935512d6)

* It then logs the results to the `log.txt` file.

![Image of result logging](https://gyazo.com/0ba3aa9ce8ced3dcd16d5ae0983df89f)

* In the scenario that the user decides to search for a `movie`, they are prompted for a movie name.

 ![Image of movie search prompt](https://gyazo.com/7fc9733656c6287682e4e9a9c9934056)

* They are then returned multiple properties of the `movie`.

![Image of movie search results](https://gyazo.com/1ebd7465c585e15bbae0a2b5319bb1b7)

* Results are logged.

![Image of logging movie search result](https://gyazo.com/c922b77eb7841d26f15b75a67b691a11)

* In the final scenario where the user decides to search for an `artist's next concert`, they are prompted for an artist.

![Image of artist concert prompt](https://gyazo.com/377d583b45248f46b28b8d79320e23c8)

* Results are returned.

![Image of artist concert results](https://gyazo.com/77e5904cf1d7d5bd5e439c71c7d81757)

* Results are logged.

![Image of logging artist concert results](https://gyazo.com/68c1dbc403fc3da7a95c80d27169b10c)
