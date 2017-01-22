import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Cloud computing and autonomic management",
    experienceType: common.ExperienceType.Academic,
    module: Modules.MiddlewareService,
    year: 2017,
    competences: Modules.Competences([
        Modules.Competence(Modules.MiddlewareService, 3)
    ]),
    tags: ["Cloud", "Autonomic", "Self-management"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
Cloud computing offers a cost-effective solution for deploying connected applications,
with high flexibility and performance requirements. 
This lab report illustrates the deployment of a M2M platform on an Openstack cloud platform,
and demonstrates the use of autonomic computing to perform automatic scaling of the ressources
dedicated to the M2M platform. 
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
Through this lab I had my first experience with Openstack cloud platform. 
Having experienced Microsoft Azure and Amazon Webservices before, this is not the 
first experience I have with cloud computing. 
However, in this lab I learned how to interact with a cloud platform using a REST API, which
is an interesting thing to automate the processes involved in the management of virtual machines.
Also, I learned how to make a PaaS architecture (a little bit) autonomic, by adding automatic scalability
functionnalities through the usage of Frameself. 
    `,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/tp-cloud.pdf`
    },
    
    thumbnailUrl: "assets/images/cloud.png"
};

common.library.entries.push(entry)