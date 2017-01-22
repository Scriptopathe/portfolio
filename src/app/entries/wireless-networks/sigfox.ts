import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Sigfox LPWAN phy and mac analysis",
    experienceType: common.ExperienceType.Academic,
    module: Modules.WirelessNetworks,
    year: 2017,
    competences: Modules.Competences([
        Modules.Competence(Modules.WirelessNetworks, 2, 1),
        Modules.Competence(Modules.WirelessNetworks, 2, 2),
        Modules.Competence(Modules.WirelessNetworks, 2, 3),
        Modules.Competence(Modules.WirelessNetworks, 2, 4),
        Modules.Competence(Modules.WirelessNetworks, 2, 5),
        Modules.Competence(Modules.WirelessNetworks, 2, 6),
        Modules.Competence(Modules.InnovationAndHumanities, 3) // Savoir convaincre
    ]),
    tags: ["Wireless Networks", "Sigfox", "LORA", "LPWAN"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
Sigfox is the name of the French company building and operating the "SIGFOX" wireless network. 
It is often referred as one of the best solutions for IoT networks. In this small study we
address Sigfox MAC & PHY layer, as well as other aspects such as security, range, energy consuption,
doppler sensitivity, geolocation capabilities. 
We also briefly compare Sigfox about to GSM and LoRa networks.   
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
This study introduced one of the emerging IoT network solutions for **low power devices** with **long range** and **low
data rate**. Such a network can bring to life a set of applications that do not require a lot of data throughput,
with **low development complexity**, and **reasonable cost**. 

However, it is **not suited** for all types of applications, 
and is only the best option for **a restricted set of applications**. 

**Security-wise**, Sigfox only provides authentication, which means that the security layer must be handled at
higher levels by the application developpers.

**Energy-wise**, Sigfox is said to be energy-efficient, but it is mostly because of the duty cycle of the devices
that emit during a very limited period of time.
    `,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/sigfox-analysis.pdf`
    },
    

    thumbnailUrl: "assets/images/sigfox.png"
};

common.library.entries.push(entry)