import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Software Defined Radio",
    experienceType: common.ExperienceType.Academic,
    module: Modules.WirelessNetworks,
    year: 2017,
    competences: Modules.Competences([
        Modules.Competence(Modules.WirelessNetworks, 2, 4),
        Modules.Competence(Modules.WirelessNetworks, 2, 7),
    ]),
    tags: ["Software Defined Radio", "GNU Radio"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
As the number of ways to communicate through wireless links increases,
it is necessary to be able to handle many radio protocols and modulations
with the same hardware. 

The arrival of Sofware Defined Radio (SDR) and Universal Software Radio 
Periferals (USRP) made it possible to do so.

In this lab, we were introduced to SDR through the 
manipulation of digital signal processing concepts and the usage of the 
GNU Radio software. 
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
Thanks to this lab, I manipulated fundamental concepts and applied them 
to the processing of example signal captures. It showed me that it is possible
to do advanced signal processing through software, and to deploy reconfigurable
radio stations. I think it might also be adapted for the prototyping of radio
protocols in an IoT context.  
`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/gnu-radio.pdf`
    },
    

    thumbnailUrl: "assets/images/sdr.jpg"
};

common.library.entries.push(entry)