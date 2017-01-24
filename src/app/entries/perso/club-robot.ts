import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "INSA Robotic Club",
    experienceType: common.ExperienceType.Personnal,
    module: Modules.Miscellaneous,
    year: 2014,
    year2: 2016,
    competences: Modules.Competences([
        
    ]),
    tags: ["Robot"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
From my second year to my fourth year, I participated with the Robotic Club
to the "Coupe de France de Robotique". 
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
The Robotic Club is one of the places where I learnt the biggest amount of things. 
I learned how to work with people with different backgrounds (mechanical, electrical,
computer science), and to integrate a lot of constraints to build a robot designed for
specific tasks. I learned about sensors, servomotors, pid-controllers, simulation, 
and how to make a mobile base.

In the 2015-2016 season, I was responsible of the Computer Science part of the team. 
This was my first experience in managing a team, and setting guidelines and a roadmap
to get the work done. I did a lot of mistakes, which I learned from ! But in the end
the robot did the job !`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.YoutubeURL,
        contentValue: 
        `https://www.youtube.com/embed/KZPJwiQzLIY`
    },

    thumbnailUrl: "assets/images/club-robot.jpg"
};

common.library.entries.push(entry)