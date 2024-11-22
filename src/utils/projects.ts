import { PortfolioProject } from "@/types/projectTypes";
import { loremIpsum } from "./general";

export const projects: PortfolioProject[] = [
    {
        id: "bump",
        name: "Bump",
        subtitle:
            "A React Native mobile app on iOS and Android for meeting new people",
        description: loremIpsum,
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
            // "postgres",
            "nest",
            // "next",
            "firebase",
            "docker",
            // "node",
            "bun",
            "typescript",
            "javascript",
            "python",
            "express",
            "twilio",
            "stripe",
            // "webflow",
            // "airtable",
            "retool",
            // "zapier",
            "xero",
            // "pipedrive",
            // "monday",
            // "zoho",
            // "prisma",
            "git",
            "s3",
            "ecs",
            "ecr",
            "ec2",
            "iam",
            "certificates",
        ],
        images: [],
        // startDate: new Date().getTime(),
        // endDate: new Date().getTime(),
    },
    {
        id: "embarc",
        name: "Embarc",
        subtitle: "A London future founders community",
        description: loremIpsum,
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
        // startDate:
        // endDate:
    },
    {
        id: "savent-solar-website",
        name: "Savent Solar",
        subtitle: "A completely new website for a solar panel company",
        description: loremIpsum,
        coverImage: "/saventSolarWebsiteCover.png",
        links: [
            {
                type: "web",
                link: "https://www.saventsolar.com/",
                text: "saventsolar.com",
            },
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
        technologies: ["figma", "webflow"],
        images: [],
        // startDate:
        // endDate:
    },
    {
        id: "tech-consulting",
        name: "Savent Solar",
        subtitle: "Tech consulting for a solar panel company",
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
            // "react",
            "figma",
            // "github",
            // "reactNative",
            // "mongodb",
            // "redux",
            // "postgres",
            // "nest",
            // "next",
            // "firebase",
            // "docker",
            // "s3",
            // "ecs",
            // "ecr",
            // "ec2",
            // "iam",
            // "certificates",
            // "node",
            // "bun",
            // "typescript",
            // "javascript",
            // "python",
            // "express",
            // "twilio",
            // "stripe",
            "webflow",
            // "airtable",
            // "retool",
            "zapier",
            "xero",
            "pipedrive",
            "monday",
            "zoho",
            // "prisma",
            // "git",
        ],
        images: [],
        // startDate:
        // endDate:
    },
];
