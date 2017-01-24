import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Cod'INSA 2015 : Final Phase Subject",
    experienceType: common.ExperienceType.Personnal,
    module: Modules.Miscellaneous,
    year: 2015,
    competences: Modules.Competences([
        
    ]),
    tags: ["CodINSA", "Challenge", "Video-game"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
Cod'INSA is the name of the inter-INSA programming contest.
It is split in two phases : the qualification phase where candicates
use their algorithmic skills to solve problems of various difficulties ; and
the final phase, where the 4 or 5 qualified candicates of each INSA compete
on a house-made video game, where they must build an artificial intelligence.

In 2015, I was in charge of developing the 2015 edition Finals Subject. 
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
## Building the game : A Challenging experience. 
The game I crafted for this contest was a game where each player was an artificial intelligence.
Thus, it requires a client/server architecture, and way to access the state of the game that is
easy to use for the competitors. Doing so, I learned how to separate the game state layer 
from the display layer, while keeping good performance. 

Because the game was a really complex one (MOBA-like, but for artificial intelligence), it required a
tremendous amount of work, and organization. The game is split into a dozen of projects which make up
around 100,000 lines of code brought by 252 commits.

## Creating the tools needed : Clank
Because the competitors chose to program their AI in different languages, I had to create an API which would
be able to work in all their languages, and which would handle large volumes of data efficiently.
In order to do that, I developped my own binary protocol, and a brand new language that could describe a view
of the game state, and automatically generate client and server code to interact with the game state.
In the end, the API for each available language was completely auto-generated from my server code. 

`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.YoutubeURL,
        contentValue: 
        `https://www.youtube.com/embed/DDCWPk_VSkI`
    },
    
    annexes : [
        {
            name: "Final Phase Subject",
            url : "assets/annexes/codinsa/sujet.pdf"
        },
        {
            name: "API Documentation",
            url : "assets/annexes/codinsa/doc-api.pdf"
        },
        {
            name: "Clank Documentation",
            url : "assets/annexes/codinsa/clank-documentation.pdf"
        },
        {
            name: "Cod'INSA Website",
            url : "http://codinsa.org/static/concours"
        },
        {
            name: "Cod'INSA 2015 - Source code (github)",
            url : "https://github.com/Scriptopathe/codinsa2015"
        },
    ],

    thumbnailUrl: "assets/images/TODO.jpg"
};

common.library.entries.push(entry)