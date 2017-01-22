import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Internship - INSERM : IT infrastructure maintenance",
    year: 2013,
    experienceType: common.ExperienceType.Professional,
    module: Modules.Miscellaneous,
    competences: Modules.Competences([
        
    ]),
    tags: ["maintenance", "active directory"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
For my first year intership, I helped in the maintenance of an IT infrastructure.
I performed mainly basic maintenance tasks, setup of computers, solving of network problems,
and I had been given two small projects : the creation of a file sharing system and an open
inventary management tool.  
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: null,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/stage1A.pdf`
    },

    annexes: [
        
    ],
    /** Ajouter la pièce jointe */
    thumbnailUrl: "assets/images/inserm.png"
};

common.library.entries.push(entry)