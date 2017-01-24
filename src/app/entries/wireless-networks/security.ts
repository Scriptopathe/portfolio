import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Security in IoT Platforms",
    experienceType: common.ExperienceType.Academic,
    module: Modules.WirelessNetworks,
    year: 2017,
    competences: Modules.Competences([
        Modules.Competence(Modules.WirelessNetworks, 1)
    ]),
    tags: ["Security", "Cloud", "IoT", "Row-Hammer"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
Connected devices are integrated in a complex environment : they are connected through a network infrastructure
to services that are able to collect data from them and to configure or send order to the devices. This services
may be hosted on cloud plateforms, where physical machines might be shared among several customers. These
physical machines are based on specific and known hardware.

When thinking about security matters, one must take into account all the environment around the connected devices
to identity flaws : the device itself, the networking protocol, the communication protocol (application layer), 
the cloud platform, where the cloud platform is hosted, the hardware on which runs the cloud platform, and so on.

In this presentation, we demonstrate some vulnerabilities that can be exploited to attack the
services of an IoT cloud platform. 
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
During the making of the presentation, the reading of the research articles, and the lectures provided by E. Alata, 
I realised that a weakness in a single component of the chain of an IoT environment can make the whole environment
vulnerable. The vulnerabilities can come from hidden channels, as it was the case for the attacks in this presentation,
which are not easy to spot when overlooking the components of the environment. 

The vulnerabilities of an IoT environment can have major consequences : theft of private / confidential data, remote 
acting on connected objects (which may lead to safety issues, if we consider connected vehicles), and so on.

As IoT environment are composed of various components, it is the role of the component designers to study and advertise
the possible flaws of a component, in order to know the risks linked to the usage of that component. 
Sometimes the flaws can be corrected, sometimes they cannot beccause of functionnal requirements. 

In that case, it is necessary to know the consequences of an exploitation of such flaws and be able to decide if 
they can or cannot be tolerated.

In the general case, there is no way to prove that a system has no vulnerabilities. Therefore, it is necessary to track 
the known vulnerabilities of components as they are discovered, and take the right counter-measures. `,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/security.pdf`
    },
    

    thumbnailUrl: "assets/images/security.jpg"
};

common.library.entries.push(entry)