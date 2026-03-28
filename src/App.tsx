import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Terminal, 
  Database, 
  Settings, 
  ChevronRight,
  Globe
} from "lucide-react";
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  PROJECTS, 
  SKILL_CATEGORIES, 
  EDUCATION 
} from "./constants";

const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-2">
    <Icon className="w-6 h-6 text-gray-700" />
    <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">{title}</h2>
  </div>
);

interface ExperienceCardProps {
  exp: any;
  key?: React.Key;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-10 relative pl-8 border-l-2 border-gray-100 last:mb-0"
  >
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-4 border-white shadow-sm" />
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
        <p className="text-lg font-medium text-gray-700">{exp.company}</p>
      </div>
      <div className="text-right md:text-right text-sm text-gray-500 font-medium">
        <div className="flex items-center md:justify-end gap-1">
          <MapPin className="w-3 h-3" />
          {exp.location}
        </div>
        <div>{exp.period}</div>
      </div>
    </div>
    <ul className="mt-4 space-y-2">
      {exp.description.map((item: string, idx: number) => (
        <li key={idx} className="text-gray-600 flex gap-2 leading-relaxed">
          <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

interface ProjectCardProps {
  project: any;
  key?: React.Key;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
  >
    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{project.description}</p>
    <div className="flex gap-4 mt-auto">
      {project.links.github && (
        <a 
          href={project.links.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      )}
      {project.links.gitlab && (
        <a 
          href={project.links.gitlab} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-orange-600 transition-colors"
        >
          <Globe className="w-4 h-4" />
          GitLab
        </a>
      )}
    </div>
  </motion.div>
);

interface SkillBadgeProps {
  skill: string;
  key?: React.Key;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors">
    {skill}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      {/* Header / Hero */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/80">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center md:text-left"
          >
            <h1 className="text-2xl font-bold tracking-tight">{PERSONAL_INFO.name}</h1>
            <p className="text-gray-500 font-medium">{PERSONAL_INFO.title}</p>
          </motion.div>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Intro Section */}
        <section id="about" className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:col-span-1"
            >
              <div className="aspect-square rounded-3xl bg-gray-900 flex items-center justify-center text-white text-6xl font-bold shadow-2xl overflow-hidden relative group">
                {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-gray-900 transition-colors truncate">{PERSONAL_INFO.email}</a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="pt-4 flex gap-4">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Building efficient and scalable software solutions.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {PERSONAL_INFO.profile}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200"
                >
                  Get in touch
                </a>
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-200 text-gray-900 rounded-full font-semibold hover:border-gray-900 transition-all"
                >
                  View GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <SectionHeader icon={Briefcase} title="Work Experience" />
          <div className="space-y-4">
            {EXPERIENCES.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <SectionHeader icon={Terminal} title="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 scroll-mt-24">
          <SectionHeader icon={Code2} title="Skills & Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  {category.name === "App Dev" && <Settings className="w-4 h-4 text-blue-500" />}
                  {category.name === "Data Tools" && <Database className="w-4 h-4 text-green-500" />}
                  {category.name === "DevOps Tools" && <Globe className="w-4 h-4 text-purple-500" />}
                  <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <SkillBadge key={sIdx} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24 scroll-mt-24">
          <SectionHeader icon={GraduationCap} title="Education" />
          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </p>
                </div>
                <div className="text-right">
                  {edu.cgpa && <div className="text-2xl font-bold text-gray-900">CGPA: {edu.cgpa}</div>}
                  <div className="text-gray-500 font-medium">{edu.period}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Let's connect</h2>
            <p className="text-gray-600">Open to new opportunities and collaborations.</p>
          </div>
          <div className="flex gap-4">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">
              <Github className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-12 pt-8 border-t border-gray-50 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}
