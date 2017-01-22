import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Roles of satellites in 5G",
    experienceType: common.ExperienceType.Academic,
    module: Modules.WirelessNetworks,
    year: 2017,
    competences: Modules.Competences([
        Modules.Competence(Modules.WirelessNetworks, 2, 1),
        Modules.Competence(Modules.WirelessNetworks, 2, 2),
        Modules.Competence(Modules.InnovationAndHumanities, 3) // Savoir convaincre
    ]),
    tags: ["Satellites", "5G"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
5GPPP defines several Key Performance Indicators (KPIs) for the 5th generation of
mobile telecommunications. In this presentation, we highlight the roles played by satellite 
in the fullfilment of the KPIs.   
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
During the lectures about 5G, and by making this presentation, I had the opportunity to discover the technological challenges
that lead to the establishment of 5G. The actual network infrastructure cannot deal with the arrival of more connected devices 
and new bandwidth-demanding applications (Augmented Reality and UHD Multimedia for instance). 5G networks must conform to these
evolutions, while lowering the cost of the network exploitation. 
Actual challenges range from lowering the energy consuption of the end nodes and insfrastructures, improving the latency, 
throughput, QoE, reliability (by providing resilence through satellites for instance), spectrum sharing to offering
network virtualization functions.`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/role-of-satellites-in-5g.pdf`
    },
    

    thumbnailUrl: "assets/images/satellite.jpg"
};

common.library.entries.push(entry)