import { type LucideIcon, Cpu, Code2, BrainCircuit, ShieldCheck, Server, Palette, Smartphone, GitBranch, Database, Network, Library, TestTube2, Cloud, BarChart2, DatabaseZap, Briefcase } from 'lucide-react';

export interface Role {
  name: string;
  responsibilities: string;
}

export interface Subfield {
  name: string;
  icon: LucideIcon;
  description: string;
  roles: Role[];
  skills: string[];
  tools: string[];
  careerPath: string;
}

export interface CSHierarchy {
  id: string;
  field: string;
  icon: LucideIcon;
  description: string;
  subfields: Subfield[];
}

export const csHierarchyData: CSHierarchy[] = [
  {
    id: 'tcs',
    field: 'Theoretical Computer Science',
    icon: Cpu,
    description: 'The foundation of computing, dealing with logic, algorithms, and complexity.',
    subfields: [
      {
        name: 'Algorithms and Data Structures',
        icon: GitBranch,
        description: 'Designing and analyzing efficient procedures for solving computational problems.',
        roles: [{ name: 'Algorithm Developer', responsibilities: 'Designs, analyzes, and implements algorithms for complex problems.' }, { name: 'Research Scientist', responsibilities: 'Conducts research to advance the state of algorithms and complexity theory.' }],
        skills: ['Algorithm Design', 'Complexity Analysis', 'Advanced Mathematics', 'Problem Solving'],
        tools: ['Python', 'C++', 'Java', 'LaTeX'],
        careerPath: 'Algorithm Developer -> Senior Researcher -> Principal Scientist',
      },
      {
        name: 'Computational Complexity Theory',
        icon: TestTube2,
        description: 'Classifying computational problems according to their inherent difficulty.',
        roles: [{ name: 'Complexity Theorist', responsibilities: 'Studies the limits of computation and classifies problems by resource usage.' }],
        skills: ['Formal Proofs', 'Abstract Algebra', 'Logic', 'Turing Machines'],
        tools: ['Proof Assistants (Coq, Agda)', 'LaTeX'],
        careerPath: 'PhD Student -> Post-doc -> Professor / Industrial Researcher',
      },
    ],
  },
  {
    id: 'swe',
    field: 'Software Engineering',
    icon: Code2,
    description: 'The systematic application of engineering principles to the development of software.',
    subfields: [
      {
        name: 'Front-End Development',
        icon: Palette,
        description: 'Building the user-facing part of websites and applications.',
        roles: [{ name: 'Front-End Developer', responsibilities: 'Implements visual elements and user interactions on a website or application.' }, { name: 'UI Engineer', responsibilities: 'Focuses on the technical implementation of the user interface design.' }],
        skills: ['HTML', 'CSS', 'JavaScript', 'React/Angular/Vue', 'Responsive Design', 'Accessibility'],
        tools: ['VS Code', 'Git', 'Webpack', 'Figma', 'Browser DevTools'],
        careerPath: 'Junior Developer -> Mid-level Developer -> Senior Developer -> Tech Lead / Principal Engineer',
      },
      {
        name: 'Back-End Development',
        icon: Server,
        description: 'Developing the server-side logic, databases, and APIs that power applications.',
        roles: [{ name: 'Back-End Developer', responsibilities: 'Builds and maintains the server, application, and database.' }, { name: 'API Developer', responsibilities: 'Specializes in creating and maintaining robust APIs.' }],
        skills: ['Node.js/Python/Java/Go', 'Databases (SQL/NoSQL)', 'API Design (REST, GraphQL)', 'System Architecture'],
        tools: ['Docker', 'Kubernetes', 'Postman', 'AWS/GCP/Azure', 'Nginx'],
        careerPath: 'Junior Developer -> Mid-level Developer -> Senior Developer -> System Architect',
      },
      {
        name: 'DevOps Engineering',
        icon: Cloud,
        description: 'Bridging the gap between software development and IT operations to shorten the development life cycle.',
        roles: [{ name: 'DevOps Engineer', responsibilities: 'Manages build, release, and deployment pipelines, and infrastructure.' }],
        skills: ['CI/CD', 'Infrastructure as Code (Terraform)', 'Containerization (Docker)', 'Cloud Platforms', 'Scripting'],
        tools: ['Jenkins', 'GitLab CI', 'Ansible', 'Prometheus', 'Grafana'],
        careerPath: 'DevOps Engineer -> Senior DevOps Engineer -> DevOps Manager / SRE Lead',
      },
      {
        name: 'Mobile Development',
        icon: Smartphone,
        description: 'Creating applications for mobile devices like smartphones and tablets.',
        roles: [{ name: 'iOS/Android Developer', responsibilities: 'Designs and builds applications for mobile platforms.' }],
        skills: ['Swift/Kotlin/Java', 'React Native/Flutter', 'Mobile UI/UX', 'API Integration'],
        tools: ['Xcode', 'Android Studio', 'Git', 'Fastlane'],
        careerPath: 'Junior Mobile Dev -> Senior Mobile Dev -> Mobile Architect',
      },
    ],
  },
  {
    id: 'ai',
    field: 'Artificial Intelligence',
    icon: BrainCircuit,
    description: 'The theory and development of computer systems able to perform tasks that normally require human intelligence.',
    subfields: [
      {
        name: 'Machine Learning',
        icon: Library,
        description: 'Creating algorithms that allow computers to learn from and make predictions on data.',
        roles: [{ name: 'Machine Learning Engineer', responsibilities: 'Designs and implements ML models to solve business problems.' }, { name: 'Data Scientist', responsibilities: 'Analyzes complex data to extract knowledge and insights.' }],
        skills: ['Python', 'Statistics', 'Linear Algebra', 'Data Modeling', 'Deep Learning Frameworks'],
        tools: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Jupyter Notebooks', 'Pandas'],
        careerPath: 'ML Engineer -> Senior ML Engineer -> AI Research Scientist / ML Lead',
      },
      {
        name: 'Natural Language Processing (NLP)',
        icon: Library,
        description: 'Enabling computers to understand, interpret, and generate human language.',
        roles: [{ name: 'NLP Engineer', responsibilities: 'Builds systems that can process and analyze text and speech data.' }],
        skills: ['Linguistics', 'Deep Learning', 'Transformers', 'Text Mining'],
        tools: ['Hugging Face', 'NLTK', 'spaCy', 'Gensim'],
        careerPath: 'NLP Engineer -> Senior NLP Scientist -> Head of Conversational AI',
      },
    ],
  },
  {
    id: 'ds',
    field: 'Data Science',
    icon: Database,
    description: 'Extracting knowledge and insights from structured and unstructured data to inform decision-making.',
    subfields: [
      {
        name: 'Data Analysis',
        icon: BarChart2,
        description: 'Inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information.',
        roles: [{ name: 'Data Analyst', responsibilities: 'Interprets data and turns it into information which can offer ways to improve a business.' }],
        skills: ['SQL', 'Excel', 'Statistics', 'Data Visualization', 'R/Python'],
        tools: ['Tableau', 'Power BI', 'Google Analytics', 'Jupyter Notebooks'],
        careerPath: 'Junior Data Analyst -> Data Analyst -> Senior Data Analyst -> Analytics Manager',
      },
      {
        name: 'Data Engineering',
        icon: DatabaseZap,
        description: 'Developing and maintaining data pipelines and infrastructure to support data scientists.',
        roles: [{ name: 'Data Engineer', responsibilities: 'Builds and manages the infrastructure for data generation, storage, and processing.' }],
        skills: ['ETL/ELT Processes', 'Data Warehousing', 'Big Data Technologies (Hadoop, Spark)', 'Python/Scala', 'SQL'],
        tools: ['Apache Airflow', 'Databricks', 'Snowflake', 'dbt', 'AWS S3'],
        careerPath: 'Data Engineer -> Senior Data Engineer -> Data Architect',
      },
      {
        name: 'Business Intelligence',
        icon: Briefcase,
        description: 'Using strategies and technologies for data analysis of business information to help executives make informed business decisions.',
        roles: [{ name: 'BI Developer', responsibilities: 'Designs and develops BI solutions, including dashboards and reports.' }],
        skills: ['Data Warehousing', 'Dashboarding', 'Reporting', 'SQL', 'Business Acumen'],
        tools: ['Tableau', 'Power BI', 'Qlik Sense', 'SAP BusinessObjects'],
        careerPath: 'BI Analyst -> BI Developer -> Senior BI Developer -> BI Manager',
      },
    ],
  },
  {
    id: 'cyber',
    field: 'Cybersecurity',
    icon: ShieldCheck,
    description: 'Protecting computer systems and networks from information disclosure, theft, or damage.',
    subfields: [
      {
        name: 'Network Security',
        icon: Network,
        description: 'Securing computer networks from intruders, both targeted and opportunistic.',
        roles: [{ name: 'Network Security Engineer', responsibilities: 'Designs and implements secure network solutions.' }],
        skills: ['Firewalls', 'VPNs', 'Intrusion Detection/Prevention Systems', 'Packet Analysis'],
        tools: ['Wireshark', 'Nmap', 'Metasploit', 'Cisco ASA'],
        careerPath: 'Security Analyst -> Security Engineer -> Security Architect',
      },
      {
        name: 'Ethical Hacking',
        icon: TestTube2,
        description: 'Proactively finding and fixing security vulnerabilities in systems by legally hacking them.',
        roles: [{ name: 'Penetration Tester', responsibilities: 'Conducts authorized tests on systems to expose vulnerabilities.' }],
        skills: ['Vulnerability Assessment', 'Exploitation Techniques', 'Social Engineering', 'Reverse Engineering'],
        tools: ['Kali Linux', 'Burp Suite', 'OWASP ZAP', 'John the Ripper'],
        careerPath: 'Pentester -> Senior Pentester -> Red Team Lead / Security Consultant',
      },
    ],
  },
];
