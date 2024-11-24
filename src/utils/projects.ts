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
        startDate: new Date(2024, 0, 1).getTime(),
        endDate: new Date(2024, 9, 1).getTime(),
    },
    {
        id: "frontend-coding-challenge",
        name: "Frontend Coding Challenge",
        subtitle:
            "A react frontend coding challenge completed as part of an interview process",
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
        endDate: new Date(2024, 0, 1).getTime(),
    },
    {
        id: "backend-coding-challenge",
        name: "Backend Coding Challenge",
        subtitle:
            "A Node.js backend coding challenge completed as part of an interview process",
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
            //figma design files lost to the ether
        ],
        technologies: ["figma", "webflow"],
        images: [],
        // startDate: new Date(2024, 0, 1).getTime(),
        endDate: new Date(2023, 0, 1).getTime(),
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
    },
];
