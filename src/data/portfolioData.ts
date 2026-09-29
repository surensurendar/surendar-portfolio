export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  category: 'Enterprise' | 'Web App' | 'E-Commerce' | 'Frontend';
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  metrics?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  role: string;
  badge?: string;
}

export interface WorkstreamItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  badge: string;
  status: string;
  description: string;
  modules: string[];
  highlights: string[];
  techStack: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string;
  description: string;
  keyHighlights: string[];
  modulesBuilt: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // percentage
    experience: string;
    icon?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Surendar G",
  role: "Frontend Developer | ReactJS Developer",
  avatar: "/surendar.jpg",
  experienceYears: "2+",
  phone: "+91 7904085073",
  email: "surendarganesanofficial@gmail.com",
  location: "Chennai, Tamil Nadu",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile",
  tagline: "Frontend Developer with 2+ Years Experience in ReactJS, TypeScript, OMS & Enterprise HRMS",
  bio: "Frontend Developer with 2+ years of experience in building responsive and scalable web applications using ReactJS, JavaScript, TypeScript, HTML5, CSS3, and SCSS. Experienced in developing enterprise applications across Order Management System (OMS) and Human Resource Management System (HRMS) projects. Skilled in developing reusable UI components, CRUD workflows, approval flows, REST API integrations, and business-driven frontend features. Experienced in working in a startup environment with project-level team leadership and responsibility for feature delivery, coordination, and issue resolution.",
  status: "Available for Frontend & ReactJS Roles",
  resumeFileName: "Surendar_G_Frontend_Developer_Resume.pdf",
  languages: ["Tamil", "English"],
  primaryTechnology: "ReactJS",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Enterprise Projects", value: "OMS & HRMS" },
    { label: "Core Tech", value: "ReactJS & TS" },
    { label: "Domain Focus", value: "Enterprise CRUD" }
  ]
};

export const LEADERSHIP_RESPONSIBILITIES = [
  "Took ownership of frontend development activities for assigned project modules in a startup environment.",
  "Coordinated with team members to distribute frontend tasks, track progress, and support timely feature delivery.",
  "Assisted team members in resolving ReactJS, UI, API integration, and debugging issues.",
  "Reviewed frontend implementations and provided feedback on code quality, reusable components, and project conventions.",
  "Coordinated with Backend and QA teams to clarify requirements and resolve development and testing issues.",
  "Participated in requirement discussions and helped translate business requirements into technical frontend tasks."
];

