export interface UF
{
    name : string
    competences : string[]
}

export interface Module
{
    /** Name of the Module */
    name : string

    /** Material UI color : see http://materializecss.com/color.html */
    color : string

    /** UFs in the module */
    ufs : UF[]

    /** Counters for each uf of the module.*/
    modcounters? : number[][]
}

export class CompetenceID 
{
    constructor(public module : Module, public ufId : number, public competenceId : number) { }
    asString() : string {
        return this.module.name + "::" + this.ufId + "::" + this.competenceId
    }
}

/**
 * Provides 5ISS Modules as static members.
 */
export class Modules {
    /**
     * Returns the competence identifier for the given module and the given
     * uf number and uf item number.
     * For instance, for the module Example
     * UF 1. Something
     *      Competence 1. Understand something
     *      Competence 2. Know how to do this
     * UF 2. Something else 
     *      Competence 1. Understand something else
     *      Competence 2. Know how to do this other thing
     * 
     * Competence(Modules.Example, 1, 2) corresponds to item
     *      "UF1. Competence 2. Know how to do this"
     * 
     * If competence id is not given, the competence id will correspond to
     * ALL the competences in the given UF.
     */
    static Competence(mod : Module, ufId? : number, competenceId? : number) : CompetenceID[] {
        let array = []
        let ufIds = ufId == undefined ? mod.ufs.map((value, index) => index) : [ufId - 1]

        // Initializes counters.
        if(!mod.modcounters) {
            mod.modcounters = []
            for(let ufI in mod.ufs) {
                let uf = mod.ufs[ufI]
                mod.modcounters.push([])
                for(let compI in uf.competences) {
                    mod.modcounters[ufI].push(0)
                }
            }
        }

        for(let uf of ufIds) {
            let competenceIds = competenceId == undefined ? mod.ufs[uf].competences.map((value, index) => index) : [competenceId - 1]
            for(let competence of competenceIds) {
                array.push(new CompetenceID(mod, uf, competence))
                mod.modcounters[uf][competence] += 1
            }
        }

        return array 
    }

    static Competences(competences : CompetenceID[][]) {
        let arr = []
        for(let comps of competences) {
            arr.push(...comps)
        }
        return arr
    }

    static WirelessNetworks : Module = { 
        name: "Wireless Networks and Security",
        color: "blue", // deep-purple lighten-2
        ufs : [
            {
                name: "Sécurité dans les réseaux des objets connectés",
                competences : [
                    "Comprendre les notions de base de la sécurité",
                    "Etre capable d'identifier les faiblesses d'une architecture IoT",
                    "Savoir identifier l'impact de l'exploitation d'une vulnérabilité sur une architecture IoT",
                    "Etre capable de proposer des contre-mesures de sécurité adaptées"
                ]
            },
            {
                name: "Wireless Networks",
                competences : [
                    "Comprendre les étapes majeurs de développement des communications mobiles et les développements technologiques associés",
                    "Connaitre les enjeux des nouvelles générations de communications mobiles",
                    "Etre capable d'analyser et évaluer  les technolgies réseaux sans fil optimales",
                    "Etre capable de proposer de solutions de technologies réseaux optimales applicables à l'IoT",
                    "Comprendre et maitriser la prise en compte de la contrainte energetique dans l'optimisation de protocoles de communication pour IoT",
                    "Comprendre et maitriser la prise en compte de la contrainte securité dans l'optimisation de protocoles",
                    "Connaitre les principaux traitements utilisés dans une communication numérique et savoir expliquer la structure de base des émetteurs-récepteurs radiofréquences numériques  ",
                    "Maîtriser l'architecture d'un système de gestion de l'énergie,  à stockage simple, à récupération d'énergie, savoir dimensionner l'élément de stockage en fonction du cahier des charges"
                ]
            }
        ]
    }

    static SmartDevices : Module = { 
        name: "Smart Devices",
        color: "deep-purple", // light-blue accent-4
        ufs : [
            {
                name: "Introduction aux capteurs",
                competences : [
                    "Comprendre les notions de base des capteurs et des chaîne de mesure: aspects physique/électronique et métrologique",
                    "Etre capable de fabriquer un capteur à nanoparticules (synthèse chimique, assemblage, test) avec les outils de la micro-électronique",
                    "Etre capable de concevoir la datasheet du capteur fabriqué"
                ]
            },
            {
                name: "Micro-contrôleurs et open source hardware",
                competences : [
                    "Comprendre l'architecture des microcontrôleurs et savoir les utiliser",
                    "Etre capable de dimensionner l'ensemble (capteur + conditionneur + microcontroleur) en fonction de l’application",
                    "Etre capable de concevoir l'électronique de conditionnement du signal du capteur (design + simulation)",
                    "Etre capable de réaliser un shield permettant d'interfacer le capteur de gaz à nanoparticules",
                    "Etre capable de réaliser le logiciel associé et l’interface homme/machine éventuelle",
                    "Etre capable d'intégrer le tout pour réaliser un smart devices"
                ]
            }
        ]
    }

