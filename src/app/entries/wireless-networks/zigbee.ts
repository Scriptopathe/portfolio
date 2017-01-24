import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Zigbee Range and Interference calculation",
    experienceType: common.ExperienceType.Academic,
    module: Modules.WirelessNetworks,
    year: 2017,
    competences: Modules.Competences([
        Modules.Competence(Modules.WirelessNetworks, 2, 3),
    ]),
    tags: ["Zigbee", "Range", "Interference"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
Zigbee is a widely used wireless protocol. This study is an exercice about
modeling radio links and interferences, in order to be able to draw
conclusions on the impact of interferences between Zigbee and WiFi links.
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
Through this study, I learned how to determine theoritically the approximate
range of a Zigbee link and the impact of the environment (WiFi network in this case)
on this link.
The mathematical tools used in this study can be used to evaluate situations
when some radio links interfere with each other, and the deployment conditions
where both radio links can coexist with good performance. `,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/zigbee.pdf`
    },
    

    thumbnailUrl: "assets/images/sdr.jpg"
};

common.library.entries.push(entry)