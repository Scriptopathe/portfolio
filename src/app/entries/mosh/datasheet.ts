import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Gas sensor datasheet",
    experienceType: common.ExperienceType.Academic,
    module: Modules.SmartDevices,
    year: 2017,
    competences: Modules.Competences([
        Modules.Competence(Modules.SmartDevices, 1)
    ]),
    tags: ["datasheet", "gas sensor"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
During our semester, we have been doing a one week intership at the AIME laboratory. 
We used the tools in the laboratory to make a gas-sensitive sensor, test it and 
characterize it. This datasheet was made using the data we collected during the intership.
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
Through this internship, I have learned about the fabrication process of a nanoparticle gas sensor,
how to make tests on such sensors, and I faced the difficulty of characterizing such sensors : 
lots of parameters influence the measurement. If we had time to do a better characterization of the sensor,
we would have done more tests by setting some parameters and making only one parameter change to observe the
effect of each parameter on the measures.
`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/datasheet.pdf`
    },

    thumbnailUrl: "assets/images/aime.jpg"
};

common.library.entries.push(entry)