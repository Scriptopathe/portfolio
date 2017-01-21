import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Shield design for a gas sensor.",
    experienceType: common.ExperienceType.Academic,
    module: Modules.SmartDevices,
    competences: Modules.Competences([
        Modules.Competence(Modules.SmartDevices, 2, 3),
        Modules.Competence(Modules.SmartDevices, 2, 4),
    ]),
    tags: ["Shield", "Eagle", "PCB"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
During the labs, I have been designing an instrumentation shield for Arduino Uno, which goal is to process the values measured by a gas sensor (that we made earlier), 
display them (with a LCD screen) and send them via Bluetooth. This entry contains the schematic and layout realized, and a link to the source.
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
It is the first time I had to deal with designing a shield.  Thanks to this lab, I learned how to use a PCB design software, Eagle, to create and use my components in 
order to create a full board. I had to face routing problems, integrate specific contraints related to the fabrication process 
(pads size, angles of the route intersections, and so on).
It was a completely new experience for me, having a more software-oriented background. I cannot honnestly say that I master the design process perfectly, but at least
I got introduced to it, and I am now more aware of some problems that PCB designers face.   
`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/shield.pdf`
    },

    annexes: [
        {
            name: "Source code",
            url: "assets/annexes/shield-alvarez-josue.zip"
        }
    ],
    /** Ajouter la pièce jointe */
    thumbnailUrl: "assets/images/shield.png"
};

common.library.entries.push(entry)