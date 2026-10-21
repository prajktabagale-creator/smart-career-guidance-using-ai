/**
 * Smart Career Guidance Using AI
 * Core Application Engine & Transparent Rule-Based Career Recommendation System
 */

// =============================================================================
// 1. CAREER KNOWLEDGE BASE & ROADMAP DATABASE
// =============================================================================

const CAREER_DATABASE = [
  {
    id: 'fullstack-dev',
    title: 'Full Stack Software Engineer',
    domain: 'tech',
    domainLabel: 'Software Engineering',
    shortDesc: 'Designs, develops, and deploys both client-facing user interfaces and server-side web architectures.',
    fullDesc: 'Full Stack Software Engineers build end-to-end web applications. They write frontend interfaces using modern frameworks, architect backend databases, create scalable REST & GraphQL APIs, and deploy software to the cloud. This career offers immense flexibility, strong global demand, and the ability to turn ideas into tangible products.',
    salaryRange: '$85,000 – $155,000 / year (₹8 – ₹30 LPA)',
    educationPath: 'B.S. in Computer Science, Software Engineering, IT, or equivalent hands-on portfolio / coding bootcamp experience.',
    jobRoles: ['Frontend Developer', 'Backend Engineer', 'Full Stack Developer', 'API Engineer', 'Software Architect'],
    requiredSkills: ['JavaScript / TypeScript', 'React / Next.js', 'Node.js / Express or Python', 'SQL & NoSQL Databases', 'Git Version Control', 'REST APIs', 'Cloud Deployment basics'],
    weightCriteria: {
      subjects: ['cs', 'math', 'physics'],
      interests: ['coding', 'hardware'],
      skills: ['programming', 'problem-solving', 'critical-thinking'],
      workStyle: ['remote-tech'],
      priority: ['high-earning', 'innovation', 'work-life']
    },
    roadmap: {
      durationEstimate: '6 – 9 Months (10-15 hrs/week)',
      phases: [
        {
          phaseNumber: 1,
          title: 'Foundations of Web & Programming',
          duration: 'Weeks 1 – 6',
          summary: 'Master the essential building blocks of the web and fundamental programming concepts.',
          skills: ['HTML5 Semantic Markup', 'Modern CSS3, Flexbox & Grid', 'JavaScript Fundamentals (Variables, Loops, DOM, ES6+)'],
          milestones: [
            'Build a responsive multi-page portfolio website from scratch',
            'Create an interactive JavaScript quiz game with local storage',
            'Learn Git fundamentals: branching, committing, and pushing to GitHub'
          ]
        },
        {
          phaseNumber: 2,
          title: 'Modern Frontend & Component Architecture',
          duration: 'Weeks 7 – 14',
          summary: 'Level up to reactive Single Page Applications using industry-standard frontend frameworks.',
          skills: ['React.js or Vue.js', 'State Management', 'Tailwind CSS', 'Consuming REST APIs with Axios/Fetch'],
          milestones: [
            'Build a live Weather Dashboard connecting to an external REST API',
            'Develop an E-commerce Product Catalog with cart state management',
            'Master responsive design patterns and accessibility (WCAG basics)'
          ]
        },
        {
          phaseNumber: 3,
          title: 'Backend Systems, Databases & APIs',
          duration: 'Weeks 15 – 22',
          summary: 'Construct resilient server backends, secure authentication, and relational/NoSQL databases.',
          skills: ['Node.js & Express or Python Fast-API', 'PostgreSQL or MongoDB', 'JWT Authentication & Security', 'CRUD API Architecture'],
          milestones: [
            'Build a user authentication system with encrypted passwords and JWT tokens',
            'Design a normalized relational database schema for a blogging platform',
            'Test APIs thoroughly using Postman or Bruno'
          ]
        },
        {
          phaseNumber: 4,
          title: 'Full Stack Integration, Deployment & Job Search',
          duration: 'Weeks 23 – 30',
          summary: 'Connect your frontend and backend, automate CI/CD, deploy to cloud hosts, and prepare for interviews.',
          skills: ['Docker basics', 'Cloud Deployment (Vercel, Render, AWS)', 'Data Structures & Algorithms (LeetCode Easy/Medium)', 'Resume & Portfolio Building'],
          milestones: [
            'Deploy a production-ready full-stack SaaS capstone with live database and user accounts',
            'Write clean README documentation and system architecture diagrams',
            'Complete 50 standard algorithmic coding challenges for technical interviews'
          ]
        }
      ],
      projects: [
        {
          title: 'Interactive Personal Portfolio & Blog',
          tier: 'beginner',
          desc: 'A responsive portfolio site featuring dark/light mode, dynamic project cards filtered by tag, and a working contact form with client-side validation.',
          tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive']
        },
        {
          title: 'TaskFlow: Real-time Kanban Board',
          tier: 'intermediate',
          desc: 'A Trello-style productivity app with drag-and-drop task columns, priority tags, search filters, and persistent browser storage.',
          tags: ['React', 'Tailwind CSS', 'Drag & Drop API', 'State Management']
        },
        {
          title: 'DevCollab: Full-Stack Project Marketplace',
          tier: 'capstone',
          desc: 'A complete web platform where creators post project briefs, freelancers place proposals, and teams communicate with live comments and database persistence.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT Auth', 'Cloud Deploy']
        }
      ],
      resources: [
        { name: 'MDN Web Docs', platform: 'Mozilla Developer Network', desc: 'The gold standard reference for HTML, CSS, and modern JavaScript.' },
        { name: 'Full Stack Open', platform: 'University of Helsinki', desc: 'Renowned, free, deep-dive curriculum covering React, Redux, Node, and GraphQL.' },
        { name: 'freeCodeCamp', platform: 'Interactive Platform', desc: 'Beginner-friendly hands-on coding certifications with real projects.' },
        { name: 'The Odin Project', platform: 'Curated Open Source Path', desc: 'Comprehensive full-stack web development curriculum.' }
      ]
    }
  },

  {
    id: 'data-scientist',
    title: 'Data Scientist & AI Specialist',
    domain: 'data',
    domainLabel: 'Data & Artificial Intelligence',
    shortDesc: 'Extracts actionable business insights from big data and trains intelligent machine learning models.',
    fullDesc: 'Data Scientists and AI Specialists combine mathematics, statistics, and computer programming to uncover hidden patterns within vast datasets. They construct predictive models, fine-tune AI algorithms, and translate raw numbers into executive business decisions.',
    salaryRange: '$95,000 – $165,000 / year (₹10 – ₹35 LPA)',
    educationPath: 'B.S. or M.S. in Data Science, Statistics, Mathematics, Computer Science, or Quantitative Finance.',
    jobRoles: ['Data Scientist', 'Machine Learning Engineer', 'Data Analyst', 'AI Prompt Engineer', 'Business Intelligence Developer'],
    requiredSkills: ['Python (NumPy, Pandas)', 'SQL Data Querying', 'Exploratory Data Analysis (EDA)', 'Machine Learning (Scikit-Learn)', 'Data Visualization (Matplotlib, Tableau)', 'Probability & Statistics'],
    weightCriteria: {
      subjects: ['math', 'cs', 'business'],
      interests: ['data', 'coding'],
      skills: ['data-analysis', 'math-stats', 'problem-solving', 'critical-thinking'],
      workStyle: ['data-research', 'remote-tech'],
      priority: ['high-earning', 'innovation']
    },
    roadmap: {
      durationEstimate: '7 – 10 Months (12-16 hrs/week)',
      phases: [
        {
          phaseNumber: 1,
          title: 'Python for Data & Statistical Foundations',
          duration: 'Weeks 1 – 6',
          summary: 'Build computational fluency in Python and master core statistical principles.',
          skills: ['Python Fundamentals', 'NumPy & Pandas', 'Descriptive Statistics & Probability', 'Jupyter Notebooks'],
          milestones: [
            'Perform exploratory data analysis on a real Kaggle dataset (e.g. Titanic or Housing)',
            'Calculate statistical distributions, correlations, and hypothesis tests in Python',
            'Clean messy datasets dealing with null values and outliers'
          ]
        },
        {
          phaseNumber: 2,
          title: 'Advanced SQL & Data Visualization',
          duration: 'Weeks 7 – 14',
          summary: 'Master database querying, aggregating millions of records, and telling compelling stories with charts.',
          skills: ['Complex SQL (Joins, Window Functions, CTEs)', 'Matplotlib & Seaborn', 'Tableau / PowerBI dashboards'],
          milestones: [
            'Write complex SQL queries solving business retention and churn metrics',
            'Build an interactive dashboard visualizing global economic or healthcare trends',
            'Publish an explanatory analytical report with data-driven recommendations'
          ]
        },
        {
          phaseNumber: 3,
          title: 'Classical Machine Learning & Modeling',
          duration: 'Weeks 15 – 22',
          summary: 'Train, evaluate, and tune supervised and unsupervised learning algorithms.',
          skills: ['Scikit-Learn', 'Regression & Classification', 'Random Forests & XGBoost', 'Model Evaluation Metrics (ROC-AUC, F1-Score)'],
          milestones: [
            'Train a customer churn predictor with over 85% precision and recall',
            'Perform customer segmentation using K-Means clustering and PCA',
            'Implement cross-validation and hyperparameter tuning pipelines'
          ]
        },
        {
          phaseNumber: 4,
          title: 'Deep Learning, LLMs & Model Deployment',
          duration: 'Weeks 23 – 32',
          summary: 'Explore neural networks, modern generative AI integration, and production deployment via APIs.',
          skills: ['PyTorch or TensorFlow basics', 'HuggingFace & Transformers', 'Streamlit / FastAPI Deployment', 'MLOps basics'],
          milestones: [
            'Build and deploy an interactive ML web application using Streamlit',
            'Fine-tune an NLP model for sentiment analysis or semantic search',
            'Prepare a GitHub portfolio with clear documentation, charts, and demo videos'
          ]
        }
      ],
      projects: [
        {
          title: 'Global Housing Price Trend Analyzer',
          tier: 'beginner',
          desc: 'An exploratory data analysis project cleaning real estate listings, analyzing demographic correlations, and visualizing pricing trends.',
          tags: ['Python', 'Pandas', 'Seaborn', 'EDA']
        },
        {
          title: 'Customer Churn Predictor & Retention Dashboard',
          tier: 'intermediate',
          desc: 'An end-to-end machine learning pipeline that trains an XGBoost classifier to predict customer cancellations and displays risk scores in an interactive UI.',
          tags: ['Scikit-Learn', 'SQL', 'Streamlit', 'XGBoost']
        },
        {
          title: 'Smart Health Risk Diagnosis with Deep Learning',
          tier: 'capstone',
          desc: 'A predictive medical analytics tool analyzing patient clinical biomarkers to classify cardiac risks, complete with SHAP explainability visualizations.',
          tags: ['PyTorch', 'FastAPI', 'SHAP', 'Healthcare Data', 'Docker']
        }
      ],
      resources: [
        { name: 'Kaggle Learn', platform: 'Kaggle', desc: 'Free micro-courses in Python, Pandas, Machine Learning, and Data Visualization.' },
        { name: 'Fast.ai: Practical Deep Learning', platform: 'Fast.ai', desc: 'World-renowned top-down course making deep learning accessible to programmers.' },
        { name: 'StatQuest with Josh Starmer', platform: 'YouTube', desc: 'Clear, intuitive visual breakdowns of complex statistics and ML algorithms.' },
        { name: 'Google Machine Learning Crash Course', platform: 'Google', desc: 'Self-study guide with interactive exercises and real TensorFlow code.' }
      ]
    }
  },

  {
    id: 'uiux-designer',
    title: 'UI/UX & Digital Product Designer',
    domain: 'design',
    domainLabel: 'Design & Visual Arts',
    shortDesc: 'Crafts intuitive, visually captivating, and human-centered digital experiences for apps and websites.',
    fullDesc: 'UI/UX Designers solve human problems through elegant visual interfaces. They conduct user research, map wireframes, build high-fidelity interactive prototypes in Figma, and build scalable design systems that bridge visual aesthetics with technical feasibility.',
    salaryRange: '$70,000 – $135,000 / year (₹6 – ₹22 LPA)',
    educationPath: 'Degree in Graphic Design, Human-Computer Interaction (HCI), Digital Media, Psychology, or self-taught design portfolio.',
    jobRoles: ['UI Designer', 'UX Researcher', 'Product Designer', 'Interaction Designer', 'Design Systems Lead'],
    requiredSkills: ['Figma & Prototyping', 'User Research & Persona Mapping', 'Information Architecture', 'Design Systems & Tokens', 'Wireframing', 'Usability Testing', 'Basic HTML/CSS understanding'],
    weightCriteria: {
      subjects: ['arts', 'psychology', 'literature'],
      interests: ['design', 'writing'],
      skills: ['ui-design', 'empathy', 'communication', 'problem-solving'],
      workStyle: ['creative-studio', 'remote-tech'],
      priority: ['creativity', 'work-life', 'innovation']
    },
    roadmap: {
      durationEstimate: '5 – 8 Months (10-14 hrs/week)',
      phases: [
        {
          phaseNumber: 1,
          title: 'Design Thinking & Visual Fundamentals',
          duration: 'Weeks 1 – 6',
          summary: 'Master typography, color psychology, grid systems, and the design thinking framework.',
          skills: ['Typography & Hierarchy', 'Color Theory & Contrast (WCAG)', 'Figma Interface & Shortcuts', 'User Journey Mapping'],
          milestones: [
            'Deconstruct and recreate 3 popular web apps (e.g., Airbnb, Spotify) in Figma to understand layouts',
            'Conduct an empathy interview with 3 users to uncover product pain points',
            'Create a personal visual moodboard and typography scale'
          ]
        },
        {
          phaseNumber: 2,
          title: 'Wireframing, Information Architecture & UX Research',
          duration: 'Weeks 7 – 12',
          summary: 'Transform user needs into intuitive navigation flows and low-fidelity prototypes.',
          skills: ['User Flow Diagrams', 'Low-Fidelity Wireframes', 'Card Sorting', 'Usability Testing Protocols'],
          milestones: [
            'Map out complete sitemaps and user flows for a complex mobile booking app',
            'Create low-fidelity wireframes exploring 3 distinct navigation paradigms',
            'Conduct a recorded usability test session and synthesize user feedback'
          ]
        },
        {
          phaseNumber: 3,
          title: 'High-Fidelity Prototyping & Design Systems',
          duration: 'Weeks 13 – 20',
          summary: 'Build responsive components, auto-layouts, micro-interactions, and reusable token libraries.',
          skills: ['Figma Auto-Layout & Variants', 'Design Tokens & Component Libraries', 'Interactive Micro-animations', 'Design System Documentation'],
          milestones: [
            'Build a comprehensive design system with 20+ atomic components and dark/light modes',
            'Create an interactive Figma prototype with micro-animations and realistic interactions',
            'Prepare developer handoff files with redlines and asset exports'
          ]
        },
        {
          phaseNumber: 4,
          title: 'Case Study Storytelling & Portfolio Launch',
          duration: 'Weeks 21 – 28',
          summary: 'Package your work into compelling case studies highlighting your thought process and business impact.',
          skills: ['Case Study Writing', 'Design Critiques', 'Figma / Webflow Portfolio', 'Design Interview Prep'],
          milestones: [
            'Write 2 deep-dive product case studies detailing problem, research, iterations, and final screens',
            'Publish your personal design portfolio on the web',
            'Participate in a weekly design critique with peer designers'
          ]
        }
      ],
      projects: [
        {
          title: 'MindfulBite: Meal Prep Mobile App UX Case Study',
          tier: 'beginner',
          desc: 'A mobile app concept helping busy college students plan healthy budget meals, featuring user persona research, wireframes, and UI mockups.',
          tags: ['Figma', 'UX Research', 'Mobile UI', 'Prototyping']
        },
        {
          title: 'EcoTrack: Carbon Footprint Tracking SaaS',
          tier: 'intermediate',
          desc: 'A desktop SaaS platform with an interactive dashboard, data visualization cards, and a component design system built with Figma auto-layout.',
          tags: ['Design System', 'SaaS Dashboard', 'Auto-Layout', 'Component Library']
        },
        {
          title: 'LearnBridge: Accessible EdTech Web Platform',
          tier: 'capstone',
          desc: 'An inclusive online learning portal designed for students with diverse abilities, adhering to WCAG 2.1 AAA accessibility guidelines with user testing validation.',
          tags: ['Accessibility', 'Design System', 'High-Fidelity', 'Case Study']
        }
      ],
      resources: [
        { name: 'Nielsen Norman Group (NN/g)', platform: 'NN/g Articles', desc: 'World leaders in research-based user experience guidance.' },
        { name: 'Figma Community & YouTube', platform: 'Figma', desc: 'Official tutorials on auto-layout, interactive components, and design systems.' },
        { name: 'Laws of UX', platform: 'Interactive Guide', desc: 'A collection of best practices and psychological principles for digital product design.' },
        { name: 'Refactoring UI', platform: 'Book & Guide', desc: 'Practical tips to make your designs look professional without formal art training.' }
      ]
    }
  },

  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst & Ethical Hacker',
    domain: 'tech',
    domainLabel: 'Security & Infrastructure',
    shortDesc: 'Protects critical network systems, analyzes digital vulnerabilities, and defends against cyber threats.',
    fullDesc: 'Cybersecurity Analysts safeguard company assets, data, and infrastructure from malicious actors. They monitor networks for intrusions, execute penetration tests, audit system vulnerabilities, and respond swiftly to security breaches.',
    salaryRange: '$80,000 – $145,000 / year (₹7 – ₹25 LPA)',
    educationPath: 'Degree in Cybersecurity, Computer Science, Information Systems, or industry certifications (CompTIA Security+, CEH, CISSP).',
    jobRoles: ['Security Analyst (SOC)', 'Penetration Tester', 'Incident Response Specialist', 'Cloud Security Engineer', 'Threat Intelligence Analyst'],
    requiredSkills: ['Networking & Protocols (TCP/IP, DNS, VPN)', 'Linux System Administration', 'Vulnerability Scanning (Wireshark, Nmap)', 'SIEM Monitoring (Splunk)', 'Scripting (Python / Bash)', 'Security Compliance & Frameworks'],
    weightCriteria: {
      subjects: ['cs', 'physics', 'math'],
      interests: ['security', 'coding', 'hardware'],
      skills: ['critical-thinking', 'problem-solving', 'programming'],
      workStyle: ['remote-tech'],
      priority: ['high-earning', 'impact']
    },
    roadmap: {
      durationEstimate: '6 – 9 Months (12-15 hrs/week)',
      phases: [
        {
          phaseNumber: 1,
          title: 'Networking & Operating System Foundations',
          duration: 'Weeks 1 – 6',
          summary: 'Understand the underlying infrastructure of the internet and command-line operating systems.',
          skills: ['TCP/IP Model, Subnetting & Routing', 'Linux CLI Administration', 'Windows Active Directory Basics'],
          milestones: [
            'Set up a home virtual lab with Kali Linux and Ubuntu Server using VirtualBox',
            'Capture and inspect live HTTP/DNS network traffic using Wireshark',
            'Automate basic log search tasks using Bash and Python scripts'
          ]
        },
        {
          phaseNumber: 2,
          title: 'Security Fundamentals & Threat Analysis',
          duration: 'Weeks 7 – 14',
          summary: 'Study standard security principles (CIA triad), malware classes, and defensive countermeasures.',
          skills: ['Firewalls & IDS/IPS', 'OWASP Top 10 Web Vulnerabilities', 'Cryptography & PKI', 'SOC Fundamentals'],
          milestones: [
            'Identify and exploit OWASP Top 10 vulnerabilities (SQLi, XSS) in Juice Shop lab',
            'Implement firewall rules and fail2ban intrusion prevention on a Linux server',
            'Solve 15 beginner security challenges on TryHackMe or OverTheWire'
          ]
        },
        {
          phaseNumber: 3,
          title: 'Defensive Operations, SIEM & Incident Handling',
          duration: 'Weeks 15 – 22',
          summary: 'Analyze live security telemetry, write detection rules, and perform incident triage.',
          skills: ['SIEM with Splunk / Elastic', 'Log Analysis', 'Incident Response Playbooks', 'MITRE ATT&CK Framework'],
          milestones: [
            'Ingest Windows Event logs into a Splunk instance and detect brute force attacks',
            'Simulate an adversary lateral movement scenario mapped to MITRE ATT&CK',
            'Write an incident response post-mortem report following NIST standards'
          ]
        },
        {
          phaseNumber: 4,
          title: 'Certifications, Bug Bounty & Practical Career Prep',
          duration: 'Weeks 23 – 30',
          summary: 'Prepare for entry certifications, engage in responsible disclosure labs, and polish job applications.',
          skills: ['CompTIA Security+ or CEH prep', 'Vulnerability Assessment with Nessus/Nmap', 'Security Audit Documentation'],
          milestones: [
            'Complete all practice exams for CompTIA Security+ or equivalent certification',
            'Submit a responsible vulnerability report on a simulated enterprise environment',
            'Publish a technical writeup on Medium/GitHub explaining a solved CTF box'
          ]
        }
      ],
      projects: [
        {
          title: 'Home Network Intrusion Detection Lab',
          tier: 'beginner',
          desc: 'Build a private virtual machine lab simulating an enterprise network with a centralized firewall and snort packet inspector.',
          tags: ['VirtualBox', 'Linux', 'Wireshark', 'Networking']
        },
        {
          title: 'Splunk Security Operations Dashboard',
          tier: 'intermediate',
          desc: 'A configured SIEM dashboard that monitors simulated server auth logs, alerts on repeated brute-force attacks, and flags abnormal traffic spikes.',
          tags: ['Splunk', 'Log Analysis', 'SIEM', 'Bash']
        },
        {
          title: 'Full Web Application Security Audit & Report',
          tier: 'capstone',
          desc: 'Perform an authorized black-box vulnerability scan and manual penetration test against an open-source web application, generating an executive risk remediation report.',
          tags: ['OWASP Top 10', 'Nmap', 'Burp Suite', 'Risk Report']
        }
      ],
      resources: [
        { name: 'TryHackMe', platform: 'Interactive Labs', desc: 'Hands-on guided cybersecurity training rooms for all experience levels.' },
        { name: 'Professor Messer CompTIA Security+', platform: 'Free Video Course', desc: 'High-quality comprehensive video training for foundational certification.' },
        { name: 'OverTheWire Wargames', platform: 'Terminal Challenges', desc: 'Fun command-line security challenges teaching Linux navigation and exploitation.' },
        { name: 'PortSwigger Web Security Academy', platform: 'Burp Suite Labs', desc: 'The definitive free interactive platform for learning web security.' }
      ]
    }
  },

  {
    id: 'healthcare-biomedical',
    title: 'Healthcare & Biomedical Informatics Specialist',
    domain: 'healthcare',
    domainLabel: 'Healthcare & Science',
    shortDesc: 'Combines biological sciences with health data systems to improve patient outcomes and medical discovery.',
    fullDesc: 'Healthcare and Biomedical Specialists work at the crucial intersection of medicine, biological science, and information technology. They manage clinical health informatics, optimize diagnostic systems, analyze epidemiological statistics, and modernize digital healthcare delivery.',
    salaryRange: '$75,000 – $130,000 / year (₹6 – ₹20 LPA)',
    educationPath: 'Degree in Biomedical Science, Biotechnology, Health Informatics, Nursing, Biology, or related life science fields.',
    jobRoles: ['Health Data Analyst', 'Clinical Research Coordinator', 'Biomedical Informatics Specialist', 'Healthcare Solutions Consultant', 'Biostatistician'],
    requiredSkills: ['Biological Sciences & Clinical Terminology', 'Electronic Health Records (EHR) Systems', 'Health Data Privacy (HIPAA/GDPR)', 'Biostatistics & R/Python', 'Clinical Research Methods', 'Empathy & Patient Communication'],
    weightCriteria: {
      subjects: ['biology', 'psychology', 'math'],
      interests: ['healthcare', 'data'],
      skills: ['empathy', 'critical-thinking', 'data-analysis', 'communication'],
      workStyle: ['health-impact', 'data-research'],
      priority: ['impact', 'work-life']
    },
    roadmap: {
      durationEstimate: '6 – 9 Months (10-14 hrs/week)',
      phases: [
        {
          phaseNumber: 1,
          title: 'Clinical Foundations & Healthcare Systems',
          duration: 'Weeks 1 – 6',
          summary: 'Understand modern medical delivery, clinical terminology, and patient health regulatory frameworks.',
          skills: ['Medical Terminology & Anatomy Basics', 'Healthcare Regulatory Compliance (HIPAA)', 'Public Health Principles'],
          milestones: [
            'Complete an accredited introductory healthcare compliance and data privacy module',
            'Map the standard patient diagnostic lifecycle in hospital settings',
            'Learn common clinical coding standards (ICD-10, CPT, HL7 FHIR basics)'
          ]
        },
        {
          phaseNumber: 2,
          title: 'Health Data Analysis & Biostatistics',
          duration: 'Weeks 7 – 14',
          summary: 'Learn statistical methods used in epidemiology and clinical drug trials.',
          skills: ['Biostatistics in R or Python', 'Epidemiological Metrics', 'Health Survey Analysis', 'Data Cleaning with Excel/SQL'],
          milestones: [
            'Analyze open CDC or WHO public health datasets using R/Python',
            'Calculate odds ratios, survival curves, and statistical significance on health metrics',
            'Create visual charts tracking disease spread and vaccination efficacy'
          ]
        },
        {
          phaseNumber: 3,
          title: 'Digital Health Technologies & Informatics',
          duration: 'Weeks 15 – 22',
          summary: 'Work with Electronic Health Records (EHR), telemedicine platforms, and clinical decision support.',
          skills: ['EHR Workflows & HL7/FHIR Data', 'Clinical Trial Documentation', 'Telehealth Systems Integration'],
          milestones: [
            'Query a synthetic patient database using SQL to evaluate chronic disease management',
            'Design a clinical workflow optimization proposal reducing patient wait times',
            'Simulate an interoperability data exchange using modern FHIR JSON schemas'
          ]
        },
        {
          phaseNumber: 4,
          title: 'Capstone Research & Clinical Career Readiness',
          duration: 'Weeks 23 – 30',
          summary: 'Publish a healthcare analytics project, network with health organizations, and interview.',
          skills: ['Research Paper Synthesis', 'Stakeholder Presentations', 'Healthcare Portfolio'],
          milestones: [
            'Complete a comprehensive epidemiological analysis capstone with recommendations',
            'Present clinical data insights to a multidisciplinary audience',
            'Target health systems, pharma, and health-tech organizations for analyst roles'
          ]
        }
      ],
      projects: [
        {
          title: 'Public Health Trend & Outbreak Visualizer',
          tier: 'beginner',
          desc: 'An analytical dashboard cleaning and visualizing regional infectious disease spread, hospitalization rates, and recovery stats.',
          tags: ['Python/R', 'Public Health', 'Data Visualization', 'WHO Data']
        },
        {
          title: 'Hospital Readmission Risk Predictor',
          tier: 'intermediate',
          desc: 'A predictive statistical model analyzing patient demographic and clinical factors to flag patients with high risk of 30-day hospital readmission.',
          tags: ['Biostatistics', 'SQL', 'Predictive Modeling', 'Clinical Data']
        },
        {
          title: 'FHIR-Compliant Patient Portal Prototype',
          tier: 'capstone',
          desc: 'A modern, accessible patient medical portal prototype designed to fetch synthetic medical records securely adhering to HL7 FHIR standards.',
          tags: ['Health Informatics', 'HL7 FHIR', 'UI Design', 'Data Privacy']
        }
      ],
      resources: [
        { name: 'Coursera: Health Informatics Specialization', platform: 'Johns Hopkins University', desc: 'World-class foundation in healthcare informatics and big data.' },
        { name: 'CDC Public Health Data Resources', platform: 'Centers for Disease Control', desc: 'Free public health datasets and epidemiology case studies.' },
        { name: 'HL7 FHIR Official Documentation', platform: 'HL7.org', desc: 'Standard specifications for modern healthcare data interoperability.' },
        { name: 'WHO Global Health Observatory', platform: 'World Health Organization', desc: 'Comprehensive global health statistics and research papers.' }
      ]
    }
  },

  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth Strategist',
    domain: 'business',
    domainLabel: 'Business & Growth',
    shortDesc: 'Drives brand visibility, consumer acquisition, and online growth through data-driven campaigns.',
    fullDesc: 'Digital Marketing and Growth Strategists engineer multi-channel customer acquisition funnels. They blend creativity with analytical rigor, orchestrating search engine optimization (SEO), paid media campaigns, content strategy, email marketing, and conversion rate optimization (CRO).',
    salaryRange: '$65,000 – $120,000 / year (₹5 – ₹18 LPA)',
    educationPath: 'Degree in Marketing, Business, Communications, Psychology, English, or demonstrated digital portfolio and certifications.',
    jobRoles: ['Growth Marketer', 'SEO Specialist', 'Performance Marketing Specialist', 'Content Marketing Strategist', 'Brand Campaign Manager'],
    requiredSkills: ['Search Engine Optimization (SEO)', 'Content Strategy & Copywriting', 'Google Analytics 4 & Data Tracking', 'Paid Ads (Meta, Google, LinkedIn)', 'Conversion Rate Optimization (CRO)', 'Email Automation (Klaviyo/Mailchimp)'],
    weightCriteria: {
      subjects: ['business', 'literature', 'psychology'],
      interests: ['marketing', 'writing', 'business'],
      skills: ['communication', 'writing', 'data-analysis', 'organization'],
      workStyle: ['business-leadership', 'remote-tech', 'creative-studio'],
      priority: ['innovation', 'high-earning', 'work-life']
    },
    roadmap: {
      durationEstimate: '4 – 7 Months (10-12 hrs/week)',
      phases: [
        {
          phaseNumber: 1,
          title: 'Marketing Foundations & Content Strategy',
          duration: 'Weeks 1 – 5',
          summary: 'Understand customer buying journeys, psychological triggers, and brand positioning.',
          skills: ['Buyer Personas & Market Research', 'Copywriting & Value Propositions', 'Social Media Strategy'],
          milestones: [
            'Create 3 detailed customer avatar personas for a target product',
            'Write high-converting website sales copy for a landing page',
            'Design a 30-day social media editorial calendar with targeted content pillars'
          ]
        },
        {
          phaseNumber: 2,
          title: 'Search Engine Optimization (SEO) & Inbound Marketing',
          duration: 'Weeks 6 – 11',
          summary: 'Rank websites on Google, conduct keyword research, and optimize technical on-page factors.',
          skills: ['Keyword Research (Ahrefs, Semrush)', 'On-Page SEO & Content Optimization', 'Technical SEO & Core Web Vitals'],
          milestones: [
            'Perform a comprehensive keyword research audit identifying 25 low-competition keywords',
            'Write and publish a 2,000-word SEO-optimized pillar guide',
            'Conduct a technical SEO audit using Screaming Frog and fix crawl errors'
          ]
        },
        {
          phaseNumber: 3,
          title: 'Paid Media (PPC) & Marketing Analytics',
          duration: 'Weeks 12 – 18',
          summary: 'Run profitable paid ad campaigns on Google and Meta, measuring ROI with Google Analytics.',
          skills: ['Google Ads Search & Display', 'Meta (Facebook/Instagram) Ads Manager', 'Google Analytics 4 (GA4) & Tag Manager'],
          milestones: [
            'Set up event tracking in Google Tag Manager and GA4 for conversion tracking',
            'Build a complete multi-tier ad campaign mockup with ad creative, copy, and audience targeting',
            'Earn the official Google Ads Search Certification'
          ]
        },
        {
          phaseNumber: 4,
          title: 'Email Automation, Funnels & Growth Portfolio',
          duration: 'Weeks 19 – 25',
          summary: 'Nurture leads with automated email drip sequences and assemble a results-driven portfolio.',
          skills: ['Email Marketing Flows', 'A/B Testing & CRO', 'Growth Marketing Funnel Analysis'],
          milestones: [
            'Build an automated 5-part email welcome and onboarding drip sequence',
            'Run an A/B test on a landing page hero section to improve conversion rate',
            'Create a case study portfolio demonstrating quantifiable audience and traffic growth'
          ]
        }
      ],
      projects: [
        {
          title: 'Niche Website SEO & Content Growth Experiment',
          tier: 'beginner',
          desc: 'Launch a content blog in a specific niche, conduct keyword research, optimize on-page metadata, and track organic traffic in Google Search Console.',
          tags: ['SEO', 'Content Strategy', 'Google Search Console', 'Copywriting']
        },
        {
          title: 'E-commerce Brand Paid Ad Campaign & Funnel',
          tier: 'intermediate',
          desc: 'Design an end-to-end paid advertising funnel on Meta Ads with custom audience segments, retargeting logic, ad creatives, and ROAS projection models.',
          tags: ['Meta Ads', 'Funnel Design', 'ROAS', 'Analytics']
        },
        {
          title: 'Full Product Launch Strategy & Growth Playbook',
          tier: 'capstone',
          desc: 'An executive marketing playbook for a B2B SaaS product including competitive analysis, SEO roadmap, multi-touch email nurture sequence, and GA4 dashboard.',
          tags: ['Growth Strategy', 'GA4', 'Email Automation', 'Playbook']
        }
      ],
      resources: [
        { name: 'HubSpot Academy', platform: 'Free Certifications', desc: 'Industry-standard free certifications in Inbound Marketing, Content, and SEO.' },
        { name: 'Google Skillshop', platform: 'Google Official', desc: 'Free training and official certification exams for Google Ads and GA4.' },
        { name: 'Backlinko / Neil Patel Guides', platform: 'SEO Guides', desc: 'Practical step-by-step blueprints for ranking #1 on search engines.' },
        { name: 'Marketing Examples', platform: 'Harry Dry', desc: 'Real-world visual case studies on great copy, branding, and ads.' }
      ]
    }
  },

  {
    id: 'cloud-devops',
    title: 'Cloud Architect & DevOps Engineer',
    domain: 'tech',
    domainLabel: 'Cloud & Infrastructure',
    shortDesc: 'Automates cloud infrastructure, manages continuous deployment pipelines, and guarantees system reliability.',
    fullDesc: 'Cloud and DevOps Engineers are the backbone of modern web infrastructure. They automate software deployments, manage serverless and containerized cloud services (AWS, Azure, GCP), architect resilient microservices, and ensure 99.99% system uptime.',
    salaryRange: '$90,000 – $160,000 / year (₹9 – ₹32 LPA)',
    educationPath: 'Degree in Computer Science, Computer Engineering, IT, or industry cloud certifications (AWS Solutions Architect, CKA).',
    jobRoles: ['DevOps Engineer', 'Cloud Architect', 'Site Reliability Engineer (SRE)', 'Infrastructure Automation Specialist', 'Platform Engineer'],
    requiredSkills: ['Cloud Platforms (AWS / Azure / GCP)', 'Docker & Containerization', 'Kubernetes Orchestration', 'Infrastructure as Code (Terraform)', 'CI/CD Pipelines (GitHub Actions)', 'Linux & Bash Scripting'],
    weightCriteria: {
      subjects: ['cs', 'physics', 'math'],
      interests: ['hardware', 'coding', 'security'],
      skills: ['problem-solving', 'critical-thinking', 'programming'],
      workStyle: ['remote-tech'],
      priority: ['high-earning', 'innovation']
    },
    roadmap: {
      durationEstimate: '6 – 9 Months (12-15 hrs/week)',
      phases: [
        {
          phaseNumber: 1,
          title: 'Linux Systems & Cloud Core Fundamentals',
          duration: 'Weeks 1 – 6',
          summary: 'Master Linux server administration, shell scripting, and core cloud hosting concepts.',
          skills: ['Advanced Linux Administration', 'Bash Shell Scripting', 'Cloud Concepts (EC2, S3, IAM, VPC)'],
          milestones: [
            'Spin up and secure an AWS EC2 instance running an Nginx web server',
            'Write Bash scripts automating server health monitoring and backup routines',
            'Configure Virtual Private Cloud (VPC) with public and private subnets'
          ]
        },
        {
          phaseNumber: 2,
          title: 'Containerization & Modern Packaging with Docker',
          duration: 'Weeks 7 – 13',
          summary: 'Package applications and dependencies into lightweight, portable Docker containers.',
          skills: ['Dockerfiles & Multi-stage Builds', 'Docker Compose Multi-Container Stacks', 'Container Networking & Volumes'],
          milestones: [
            'Containerize a multi-tier web application (Node.js + Postgres + Redis)',
            'Optimize Docker image size using alpine images and multi-stage builds',
            'Push and version images in Docker Hub / AWS ECR'
          ]
        },
        {
          phaseNumber: 3,
          title: 'CI/CD Automation & Infrastructure as Code (IaC)',
          duration: 'Weeks 14 – 21',
          summary: 'Automate build/test/deploy cycles and provision cloud resources declaratively.',
          skills: ['GitHub Actions Workflows', 'Terraform for AWS/Azure', 'Configuration Management (Ansible basics)'],
          milestones: [
            'Build a GitHub Actions CI pipeline running unit tests and building Docker images automatically on git push',
            'Write Terraform code to provision a complete cloud web stack (VPC, DB, VM)',
            'Implement blue-green zero-downtime deployment automation'
          ]
        },
        {
          phaseNumber: 4,
          title: 'Kubernetes Orchestration & Production SRE',
          duration: 'Weeks 22 – 30',
          summary: 'Manage distributed containers at scale and establish observability and monitoring.',
          skills: ['Kubernetes (Pods, Deployments, Services, Ingress)', 'Helm Charts', 'Prometheus & Grafana Monitoring'],
          milestones: [
            'Deploy a microservices cluster to Kubernetes (Minikube or managed cloud EKS/GKE)',
            'Set up a Grafana dashboard with Prometheus metrics tracking CPU, memory, and error rates',
            'Pass the AWS Certified Solutions Architect Associate exam'
          ]
        }
      ],
      projects: [
        {
          title: 'Automated CI/CD Pipeline for Containerized App',
          tier: 'beginner',
          desc: 'A complete GitHub Actions workflow that automatically tests code, builds a secure Docker image, and deploys it to a cloud server on merge to main.',
          tags: ['GitHub Actions', 'Docker', 'Linux', 'AWS']
        },
        {
          title: 'Terraform Cloud Infrastructure Blueprint',
          tier: 'intermediate',
          desc: 'Modular Terraform code that provisions a highly available cloud architecture with an auto-scaling group, load balancer, and RDS database in 3 minutes.',
          tags: ['Terraform', 'AWS', 'IaC', 'Networking']
        },
        {
          title: 'Production Kubernetes Cluster with Observability',
          tier: 'capstone',
          desc: 'A resilient Kubernetes deployment running a distributed web application with auto-healing, ingress TLS certificates, and live Prometheus/Grafana monitoring alerts.',
          tags: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'SRE']
        }
      ],
      resources: [
        { name: 'DevOps Roadmap (roadmap.sh)', platform: 'roadmap.sh/devops', desc: 'Visual interactive career guide to all tools and concepts in modern DevOps.' },
        { name: 'KodeKloud', platform: 'Hands-on Labs', desc: 'Interactive browser terminals for practicing Docker, Kubernetes, and Terraform.' },
        { name: 'AWS Skill Builder', platform: 'Amazon Web Services', desc: 'Free official learning paths for cloud fundamentals and architecture.' },
        { name: 'TechWorld with Nana', platform: 'YouTube', desc: 'Clear, beginner-friendly explanations of Docker, Kubernetes, and CI/CD.' }
      ]
    }
  },

  {
    id: 'fintech-analyst',
    title: 'Financial Technology & Quantitative Analyst',
    domain: 'business',
    domainLabel: 'Business & Finance',
    shortDesc: 'Analyzes financial markets, builds quantitative models, and evaluates algorithmic investment strategies.',
    fullDesc: 'Financial Technology (FinTech) and Quantitative Analysts operate where traditional finance meets cutting-edge computing. They build algorithmic trading strategies, assess credit risks, evaluate financial portfolios using Python and SQL, and innovate modern digital payment ecosystems.',
    salaryRange: '$85,000 – $150,000 / year (₹8 – ₹28 LPA)',
    educationPath: 'Degree in Finance, Economics, Mathematics, Computer Science, Statistics, or CFA / FRM certification candidate.',
    jobRoles: ['FinTech Analyst', 'Quantitative Researcher', 'Risk Analyst', 'Financial Modeling Associate', 'Algorithmic Trader'],
    requiredSkills: ['Financial Modeling & Valuation', 'Python for Finance (Pandas, yfinance)', 'Advanced Excel (VBA/Macros)', 'SQL Data Extraction', 'Risk Assessment & Portfolio Theory', 'Macroeconomics & Capital Markets'],
    weightCriteria: {
      subjects: ['business', 'math', 'cs'],
      interests: ['business', 'data'],
      skills: ['math-stats', 'data-analysis', 'problem-solving', 'critical-thinking'],
      workStyle: ['business-leadership', 'data-research'],
      priority: ['high-earning', 'innovation']
    },
    roadmap: {
      durationEstimate: '5 – 8 Months (10-14 hrs/week)',
      phases: [
        {
          phaseNumber: 1,
          title: 'Financial Accounting & Capital Markets',
          duration: 'Weeks 1 – 6',
          summary: 'Master financial statements, valuation techniques, and market structure.',
          skills: ['Three Statement Financial Models', 'Discounted Cash Flow (DCF)', 'Equities, Fixed Income & Derivatives'],
          milestones: [
            'Build a fully dynamic 3-statement financial model for a publicly traded company in Excel',
            'Conduct a DCF valuation calculating intrinsic equity value per share',
            'Understand corporate capital structure and weighted average cost of capital (WACC)'
          ]
        },
        {
          phaseNumber: 2,
          title: 'Python for Quantitative Finance',
          duration: 'Weeks 7 – 13',
          summary: 'Use Python to retrieve historical market data, calculate volatility, and backtest strategies.',
          skills: ['Pandas for Time-Series Analysis', 'yfinance & AlphaVantage APIs', 'Modern Portfolio Theory (Sharpe Ratio)'],
          milestones: [
            'Download and analyze 5 years of daily stock prices to compute rolling beta and returns',
            'Construct an efficient frontier asset allocation portfolio optimizing the Sharpe ratio',
            'Implement a moving average crossover backtesting strategy in Python'
          ]
        },
        {
          phaseNumber: 3,
          title: 'Risk Modeling & Financial Databases',
          duration: 'Weeks 14 – 20',
          summary: 'Evaluate credit risk, simulate market stress scenarios, and query financial data with SQL.',
          skills: ['Value at Risk (VaR) & Monte Carlo Simulations', 'Financial SQL Databases', 'Regulatory FinTech Compliance'],
          milestones: [
            'Run a 10,000-iteration Monte Carlo simulation forecasting portfolio drawdown risk',
            'Query transactions in a PostgreSQL database to flag potential payment fraud',
            'Analyze digital payment trends and peer-to-peer lending models'
          ]
        },
        {
          phaseNumber: 4,
          title: 'FinTech Applications, CFA Prep & Portfolio',
          duration: 'Weeks 21 – 28',
          summary: 'Package your quantitative models into a web-accessible dashboard and prepare for interviews.',
          skills: ['Streamlit Financial Apps', 'Equity Research Writing', 'Financial Interview Prep'],
          milestones: [
            'Publish an interactive financial dashboard displaying real-time market analysis and risk metrics',
            'Write an institutional-grade equity research initiation report on a high-growth tech stock',
            'Study core quantitative finance interview questions and mental math drills'
          ]
        }
      ],
      projects: [
        {
          title: 'Interactive Equity Research DCF Valuation Model',
          tier: 'beginner',
          desc: 'An Excel financial model forecasting revenue, free cash flows, and terminal valuation with scenario sensitivity tables.',
          tags: ['Excel', 'Financial Modeling', 'DCF', 'Valuation']
        },
        {
          title: 'Quantitative Portfolio Optimizer in Python',
          tier: 'intermediate',
          desc: 'A Python application that pulls live ticker data, calculates historical covariance, and plots the Markowitz efficient frontier to maximize risk-adjusted return.',
          tags: ['Python', 'Pandas', 'Monte Carlo', 'Portfolio Theory']
        },
        {
          title: 'Algorithmic Strategy Backtester & Risk Dashboard',
          tier: 'capstone',
          desc: 'A full web app allowing users to input stock tickers, select technical trading rules, and view simulated historical returns, maximum drawdown, and Alpha/Beta metrics.',
          tags: ['Streamlit', 'Python', 'Algorithmic Trading', 'Risk Metrics']
        }
      ],
      resources: [
        { name: 'Corporate Finance Institute (CFI)', platform: 'Free Courses', desc: 'High quality introductory guides to financial statements and modeling.' },
        { name: 'Python for Finance (Yves Hilpisch)', platform: 'Book / Reference', desc: 'The definitive text on quantitative finance and algorithmic trading.' },
        { name: 'Investopedia', platform: 'Financial Reference', desc: 'Comprehensive encyclopedia for all economic concepts and market instruments.' },
        { name: 'Khan Academy: Finance & Capital Markets', platform: 'Interactive Courses', desc: 'Intuitive video lessons on stocks, bonds, interest rates, and banking.' }
      ]
    }
  },

  {
    id: 'tech-writer',
    title: 'Technical Writer & Content Strategist',
    domain: 'design',
    domainLabel: 'Content & Communications',
    shortDesc: 'Translates intricate technological systems into crystal-clear developer documentation and guides.',
    fullDesc: 'Technical Writers and Documentation Specialists bridge the communication divide between software engineers and product users. They write developer API references, software integration tutorials, user guides, and architecture documentation that make software effortless to use.',
    salaryRange: '$65,000 – $115,000 / year (₹5 – ₹18 LPA)',
    educationPath: 'Degree in English, Communications, Computer Science, Journalism, Technical Writing, or portfolio of published technical guides.',
    jobRoles: ['Technical Writer', 'API Documentation Specialist', 'Content Strategist', 'Developer Advocate', 'Knowledge Base Architect'],
    requiredSkills: ['Clear Technical Explanations', 'Markdown & Docs-as-Code (Git, Docusaurus)', 'Basic Coding (Reading API requests/responses)', 'Information Architecture', 'Screen Capture & Diagramming', 'User Empathy'],
    weightCriteria: {
      subjects: ['literature', 'cs', 'psychology'],
      interests: ['writing', 'coding'],
      skills: ['writing', 'communication', 'organization', 'empathy'],
      workStyle: ['creative-studio', 'remote-tech'],
      priority: ['work-life', 'creativity']
    },
    roadmap: {
      durationEstimate: '4 – 7 Months (8-12 hrs/week)',
      phases: [
        {
          phaseNumber: 1,
          title: 'Writing Precision & Documentation Principles',
          duration: 'Weeks 1 – 5',
          summary: 'Learn clear, concise technical communication, active voice, and audience analysis.',
          skills: ['Plain Language Writing', 'Technical Grammar & Style Guides (Google / Microsoft)', 'Audience Persona Analysis'],
          milestones: [
            'Rewrite a confusing open-source README into an exemplary beginner-friendly guide',
            'Master the Google Developer Documentation Style Guide standards',
            'Write a step-by-step tutorial explaining how to install and configure software'
          ]
        },
        {
          phaseNumber: 2,
          title: 'Docs-as-Code Workflows & Markdown Tools',
          duration: 'Weeks 6 – 11',
          summary: 'Adopt engineering workflows: Git version control, static site generators, and markdown formatting.',
          skills: ['Markdown & MDX', 'Git Branching & Pull Requests', 'Static Site Generators (Docusaurus, VitePress, Hugo)'],
          milestones: [
            'Build and deploy a complete documentation website using Docusaurus hosted on GitHub Pages',
            'Submit a pull request improving documentation on an open-source GitHub repository',
            'Create interactive system flow diagrams using Mermaid.js'
          ]
        },
        {
          phaseNumber: 3,
          title: 'API Documentation & Developer Experience (DevEx)',
          duration: 'Weeks 12 – 18',
          summary: 'Document REST APIs, write code samples, and define OpenAPI/Swagger specifications.',
          skills: ['OpenAPI 3.0 / Swagger Specifications', 'API Request/Response Formatting', 'Testing Endpoints with Postman', 'Writing Multi-Language Code Snippets'],
          milestones: [
            'Write an interactive OpenAPI spec for a REST API with code samples in Python and JavaScript',
            'Document error codes, rate limits, and authentication flows for an API',
            'Create an illustrated "Quickstart in 5 Minutes" onboarding tutorial'
          ]
        },
        {
          phaseNumber: 4,
          title: 'Portfolio Building & Technical Interviewing',
          duration: 'Weeks 19 – 25',
          summary: 'Assemble a public documentation portfolio showcasing writing variety, API docs, and architecture guides.',
          skills: ['Portfolio Curation', 'Technical Reviews', 'Documentation Testing'],
          milestones: [
            'Publish a personal documentation portfolio with at least 3 distinct writing samples',
            'Conduct a documentation usability test observing an engineer follow your instructions',
            'Prepare answers for technical communication interview challenges'
          ]
        }
      ],
      projects: [
        {
          title: 'Beginner-Friendly Open Source Setup Guide',
          tier: 'beginner',
          desc: 'A comprehensive markdown guide walking non-technical contributors through installing Node.js, cloning a git repo, and submitting their first pull request.',
          tags: ['Markdown', 'Git', 'Open Source', 'Tutorial']
        },
        {
          title: 'Complete REST API Documentation Portal',
          tier: 'intermediate',
          desc: 'A public API documentation site built in Docusaurus with OpenAPI interactive endpoint explorers, copyable curl commands, and response schemas.',
          tags: ['OpenAPI', 'Swagger', 'Docusaurus', 'API Docs']
        },
        {
          title: 'Developer SDK Onboarding Playbook & Architecture Docs',
          tier: 'capstone',
          desc: 'An end-to-end documentation portal for a hypothetical cloud service, including architecture diagrams, sequence flows, configuration guides, and troubleshooting FAQs.',
          tags: ['Information Architecture', 'DevEx', 'Mermaid.js', 'Technical Writing']
        }
      ],
      resources: [
        { name: 'Google Technical Writing Courses', platform: 'developers.google.com', desc: 'Free foundational courses on clear, effective technical communication.' },
        { name: 'Write the Docs Community', platform: 'Global Community', desc: 'The premiere global community, podcasts, and guides for documentarians.' },
        { name: 'I\'d Rather Be Writing', platform: 'Tom Johnson', desc: 'The most comprehensive free course on REST API documentation.' },
        { name: 'Microsoft Writing Style Guide', platform: 'Microsoft Docs', desc: 'Authoritative rules for writing modern, human technical copy.' }
      ]
    }
  },

  {
    id: 'product-manager',
    title: 'Technical Product Manager',
    domain: 'business',
    domainLabel: 'Product & Leadership',
    shortDesc: 'Steers product vision, prioritizes feature roadmaps, and aligns engineering with market needs.',
    fullDesc: 'Product Managers are the ultimate glue between technology, business strategy, and user experience. They define the product vision, prioritize sprint backlogs, communicate with stakeholders, and guide cross-functional teams to build products customers love.',
    salaryRange: '$90,000 – $160,000 / year (₹9 – ₹35 LPA)',
    educationPath: 'Degree in Computer Science, Business Administration, Engineering, or transitioned from Software Engineering, UX, or Marketing.',
    jobRoles: ['Associate Product Manager (APM)', 'Technical Product Manager', 'Product Owner', 'Group Product Manager', 'Chief Product Officer'],
    requiredSkills: ['Product Strategy & Vision', 'User Research & Customer Discovery', 'Agile & Scrum Methodologies', 'Metrics & Product Analytics (Amplitude/Mixpanel)', 'Roadmapping & Prioritization (RICE/MoSCoW)', 'Stakeholder Management'],
    weightCriteria: {
      subjects: ['business', 'cs', 'psychology'],
      interests: ['leadership', 'business', 'coding'],
      skills: ['organization', 'communication', 'problem-solving', 'empathy'],
      workStyle: ['business-leadership', 'remote-tech'],
      priority: ['innovation', 'high-earning', 'impact']
    },
    roadmap: {
      durationEstimate: '5 – 8 Months (10-14 hrs/week)',
      phases: [
        {
          phaseNumber: 1,
          title: 'Product Discovery & Market Validation',
          duration: 'Weeks 1 – 6',
          summary: 'Learn how to identify customer pain points, conduct user interviews, and validate product-market fit.',
          skills: ['Customer Problem Framing', 'Competitive Landscape Analysis', 'Value Proposition Canvas'],
          milestones: [
            'Conduct 5 recorded customer discovery interviews to identify unmet workflow frustrations',
            'Write a competitive teardown analyzing 3 market leaders in a software vertical',
            'Formulate testable product hypotheses and minimum viable product (MVP) scope'
          ]
        },
        {
          phaseNumber: 2,
          title: 'Product Requirements Documents (PRDs) & Agile Execution',
          duration: 'Weeks 7 – 13',
          summary: 'Translate business goals into actionable engineering specifications and sprint epics.',
          skills: ['Writing Comprehensive PRDs', 'User Stories & Acceptance Criteria', 'Agile/Scrum Sprint Planning', 'Jira / Linear Workflows'],
          milestones: [
            'Author a production-grade Product Requirements Document (PRD) for a new software feature',
            'Break down an epic into 10 granular developer user stories with Gherkin acceptance criteria',
            'Prioritize a simulated 30-item product backlog using the RICE framework'
          ]
        },
        {
          phaseNumber: 3,
          title: 'Product Analytics, Metrics & Experimentation',
          duration: 'Weeks 14 – 20',
          summary: 'Define North Star metrics, track user funnels, and design A/B test experiments.',
          skills: ['North Star Metric Framework', 'Funnel Analysis (Amplitude, Mixpanel)', 'A/B Testing & Hypothesis Testing', 'Cohort Retention Analysis'],
          milestones: [
            'Define an analytics tracking schema tracking the activation funnel for a web app',
            'Design an A/B test proposal with sample size calculations and statistical success thresholds',
            'Analyze cohort retention charts to identify churn drop-off points'
          ]
        },
        {
          phaseNumber: 4,
          title: 'Product Roadmapping, Go-to-Market & Interviewing',
          duration: 'Weeks 21 – 28',
          summary: 'Build executive roadmaps, orchestrate feature launches, and master PM interview frameworks.',
          skills: ['Roadmapping Tools (Productboard, Notion)', 'Go-to-Market (GTM) Strategy', 'Product Sense & Execution Interviews (CIRCLES Framework)'],
          milestones: [
            'Build a quarterly outcome-based product roadmap communicating strategic milestones to executives',
            'Plan a cross-functional launch strategy covering engineering, marketing, and customer support',
            'Complete 10 mock product management case interviews with peers'
          ]
        }
      ],
      projects: [
        {
          title: 'Comprehensive Product Requirements Document (PRD)',
          tier: 'beginner',
          desc: 'A complete PRD for an innovative feature addition to an existing app (e.g. adding group collaboration to Spotify or Notion), including user personas and technical constraints.',
          tags: ['PRD', 'User Stories', 'Acceptance Criteria', 'Product Spec']
        },
        {
          title: 'Product Metrics & Retention Dashboard Strategy',
          tier: 'intermediate',
          desc: 'A strategic product analysis defining the North Star metric and tracking events for a SaaS platform, complete with cohort retention models and churn solutions.',
          tags: ['Product Analytics', 'Amplitude', 'North Star Metric', 'Retention']
        },
        {
          title: 'End-to-End MVP Launch & Go-to-Market Plan',
          tier: 'capstone',
          desc: 'An end-to-end strategic proposal for launching a new B2B product from scratch, featuring user research synthesis, RICE-scored roadmap, pricing model, and GTM timeline.',
          tags: ['Product Strategy', 'RICE Scoring', 'Roadmap', 'GTM']
        }
      ],
      resources: [
        { name: 'Lenny\'s Newsletter & Podcast', platform: 'Lenny Rachitsky', desc: 'The most popular, practical modern product management newsletter in tech.' },
        { name: 'Product School', platform: 'Guides & Masterclasses', desc: 'Free articles, PM templates, and webinars from top tech leaders.' },
        { name: 'Decode and Conquer (Lewis Lin)', platform: 'Book', desc: 'Essential guide for learning the CIRCLES method and PM interview frameworks.' },
        { name: 'Reforge Product Articles', platform: 'Reforge', desc: 'Deep dive essays on growth loops, retention, and product strategy.' }
      ]
    }
  }
];

