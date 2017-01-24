import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Software music compositon",
    experienceType: common.ExperienceType.Personnal,
    module: Modules.Miscellaneous,
    year: 2016,
    competences: Modules.Competences([

    ]),
    tags: ["Signal processing", "Music theory"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
Having played drums since high-school and having started playing the guitar at my 3rd year of
INSA, I became really interested in music composition and wanted to investigate music theory.
This small automatic music composition software is the result of my curiosity in that field.

Code is available on github at : [https://github.com/Scriptopathe/mozarella](https://github.com/Scriptopathe/mozarella)
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
In this project, I used the knowledge acquired in signal processing to create and manipulate signal.
I learned about the fundamentals of what is music, and what are music notes in terms of signals.
I also learned about music theory, how to construct scales and arrange them !
`,


    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.SoundcloudURL,
        contentValue: 
        `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/304319228&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`
        
    },
    

    thumbnailUrl: "assets/images/music.jpg"
};

common.library.entries.push(entry)