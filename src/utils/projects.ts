import { PortfolioProject } from "@/types/projectTypes";
import { loremIpsum } from "./general";

export const projects: PortfolioProject[] = [
    {
        id: "bump",
        name: "Bump",
        subtitle:
            "A React Native mobile app on iOS and Android for meeting new people",
        description: [
            "The GitHub repo for this is not publicly available due to it containing confidential IP and sensitive information. I am happy to talk about it in detail upon request if you would like to find out more.",
            "Pitched for and was awarded Newcastle University's start-up grant funding of over £2000.",
            "Prepared and delivered pitch decks to potential investors.",
            "Built and published a mobile app on iOS and Android, implementing a range of features such as: notifications, payments, instant messaging, camera, and authentication.",
            "Acquired 200 users in 2 weeks through guerrilla marketing, social media, and word of mouth.",
            "Designed, built, and deployed multi-layered, versioned, and authenticated REST APIs both for the mobile app and internal tools.",
            "Provisioned AWS services for deployment; ECS/EC2 for Docker containers utilising load balancing, S3 buckets for storing and serving files, IAM for role and access management, and others.",
            "Implemented Firebase for authentication, user management, analytics, and cloud messaging.",
            "Carried out product discovery and development, through customer interviews, research, and analysis of the market and competitors. Alongside product testing with a variety of potential customers and demographics.",
            "Created UI/UX designs and prototypes in Figma, and marketing materials/brand assets in Illustrator and photoshop.",
            "Wrote a marketing and customer acquisition strategy that leveraged traditional and guerrilla marketing. Prioritising organic growth through virality and network effect whilst minimising costs to meet strict budget constraints.",
            "Produced financial estimates for the first two years of operations including expansion to overseas markets. Also maintained business accounts and financial records.",
            "Wound down to a side-project at the end of October 2024 due to a lack of financial runway.",

        ],
        coverImage: "/bumpCover.svg",
        links: [
            {
                type: "web",
                link: "https://www.bump-connect.com/",
                text: "bump-connect.com",
            },
            {
                type: "figma",
                link: "https://www.figma.com/proto/y2D5HYGYWHqMQAh7d6S6N4/Bump---contact-sharing-app?node-id=0-1&t=gREYaziRlCT2CLf1-1",
                text: "",
            },
            //GitHub not available due to confidential IP
            // {
            //     type: "github",
            //     link: "",
            //     text: "",
            // },
        ],
        technologies: [
            // "react",
            "figma",
            "github",
            "reactNative",
            "mongodb",
            "redux",
            "nest",
            "firebase",
            "docker",
            "node",
            "bun",
            "typescript",
            "javascript",
            "python",
            "express",
            "twilio",
            "stripe",
            "retool",
            "xero",
            "git",
            "s3",
            "ecs",
            "ecr",
            "ec2",
            "iam",
            "certificates",
            "framer",
            "playConsole",
            "appleDeveloper",
            "xcode",
            "appleAds",
        ],
        images: [],
        startDate: new Date(2023, 9, 1).getTime(),
        endDate: new Date(2024, 9, 1).getTime(),
    },
    {
        id: "embarc",
        name: "Embarc",
        subtitle: "A London future founders community",
        description: [
                "Brought on to take over from the technical founder when they left. Had complete ownership and responsibility over the technical side of the business, user data, and product.",
                "Built a new customer facing community platform with React and Next.JS.",
                "Developed new internal tooling, integrations with 3rd party APIs and services, back-end services, and databases. This was built utilising a combination of Retool (low-code), Node.js, and MongoDB and PostgreSQL. ",
                "Organised networking events with VCs and tech companies (Dawn Capital, Google, Snowflake, and more), driving an over 100% increase in our userbase in 6 months.",
                "Worked alongside other team members on projects that included community engagement, copywriting, partnerships, and business development.",
        ],
        coverImage: "/embarcCover.svg",
        links: [
            {
                type: "web",
                link: "https://www.embarc.club/",
                text: "embarc.club",
            },
            // {
            //     type: "figma",
            //     link: "",
            //     text: "",
            // },
            // {
            //     type: "github",
            //     link: "",
            //     text: "",
            // },
        ],
        technologies: [
            "react",
            "figma",
            "github",
            "mongodb",
            "postgres",
            "next",
            "node",
            "typescript",
            "javascript",
            "express",
            "airtable",
            "retool",
            "zapier",
            "xero",
            "git",
        ],
        images: [],
        startDate: new Date(2024, 0, 1).getTime(),
        endDate: new Date(2024, 9, 1).getTime(),
    },
    {
        id: "frontend-coding-challenge",
        name: "Frontend Coding Challenge",
        subtitle:
            "A react frontend coding challenge completed as part of an interview process",
        description: [
            "This was a coding challenge completed as the penultimate stage of the interview process with a startup.",
            "The brief for the challenge is given below, and my thoughts on how it went at the time are contained within the README of the repo.",
            "The Task:",
            "Scientists are automatically uploading their data from bioreactors into our software. To help you, some example data is already loaded into a table.",
            "In the example data, each row shows the density of the cells and the total volume in the bioreactor at a given point in time.",
            "The scientists want to calculate the cell count at any point in time, as well as being able to see the maximum cell count.",
            "Instead of building in these features, we have identified two higher level features to build which would solve their problem, and would be useful to all of our customers:",
            "1. `Calculation columns`, these are columns in the table that are populated based on a user defined formula e.g. A cell count column that is created by the formula: `Cell Density * Volume` ",
            "2.  A `Column Aggregations` feature which allows a user to perform operations on a selected data column, such as showing the `Maximum Density`, `Minimum Cell Count`, etc...",
            "You have a meeting scheduled with the scientist who is a customer. Build something they will be use on your laptop to give you feedback. Please use <a href=\"https://blueprintjs.com/\">Blueprintjs</a>.",
            "Put any notes and your instructions in the README as well as what you would do next to improve this. Please also answer how you would make it possible to do `Rate of change calculations` e.g. `Rate of Cell Count Growth`",
        ],
        coverImage: "/reactIcon.svg",
        links: [
            // {
            //     type: "web",
            //     link: "https://www.saventsolar.com/",
            //     text: "saventsolar.com",
            // },
            // {
            //     type: "figma"
            //     link: ""
            //     text: ""
            // },
            {
                type: "github",
                link: "https://github.com/henrypgill/Front-End-Coding-Challenge",
                // text: ""
            },
        ],
        technologies: [
            "react",
            "redux",
            "github",
            "typescript",
            "git",
        ],
        images: [],
        // startDate: new Date(2024, 0, 1).getTime(),
        endDate: new Date(2024, 0, 1).getTime(),
    },
    {
        id: "backend-coding-challenge",
        name: "Backend Coding Challenge",
        subtitle:
            "A Node.js backend coding challenge completed as part of an interview process",
        description: [
            "This was a backend coding challenge completed as part of the interview process for a back-end role.",
            "The challenge description can be found below, and my thoughts on how it went are in the Readme of the repo.",
            "The Challenge:",
            "A bookstore owner wants a very rudimentary software she can use to keep track of stock. She has to add books to the stock if she receives a delivery and she wants to delete books from stock if they are bought. Furthermore, she wants to get notified if a book is running out of stock so she can order more.:",
            "The job will be split between two developers. One junior dev will create the microservice (called service-notifier) that takes care of notifications and you will create the API and be the architect of data structures and interfaces.:",
            "Write a server with an API that takes care of storing and deleting books from stock. First, define all the properties the book will have. Then create an API (REST, GraphQl, or SOAP) that enables the bookstore owner to solve her problems described above.:",
            "Additionally, you have to create interface documentation from your service to the service-notifier so that your colleague knows what the data his service will receive looks like.:",
        ],
        coverImage: "/typescriptIcon.svg",
        links: [
            // {
            //     type: "web",
            //     link: "https://www.saventsolar.com/",
            //     text: "saventsolar.com",
            // },
            // {
            //     type: "figma"
            //     link: ""
            //     text: ""
            // },
            {
                type: "github",
                link: "https://github.com/henrypgill/Jentis-Challenge",
                // text: ""
            },
        ],
        technologies: [
            "mongodb",
            "nest",
            "docker",
            "github",
            "typescript",
            "git",
        ],
        images: [],
        // startDate: new Date(2024, 0, 1).getTime(),
        endDate: new Date(2024, 0, 1).getTime(),
    },
    {
        id: "community-os",
        name: "CommunityOS",
        subtitle: "SaaS platform for running communities",
        description: loremIpsum,
        coverImage: "/saventSolarWebsiteCover.png",
        links: [
            // {
            //     type: "web",
            //     link: "https://www.saventsolar.com/",
            //     text: "saventsolar.com",
            // },
            // {
            //     type: "figma"
            //     link: ""
            //     text: ""
            // },
            // {
            //     type: "github"
            //     link: ""
            //     text: ""
            // },
        ],
        technologies: [
            "react",
            "mongodb",
            "redux",
            "postgres",
            "nest",
            "next",
            "firebase",
            "docker",
            "figma",
            "github",
            "s3",
            "ecs",
            "ecr",
            "ec2",
            "iam",
            "certificates",
            "typescript",
            "python",
            "stripe",
            "retool",
            "prisma",
            "git",
        ],
        images: [],
        // startDate: new Date(2024, 0, 1).getTime(),
        // endDate: new Date(2024, 9, 1).getTime(),
        hidden: true,
    },
    {
        id: "savent-solar-website",
        name: "Savent Solar Website",
        subtitle: "A completely new website for a solar panel company",
        description: [
            "Provided a complete service that encompassed design, content writing, development, and deployment of a client's website.",
            "Set up web analytics and hosting of the websites, as well as migrated them from their existing services.",
            "Created responsive pages that adhered to accessibility guidelines (WCAG 2) using semantic HTML and CSS.",
            "Worked closely with an SEO consultant to have the website rank within the first two pages consistently on Google for a wide range of relevant search terms.",
                        
        ],
        coverImage: "/saventSolarWebsiteCover.png",
        links: [
            {
                type: "web",
                link: "https://www.saventsolar.com/",
                text: "saventsolar.com",
            },
            //figma design files lost to the ether
        ],
        technologies: ["figma", "webflow"],
        images: [],
        // startDate: new Date(2024, 0, 1).getTime(),
        endDate: new Date(2023, 0, 1).getTime(),
    },
    {
        id: "gpt-project-builder",
        name: "AI Project Builder",
        subtitle: "An AI that creates react apps for you",
        description: [
            "Takes text description of what each part should look like and do",
            "converts it into sets of seperate instructions to generate components from prompts that are known to work for different types of components",
            "e.g. the description says a page with an image and two buttons will generate an instruction to create an image element, and two instructions to create button elements",
            "each set of instructions tells chat GPT to write the code for each of those elements",
            "the response is then formatted and returned to the user"
        ],
        coverImage: "/saventSolarWebsiteCover.png",
        links: [],
        technologies: [
            "figma",
            "webflow",
            "zapier",
            "xero",
            "pipedrive",
            "monday",
            "zoho",
        ],
        images: [],
        startDate: new Date(2024, 0, 1).getTime(),
        endDate: new Date(2024, 10, 1).getTime(),
        hidden: true
    },
    {
        id: "tech-consulting",
        name: "Savent Solar",
        subtitle: "Tech consulting for a solar panel company",
        description: loremIpsum,
        coverImage: "/saventSolarWebsiteCover.png",
        links: [],
        technologies: [
            "figma",
            "webflow",
            "zapier",
            "xero",
            "pipedrive",
            "monday",
            "zoho",
        ],
        images: [],
        startDate: new Date(2024, 0, 1).getTime(),
        endDate: new Date(2024, 10, 1).getTime(),
        hidden: true
    },
];