// =============================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// =============================================================================

const STORAGE_KEY = 'smart_career_guidance_v1';

let appState = {
  studentProfile: null,
  recommendedCareers: [],
  activeRoadmapCareerId: 'fullstack-dev',
  completedMilestones: {} // e.g. { 'fullstack-dev_0_0': true }
};

/**
 * Saves current application state to browser LocalStorage.
 */
function saveStateToLocalStorage() {
  try {
    const dataToSave = {
      studentProfile: appState.studentProfile,
      recommendedCareers: appState.recommendedCareers,
      activeRoadmapCareerId: appState.activeRoadmapCareerId,
      completedMilestones: appState.completedMilestones,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  } catch (err) {
    console.warn('LocalStorage save error:', err);
  }
}

/**
 * Loads previous state from LocalStorage on initial page launch.
 */
function loadStateFromLocalStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return false;

    const parsed = JSON.parse(saved);
    if (parsed && parsed.studentProfile && parsed.recommendedCareers && parsed.recommendedCareers.length > 0) {
      appState.studentProfile = parsed.studentProfile;
      appState.recommendedCareers = parsed.recommendedCareers;
      appState.activeRoadmapCareerId = parsed.activeRoadmapCareerId || parsed.recommendedCareers[0].careerId;
      appState.completedMilestones = parsed.completedMilestones || {};
      return true;
    }
  } catch (err) {
    console.warn('LocalStorage load error:', err);
  }
  return false;
}

