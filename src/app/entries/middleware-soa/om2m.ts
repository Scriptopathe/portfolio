import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Middleware for IoT : OM2M lab",
    experienceType: common.ExperienceType.Academic,
    module: Modules.MiddlewareService,
    competences: Modules.Competences([
        Modules.Competence(Modules.MiddlewareService, 2)
    ]),
    tags: ["OM2M", "oneM2M", "M2M", "Middleware", "Interoperability"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
As the number of connected objects and communication protocols grows, it is more and more complex to 
develop applications which can interact with various connected objects. In this lab, we were introduced
to **Eclipse OM2M**, an implementation of the **oneM2M** standard. The report covers the topics and concepts
encountered during the lab, such as deploying a M2M platform, and connecting objects to it.
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
During this lab, I experienced with the **deployment and usage of a M2M platform**, and the connection of 
two devices (**Philips HUE** lamps) to this platform. I learned that using such standard architecture, 
it is possible to abstract the low level communication layers of connected devices through a **high level 
REST API** that can be used to build complex applications that interect with various sensors and actuators. 
I also discovered that **connecting a new device** to the platform can be done in a simple way, that enables
time-efficient integration of new technologies in the platform.
    `,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/iot.pdf`
    },
    
    thumbnailUrl: "assets/images/m2m.jpg"
};

common.library.entries.push(entry)