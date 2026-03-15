export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  aboutSummary: string;
  careerObjective: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  languages: string[];
  cvUrl: string;
  socialLinks: SocialLink[];
  otherSocialLinks?: SocialLink[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface TechnologyGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  responsibilities: string[];
}

export interface EducationItem {
  period: string;
  level: string;
  program: string;
  institution: string;
  details: string[];
}

export interface Certification {
  title: string;
  image?: string;
}

export interface ProjectContribution {
  title: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  impact: string;
  majorContributions?: string[];
  minorContributions?: string[];
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  technologyGroups: TechnologyGroup[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  professionalProjects: ProjectContribution[];
}