/**
 * Clears saved data from LocalStorage and resets state.
 */
function clearSavedData() {
  if (confirm('Are you sure you want to clear your saved career assessment?')) {
    localStorage.removeItem(STORAGE_KEY);
    appState.studentProfile = null;
    appState.recommendedCareers = [];
    appState.completedMilestones = {};
    document.getElementById('saved-results-banner').style.display = 'none';
    document.getElementById('rec-count-badge').style.display = 'none';
    resetAssessmentForm();
    navigateToSection('home');
  }
}

// =============================================================================
// 3. TRANSPARENT RULE-BASED AI RECOMMENDATION ENGINE
// =============================================================================

/**
 * Transparent Rule-Based Match Scoring Algorithm
 * 
 * Multi-vector weighted calculation:
 * - Subject match: +3 points per subject match
 * - Interest match: +4 points per interest match (interests carry high intrinsic motivation)
 * - Skill match: +3 points per existing skill overlap
 * - Work style match: +2 points
 * - Career priority match: +2 points
 * 
 * Computes transparent reasoning explanations for the user.
 */
function calculateCareerRecommendations(profile) {
  const scoredCareers = CAREER_DATABASE.map(career => {
    let score = 0;
    let maxPossibleScore = 0;
    const explanations = [];

    // 1. Evaluate Subject Matches (Weight: 3)
    const matchingSubjects = profile.subjects.filter(subj => career.weightCriteria.subjects.includes(subj));
    const subjectPoints = matchingSubjects.length * 3;
    score += subjectPoints;
    maxPossibleScore += career.weightCriteria.subjects.length * 3;

    if (matchingSubjects.length > 0) {
      const subjectLabels = matchingSubjects.map(formatSubjectName);
      explanations.push(`Strong academic alignment with your interest in ${subjectLabels.join(', ')}.`);
    }

    // 2. Evaluate Interest Matches (Weight: 4)
    const matchingInterests = profile.interests.filter(item => career.weightCriteria.interests.includes(item));
    const interestPoints = matchingInterests.length * 4;
    score += interestPoints;
    maxPossibleScore += career.weightCriteria.interests.length * 4;

    if (matchingInterests.length > 0) {
      const interestLabels = matchingInterests.map(formatInterestName);
      explanations.push(`Directly satisfies your passion for ${interestLabels.join(' and ')}.`);
    }

    // 3. Evaluate Skill Matches (Weight: 3)
    const matchingSkills = profile.skills.filter(sk => career.weightCriteria.skills.includes(sk));
    const skillPoints = matchingSkills.length * 3;
    score += skillPoints;
    maxPossibleScore += career.weightCriteria.skills.length * 3;

    if (matchingSkills.length > 0) {
      const skillLabels = matchingSkills.map(formatSkillName);
      explanations.push(`Capitalizes on your current capabilities in ${skillLabels.join(', ')}.`);
    }

    // 4. Work Style Environment Match (Weight: 2)
    maxPossibleScore += 2;
    if (career.weightCriteria.workStyle.includes(profile.workStyle)) {
      score += 2;
      explanations.push(`Fits your preferred environment of ${formatWorkStyleName(profile.workStyle)}.`);
    }

    // 5. Career Priority Match (Weight: 2)
    maxPossibleScore += 2;
    if (career.weightCriteria.priority.includes(profile.careerPriority)) {
      score += 2;
      explanations.push(`Supports your core priority of ${formatPriorityName(profile.careerPriority)}.`);
    }

    // Ensure fallback score baseline
    if (maxPossibleScore === 0) maxPossibleScore = 1;
    const rawPct = (score / maxPossibleScore) * 100;
    
    // Smooth out into a realistic 60% - 98% range for top relevant fields
    const normalizedMatch = Math.min(98, Math.max(50, Math.round(55 + (rawPct * 0.43))));

    if (explanations.length === 0) {
      explanations.push(`A versatile career path with high transferable growth potential based on your general profile.`);
    }

    return {
      careerId: career.id,
      score: normalizedMatch,
      rawScore: score,
      explanations: explanations,
      careerData: career
    };
  });

  // Sort descending by calculated score
  scoredCareers.sort((a, b) => b.score - a.score || b.rawScore - a.rawScore);

  // Return top 3 recommended careers
  return scoredCareers.slice(0, 3);
}

