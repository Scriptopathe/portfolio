import * as common from './common'
import { Modules } from './competences'

let entry : common.Entry = {
    name: "Dummy Entry",
    experienceType: common.ExperienceType.Academic,
    module: Modules.DataProcessing,
    competences: Modules.Competences([
        Modules.Competence(Modules.MiddlewareService, 1)
    ]),
    tags: ["TagLulz", "TagLalz"],
    abstract: `This is an abstract description`,
    conclusion: `This is the conclusion`,
    content: {
        contentType: common.ContentType.RawMarkdownDocument,
        contentValue: 
        `
# This is markdown
See what i *mean*        
`
    },
    thumbnailUrl: "http://materializecss.com/images/sample-1.jpg"
};

common.library.entries.push(entry)

entry = {
    name: "Dummy Entry 2",
    experienceType: common.ExperienceType.Professional,
    module: Modules.DataProcessing,    
    competences: Modules.Competences([
        Modules.Competence(Modules.WirelessNetworks),
        Modules.Competence(Modules.SmartDevices),
        Modules.Competence(Modules.DataProcessing),
        Modules.Competence(Modules.InnovationAndHumanities),
        Modules.Competence(Modules.DataProcessing),
        Modules.Competence(Modules.Project)
    ]),
    tags: ["TagLulz", "TagLalz"],
    abstract: `This is an abstract description`,
    conclusion: `This is the conclusion`,
    content: {
        contentType: common.ContentType.RawMarkdownDocument,
        contentValue: 
        `
# This is markdown
See what i *mean*
`
    },
    thumbnailUrl: "http://materializecss.com/images/sample-1.jpg"
};

common.library.entries.push(entry)