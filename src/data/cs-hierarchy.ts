import { type LucideIcon, Cpu, Code2, BrainCircuit, ShieldCheck, Server, Palette, Smartphone, GitBranch, Database, Network, Library, TestTube2, Cloud, BarChart2, DatabaseZap, Briefcase, Settings2, Camera, Image, ScanEye, MousePointerClick, PenTool, Accessibility, HardDrive, Cog, Share2, Bot, CircuitBoard, Scan, Landmark, Component, Sigma, Orbit, FunctionSquare, FlaskConical, Link, FileText, CandlestickChart, Dna, Microscope, Gamepad2, Puzzle, Package, Beaker, Wind, Replace } from 'lucide-react';

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

export interface ParentCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  fields: CSHierarchy[];
}

const allCsFields: CSHierarchy[] = [
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
  {
    id: 'cn',
    field: 'Computer Networking',
    icon: Network,
    description: 'The study and practice of designing, building, and operating computer networks that allow computers to exchange data.',
    subfields: [
      {
        name: 'Network Architecture',
        icon: GitBranch,
        description: 'Designing the overall structure and framework of a computer network to meet business needs.',
        roles: [{ name: 'Network Architect', responsibilities: 'Creates high-level network designs, plans for future growth, and selects technologies.' }, { name: 'Solutions Architect', responsibilities: 'Designs and implements complex IT solutions that often include a significant networking component.' }],
        skills: ['TCP/IP Suite', 'Routing Protocols (BGP, OSPF)', 'LAN/WAN Design', 'Cloud Networking (AWS, Azure)', 'Network Security Principles'],
        tools: ['Cisco IOS', 'Juniper Junos', 'GNS3', 'Wireshark', 'Lucidchart'],
        careerPath: 'Network Engineer -> Senior Network Engineer -> Network Architect',
      },
      {
        name: 'Network Administration',
        icon: Settings2,
        description: 'Managing and maintaining network infrastructure to ensure performance, reliability, and security.',
        roles: [{ name: 'Network Administrator', responsibilities: 'Configures, manages, and troubleshoots network hardware and software.' }, { name: 'Systems Administrator', responsibilities: 'Manages multi-user computing environments, which includes network administration tasks.' }],
        skills: ['Network Monitoring', 'Troubleshooting', 'Firewall Configuration', 'User Access Control', 'Scripting (Bash, Python)'],
        tools: ['Nagios', 'Zabbix', 'PuTTY', 'pfSense', 'Active Directory'],
        careerPath: 'IT Support -> Network Administrator -> Senior Network Administrator / IT Manager',
      },
    ],
  },
  {
    id: 'csys',
    field: 'Computer Systems',
    icon: HardDrive,
    description: 'The design, implementation, and analysis of the fundamental components of computer systems.',
    subfields: [
      {
        name: 'Operating Systems',
        icon: Cog,
        description: 'Developing the core software that manages all the hardware and software resources of a computer.',
        roles: [{ name: 'OS Developer', responsibilities: 'Designs and develops low-level system software and kernels.' }, { name: 'Kernel Engineer', responsibilities: 'Works specifically on the core of the operating system.' }],
        skills: ['C/C++', 'Assembly', 'Kernel Architecture', 'Concurrency', 'Memory Management'],
        tools: ['GDB', 'Linux Kernel Source', 'QEMU', 'Make'],
        careerPath: 'Kernel Developer -> Senior Systems Programmer -> OS Architect',
      },
      {
        name: 'Distributed Systems',
        icon: Share2,
        description: 'Designing systems composed of multiple autonomous computers that communicate and coordinate their actions by passing messages.',
        roles: [{ name: 'Distributed Systems Engineer', responsibilities: 'Builds scalable and fault-tolerant systems.' }, { name: 'Site Reliability Engineer (SRE)', responsibilities: 'Focuses on reliability, scalability, and performance of large-scale systems.' }],
        skills: ['Concurrency', 'Fault Tolerance', 'Consensus Algorithms (Paxos, Raft)', 'Networking', 'Cloud Computing'],
        tools: ['Go', 'Rust', 'Kubernetes', 'gRPC', 'Zookeeper'],
        careerPath: 'Backend Engineer -> Senior Distributed Systems Engineer -> Principal Engineer',
      },
    ],
  },
  {
    id: 'cgv',
    field: 'Computer Graphics & Vision',
    icon: Camera,
    description: 'The study of how computers can generate images and interpret visual information from the real world.',
    subfields: [
      {
        name: 'Computer Graphics',
        icon: Image,
        description: 'Creating photorealistic and stylized images and animations using computer algorithms.',
        roles: [{ name: 'Graphics Engineer', responsibilities: 'Develops rendering engines and tools for games and film.' }, { name: 'VFX Artist', responsibilities: 'Creates visual effects for movies and games.' }],
        skills: ['Linear Algebra', 'C++', 'OpenGL/Vulkan/DirectX', 'Shader Programming (GLSL/HLSL)'],
        tools: ['Unity', 'Unreal Engine', 'Blender', 'Houdini'],
        careerPath: 'Junior Graphics Programmer -> Senior Graphics Engineer -> Rendering Lead',
      },
      {
        name: 'Computer Vision',
        icon: ScanEye,
        description: 'Teaching computers to "see" and understand the visual world.',
        roles: [{ name: 'Computer Vision Engineer', responsibilities: 'Builds systems for image recognition, object detection, and scene understanding.' }, { name: 'Machine Learning Scientist (Vision)', responsibilities: 'Researches new models for visual data analysis.' }],
        skills: ['Image Processing', 'Deep Learning', 'OpenCV', 'Python', 'Sensor Data'],
        tools: ['PyTorch/TensorFlow', 'OpenCV', 'CUDA', 'MATLAB'],
        careerPath: 'CV Engineer -> Senior CV Scientist -> Director of Vision R&D',
      },
    ],
  },
  {
    id: 'hci',
    field: 'Human-Computer Interaction',
    icon: MousePointerClick,
    description: 'Designing and studying the interaction between humans and computer systems to create intuitive and effective user experiences.',
    subfields: [
      {
        name: 'User Experience (UX) Design',
        icon: PenTool,
        description: 'Focusing on the overall experience of a person using a product, such as a website or app.',
        roles: [{ name: 'UX Designer', responsibilities: 'Creates user-friendly and intuitive product interfaces.' }, { name: 'UX Researcher', responsibilities: 'Studies user behavior to inform design decisions.' }],
        skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Information Architecture'],
        tools: ['Figma', 'Sketch', 'Adobe XD', 'UserTesting.com', 'Maze'],
        careerPath: 'Junior UX Designer -> Senior UX Designer -> UX Lead/Manager',
      },
      {
        name: 'Accessibility (a11y)',
        icon: Accessibility,
        description: 'Ensuring that technology is usable by people with the widest possible range of abilities.',
        roles: [{ name: 'Accessibility Specialist', responsibilities: 'Audits and remediates products to meet accessibility standards.' }, { name: 'Frontend Developer (a11y focus)', responsibilities: 'Builds inclusive interfaces from the ground up.' }],
        skills: ['WCAG Standards', 'ARIA', 'Semantic HTML', 'Assistive Technology Testing'],
        tools: ['axe-core', 'WAVE', 'Screen Readers (JAWS, NVDA, VoiceOver)', 'Lighthouse'],
        careerPath: 'Accessibility Tester -> Accessibility Engineer -> Head of Accessibility',
      },
    ],
  },
  {
    id: 'robotics',
    field: 'Robotics',
    icon: Bot,
    description: 'An interdisciplinary field that integrates computer science and engineering to design, construct, operate, and use robots.',
    subfields: [
      {
        name: 'Control Systems',
        icon: CircuitBoard,
        description: 'Developing algorithms to control the movement and actions of robots.',
        roles: [{ name: 'Controls Engineer', responsibilities: 'Designs algorithms for robot motion and behavior.' }, { name: 'Robotics Software Engineer', responsibilities: 'Implements software for robotic systems.' }],
        skills: ['Control Theory', 'C++', 'Python', 'Kinematics', 'Dynamics'],
        tools: ['ROS (Robot Operating System)', 'MATLAB/Simulink', 'Gazebo'],
        careerPath: 'Robotics Engineer -> Senior Controls Engineer -> Robotics Research Scientist',
      },
      {
        name: 'Robot Perception',
        icon: Scan,
        description: 'Enabling robots to interpret data from sensors (like cameras and LiDAR) to understand their environment.',
        roles: [{ name: 'Perception Engineer', responsibilities: 'Develops algorithms for sensor data processing.' }, { name: 'Computer Vision Engineer (Robotics)', responsibilities: 'Specializes in visual perception for robots.' }],
        skills: ['Sensor Fusion', 'SLAM Algorithms', 'Computer Vision', 'Machine Learning', 'Point Cloud Processing'],
        tools: ['ROS', 'OpenCV', 'PCL (Point Cloud Library)', 'TensorFlow/PyTorch'],
        careerPath: 'Perception Engineer -> Senior Perception Scientist -> Head of Autonomous Systems',
      },
    ],
  },
   {
    id: 'qc',
    field: 'Quantum Computing',
    icon: Orbit,
    description: 'Harnessing the principles of quantum mechanics to build powerful new types of computers.',
    subfields: [
      {
        name: 'Quantum Algorithms',
        icon: FunctionSquare,
        description: 'Designing algorithms that leverage quantum phenomena like superposition and entanglement to solve problems intractable for classical computers.',
        roles: [{ name: 'Quantum Algorithm Researcher', responsibilities: 'Develops and analyzes novel quantum algorithms for optimization, simulation, and cryptography.' }],
        skills: ["Quantum Mechanics", "Linear Algebra", "Complexity Theory", "Shor's Algorithm", "Grover's Algorithm"],
        tools: ["Qiskit (IBM)", "Cirq (Google)", "Python", "LaTeX"],
        careerPath: 'PhD Researcher -> Post-doc -> Quantum Research Scientist at a tech company or national lab.',
      },
      {
        name: 'Quantum Hardware',
        icon: Cpu,
        description: 'Engineering the physical devices and qubits that form the basis of quantum computers.',
        roles: [{ name: 'Quantum Hardware Engineer', responsibilities: 'Designs, fabricates, and tests quantum processors and related hardware components.' }],
        skills: ["Superconducting circuits", "Ion traps", "Photonics", "Cryogenics", "Electrical Engineering"],
        tools: ["CAD software", "Lab equipment (oscilloscopes, signal generators)", "Python for control systems"],
        careerPath: 'Hardware Engineer -> Senior Quantum Engineer -> Lead Hardware Architect.',
      },
    ],
  },
  {
    id: 'bioinfo',
    field: 'Bioinformatics',
    icon: Microscope,
    description: 'Using computation to store, analyze, and interpret biological data, especially genomic and proteomic data.',
    subfields: [
      {
        name: 'Computational Genomics',
        icon: Dna,
        description: 'Analyzing DNA and RNA sequences to understand gene function, evolution, and disease.',
        roles: [{ name: 'Computational Biologist', responsibilities: 'Analyzes genomic datasets to identify mutations, study gene expression, and understand genetic diseases.' }, { name: 'Genomics Data Scientist', responsibilities: 'Applies data science techniques to large-scale genomic data.' }],
        skills: ["Genomics", "Statistics", "Python/R", "Next-Generation Sequencing (NGS) data analysis", "Algorithms"],
        tools: ["Bioconductor", "GATK", "SAMtools", "BLAST", "UCSC Genome Browser"],
        careerPath: 'Bioinformatics Analyst -> Computational Scientist -> Principal Investigator / Director of Bioinformatics.',
      },
      {
        name: 'Proteomics & Drug Discovery',
        icon: FlaskConical,
        description: 'Studying proteins and their interactions, often with the goal of designing new drugs and therapies.',
        roles: [{ name: 'Cheminformatics Specialist', responsibilities: 'Uses computational models to simulate protein structures and predict how drugs will interact with them.' }, { name: 'Computational Chemist', responsibilities: 'Applies chemistry and computer science to solve problems in drug discovery.' }],
        skills: ["Structural Biology", "Molecular Dynamics", "Machine Learning", "Chemistry", "Statistics"],
        tools: ["PyMOL", "GROMACS", "Schrödinger Suite", "RDKit"],
        careerPath: 'Computational Chemist -> Senior Scientist -> Director of Computational Drug Discovery.',
      },
    ],
  },
  {
    id: 'blockchain',
    field: 'Blockchain & Web3',
    icon: Link,
    description: 'Developing decentralized applications and systems using blockchain technology and cryptography.',
    subfields: [
      {
        name: 'Smart Contract Development',
        icon: FileText,
        description: 'Writing, testing, and deploying self-executing contracts on a blockchain.',
        roles: [{ name: 'Smart Contract Developer', responsibilities: 'Builds the backend logic for decentralized applications (dApps) using smart contracts.' }, { name: 'Blockchain Engineer', responsibilities: 'Works on the core blockchain protocol itself or complex dApps.' }],
        skills: ["Solidity", "Rust", "Cryptography", "Testing Frameworks", "Gas Optimization"],
        tools: ["Ethereum", "Hardhat", "Truffle", "Remix IDE", "OpenZeppelin"],
        careerPath: 'Smart Contract Dev -> Senior Blockchain Dev -> Protocol Architect.',
      },
      {
        name: 'Decentralized Finance (DeFi)',
        icon: CandlestickChart,
        description: 'Building and analyzing open, permissionless financial systems on the blockchain.',
        roles: [{ name: 'DeFi Protocol Developer', responsibilities: 'Designs and implements protocols for lending, trading, and other financial services on-chain.' }, { name: 'Quantitative Analyst (Crypto)', responsibilities: 'Models risk and develops trading strategies for digital assets.' }],
        skills: ["Economics", "Game Theory", "Solidity", "Financial Modeling", "Security Auditing"],
        tools: ["Uniswap", "Aave", "Compound", "TheGraph", "Dune Analytics"],
        careerPath: 'DeFi Developer -> Quant Researcher -> Head of Protocol.',
      },
    ],
  },
  {
    id: 'gamedev',
    field: 'Game Development',
    icon: Gamepad2,
    description: 'The art and science of creating interactive entertainment, from indie games to AAA titles.',
    subfields: [
      {
        name: 'Gameplay Programming',
        icon: Puzzle,
        description: "Writing the code that defines the game's rules, character actions, and overall player experience.",
        roles: [{ name: 'Gameplay Programmer', responsibilities: 'Implements game features, mechanics, and player interactions.' }, { name: 'Game Systems Designer', responsibilities: 'Designs and programs core systems like AI, physics, or UI.' }],
        skills: ["C++", "C#", "Game Logic", "Physics", "AI for games"],
        tools: ["Unity", "Unreal Engine", "Godot", "Visual Studio"],
        careerPath: 'Junior Programmer -> Gameplay Programmer -> Lead Programmer -> Technical Director.',
      },
      {
        name: 'Game Engine Development',
        icon: Package,
        description: 'Building the core technology and tools that power the creation of video games, including rendering, physics, and audio systems.',
        roles: [{ name: 'Engine Programmer', responsibilities: 'Develops and maintains the core game engine.' }, { name: 'Tools Programmer', responsibilities: 'Creates tools for designers and artists to build the game with.' }],
        skills: ["Advanced C++", "Graphics APIs (Vulkan, DirectX)", "Performance Optimization", "Systems Architecture"],
        tools: ["Visual Studio", "RenderDoc", "Tracy Profiler", "Custom Engine Tools"],
        careerPath: 'Engine Programmer -> Senior Engine Programmer -> Graphics Architect.',
      },
    ]
  },
  {
    id: 'scicomp',
    field: 'Scientific Computing',
    icon: Beaker,
    description: 'Using computational methods and models to analyze and solve complex problems in science and engineering.',
    subfields: [
      {
        name: 'High-Performance Computing (HPC)',
        icon: Wind,
        description: 'Designing and using supercomputers and parallel processing techniques to run large-scale simulations and data analyses.',
        roles: [{ name: 'HPC Engineer', responsibilities: 'Manages and optimizes software for supercomputing environments.' }, { name: 'Computational Scientist', responsibilities: 'Uses HPC to conduct research in a specific scientific domain.' }],
        skills: ["C++", "Fortran", "Parallel Programming (MPI, OpenMP)", "CUDA", "Linux"],
        tools: ["Slurm", "Supercomputer clusters", "Profiling tools (e.g., VTune)"],
        careerPath: 'Research Software Engineer -> HPC Specialist -> Lead Computational Scientist.',
      },
      {
        name: 'Computational Modeling & Simulation',
        icon: Replace,
        description: 'Creating computer models to simulate natural phenomena or engineered systems, from weather patterns to molecular interactions.',
        roles: [{ name: 'Simulation Engineer', responsibilities: 'Develops and runs simulations to test and analyze systems.' }, { name: 'Research Scientist', responsibilities: 'Creates computational models to test scientific hypotheses.' }],
        skills: ["Numerical Methods", "Differential Equations", "Physics/Chemistry/Biology", "Domain-specific knowledge"],
        tools: ["MATLAB/Simulink", "COMSOL", "ANSYS", "Python (SciPy, NumPy)"],
        careerPath: 'Simulation Analyst -> Senior Scientist -> Research Director.',
      },
    ]
  },
];


export const csParentCategoriesData: ParentCategory[] = [
  {
    id: 'foundations',
    name: 'Foundations & Systems',
    icon: Landmark,
    description: 'The core principles and infrastructure of computing, from theoretical limits to the large-scale systems that power the digital world.',
    fields: allCsFields.filter(f => ['tcs', 'csys', 'cn', 'cyber', 'qc', 'blockchain'].includes(f.id)),
  },
  {
    id: 'software',
    name: 'Software & Applications',
    icon: Component,
    description: 'The design, development, and interaction paradigms of software that people use every day.',
    fields: allCsFields.filter(f => ['swe', 'hci', 'gamedev'].includes(f.id)),
  },
    {
    id: 'intelligence',
    name: 'Data, AI & Robotics',
    icon: Sigma,
    description: 'Creating intelligent systems that can learn from data, perceive the world, and interact with the physical environment.',
    fields: allCsFields.filter(f => ['ai', 'ds', 'cgv', 'robotics', 'bioinfo', 'scicomp'].includes(f.id)),
  },
];