// Helper formatters for human-readable AI explanations
function formatSubjectName(code) {
  const map = {
    'math': 'Mathematics & Logic',
    'cs': 'Computer Science & IT',
    'physics': 'Physics & Electronics',
    'biology': 'Biology & Life Sciences',
    'arts': 'Arts & Graphic Design',
    'business': 'Business & Economics',
    'psychology': 'Psychology & Social Sciences',
    'literature': 'Literature & Writing'
  };
  return map[code] || code;
}

function formatInterestName(code) {
  const map = {
    'coding': 'Writing Code & Building Software',
    'design': 'Visual Design & UI/UX',
    'data': 'Analyzing Data & Discovering Patterns',
    'security': 'Cybersecurity & Ethical Hacking',
    'healthcare': 'Healthcare & Medical Discovery',
    'business': 'Business Strategy & Startups',
    'marketing': 'Digital Marketing & Growth',
    'hardware': 'Cloud Infrastructure & Hardware',
    'writing': 'Content Writing & Storytelling',
    'leadership': 'Project Leadership'
  };
  return map[code] || code;
}

function formatSkillName(code) {
  const map = {
    'problem-solving': 'Problem Solving & Logic',
    'programming': 'Programming Fundamentals',
    'ui-design': 'Visual Design & Wireframing',
    'math-stats': 'Mathematics & Statistics',
    'communication': 'Clear Communication',
    'data-analysis': 'Data Analysis',
    'critical-thinking': 'Critical Thinking',
    'empathy': 'User Empathy',
    'organization': 'Project Organization',
    'writing': 'Technical Writing'
  };
  return map[code] || code;
}

