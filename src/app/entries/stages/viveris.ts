import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Internship - Viveris technologies : optimization of an intelligent firewall.",
    experienceType: common.ExperienceType.Professional,
    module: Modules.Miscellaneous,
    year: 2016,
    competences: Modules.Competences([
        Modules.Competence(Modules.Miscellaneous, 1),
        Modules.Competence(Modules.InnovationAndHumanities, 3)
    ]),
    tags: ["C", "Kernel development", "nftables", "iptables", "firewalling"],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
During my internship in Viveris technologies, I had to work on an intelligent firewalling solution.
This poster summarizes the things I did while working there.

`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
# Analyze a software product and identify its performance bottlenecks
## \\* **Build and use tools for analysis**
During this internship, I had to build tools to collect relevant data and metrics about the software performance
and behavior. 

## \\* **Analyse the results** 
Then, I had to build a critical analysis of the results, make hypothesis on the cause of strange phenomenons, and confirm
or infirm these hypothesis by doing further investigations.

## \\* **Discuss and argument in favor of solutions**
After I found the cause of problems, I had to explain these problems and create a technical solution, and explain why it solves
the problem. Then, I had to prove that the solution worked by re-doing the tests and seeing the difference.

# Open Source Linux kernel development
During my experiments, I discovered that some performance issues of the product came from the way the kernel handled 
certain nftables subsystem primitives. I had to dig and understand the kernel code to develop a solution. As I found out
that my modifications could improve the kernel performance, I submited them to the nftables subsystem kernel maintainer.
This made me learn how open source contributions on the kernel worked, how to send patches through mailing lists, and also
lots of good coding practice !


`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `assets/PosterStage4A.pdf`
    },

    annexes: [
        
    ],
    /** Ajouter la pièce jointe */
    thumbnailUrl: "assets/images/viveris.jpg"
};

common.library.entries.push(entry)