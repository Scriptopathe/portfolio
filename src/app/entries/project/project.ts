import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Project : Live GPS tracking of sailing ships",
    experienceType: common.ExperienceType.Academic,
    module: Modules.Project,
    competences: Modules.Competences([
        Modules.Competence(Modules.MiddlewareService, 1), // SOA
        Modules.Competence(Modules.DataProcessing, 1), // Software Engineering
        Modules.Competence(Modules.Project, 1), // Project
        Modules.Competence(Modules.InnovationAndHumanities, 1), // Gérer un projet innovant
        Modules.Competence(Modules.InnovationAndHumanities, 2), // Collaborative work
        Modules.Competence(Modules.InnovationAndHumanities, 3) // Savoir convaincre
    ]),
    tags: [],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
    
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
## Software Engineering
dekdeokdeo

## Service architecture
eodkoekdeod

`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/role-of-satellites-in-5g.pdf` // TODO
    },
    

    thumbnailUrl: "assets/images/satellite.jpg" // TODO
};

common.library.entries.push(entry)