function formatWorkStyleName(code) {
  const map = {
    'remote-tech': 'Remote & Tech-Driven collaboration',
    'creative-studio': 'Creative & Design Studio work',
    'data-research': 'Data & Research laboratory environments',
    'business-leadership': 'Corporate Leadership & Startups',
    'health-impact': 'Healthcare & Clinical impact'
  };
  return map[code] || code;
}

function formatPriorityName(code) {
  const map = {
    'high-earning': 'High Earning Potential',
    'work-life': 'Work-Life Balance & Flexibility',
    'creativity': 'Creativity & Self-Expression',
    'impact': 'Social Impact & Purpose',
    'innovation': 'Cutting-Edge Technological Innovation'
  };
  return map[code] || code;
}

// =============================================================================
// 4. FORM HANDLING & VALIDATION
// =============================================================================

function validateAssessmentForm() {
  const form = document.getElementById('career-assessment-form');
  const errorBanner = document.getElementById('form-error-banner');
  const errorText = document.getElementById('form-error-text');
  let isValid = true;
  const errors = [];

  // Reset errors
  document.querySelectorAll('.form-card').forEach(el => el.classList.remove('has-error'));
  document.querySelectorAll('.field-error-msg').forEach(el => el.classList.remove('visible'));
  document.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));

  // 1. Name Check
  const nameInput = document.getElementById('student-name');
  if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
    isValid = false;
    nameInput.classList.add('is-invalid');
    document.getElementById('error-name').classList.add('visible');
    errors.push('Please enter your full name (at least 2 letters).');
  }

  // 2. Education Level Check
  const eduSelect = document.getElementById('education-level');
  if (!eduSelect.value) {
    isValid = false;
    eduSelect.classList.add('is-invalid');
    document.getElementById('error-education').classList.add('visible');
    errors.push('Please select your current education level.');
  }

  // 3. Favorite Subjects (At least 1)
  const checkedSubjects = form.querySelectorAll('input[name="subjects"]:checked');
  if (checkedSubjects.length === 0) {
    isValid = false;
    document.getElementById('group-subjects').classList.add('has-error');
    document.getElementById('error-subjects').classList.add('visible');
    errors.push('Please choose at least 1 favorite subject.');
  }

  // 4. Interests (At least 1)
  const checkedInterests = form.querySelectorAll('input[name="interests"]:checked');
  if (checkedInterests.length === 0) {
    isValid = false;
    document.getElementById('group-interests').classList.add('has-error');
    document.getElementById('error-interests').classList.add('visible');
    errors.push('Please select at least 1 interest or passion.');
  }

  // 5. Skills (At least 1)
  const checkedSkills = form.querySelectorAll('input[name="skills"]:checked');
  if (checkedSkills.length === 0) {
    isValid = false;
    document.getElementById('group-skills').classList.add('has-error');
    document.getElementById('error-skills').classList.add('visible');
    errors.push('Please select at least 1 skill you currently have or are learning.');
  }

  if (!isValid) {
    errorBanner.style.display = 'flex';
    errorText.innerHTML = `<strong>Attention Required:</strong> ${errors[0]}`;
    errorBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    errorBanner.style.display = 'none';
  }

  return isValid;
}

