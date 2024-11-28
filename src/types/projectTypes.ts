export type Technology =
    | "react"
    | "reactNative"
    | "mongodb"
    | "redux"
    | "postgres"
    | "nest"
    | "next"
    | "firebase"
    | "docker"
    | "figma"
    | "github"
    | "s3"
    | "ecs"
    | "ecr"
    | "ec2"
    | "iam"
    | "certificates"
    | "node"
    | "bun"
    | "typescript"
    | "javascript"
    | "python"
    | "express"
    | "twilio"
    | "stripe"
    | "webflow"
    | "airtable"
    | "retool"
    | "zapier"
    | "xero"
    | "pipedrive"
    | "monday"
    | "zoho"
    | "prisma"
    | "git"
    | "framer"
    | "playConsole"
    | "appleDeveloper"
    | "xcode"
    | "appleAds"
    | "mySql";

export interface TechnologyMapItem {
    iconPath: string;
    name: string;
    type: "language" | "technology" | "software";
    // | "library"
}

export type TechnologyMap = Record<Technology, TechnologyMapItem>;

export interface ProjectLink {
    type: "web" | "figma" | "github";
    link: string;
    text?: string;
}

export interface PortfolioProject {
    id: string;
    name: string;
    subtitle: string;
    description: () => JSX.Element//string[];
    links: ProjectLink[];
    technologies: Technology[];
    images: string[];
    coverImage: string;
    dateText?: string;
    hidden?: boolean;
}
