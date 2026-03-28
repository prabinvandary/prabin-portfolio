import { Experience, Project, SkillCategory, Education } from './types';

export const PERSONAL_INFO = {
  name: "Prabin Bhandari",
  title: "Software Engineer",
  email: "prabininwork@gmail.com",
  phone: "9844443863",
  location: "Harion, Sarlahi, Nepal",
  linkedin: "https://www.linkedin.com/in/bhandariprabin",
  github: "https://github.com/prabinvandary",
  profile: "Skilled and motivated Software Engineer with extensive experience in Java development. With a strong foundation in computer science principles and a passion for creating efficient and scalable software solutions, I have consistently delivered high-quality code that meets or exceeds client expectations. My expertise spans across various domains, including web development, enterprise software, and mobile applications."
};

export const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineer | Support",
    company: "Smart Data Solutions",
    location: "Remote/Nepal",
    period: "07/2025 – Present",
    description: [
      "Design and implement new features for enterprise-grade healthcare claims processing platforms.",
      "Develop and maintain Java-based backend services supporting high-volume insurance and medical claim workflows.",
      "Enhance end-to-end claims processing across multiple form types, including CMS-1500 and other standardized healthcare claim formats.",
      "Build and optimize complex repricing logic to ensure accurate provider reimbursement calculations.",
      "Implement and support EDI/X12 integrations (e.g., 837, 835 transactions) for seamless payer-provider data exchange.",
      "Analyze and troubleshoot failed EDI transactions and claim submissions in production environments.",
      "Perform detailed root-cause analysis (RCA) on processing failures and implement permanent corrective solutions.",
      "Improve system reliability, throughput, and processing accuracy through performance tuning and code optimization.",
      "Collaborate with cross-functional stakeholders (product, QA, operations, clients) to deliver client-specific enhancements.",
      "Provide hands-on production support, ensuring SLA adherence and minimal disruption to claims lifecycle operations.",
      "Ensure compliance with healthcare data standards and industry regulations in claims processing workflows."
    ]
  },
  {
    title: "Software Engineer",
    company: "Cedar Gate Services Pvt. Ltd",
    location: "Lalitpur, Nepal",
    period: "01/2024 – 07/2025",
    description: [
      "Analyze software requirements to understand project scope and objectives.",
      "Develop industry-standard code adhering to best practices and coding standards.",
      "Execute unit tests to ensure code functionality and identify potential issues early in the development process.",
      "Conduct code reviews to ensure code quality, readability, and adherence to coding standards.",
      "Identify and debug software defects to improve overall system stability and performance.",
      "Generate technical documents such as design documents, user manuals, and API documentation.",
      "Perform additional related tasks as required to support project goals and objectives"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Synergy Tech Software",
    location: "Pulchowk, Kathmandu",
    period: "05/2023 – 01/2024",
    description: [
      "Worked on a fintech project using Java EE, developing scalable and secure web applications compliant with industry standards and regulations.",
      "Utilized Vue.js to create dynamic and interactive user interfaces, enhancing user experience.",
      "Employed Quarkus to build efficient and lightweight microservices, ensuring optimal performance and scalability."
    ]
  },
  {
    title: "Back End Developer",
    company: "Hobes Technology",
    location: "Kathmandu, Nepal",
    period: "08/2022 – 05/2023",
    description: [
      "Developed RESTful web services using Spring Boot for a cloud-based SaaS platform, enabling seamless integration with third-party applications.",
      "Implemented robust authentication and authorization mechanisms using Spring Security, ensuring the application's security compliance.",
      "Designed and implemented a real-time messaging system using WebSocket technology, enhancing communication capabilities within the platform.",
      "Mentored junior developers and conducted code reviews to maintain code quality and adherence to best practices."
    ]
  },
  {
    title: "Back End Intern",
    company: "Hobes Technology",
    location: "Kathmandu, Nepal",
    period: "06/2022 – 08/2022",
    description: [
      "Developing RESTful endpoints to expose functionalities of the book rental system.",
      "Handling request/response payloads using DTOs (Data Transfer Objects).",
      "Documenting APIs using tools like Swagger or Springdoc.",
      "Implementing CRUD (Create, Read, Update, Delete) operations for managing books, users, rentals, etc., using Spring Data JPA or Hibernate."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Core cooperative management system in Java",
    description: "Desktop based application designed with Swing as a major project in sixth semester which can be used to save details of members, their savings and withdraw, loans, etc.",
    links: {
      github: "https://github.com/prabinvandary/Cooperative"
    }
  },
  {
    title: "Book Rental System",
    description: "Backend in Spring Boot with features to add books and rent books which also can be used to get the insights of the data, secured with Spring Security and role based authentication.",
    links: {
      github: "https://github.com/prabinvandary/Book-rental-system",
      gitlab: "https://gitlab.com/prabinbhandari/book-rental-front-end-with-react.git"
    }
  },
  {
    title: "Cricket Scorer Web App",
    description: "Cricket scorer web app developed using Java EE, Quarkus and Vue.js. Includes Java EE, Quarkus Backend and Vue.js frontend components.",
    links: {
      github: "https://github.com/prabinvandary/cricketscorer.git",
      gitlab: "https://gitlab.com/prabinbhandari/book-rental-system-in-grails.git"
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "App Dev",
    skills: ["Java (Java EE, JSF, Spring Boot, Quarkus, Groovy on Grails)", "HTML", "CSS", "JavaScript (Angular, Vue, React)", "TypeScript"]
  },
  {
    name: "Data Tools",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    name: "DevOps Tools",
    skills: ["CI/CD (GitLab)", "GitHub", "AWS", "Bash", "Gradle", "Maven", "JIRA", "Docker", "Kubernetes"]
  },
  {
    name: "Dev Tools",
    skills: ["Webpack", "Postman", "npm", "Yarn", "Visual Studio", "IntelliJ IDEA", "Web Storm"]
  },
  {
    name: "Other",
    skills: ["Operating System (Windows, Linux, Mac OS)", "Object Oriented Design", "Computer Networking", "Cyber Security"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master Of Information Technology",
    institution: "Central Department of Computer Science and Information Technology",
    location: "Kathmandu, Nepal",
    period: "02/2025 – Present"
  },
  {
    degree: "Bachelor of Information Management",
    institution: "Shanker Dev Campus",
    location: "Putalisadak, Kathmandu, Nepal",
    period: "2018 – 2023",
    cgpa: "3.72"
  }
];