function handleAssessmentSubmit(event) {
  event.preventDefault();

  if (!validateAssessmentForm()) {
    return;
  }

  const form = document.getElementById('career-assessment-form');

  // Collect form values
  const studentName = document.getElementById('student-name').value.trim();
  const educationLevel = document.getElementById('education-level').value;

  const subjects = Array.from(form.querySelectorAll('input[name="subjects"]:checked')).map(el => el.value);
  const interests = Array.from(form.querySelectorAll('input[name="interests"]:checked')).map(el => el.value);
  const skills = Array.from(form.querySelectorAll('input[name="skills"]:checked')).map(el => el.value);
  
  const workStyleEl = form.querySelector('input[name="workStyle"]:checked');
  const workStyle = workStyleEl ? workStyleEl.value : 'remote-tech';

  const priorityEl = form.querySelector('input[name="careerPriority"]:checked');
  const careerPriority = priorityEl ? priorityEl.value : 'high-earning';

  const profile = {
    name: studentName,
    educationLevel,
    subjects,
    interests,
    skills,
    workStyle,
    careerPriority,
    submittedAt: new Date().toISOString()
  };

  // Run AI simulation modal for responsive feedback
  showAIEngineProcessingModal(profile);
}

function showAIEngineProcessingModal(profile) {
  const modal = document.getElementById('ai-modal-backdrop');
  const statusEl = document.getElementById('ai-modal-status');
  const progressFill = document.getElementById('modal-progress-fill');

  modal.style.display = 'flex';
  statusEl.textContent = 'Parsing academic and skill profile...';
  progressFill.style.width = '25%';

  setTimeout(() => {
    statusEl.textContent = 'Comparing compatibility across 10 career domains...';
    progressFill.style.width = '65%';
  }, 400);

  setTimeout(() => {
    statusEl.textContent = 'Synthesizing customized learning roadmaps...';
    progressFill.style.width = '95%';
  }, 800);

  setTimeout(() => {
    modal.style.display = 'none';

    // Compute recommendations
    const recommendations = calculateCareerRecommendations(profile);
    
    // Update global app state
    appState.studentProfile = profile;
    appState.recommendedCareers = recommendations;
    appState.activeRoadmapCareerId = recommendations[0].careerId;

    // Save to LocalStorage
    saveStateToLocalStorage();

    // Render results
    renderRecommendationsUI();
    renderRoadmapUI(appState.activeRoadmapCareerId);

    // Update Banner
    updateSavedBanner();

    // Navigate smoothly to recommendations view
    navigateToSection('recommendations');
  }, 1200);
}

