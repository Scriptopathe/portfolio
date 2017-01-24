import * as common from '../common'
import { Modules } from '../competences'

let entry : common.Entry = {
    /* ~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~ */
    name: "Project : Live GPS tracking of sailing ships",
    experienceType: common.ExperienceType.Academic,
    module: Modules.Project,
    year: 2017,
    competences: Modules.Competences([
        Modules.Competence(Modules.MiddlewareService, 1), // SOA
        Modules.Competence(Modules.DataProcessing, 1), // Software Engineering
        Modules.Competence(Modules.Project, 1), // Project
        Modules.Competence(Modules.InnovationAndHumanities, 1), // Gérer un projet innovant
        Modules.Competence(Modules.InnovationAndHumanities, 2), // Collaborative work
        Modules.Competence(Modules.InnovationAndHumanities, 3), // Savoir convaincre
        Modules.Competence(Modules.WirelessNetworks, 2, 8) // Energie
    ]),
    tags: [],

    /* ~~~~~~~~~~~~~~~~ Abstract ~~~~~~~~~~~~~~~~ */
    abstract: `
TODO : include paper abstract
`,

    /* ~~~~~~~~~~~~~~~~ Conclusion ~~~~~~~~~~~~~~~~ */
    conclusion: `
# Software Engineering : Project Management
The project involved many different skills and activities, as well as a lot of work and time.
As we were seven people in the team, good project management was crucial in order to end up
with a working product. We needed to coordinate the activities, establish roadmaps, estimate 
development time, properly document the interfaces between different sub-parts of the project 
made by different sub-groups, keep everyone informed about the advancement status of all
parts of the projects, manage skills and motivations, and so on. 

To do so, we used the scrum methodology, at first with the IceScrum tool, then with other kind 
of tools that better suited our needs : we needed to be instantly notified when a new task showed up,
and to plan tasks with a smaller granularity than a week.

# Collaborative work
At the start of the project, I only knew about one of my team mates. I learned that there are important
steps from the team creation to a successful collaborative work. Taking the time to know the 
people of the group, how they like to work, what could upset them, which skills they have and
their technical background is essential to a good communication and collaboration. 

# Service architecture
As we built a Service Oriented Architecture, I learned about good design of services, and how to 
interconnect them. However, that was not something new for me, as I already built services in 
the past. As we used a technology (Express.js / Typescript) that nobody in the group had never used
before, I compared it to other technologies I used in the past, which sharpened my general comprehension
of server frameworks. 

# Database technologies
During my studies, I was introduced several times to relationnal databases besides having used them
before. I used mainly Object Relationnal Mappers to abstract to SQL queries, as the Object paradigm 
is very close to the Relationnal paradigm. However, for this project, I wanted to try a non-relationnal 
database, because it recently became really popular. Through this choice, I learned interesting things
about these database systems, and I also learned that I should not have used a NoSQL database, the
integrity of the data must be preserved by the user of the DBMS, which is not the case in SQL databases
where integrity-check mecanisms exist. However, it was really practical to use, made us develop very fast,
at the price of decreased robustness or additionnal work to maintain data integrity.

# Software Deployment & Virtualization
Software deployment is a crucial part of any application lifecycle. I often underestimate the work
needed to deploy an application in a real environment. During this project, I had to figure out
which were the best options to deploy the software, given the hardware and no-cloud constraints. 
I learned about building networks in virtualized environments, making virtual machines communicate
with each other on the same host and with the outside world.

# LoRa technology and LoRaWAN networks
Before working on this project, we all heard a lot of theory about LoRa and how it worked.
With this project, I had the chance to use it and learn how it worked from the connect device
to the application services. As the device team was having issues with the device / gateway,
I dug with them in the library code to know how the transceivers worked, and how the MAC layer
really worked. Also, as I was mainly working on the server/client part, I had to find how to 
communicate with a LoRa application server. Now, I have a clear view of the interfaces between
each components of the chain that passes the data from the devices to the applications. 

# Energy management
During this project, I had a glimpse at energy management techniques. 
First : we needed to choose a battery which corresponded to our autonomy needs, so we built
a mission profile for our device, and estimated how much energy was needed to last for the
wanted duration. 
Also, I learned how to use the sleep mode of devices to shutdown their alimentation, and save
power usage. 

# Presentation skills
Through this project, I also learned how to present a project from different angles, to different 
publics. It is always essential to adapt the project presentation to the audience.

`,
    
    /* ~~~~~~~~~~~~~~~~ Content ~~~~~~~~~~~~~~~~ */ 
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `` // TODO
    },
    

    thumbnailUrl: "assets/images/boats.jpg" // TODO
};

common.library.entries.push(entry)