    static MiddlewareService : Module = { 
        name: "Middleware & SOA",
        color: "yellow", // teal accent-3
        ufs : [
            {
                name: "Architecture de service",
                competences : [
                    "Savoir définir une architecture orientées services (SOA)",
                    "Déployer une architecture SOA en mettant en place des services web",
                    "Déployer et configurer une architecture SOA en utilisant le protocole SOAP",
                    "Déployer et configurer une architecture SOA en se basant sur le style architectural REST.",
                    "Intégrer un ochestrateur de services dans une architecture SOA",
                ]
            },
            {
                name: "Intergiciel pour l’Internet des Objets ",
                competences : [
                    "Savoir positionner les standards principaux de l’Internet des Objets",
                    "Déployer une architecture conforme à un standard et mettre en place un système du réseau de capteurs aux services",
                    "Déployer et configurer une architecture IoT en utilisant OM2M",
                    "Interagir avec les objets en utilisant une architecture REST",
                    "Intégrer un nouvelle technologie d’objets dans une architecture IoT",
                ]
            },
            {
                name: "Adaptabilité : cloud et gestion autonomique",
                competences : [
                    "Comprendre la notion de cloud",
                    "Utiliser une infrastructure de cloud dans un mode Infrastructure As A Service",
                    "Déployer et adapter de manière autonomique une plate-forme pour l’Internet des Objets sur le cloud",
                    "Déployer une architecture PaaS basée sur OM2M",
                    "Rendre autonomique une architecture PaaS",
                ]
            },
        ]
    }

    static DataProcessing : Module = { 
        name: "Data processing",
        color: "orange", // green darken-3
        ufs : [
            {
                name: "Ingénierie logicielle",
                competences : [
                    "Définir les différentes phases du développement logiciel",
                    "Savoir les différents méthodologies de gestion de projet.",
                    "Appliquer une méthologie de gestion de projet pour le projet intégrateur.",
                ]
            },
            {
                name: "Traitements des données sémantique",
                competences : [
                    "Concevoir et comprendre un modèle conceptuel pour un domaine d'application donné",
                    "Savoir inférer de nouvelles connaissances à partir d'une base de connaissance (terminologie et assertions)",
                    "Etre capable d'enrichir des données avec des méta-données sémantisées",
                ]
            },
            {
                name: "Traitement Et analyse de données: big data",
                competences : [
                    "Savoir explorer et représenter des ensembles de données",
                    "Maitriser R",
                    "Maitriser la complexité des traitements statistiques et connaitre les techniques de contournement"
                ]
            },
        ]
    }

    static InnovationAndHumanities : Module = { 
        name: "Innovation and Humanities",
        color: "deep-orange", // yellow darken-3
        ufs : [
            {
                name: "Gérer un projet innovant",
                competences : [
                    "Résoudre un problème de façon créative (mettre en place différentes méthodes de créativité pour suivre le processus créatif : ante beginning, identification, incubation, illumination, sélection d’idée).",
                    "Développer la phase amont de l’innovation (veille technologique et risque concurrentiel, analyse d’antériorité en collaboration avec l’INPI)",
                    "Appréhender les processus de production, de validation, de diffusion, d’acceptance (risque organisationnel et social), et de répercussion de l’innovation",
                    "Etablir un business plan (modalités de financement de l’innovation, marketing des produits innovants)",
                ]
            },
            {
                name: "Apprendre le travail collaboratif",
                competences : [
                    "Etudiants pluridisciplinaires mis en situation de travail de groupe"
                ]
            },
            {
                name: "Savoir convaincre : présenter et défendre une idée",
                competences : [
                    "Formuler et échanger des hypothèses",
                    "Proposer une stratégie pour répondre à la problématique",
                    "Proposer un modèle associé",
                    "Choisir, concevoir et/ou justifier un protocole ou un dispositif expérimental",
                ]
            },
            {
                name: "Savoir évaluer les compétences acquises",
                competences : [
                    "Réfléchir sur ses propres processus et méthodes d’apprentissage",
                    "Mettre en évidence et valoriser toutes ses expériences d’apprentissage, explicites ou implicites",
                    "Devenir autonome et responsable vis-à-vis de son propre processus d’apprentissage"
                ]
            },
        ]
    }

    static Project : Module = { 
        name: "Project",
        color: "light-green", // orange darken-3
        ufs : [
            {
                name: "Projet",
                competences : [
                    "Analyser un probleme issue d'une application réelle",
                    "Proposer une solution  argumentée scientifiquement",
                    "Realiser un prototype fonctionnel pour ce probleme",
                    "Presenter et argumenter en anglais devant un jury les choix scientifiques faits",
                    "Réaliser un rapport synthètique en anglais du projet technique realisé",
                ]
            },
        ]
    }

    static Miscellaneous : Module = { 
        name: "Miscellaneous",
        color: "light-blue", // orange darken-3
        ufs : [
            {
                name: "Linux Kernel Development",
                competences : [
                    "Contribute to an Open Source project",
                    "Understand and improve a Linux Kernel submodule"
                ]
            },
            {
                name: "3D application development",
                competences : [
                    "Understand the graphics card pipelines",
                    "Understand shader languages and develop custom shaders",
                    "Understand and implement 3D processing techniques (Bloom, HDR, Depth of Field)",
                    "Generate 3D models from mathematical models"
                ]
            },
        ]
    }

    static ALL : Module[] = [
        Modules.SmartDevices, 
        Modules.WirelessNetworks, 
        Modules.MiddlewareService,
        Modules.DataProcessing, 
        Modules.InnovationAndHumanities, 
        Modules.Project,
        Modules.Miscellaneous
    ]
}