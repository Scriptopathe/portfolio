import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Mac layers for Wireless Sensor Networks",
    experienceType: common.ExperienceType.Academic,
    module: Modules.WirelessNetworks,
    competences: Modules.Competences([
        Modules.Competence(Modules.WirelessNetworks, 2, 1),
        Modules.Competence(Modules.WirelessNetworks, 2, 2),
        Modules.Competence(Modules.WirelessNetworks, 2, 3),
        Modules.Competence(Modules.WirelessNetworks, 2, 4),
        Modules.Competence(Modules.WirelessNetworks, 2, 5),
        Modules.Competence(Modules.WirelessNetworks, 2, 6),
    ]),
    tags: ["Wireless Sensor Networks", "WiseMAC"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
This study covers the analysis of MAC-layer protocols for Wireless Sensor Networks. 
It identifies the challenges behind the design of such protocols, and the different techniques employed 
(focusing on TDMA and CSMA variants).
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
Through this study, I learned how the mac-layer implementation could affect energy consumption, latency, 
data throughput, adaptability to topology changes, and routing performance. There is a wide variety of MAC-layer
protocols destined to address specific applications. Therefore it seems like there is no always-best-option protocol. 
Each of the protocols and techniques make specific tradeoffs and prioritize different functionnal goals or network topologies. 

The most important thing I learned is that **all the aspects of the application must be taken into account** before choosing a 
network protocol and MAC-layer protocol : required quality of service, higher level network protocols used (such as routing protocol),
as well as network topology and density.
    `,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/mac-wsn.pdf`
    },

    thumbnailUrl: "assets/images/wsn.png"
};

common.library.entries.push(entry)