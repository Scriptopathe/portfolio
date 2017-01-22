import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Internship - LAAS : Development of an interface for SimSo",
    experienceType: common.ExperienceType.Professional,
    module: Modules.Miscellaneous,
    year: 2015,
    competences: Modules.Competences([
        
    ]),
    tags: ["python", "javascript", "angular", "web development", "SimSo", "research"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
At the end of my third year at INSA, I wanted to get an intership in a 
research laboratory. The main goal of this internship was to look at how
people worked in the research field, though my intership subject was
a simple technical one : building a web interface for a real-time
scheduling simulation tool.`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
Thanks to this internship, I got a glimpse at how people worked in a research lab.
I really enjoyed the environment, and the people I met there taught me a lot about
how they worked. 

I also improved my skills in web development, through the development of the Simso web
tool (http://projects.laas.fr/simso/simso-web/#/configuration), and an experiment 
platform used by the researchers to share their data sets and
results, in order to be able to reproduce experiment made by other researchers.
`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.Link,
        contentValue: 
        `http://projects.laas.fr/simso/simso-web/#/configuration`
    },

    annexes: [
        
    ],
    /** Ajouter la pièce jointe */
    thumbnailUrl: "assets/images/laas.png"
};

common.library.entries.push(entry)