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

export type TechnologyMap = Record<
    Technology,
    { iconPath: string; name: string }
>;

export interface ProjectLink {
    type: "web" | "figma" | "github";
    link: string;
    text?: string;
}

export interface PortfolioProject {
    id: string;
    name: string;
    subtitle: string;
    description: string[];
    links: ProjectLink[];
    technologies: Technology[];
    images: string[];
    coverImage: string;
    startDate?: number;
    endDate?: number;
    hidden?: boolean;
}
