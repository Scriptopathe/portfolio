import * as common from './common'
import { Modules } from './competences'

let entry : common.Entry = {
    name: "Sigfox LPWAN phy and mac analysis",
    experienceType: common.ExperienceType.Academic,
    module: Modules.WirelessNetworks,
    competences: Modules.Competences([
        Modules.Competence(Modules.WirelessNetworks, 1, 1),
        Modules.Competence(Modules.WirelessNetworks, 2)
    ]),
    tags: ["Wireless Networks", "Sigfox", "LORA", "LPWAN"],
    abstract: `
# Titre
Sigfox is the name of the French companqy building and operating the "SIGFOX" wireless network. 
It is often referred as one of the best solutions for IoT networks. In this small study we
address Sigfox MAC & PHY layer, as well as other aspects such as security, range, energy consuption,
doppler sensitivity, geolocation capabilities. 
We also briefly compare Sigfox about to GSM and LoRa networks.   
`,
    conclusion: `
nmanmanamnamnma  
    `,
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/sigfox-analysis.pdf`
    },
    thumbnailUrl: "http://www.skyhdwallpaper.com/wp-content/uploads/2014/12/Wireless-Network.jpg"
};

common.library.entries.push(entry)