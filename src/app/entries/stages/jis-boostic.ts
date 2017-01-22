import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Junior Insa Service (JIS) project : Mobile videogame development.",
    year: 2016,
    experienceType: common.ExperienceType.Professional,
    module: Modules.Miscellaneous,
    competences: Modules.Competences([
        
    ]),
    tags: ["C#", "Xamarin", "Video Game", "Mobile", "Android", "iOS"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
In the framework of a JIS project, I developped a videogame for Android and iOS.
This videogame consisted in a pac-man clone with online score functionnalities.
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
# Project and time management
This project had very tight time constraints. I had two weeks to build this game, 
but at the time I was in an intership in Viveris Technologies. Therefore, I could
only work on this project after my workday. 
I had to get feedback from my client in very short cycles (2-3 days), in order to 
make the product they really wanted. This is mostly because the specifications given
by the client were ambiguous, and a lot of visual aspects were not in the specs. 
In the end, the client was happy with the product !

# Mobile development
This project increased my skills in multi-platform mobile development. I had to think
about how to test, build, and deploy my application, struggle with bugs that only appeared
on specific phone models, and so on. 
`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.Link,
        contentValue: 
        `https://play.google.com/store/apps/details?id=com.lallemand.boostic`
    },

    annexes: [
        
    ],
    /** Ajouter la pièce jointe */
    thumbnailUrl: "assets/images/android.png"
};

common.library.entries.push(entry)