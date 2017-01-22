import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Semantic Web",
    experienceType: common.ExperienceType.Academic,
    module: Modules.DataProcessing,
    year: 2017,
    competences: Modules.Competences([
        Modules.Competence(Modules.DataProcessing, 2)
    ]),
    tags: ["Ontology", "Semantic Web"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
The evolution of the "web" transformed it into a place where data is produced in gigantic amounts.
However, although the data produced is human readable, or at least readable by specific applications, 
it can not be processed automatically to build a knowledge base. This is where the "semantic web" and ontologies
comes into account. This lab report demonstrates how we can use ontologies to represent knowledge for a given application field,
create new knowledge using rules and knowledge acquired through enrichment of raw data.  
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
During the lab, I learned how to represent real world objects (in my case, meteorological data) using an ontology.
I also learned how to retrieve data from open data sources, parse it, and enrich it with metadata and then deduce
new facts using a reasoner. 
I could also get a glimpse at the usage of ontologies to build applications which would be able to make requests to
retrieved rich data from a knowledge base.  

    `,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/semantic-web.pdf`
    },

    /* ~~~~~~~~~~~~~~~~ Annexes ~~~~~~~~~~~~~~~~ */
    annexes: [
        {
            url : "assets/annexes/meteorology-enrichment.tar.gz",
            name : "Data Enrichment Java Code"
        },
        {
            url : "assets/annexes/meteorology-ontology.owl",
            name : "Meteorology ontology"
        }
    ],

    thumbnailUrl: "assets/images/ontology.png"
};

common.library.entries.push(entry)