function resetAssessmentForm() {
  const form = document.getElementById('career-assessment-form');
  form.reset();

  // Clear errors
  document.querySelectorAll('.form-card').forEach(el => el.classList.remove('has-error'));
  document.querySelectorAll('.field-error-msg').forEach(el => el.classList.remove('visible'));
  document.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));
  document.getElementById('form-error-banner').style.display = 'none';

  // Set default radio buttons
  const defaultWorkStyle = form.querySelector('input[name="workStyle"][value="remote-tech"]');
  if (defaultWorkStyle) defaultWorkStyle.checked = true;

  const defaultPriority = form.querySelector('input[name="careerPriority"][value="high-earning"]');
  if (defaultPriority) defaultPriority.checked = true;
}

// 1-Click Profile Prefills for testing
function loadSampleProfile(type) {
  resetAssessmentForm();
  const form = document.getElementById('career-assessment-form');

  if (type === 'tech') {
    document.getElementById('student-name').value = 'Alex Rivera';
    document.getElementById('education-level').value = 'undergraduate';
    checkValues('subjects', ['cs', 'math', 'physics']);
    checkValues('interests', ['coding', 'hardware']);
    checkValues('skills', ['programming', 'problem-solving', 'critical-thinking']);
    setRadioValue('workStyle', 'remote-tech');
    setRadioValue('careerPriority', 'high-earning');
  } else if (type === 'creative') {
    document.getElementById('student-name').value = 'Sophia Chen';
    document.getElementById('education-level').value = 'undergraduate';
    checkValues('subjects', ['arts', 'psychology', 'literature']);
    checkValues('interests', ['design', 'writing']);
    checkValues('skills', ['ui-design', 'empathy', 'communication']);
    setRadioValue('workStyle', 'creative-studio');
    setRadioValue('careerPriority', 'creativity');
  } else if (type === 'data') {
    document.getElementById('student-name').value = 'Marcus Vance';
    document.getElementById('education-level').value = 'postgraduate';
    checkValues('subjects', ['math', 'cs', 'business']);
    checkValues('interests', ['data', 'coding']);
    checkValues('skills', ['data-analysis', 'math-stats', 'problem-solving']);
    setRadioValue('workStyle', 'data-research');
    setRadioValue('careerPriority', 'innovation');
  } else if (type === 'healthcare') {
    document.getElementById('student-name').value = 'Ananya Patel';
    document.getElementById('education-level').value = 'undergraduate';
    checkValues('subjects', ['biology', 'psychology', 'math']);
    checkValues('interests', ['healthcare', 'data']);
    checkValues('skills', ['empathy', 'critical-thinking', 'communication']);
    setRadioValue('workStyle', 'health-impact');
    setRadioValue('careerPriority', 'impact');
  }

  // Visual helper
  document.getElementById('student-name').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function checkValues(name, values) {
  values.forEach(val => {
    const el = document.querySelector(`input[name="${name}"][value="${val}"]`);
    if (el) el.checked = true;
  });
}

function setRadioValue(name, val) {
  const el = document.querySelector(`input[name="${name}"][value="${val}"]`);
  if (el) el.checked = true;
}

// =============================================================================
// 5. RECOMMENDATIONS VIEW RENDERING
// =============================================================================

function renderRecommendationsUI() {
  const container = document.getElementById('top-recommendations-list');
  const studentHeading = document.getElementById('rec-student-heading');
  const summaryText = document.getElementById('rec-summary-text');

  if (!appState.recommendedCareers || appState.recommendedCareers.length === 0) {
    container.innerHTML = `
      <div class="assessment-header-card text-center">
        <h3>No Assessment Submitted Yet</h3>
        <p class="text-muted" style="margin: 12px 0 24px 0;">Please take the 2-minute career assessment to receive your personalized recommendations.</p>
        <button class="btn btn-primary" onclick="navigateToSection('assessment')">Start Assessment</button>
      </div>
    `;
    studentHeading.textContent = 'Top Recommended Career Paths';
    return;
  }

  const name = appState.studentProfile.name;
  studentHeading.textContent = `Personalized Career Recommendations for ${name}`;
  summaryText.textContent = `Based on your academic strengths, passions, and priorities, here are your top 3 matching career fields calculated by our transparent AI algorithm:`;

  const rankTitles = ['#1 Top Match', '#2 Strong Alternative', '#3 Recommended Path'];
  const rankClasses = ['rank-1', 'rank-2', 'rank-3'];

  let html = '';

  appState.recommendedCareers.forEach((item, index) => {
    const career = item.careerData;
    const rankTitle = rankTitles[index] || `#${index + 1} Recommendation`;
    const rankClass = rankClasses[index] || 'rank-3';

    html += `
      <div class="rec-card ${rankClass}">
        <div class="rec-card-top-bar">
          <div class="rank-pill">${rankTitle}</div>
          <div class="match-score-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>${item.score}% Compatibility</span>
          </div>
        </div>

        <div class="rec-card-body">
          <div class="rec-header-row">
            <div>
              <span class="domain-badge domain-${career.domain}">${career.domainLabel}</span>
              <h3 class="rec-career-title" style="margin-top: 6px;">${career.title}</h3>
            </div>
            <button type="button" class="btn btn-primary btn-sm" onclick="openRoadmapForCareer('${career.id}')">
              <span>View Learning Roadmap</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>

          <p class="rec-career-desc">${career.fullDesc}</p>

          <!-- Transparent AI Explanation Box -->
          <div class="why-recommended-box">
            <div class="why-rec-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span>Why This Career Matches Your Profile:</span>
            </div>
            <div class="why-rec-list">
              ${item.explanations.map(exp => `
                <div class="why-rec-item">
                  <span class="why-bullet">✓</span>
                  <span>${exp}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Career Highlights Grid -->
          <div class="career-details-grid">
            <div class="detail-column">
              <span class="detail-label">Typical Roles</span>
              <span class="detail-value">${career.jobRoles.slice(0, 3).join(', ')}</span>
            </div>

            <div class="detail-column">
              <span class="detail-label">Industry Salary Outlook</span>
              <span class="detail-value">${career.salaryRange}</span>
            </div>

            <div class="detail-column">
              <span class="detail-label">Recommended Education</span>
              <span class="detail-value">${career.educationPath}</span>
            </div>

            <div class="detail-column">
              <span class="detail-label">Key Required Skills</span>
              <div class="skill-tags-wrap">
                ${career.requiredSkills.slice(0, 4).map(sk => `<span class="mini-skill-tag">${sk}</span>`).join('')}
              </div>
            </div>
          </div>

          <div class="rec-card-actions">
            <div style="font-size: 0.85rem; color: var(--text-muted);">
              Estimated Roadmap Completion: <strong>${career.roadmap.durationEstimate}</strong>
            </div>
            <button type="button" class="btn btn-outline btn-sm" onclick="openRoadmapForCareer('${career.id}')">
              Explore Full Roadmap & Projects →
            </button>
          </div>

        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Render All 10 Careers in Directory
function renderCareerDirectoryUI(filterDomain = 'all') {
  const container = document.getElementById('all-careers-grid');
  let list = CAREER_DATABASE;

  if (filterDomain !== 'all') {
    list = CAREER_DATABASE.filter(c => c.domain === filterDomain);
  }

  let html = '';
  list.forEach(c => {
    html += `
      <div class="directory-card">
        <div>
          <div class="dir-card-header">
            <span class="domain-badge domain-${c.domain}">${c.domainLabel}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">${c.roadmap.durationEstimate.split(' ')[0]} ${c.roadmap.durationEstimate.split(' ')[1]}</span>
          </div>
          <h4 class="dir-title">${c.title}</h4>
          <p class="dir-desc">${c.shortDesc}</p>
        </div>

        <div>
          <div class="skill-tags-wrap" style="margin-bottom: 14px;">
            ${c.requiredSkills.slice(0, 3).map(sk => `<span class="mini-skill-tag">${sk}</span>`).join('')}
          </div>
          <div class="dir-footer">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-heading);">${c.salaryRange.split('/')[0]}</span>
            <button type="button" class="btn btn-xs btn-outline" onclick="openRoadmapForCareer('${c.id}')">Roadmap →</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function filterCareerDirectory(domain) {
  document.querySelectorAll('.filter-chip').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-domain') === domain);
  });
  renderCareerDirectoryUI(domain);
}

// =============================================================================
// 6. LEARNING ROADMAP RENDERING & MILESTONE TRACKING
// =============================================================================

function populateRoadmapDropdown(selectedId) {
  const select = document.getElementById('roadmap-career-select');
  select.innerHTML = '';

  CAREER_DATABASE.forEach(career => {
    const opt = document.createElement('option');
    opt.value = career.id;
    opt.textContent = career.title;
    if (career.id === selectedId) opt.selected = true;
    select.appendChild(opt);
  });
}

function openRoadmapForCareer(careerId) {
  appState.activeRoadmapCareerId = careerId;
  saveStateToLocalStorage();
  renderRoadmapUI(careerId);
  navigateToSection('roadmap');
}

function switchRoadmapCareer(careerId) {
  appState.activeRoadmapCareerId = careerId;
  saveStateToLocalStorage();
  renderRoadmapUI(careerId);
}

function renderRoadmapUI(careerId) {
  const career = CAREER_DATABASE.find(c => c.id === careerId) || CAREER_DATABASE[0];
  appState.activeRoadmapCareerId = career.id;

  populateRoadmapDropdown(career.id);

  // Update Titles
  document.getElementById('roadmap-title').textContent = `Learning Roadmap: ${career.title}`;
  document.getElementById('roadmap-tagline').textContent = `Follow this structured, 4-phase learning progression from absolute beginner to industry-ready job applicant in ${career.domainLabel}.`;

  // Render Overview Hero Card
  const heroCard = document.getElementById('roadmap-hero-details');
  heroCard.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
      <span class="domain-badge domain-${career.domain}">${career.domainLabel}</span>
      <span style="font-size: 0.85rem; font-weight: 700; color: var(--accent-purple-dark);">Target Timeline: ${career.roadmap.durationEstimate}</span>
    </div>
    <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-dark); margin-bottom: 10px;">${career.title} Professional Path</h3>
    <p style="font-size: 0.98rem; color: var(--text-body); line-height: 1.6; margin-bottom: 20px;">${career.fullDesc}</p>
    
    <div class="roadmap-stat-strip">
      <div class="stat-pill">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        <span>Duration: <strong>${career.roadmap.durationEstimate}</strong></span>
      </div>
      <div class="stat-pill">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        <span>Typical Salary: <strong>${career.salaryRange}</strong></span>
      </div>
      <div class="stat-pill">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path></svg>
        <span>Education: <strong>${career.educationPath.split(',')[0]}</strong></span>
      </div>
    </div>
  `;

  // Render 4 Phases Timeline
  const timelineEl = document.getElementById('roadmap-phases-timeline');
  let timelineHtml = '';

  let totalMilestonesCount = 0;
  let checkedMilestonesCount = 0;

  career.roadmap.phases.forEach((phase, phaseIdx) => {
    timelineHtml += `
      <div class="phase-card">
        <div class="phase-header">
          <div class="phase-tag">Phase 0${phase.phaseNumber} • ${phase.title}</div>
          <div class="phase-duration">${phase.duration}</div>
        </div>

        <div class="phase-body">
          <h4 class="phase-title">Phase ${phase.phaseNumber}: ${phase.title}</h4>
          <p class="phase-summary">${phase.summary}</p>

          <div class="phase-skills-group">
            <div class="group-heading">Core Skills & Topics to Master:</div>
            <div class="skill-tags-wrap">
              ${phase.skills.map(sk => `<span class="mini-skill-tag" style="background: #f1f5f9; padding: 5px 12px; font-size: 0.82rem;">${sk}</span>`).join('')}
            </div>
          </div>

          <div>
            <div class="group-heading">Interactive Milestones Checklist:</div>
            <div class="milestones-checklist">
              ${phase.milestones.map((milestone, mIdx) => {
                const milestoneKey = `${career.id}_${phaseIdx}_${mIdx}`;
                totalMilestonesCount++;
                const isChecked = Boolean(appState.completedMilestones[milestoneKey]);
                if (isChecked) checkedMilestonesCount++;

                return `
                  <label class="milestone-item ${isChecked ? 'checked' : ''}" for="${milestoneKey}">
                    <input 
                      type="checkbox" 
                      id="${milestoneKey}" 
                      class="milestone-checkbox" 
                      ${isChecked ? 'checked' : ''} 
                      onchange="toggleMilestoneCheck('${career.id}', ${phaseIdx}, ${mIdx}, this.checked)"
                    >
                    <span class="milestone-label">${milestone}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  timelineEl.innerHTML = timelineHtml;

  // Update Progress Bar
  updateProgressDisplay(checkedMilestonesCount, totalMilestonesCount);

  // Render Hands-on Projects
  const projectsGrid = document.getElementById('roadmap-projects-grid');
  let projectsHtml = '';
  career.roadmap.projects.forEach(proj => {
    projectsHtml += `
      <div class="project-card">
        <div>
          <span class="project-tier-badge tier-${proj.tier}">Level: ${proj.tier}</span>
          <h4 class="project-title">${proj.title}</h4>
          <p class="project-desc">${proj.desc}</p>
        </div>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
  });
  projectsGrid.innerHTML = projectsHtml;

  // Render Curated Free Resources
  const resourcesList = document.getElementById('roadmap-resources-list');
  let resHtml = '';
  career.roadmap.resources.forEach(res => {
    resHtml += `
      <li class="res-link-item">
        <div class="res-link-info">
          <span class="res-link-name">${res.name}</span>
          <span class="res-link-platform">${res.platform} • ${res.desc}</span>
        </div>
        <span class="domain-badge domain-tech" style="font-size: 0.7rem;">Free Access</span>
      </li>
    `;
  });
  resourcesList.innerHTML = resHtml;
}

function toggleMilestoneCheck(careerId, phaseIdx, mIdx, isChecked) {
  const milestoneKey = `${careerId}_${phaseIdx}_${mIdx}`;
  if (isChecked) {
    appState.completedMilestones[milestoneKey] = true;
  } else {
    delete appState.completedMilestones[milestoneKey];
  }

  saveStateToLocalStorage();

  // Update item visually
  const itemEl = document.getElementById(milestoneKey).closest('.milestone-item');
  if (itemEl) itemEl.classList.toggle('checked', isChecked);

  // Re-calculate progress
  recalculateActiveProgress(careerId);
}

function recalculateActiveProgress(careerId) {
  const career = CAREER_DATABASE.find(c => c.id === careerId);
  if (!career) return;

  let total = 0;
  let checked = 0;

  career.roadmap.phases.forEach((phase, phaseIdx) => {
    phase.milestones.forEach((_, mIdx) => {
      total++;
      if (appState.completedMilestones[`${careerId}_${phaseIdx}_${mIdx}`]) {
        checked++;
      }
    });
  });

  updateProgressDisplay(checked, total);
}

function updateProgressDisplay(checked, total) {
  const pct = total === 0 ? 0 : Math.round((checked / total) * 100);
  const badge = document.getElementById('roadmap-progress-pct');
  const bar = document.getElementById('roadmap-progress-bar');

  if (badge) badge.textContent = `${pct}% Completed (${checked}/${total})`;
  if (bar) bar.style.width = `${pct}%`;
}

// =============================================================================
// 7. SPA NAVIGATION & VIEW SWITCHER
// =============================================================================

function navigateToSection(targetId) {
  const sections = document.querySelectorAll('.spa-section');
  const navLinks = document.querySelectorAll('.nav-link');

  // Verify target section exists
  const targetSection = document.getElementById(targetId);
  if (!targetSection) return;

  // Toggle sections
  sections.forEach(sec => sec.classList.remove('active'));
  targetSection.classList.add('active');

  // Toggle navigation links active state
  navLinks.forEach(link => {
    const isTarget = link.getAttribute('data-target') === targetId;
    link.classList.toggle('active', isTarget);
  });

  // Close mobile menu if opened
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) navMenu.classList.remove('show');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update hash without triggering reload
  if (history.pushState) {
    history.pushState(null, null, `#${targetId}`);
  } else {
    location.hash = `#${targetId}`;
  }
}

function exploreAllCareers() {
  navigateToSection('recommendations');
  setTimeout(() => {
    const el = document.querySelector('.other-careers-block');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 200);
}

function updateSavedBanner() {
  const banner = document.getElementById('saved-results-banner');
  const badge = document.getElementById('rec-count-badge');
  const msg = document.getElementById('saved-banner-msg');

  if (appState.studentProfile && appState.recommendedCareers && appState.recommendedCareers.length > 0) {
    banner.style.display = 'flex';
    badge.style.display = 'inline-block';
    const topCareer = appState.recommendedCareers[0].careerData.title;
    msg.innerHTML = `Welcome back! Loaded previous career assessment for <strong>${appState.studentProfile.name}</strong> (Top Match: <strong>${topCareer}</strong>).`;
  } else {
    banner.style.display = 'none';
    badge.style.display = 'none';
  }
}

// =============================================================================
// 8. INITIALIZATION & EVENT LISTENERS
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Load state from LocalStorage if present
  const hasSavedState = loadStateFromLocalStorage();

  // Render initial directory
  renderCareerDirectoryUI('all');

  // Render recommendations and roadmap
  renderRecommendationsUI();
  renderRoadmapUI(appState.activeRoadmapCareerId);

  // Update banner
  updateSavedBanner();

  // Handle URL hash on initial load
  const hash = window.location.hash.replace('#', '');
  if (['home', 'assessment', 'recommendations', 'roadmap'].includes(hash)) {
    navigateToSection(hash);
  } else {
    navigateToSection('home');
  }

  // Mobile menu hamburger toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Header navigation clicks
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      if (target) navigateToSection(target);
    });
  });

  // Brand logo click
  const logo = document.getElementById('brand-logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToSection('home');
    });
  }
});
