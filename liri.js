const request = require('request')
require('dotenv').config()
const keys = require('./keys.js')
const fs = require('fs')
const inq = require('inquirer')


// spotify logic
const spotify = song => {
    let Spotify = require('node-spotify-api')
    let spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    })

    spotify.search({
        type: 'track',
        query: song,
    }, (e, d) => {
        if (e) { console.log(e) }
        const data = `
        Your Spotify Search Results
        Result 1
        --------------------
        Artist: ${d.tracks.items[0].artists[0].name}
        Song Name: ${d.tracks.items[0].name}
        Preview: ${d.tracks.items[0].preview_url}
        Album: ${d.tracks.items[0].album.name}
        --------------------
        Result 2
        --------------------
        Artist: ${d.tracks.items[1].artists[0].name}
        Song Name: ${d.tracks.items[1].name}
        Preview: ${d.tracks.items[1].preview_url}
        Album: ${d.tracks.items[1].album.name}
        --------------------
        Result 3
        --------------------
        Artist: ${d.tracks.items[2].artists[0].name}
        Song Name: ${d.tracks.items[2].name}
        Preview: ${d.tracks.items[2].preview_url}
        Album: ${d.tracks.items[2].album.name}
        
        `
        console.log(data)
        fs.appendFile('log.txt', data, e => {
            if (e) { console.log(e) }
        })
    })
}

// omdb logic
const omdb = movie => {
    request(`http://www.omdbapi.com/?t=${movie}&apikey=${keys.omdb.id}`, (e, r, d) => {
        if (e) { console.log(e) }
        const movie = JSON.parse(d)
        // the data returns as string, but we want it in an object
        const data = `
        Your movie search results
        --------------------
        ${movie.Title}
        Year: ${movie.Year}
        Rating: ${movie.Rated}
        Rotten Tomatoes: 
        Country: ${movie.Country}
        Language: ${movie.Language}
        Plot: ${movie.Plot}
        Actors: ${movie.Actors}
        --------------------
        
        `
        console.log(data)
        fs.appendFile('log.txt', data, e => {
            if (e) { console.log(e) }
        })
    })
}

// bandsintown logic
const bands = artist => {
    const moment = require('moment');
    request(`https://rest.bandsintown.com/artists/${artist}/events?app_id=${keys.bit.id}`, (e, r, d) => {
        if (e) { console.log(e) }
        // adjust code to list name of venue, its location, and date
        const info = JSON.parse(d)
        const data = `
        Your artist search results
        --------------------
        Venue: ${info[0].venue.name}
        Location: ${info[0].venue.city}
        Date: ${moment(info[0].datetime).format('MM Do YYYY')}
        --------------------
        `
        console.log(data)
       // certain artists don't return results and ultimately break program
       // tried redirecting user back to decision() if error but unsuccessful
        fs.appendFile('log.txt', data, e => {
            if (e) { console.log(e) }
        })
    })
}


// switch (process.argv[2]) {
//     case 'spotify':
//         if (process.argv[2]) {
//             spotify(process.argv.slice(3).join('+'))
//             break
//         } else {
//             console.log('Please enter a song!')
//         }

//     case 'movie':
//         omdb(process.argv.slice(3).join('+'))
//         break

//     case 'bands':
//         bands(process.argv.slice(3).join('+'))
//         break
// }

const decision = choice => {
    switch (choice) {
        case 'Search for a song':
            inq.prompt([
                {
                    type: 'input',
                    message: 'What song would you like to search?',
                    name: 'songChoice'
                }
            ])
                .then(answers => spotify(answers.songChoice))
            break

        case 'Search for a movie':
            inq.prompt([
                {
                    type: 'input',
                    message: 'What movie would you like to search?',
                    name: 'movieChoice'
                }
            ])
                .then(answers => omdb(answers.movieChoice))
            break

        case "Search for an artist's next concert":
            inq.prompt([
                {
                    type: 'input',
                    message: 'Which artist would you like to search?',
                    name: 'artistChoice'
                }
            ])
                .then(answers => bands(answers.artistChoice))
            break
    }

}

const runApp = () => {
    if (process.argv[2] === 'init') {
        inq.prompt([
            {
                type: 'list',
                message: 'Welcome! What would you like to do?',
                name: 'userChoice',
                choices: ['Search for a song', 'Search for a movie', "Search for an artist's next concert"]
            }
        ])
            .then(answers => decision(answers.userChoice))
    }
}

runApp()