export const WORKSTREAMS: WorkstreamItem[] = [
  {
    id: "hrms-stream",
    title: "Human Resource Management System (HRMS)",
    subtitle: "Enterprise Workforce & HR Operations Platform",
    period: "Aug 2025 – Present",
    badge: "Enterprise HRMS",
    status: "Active Production",
    description: "Developed and maintained frontend modules for an enterprise HRMS application using ReactJS, TypeScript, JavaScript, HTML5, CSS3, and SCSS across mission-critical human capital workflows.",
    modules: [
      "Employee Directory & Org Hierarchy",
      "Policy Management Hub",
      "Payroll Engine & Tax Deductions",
      "Attendance & Shift Rosters",
      "Leave Quotas & Encashment",
      "Multi-Tier Approval Workflows",
      "Exit & Separation Clearance",
      "Asset & Passport Custody Tracking",
      "Social Wall & Employee Engagement"
    ],
    highlights: [
      "Built and maintained frontend architecture across 9 core HRMS domains including Employee Directory, Policy Hub, Payroll & FnF, Attendance, Leave, Approvals, Exit Management, Asset & Passport Tracking, and Social Wall Engagement.",
      "Developed CRUD interfaces for creating, editing, viewing, and managing employee-related information and org hierarchies.",
      "Implemented sequential & parallel approval workflows with dynamic status handling and temporary delegation.",
      "Integrated REST APIs for payroll calculation, policy management, biometric attendance, exit clearance, and social feed interactions.",
      "Developed reusable components with robust form validation schemas, loading states, error boundaries, and responsive UI behavior.",
      "Collaborated with Backend and QA teams to analyze requirements, troubleshoot issues, and deliver releases."
    ],
    techStack: ["ReactJS", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Redux", "REST APIs", "Jira", "Git"]
  },
  {
    id: "oms-stream",
    title: "Order Management System (OMS)",
    subtitle: "Enterprise Order & Business Workflow Platform",
    period: "Sep 2024 – 2025",
    badge: "Enterprise OMS",
    status: "Completed & Deployed",
    description: "Developed frontend features for an Order Management System using ReactJS, JavaScript, HTML5, CSS3, and SCSS, delivering resilient CRUD functionality and business workflows.",
    modules: [
      "Order Lifecycle Management",
      "Reusable UI Component System",
      "Business Workflow CRUD",
      "REST API Data Rendering",
      "Form Validation & Error States"
    ],
    highlights: [
      "Developed frontend features for an Order Management System using ReactJS, JavaScript, HTML5, CSS3, and SCSS.",
      "Built reusable UI components and implemented CRUD functionality for business workflows.",
      "Integrated REST APIs and handled data rendering, form validation, API responses, and error states.",
      "Worked closely with Backend and QA teams to implement business requirements and resolve frontend issues.",
      "Participated in debugging, testing, code reviews, and application improvements."
    ],
    techStack: ["ReactJS", "JavaScript", "HTML5", "CSS3", "SCSS", "REST APIs", "CRUD Operations", "Git", "Jira"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Company Name (Startup Environment)",
    period: "Sep 2024 – Present",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    description: "Frontend Developer with 2+ years experience building and maintaining enterprise web applications using ReactJS, JavaScript, TypeScript, HTML5, CSS3, and SCSS across OMS and HRMS platforms. Took project-level leadership, coordinating feature delivery, technical problem solving, and release management.",
    keyHighlights: [
      "Developed and maintained frontend applications using ReactJS, JavaScript, TypeScript, HTML5, CSS3, and SCSS.",
      "Worked on multiple business applications and delivered frontend features based on functional requirements and Jira tickets.",
      "Developed reusable UI components, forms, CRUD interfaces, dashboards, approval workflows, and business process screens.",
      "Integrated REST APIs and handled API responses, loading states, validation, error handling, and dynamic UI behavior.",
      "Collaborated with Backend and QA teams to understand requirements, implement features, troubleshoot issues, and deliver releases.",
      "Worked in a startup environment with additional responsibility for project-level team coordination and frontend feature ownership.",
      "Supported team members with frontend implementation, debugging, code reviews, and resolving technical issues.",
      "Participated in requirement discussions, task planning, development, testing, UAT support, and release activities."
    ],
    modulesBuilt: [
      "Order Management System (OMS)",
      "Employee Directory & Org Hierarchy",
      "Company Policy Management Hub",
      "Payroll Engine, Tax & FnF Settlement",
      "Attendance Tracking & Shift Rosters",
      "Leave Quotas & Time-Off Management",
      "Approval Workflows & Delegations",
      "Exit & Separation Clearance Workflow",
      "Asset & Passport Tracking System",
      "Social Wall & Peer Recognition Feed"
    ],
    techStack: ["ReactJS", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Redux", "REST APIs", "Git", "GitHub", "Jira", "ESLint", "Husky"]
  }
];

export interface HrmsModuleItem {
  name: string;
  icon: string;
  description: string;
  keyActions: string[];
  explanation: string;
  engineeringHighlights: string[];
}

export const HRMS_SPOTLIGHT = {
  title: "Enterprise HRMS Platform Engineering",
  subtitle: "Flagship Enterprise Product Experience",
  summary: "Engineered and maintained frontend architecture across 9 mission-critical HRMS modules using ReactJS, TypeScript, JavaScript, HTML5, CSS3, and SCSS, delivering resilient CRUD operations, dynamic multi-tier approval flows, and REST API integrations.",
  modules: [
    {
      name: "Employee Management",
      icon: "👤",
      description: "Central directory storing complete personal, professional, identification, and employment data for every employee.",
      keyActions: [
        "Create Profile & Onboarding",
        "Edit Info & Form Schemas",
        "Upload & Verify Documents",
        "Assign Roles / Designations",
        "View Org Hierarchy Tree"
      ],
      explanation: "Central directory storing complete personal, professional, identification, and employment data for every employee.",
      engineeringHighlights: [
        "Virtual scrolling table rendering 10,000+ employee records smoothly",
        "Multi-criteria filtering (Dept, Designation, Status) with debounced search",
        "Drawer-based profile editor with multi-tab document uploads and validation",
        "Hierarchical reporting manager tree visualizer using nested React components"
      ]
    },
    {
      name: "Policy Management",
      icon: "📋",
      description: "Defines company rules and guidelines covering Leave, Notice Periods, Working Hours, Overtime, and Probation terms.",
      keyActions: [
        "Configure Policies",
        "Assign Policies by Dept/Grade",
        "Set Effective Dates & Versions",
        "Policy Overrides & Exceptions"
      ],
      explanation: "Defines company rules and guidelines covering Leave, Notice Periods, Working Hours, Overtime, and Probation terms.",
      engineeringHighlights: [
        "Dynamic policy repository supporting versioning and rollback",
        "Department-level rule override matrices and condition builders",
        "Mandatory employee digital acknowledgment modal with legal consent capture",
        "Role-based publishing permissions with instant search indexing"
      ]
    },
    {
      name: "Payroll & Compensation",
      icon: "💳",
      description: "Automates monthly salary calculations, statutory compliances, bonuses, reimbursements, and final exit financial settlements.",
      keyActions: [
        "Generate Payslips",
        "Calculate Tax & Deductions (PF/ESI/TDS)",
        "Bonus Processing & Arrears",
        "Salary Revisions & CTC Structuring",
        "Full & Final (FnF) Settlement"
      ],
      explanation: "Automates monthly salary calculations, statutory compliances, bonuses, reimbursements, and final exit financial settlements.",
      engineeringHighlights: [
        "Dynamic client-side formula engine with instant breakdown recalculation",
        "Automated statutory compliance formulas for PF (12%), ESI, and TDS bands",
        "One-click payslip generation with printable PDF templates & error bounds",
        "FnF settlement calculator syncing leave encashment and notice buyout"
      ]
    },
    {
      name: "Attendance & Time Tracking",
      icon: "📅",
      description: "Tracks employee daily work hours, shift rosters, late arrivals, and syncs attendance data with payroll.",
      keyActions: [
        "Check-in / Check-out Simulation",
        "Shift Scheduling & Rosters",
        "Overtime Tracking & Rules",
        "Biometric / Geo-fencing Sync",
        "Regularization Requests"
      ],
      explanation: "Tracks employee daily work hours, shift rosters, late arrivals, and syncs attendance data with payroll.",
      engineeringHighlights: [
        "Live check-in / check-out tracker with timestamp logging and status badges",
        "Interactive weekly/monthly shift scheduler grid with drag-and-drop capability",
        "Attendance regularization request workflow with manager approval trigger",
        "Real-time overtime calculation synced with payroll hours accumulator"
      ]
    },
    {
      name: "Leave Management",
      icon: "🏖️",
      description: "Handles leave quotas, employee time-off applications, balance calculations, and manager approvals.",
      keyActions: [
        "Apply Leave (Single/Multi-Day)",
        "Track Leave Balances (Sick, Casual, Earned)",
        "Configure Leave Types & Accruals",
        "Leave Encashment Calculations",
        "Holiday Calendar Integration"
      ],
      explanation: "Handles leave quotas, employee time-off applications, balance calculations, and manager approvals.",
      engineeringHighlights: [
        "Dynamic quota calculator supporting Sick, Casual, and Earned leave balances",
        "Interactive date-range picker with public holiday exclusion logic",
        "Instant leave application form with optimistic balance validation",
        "Integrated annual holiday calendar with regional filter support"
      ]
    },
    {
      name: "Approval Workflows & Delegation",
      icon: "🔀",
      description: "Automated routing engine that directs requests (leaves, expenses, separations, promotions) through authorized decision-makers.",
      keyActions: [
        "Multi-Level Approval Chains (Sequential/Parallel)",
        "Group Approvals Matrix",
        "Approve / Reject / Request Info",
        "Temporary Approver Delegations"
      ],
      explanation: "Automated routing engine that directs requests (leaves, expenses, separations, promotions) through authorized decision-makers.",
      engineeringHighlights: [
        "Multi-tier approval matrix with optimistic state updates for instant manager feedback",
        "Sequential and parallel decision chain visualizer with real-time status cues",
        "Temporary proxy delegator module with start and end date validity",
        "Auditable request history timeline tracking approver notes and timestamps"
      ]
    },
    {
      name: "Exit & Separation Management",
      icon: "🚪",
      description: "End-to-end offboarding workflow from resignation submission and notice buyout calculations to asset recovery and final release.",
      keyActions: [
        "Resignation Submission",
        "Notice Period Adjustment (Waived/Buyout)",
        "Multi-Level Exit Approvals",
        "Department Clearances (IT/Finance/Admin)",
        "Relieving & Experience Letter Generation"
      ],
      explanation: "End-to-end offboarding workflow from resignation submission and notice buyout calculations to asset recovery and final release.",
      engineeringHighlights: [
        "Department-wise clearance matrix (IT, Finance, Admin, HR) with check-off gates",
        "Notice period buyout and waiver financial calculator linked to FnF",
        "Asset handover inventory tracker with serial number verification",
        "Automated relieving and experience letter generation engine"
      ]
    },
    {
      name: "Asset & Document Management",
      icon: "🛂",
      description: "Tracks physical asset issuance, official document custody (e.g. Passports, Visa movements), and handover receipts.",
      keyActions: [
        "Asset Assignment & Serial Tracking",
        "Passport Movement Tracking",
        "Document Verification & Storage",
        "Expiry Alerts & Renewals",
        "Return Acknowledgments"
      ],
      explanation: "Tracks physical asset issuance, official document custody (e.g. Passports, Visa movements), and handover receipts.",
      engineeringHighlights: [
        "Official document custody tracker for passports and visas with movement logs",
        "Hardware and software asset lifecycle tracking with barcode/serial binding",
        "Proactive expiry alerts for statutory documents, visas, and contracts",
        "Digital sign-off for asset handovers and condition acknowledgments"
      ]
    },
    {
      name: "Social Wall",
      icon: "🎉",
      description: "An internal company feed designed to boost workplace engagement, collaboration, and peer recognition.",
      keyActions: [
        "Create & Share Posts (Announcements, Celebrations, Updates)",
        "Like, React, & Comment on Feeds",
        "Give Kudos & Peer-to-Peer Recognition",
        "Launch Quick Polls & Surveys",
        "Upload Media (Images, Videos, Attachments)",
        "Pin Important Company Announcements"
      ],
      explanation: "An internal company feed designed to boost workplace engagement, collaboration, and peer recognition. It functions like an internal social network where teams celebrate achievements, share company news, discuss ideas, and connect across departments.",
      engineeringHighlights: [
        "Real-time social activity feed with optimistic likes, emoji reactions, and nested comment threads",
        "Rich text & media uploader supporting image previews, drag-and-drop, and attachment verification",
        "Interactive peer-to-peer Kudos recognition system with badge tags and notification dispatchers",
        "Quick polling widget with real-time percentage recalculation and pinned announcement banners"
      ]
    }
  ],
  architectureHighlights: [
    "Covered 9 core enterprise HRMS modules with reusable UI components, forms, and approval workflows",
    "Integrated REST APIs with robust response handling, loading states, validation, and error bounds",
    "Collaborated with Backend and QA teams to deliver features, troubleshoot issues, and ensure seamless releases",
    "Project-level team leadership, mentoring peers, and driving code reviews in an Agile startup environment"
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "hrms",
    title: "Human Resource Management System (HRMS)",
    subtitle: "Enterprise Workforce & HR Operations Platform (9 Core Modules)",
    period: "Aug 2025 – Present",
    category: "Enterprise",
    featured: true,
    badge: "Enterprise HRMS",
    role: "Frontend Developer",
    description: "Engineered frontend modules across 9 core HRMS domains including Employee Management, Policy Management, Payroll & Compensation, Attendance, Leave Management, Approval Workflows, Exit Management, Asset/Passport Tracking, and Social Wall Engagement.",
    longDescription: "Developed and maintained frontend architecture for an enterprise Human Resource Management System (HRMS) covering 9 core modules: Employee Management, Policy Management, Payroll & Compensation, Attendance & Time Tracking, Leave Management, Approval Workflows & Delegation, Exit & Separation Management, Asset & Document Management (Passports/IT Assets), and Social Wall (Employee Engagement & Community). Engineered responsive CRUD interfaces, dynamic multi-tier approval chains, statutory tax/payroll engines, real-time social feeds, and reliable REST API integrations with TypeScript and SCSS.",
    tags: ["ReactJS", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "REST APIs", "Redux", "Jira", "Git"],
    features: [
      "Employee Management: Central directory, profile creation, document uploads, roles, and org hierarchy",
      "Policy Management: Rules configuration, department/grade assignments, effective dates, and policy overrides",
      "Payroll & Compensation: Automated payslips, statutory deductions (PF/ESI/TDS), bonuses, and FnF settlements",
      "Attendance & Time Tracking: Shift rosters, overtime calculation, check-in/out, and regularization flows",
      "Leave Management: Leave quotas (Sick/Casual/Earned), time-off requests, encashment, and holiday calendars",
      "Approval Workflows: Sequential/parallel multi-tier approval matrix, group approvals, and delegation",
      "Exit Management: Resignation workflows, notice buyout calculations, multi-department clearance, and relieving letters",
      "Asset & Document Management: IT asset tracking, passport movement monitoring, and expiry alerts",
      "Social Wall: Company announcements, peer kudos recognition, reactions/comments, and live polling feeds"
    ],
    metrics: [
      "Comprehensive 9-module enterprise coverage with unified UI component system",
      "Engineered multi-level approval chains with optimistic state updates",
      "Client-side formula engines for Payroll, Tax, FnF, and Attendance",
      "Zero regressions across releases with robust REST API error handling"
    ],
    github: "https://github.com/your-username",
    demo: "#"
  },
  {
    id: "oms",
    title: "Order Management System (OMS)",
    subtitle: "Enterprise Order & Workflow Automation",
    period: "Sep 2024 – 2025",
    category: "Enterprise",
    featured: true,
    badge: "Enterprise OMS",
    role: "Frontend Developer",
    description: "Developed frontend features for an Order Management System using ReactJS, JavaScript, HTML5, CSS3, and SCSS with complete CRUD operations and REST API integrations.",
    longDescription: "Developed frontend features for an Order Management System using ReactJS, JavaScript, HTML5, CSS3, and SCSS. Built reusable UI components and implemented CRUD functionality for business workflows. Integrated REST APIs and handled data rendering, form validation, API responses, and error states. Collaborated with Backend and QA teams in debugging, testing, code reviews, and application improvements.",
    tags: ["ReactJS", "JavaScript", "HTML5", "CSS3", "SCSS", "REST APIs", "CRUD Operations", "Git", "Jira"],
    features: [
      "Built reusable UI components and responsive layouts for complex business workflows",
      "Implemented complete CRUD functionality for orders, customer data, and status tracking",
      "Integrated REST APIs with data rendering, validation schemas, and error handling states",
      "Participated in debugging, testing, code reviews, and application improvements"
    ],
    metrics: [
      "Streamlined order processing workflows with rapid data rendering",
      "Implemented clean component interfaces and validation hooks"
    ],
    github: "https://github.com/your-username",
    demo: "#"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "ReactJS", level: 95, experience: "2+ Years" },
      { name: "JavaScript (ES6+)", level: 92, experience: "2+ Years" },
      { name: "TypeScript", level: 88, experience: "2+ Years" },
      { name: "HTML5", level: 95, experience: "2+ Years" },
      { name: "CSS3 / SCSS", level: 92, experience: "2+ Years" }
    ]
  },
  {
    category: "State Management & UI",
    skills: [
      { name: "Redux", level: 88, experience: "2+ Years" },
      { name: "React Hooks", level: 95, experience: "2+ Years" },
      { name: "Responsive Design", level: 95, experience: "2+ Years" },
      { name: "Reusable Components", level: 95, experience: "2+ Years" },
      { name: "CRUD Operations & Forms", level: 95, experience: "2+ Years" }
    ]
  },
  {
    category: "API Integration",
    skills: [
      { name: "REST APIs", level: 95, experience: "2+ Years" },
      { name: "JSON", level: 95, experience: "2+ Years" },
      { name: "API Integration", level: 95, experience: "2+ Years" },
      { name: "Error Handling & Validation", level: 92, experience: "2+ Years" },
      { name: "Loading States & Async UI", level: 92, experience: "2+ Years" }
    ]
  },
  {
    category: "Tools & Development Practices",
    skills: [
      { name: "Git & GitHub", level: 90, experience: "2+ Years" },
      { name: "Jira & Agile Development", level: 90, experience: "2+ Years" },
      { name: "VS Code, ESLint, Husky", level: 88, experience: "2+ Years" },
      { name: "Debugging & Code Review", level: 92, experience: "2+ Years" },
      { name: "Build Validation & UAT Support", level: 90, experience: "2+ Years" }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sri Sankara Arts and Science College | University of Madras",
    period: "2020 – 2023",
    highlights: [
      "Completed Bachelor of Computer Applications with a strong foundation in computer applications, programming, and software concepts.",
      "Graduated from Sri Sankara Arts and Science College affiliated with University of Madras."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Frontend / Web Development Certification",
    issuer: "Udemy",
    highlights: [
      "Comprehensive certification covering modern web technologies, frontend engineering, and ReactJS ecosystem."
    ]
  }
];

export const RESUME_DATA = {
  name: "SURENDAR G",
  title: "Frontend Developer | ReactJS Developer",
  location: "Chennai, Tamil Nadu",
  phone: "+91 7904085073",
  email: "surendarganesanofficial@gmail.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  summary: "Frontend Developer with 2+ years of experience in building responsive and scalable web applications using ReactJS, JavaScript, TypeScript, HTML5, CSS3, and SCSS. Experienced in developing enterprise applications across Order Management System (OMS) and Human Resource Management System (HRMS) projects. Skilled in developing reusable UI components, CRUD workflows, approval flows, REST API integrations, and business-driven frontend features. Experienced in working in a startup environment with project-level team leadership and responsibility for feature delivery, coordination, and issue resolution.",
  technicalSkills: {
    frontend: "ReactJS, JavaScript, TypeScript, HTML5, CSS3, SCSS",
    stateManagement: "Redux, React Hooks",
    uiDevelopment: "Responsive Design, Reusable Components, CRUD Operations, Forms, Form Validation",
    apiIntegration: "REST APIs, JSON, API Integration, Error Handling",
    developmentTools: "Git, GitHub, Jira, VS Code, ESLint, Husky",
    developmentPractices: "Agile Development, Debugging, Code Review, Build Validation, UAT Support"
  },
  experience: EXPERIENCES,
  projects: PROJECTS,
  workstreams: WORKSTREAMS,
  leadership: LEADERSHIP_RESPONSIBILITIES,
  education: EDUCATION,
  certifications: CERTIFICATIONS,
  additionalInfo: {
    languages: "Tamil, English",
    currentRole: "Frontend Developer",
    primaryTechnology: "ReactJS",
    experience: "2+ Years"
  }
};
