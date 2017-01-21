import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "3D real-time chaotic fractal landscape rendering",
    experienceType: common.ExperienceType.Personnal,
    module: Modules.Miscellaneous,
    competences: Modules.Competences([
        Modules.Competence(Modules.Miscellaneous, 2)
    ]),
    tags: ["3D", "Rendering"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
This project was made during my second year at INSA. I realized it with Lucas Jacques,
during the module "Chaos and Fractals". It then turned into a personnal project on which
I discovered a lot about 3D rendering. This video demonstrates real-time 3D rendering of 
an auto-generated world, based on noise and fractals.
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
While making this project, I learned about :
* Graphics pipelines
* Shader languages
* 3D rendering techniques : HDR, Bloom, Depth of Field, Reflection, 
  Shadow mapping, instancing, quad-tree based culling...
`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.YoutubeURL,
        contentValue: 
        `https://www.youtube.com/embed/DDCWPk_VSkI`
    },
    

    thumbnailUrl: "assets/images/julia.jpg"
};

common.library.entries.push(entry)