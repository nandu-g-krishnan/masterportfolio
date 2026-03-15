import { PortfolioData } from '../models/portfolio.models';

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'Nandu G Krishnan',
    title: 'IT Analyst | Full Stack Developer | Scrum Master',
    aboutSummary:
      'Full stack engineer with 7+ years of experience delivering enterprise web products across Angular and .NET ecosystems. Proven in end-to-end delivery, cloud modernization, stakeholder collaboration, and production-grade engineering in Agile teams.',
    careerObjective:
      'To contribute to high-impact product and platform initiatives by combining strong engineering fundamentals, delivery ownership, and cross-functional leadership while continuously growing as a modern software professional.',
    dateOfBirth: 'July 24, 1996',
    email: 'nkrishnan931@gmail.com',
    phone: '+91 8547323416',
    address: 'Kottayam, Kerala, India',
    languages: ['English', 'Malayalam', 'Tamil'],
    cvUrl: 'https://drive.google.com/file/d/1vi8DcC7LSlWm7mcVGxQdfDKmA1Dxi-17/view?usp=drive_link',
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nandu-g-krishnan-03aa2614a',
        icon: 'fa-linkedin'
      },
      { platform: 'GitHub', url: 'https://github.com/nandu-g-krishnan', icon: 'fa-github' }
    ],
    otherSocialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/', icon: 'fa-instagram' },
      { platform: 'Twitter', url: 'https://x.com/', icon: 'fa-twitter' },
      { platform: 'Facebook', url: 'https://www.facebook.com/', icon: 'fa-facebook' }
    ]
  },
  skills: [
    { name: 'Angular', level: 100 },
    { name: '.NET', level: 100 },
    { name: 'TypeScript', level: 100 },
    { name: 'JavaScript', level: 100 },
    { name: 'HTML/CSS', level: 100 },
    { name: 'SQL Server', level: 100 },
    { name: 'Azure DevOps', level: 100 },
    { name: 'Agile Delivery', level: 100 }
  ],
  technologyGroups: [
    { title: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Angular Material'] },
    { title: 'Backend', items: ['.NET Core', '.NET Framework', 'Web API', 'Entity Framework', 'Node.js', 'Express'] },
    { title: 'Database', items: ['MS SQL Server', 'Cosmos DB', 'MongoDB', 'SQLite', 'MySQL', 'Firebase'] },
    {
      title: 'Cloud and DevOps',
      items: ['Azure', 'Azure DevOps', 'Azure Functions', 'GitHub', 'ARM Templates', 'App Insights']
    },
    {
      title: 'Engineering Tools',
      items: ['VS Code', 'Visual Studio 2022', 'SSMS', 'Postman', 'Jira', 'Confluence', 'Bitbucket', 'SonarQube', 'Mend', 'WhiteSource', 'Polaris', 'QMetry']
    }
  ],
  experiences: [
    {
      role: 'IT Analyst',
      company: 'Tata Consultancy Services',
      period: 'July 2023 - Present',
      summary:
        'Serving as a key delivery contact for enterprise retail products with focus on communication, cloud migration, and engineering execution across teams.',
      responsibilities: [
        'Acted as a primary point of contact to align delivery stakeholders across project phases.',
        'Led cloud migration activities that improved scalability and operational continuity.',
        'Supported migration from Azure DevOps to GitHub to streamline team workflows.',
        'Maintained strong client engagement through clear communication and expectation management.',
        'Contributed across multiple teams to drive successful outcomes in three major projects.'
      ]
    },
    {
      role: 'Full Stack Developer & Scrum Master',
      company: 'Tata Consultancy Services',
      period: 'October 2020 - June 2023',
      summary:
        'Owned sprint execution and full-stack feature delivery while balancing engineering quality, release confidence, and team collaboration.',
      responsibilities: [
        'Facilitated sprint planning, reviews, retrospectives, and daily scrum ceremonies.',
        'Developed and tested both frontend and server-side web application modules.',
        'Drove cross-team communication to reduce blockers and improve release pace.',
        'Built APIs and validated integrations for responsive and efficient user workflows.',
        'Supported issue resolution and SLA-driven delivery across environments.'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Tata Consultancy Services',
      period: 'September 2018 - October 2020',
      summary:
        'Contributed to full software lifecycle delivery from requirements analysis to deployment, testing, and security hardening.',
      responsibilities: [
        'Worked on client interaction, requirement analysis, documentation, and estimation.',
        'Implemented and tested web modules using Angular and .NET technologies.',
        'Handled deployments across environments and closed production defects.',
        'Performed regression testing and supported defect triage with QA teams.',
        'Addressed code quality and security scan findings to maintain compliance.'
      ]
    }
  ],
  education: [
    {
      period: '2014 - 2018',
      level: "Bachelor's Degree",
      program: 'B.Tech in Electronics and Communication',
      institution: 'College of Engineering Chengannur',
      details: ['Graduated with 7.94 CGPA.']
    }
  ],
  certifications: [
    { title: 'Microsoft Certified: Azure Developer Associate (AZ-204)', image: '../../../assets/images/certification/az 204.png' },
    { title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', image: '../../../assets/images/certification/az 900.jpg' },
    { title: 'Certified SAFe 4 Practitioner', image: '../../../assets/images/certification/safeagile.jpg' },
    { title: 'Angular (Basic) Certificate - HackerRank', image: '' }
  ],
  professionalProjects: [
    {
      title: 'Quotation Application',
      description:
        'Enterprise quotation platform for retail workflows, focused on continuous enhancement and business-aligned feature delivery.',
      technologies: ['Angular', 'HTML', 'CSS', '.NET Framework', '.NET Core', 'SQL Server'],
      responsibilities: [
        'Delivered client-side and server-side feature updates based on business priorities.',
        'Collaborated with business users to identify pain points and implement practical solutions.',
        'Contributed to release planning, change requests, and production deployment activities.',
        'Supported testing of new flows and coordinated with cross-functional teams.'
      ],
      impact:
        'Improved release reliability and business responsiveness through stronger stakeholder alignment and structured rollout support.',
      majorContributions: [
        'Implemented key business-driven enhancements across frontend and backend layers.',
        'Improved release coordination with better change request and deployment discipline.'
      ],
      minorContributions: [
        'Assisted product owner and QA teams during validation cycles.',
        'Supported issue triage and documentation during project transitions.'
      ]
    },
    {
      title: 'Reporting and Simulation Application',
      description:
        'High-availability reporting platform with simulation workflows, supporting production operations and observability-driven maintenance.',
      technologies: ['Angular', '.NET Framework', '.NET Core', 'SQL Server', 'Azure', 'App Insights'],
      responsibilities: [
        'Provided support for both non-production and production issues.',
        'Led scrum ceremonies and sprint lifecycle activities for the development team.',
        'Set up lower-environment pipelines and release branches using Azure resources and ARM templates.',
        'Built Azure dashboards and monitoring with App Insights and centralized logs.',
        'Implemented a secure Web API proxy integration with JWT validation.'
      ],
      impact:
        'Strengthened operational visibility, reduced release friction, and improved issue response under tight SLA commitments.',
      majorContributions: [
        'Delivered end-to-end monitoring framework for health and performance tracking.',
        'Established CI/CD and deployment patterns across DIT, SIT, Stage, and Production.'
      ],
      minorContributions: [
        'Proactively resolved vulnerabilities using Mend, WhiteSource, and SonarQube.',
        'Maintained support continuity as primary contact for critical production issues.'
      ]
    },
    {
      title: 'Costing Application',
      description:
        'Business costing product with modernized UI and API services to support reliable day-to-day operations.',
      technologies: ['Angular 7', 'Bootstrap 4', '.NET Core', 'Web API', 'SQL Server', 'NUnit', 'Postman'],
      responsibilities: [
        'Built responsive landing pages and application UI components.',
        'Developed REST APIs and performed API pre-testing using Postman.',
        'Wrote unit test cases for business logic and web services using NUnit.',
        'Collaborated with team members for debugging, code quality, and iterative improvements.'
      ],
      impact:
        'Enhanced functional coverage and code quality through stronger testing practices and structured Agile delivery.',
      majorContributions: [
        'Delivered full-stack features used in production business flows.',
        'Improved reliability with unit-testing adoption for key modules.'
      ],
      minorContributions: [
        'Supported team-led quality reviews and sprint estimations.',
        'Contributed to stable release outcomes through active defect resolution.'
      ]
    },
    {
      title: 'RFID Tracking Application',
      description:
        'Short-term migration initiative to move RFID tracking capabilities from on-premises setup to cloud-ready architecture.',
      technologies: ['Angular', 'HTML', 'CSS', '.NET Core', 'Web API', 'Azure', 'GitHub'],
      responsibilities: [
        'Migrated UI and dependent components from on-premises infrastructure to cloud.',
        'Supported repository migration to GitHub and ensured operational readiness.',
        'Provided project support through completion of the migration window.',
        'Validated parity of table structure and business functionality post-migration.'
      ],
      impact:
        'Enabled a stable cloud transition with minimal disruption by preserving functional equivalence during migration.',
      majorContributions: [
        'Executed migration support for user-facing workflows and supporting codebase assets.'
      ],
      minorContributions: [
        'Provided transition-period support and post-migration stabilization.'
      ]
    }
  ]
};
