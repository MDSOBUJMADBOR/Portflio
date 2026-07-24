import { projectsData } from "@/lib/data"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, FileText, Settings, Rocket, ChevronRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white py-24 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
            <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/#projects" className="hover:text-blue-500 transition-colors">Projects</Link>
            <ChevronRight size={14} />
            <span className="text-gray-200">{project.title}</span>
          </div>

          <Link 
            href="/#projects"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>

        {/* Title Section */}
        <div className="mb-10">
          <h1 className="font-syne text-4xl md:text-5xl font-extrabold mb-3">{project.title}</h1>
          <p className="text-gray-400 text-lg mb-6">{project.subtitle}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[11px] font-bold tracking-wider text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column — Image */}
          <div className="lg:col-span-2 space-y-6">
            <div className="w-full bg-[#121626] rounded-2xl border border-white/5 overflow-hidden p-2">
              <img src={project.image} alt={project.title} className="w-full h-auto rounded-xl" />
            </div>

            {project.featuredBooks && project.featuredBooks.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-syne font-bold text-lg text-white">Featured Details</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.featuredBooks.map((img, idx) => (
                    <div key={idx} className="bg-[#121626] border border-white/5 rounded-xl overflow-hidden aspect-[3/4]">
                      <img src={img} alt="Detail" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column — Text Content */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Description */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-bold font-syne">
                <FileText size={20} className="text-blue-400" /> Description
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-bold font-syne">
                <ExternalLink size={20} className="text-blue-400" /> Links
              </h3>
              <div className="flex flex-col gap-3">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 text-sm">
                  <span className="flex items-center gap-2"><ExternalLink size={16}/> Live Project</span>
                  <ExternalLink size={14} />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-gray-300 font-semibold transition-colors text-sm">
                  <span className="flex items-center gap-2"><FaGithub size={16}/> GitHub (Client)</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-[#121626] rounded-2xl p-6 border border-white/5">
              <h3 className="flex items-center gap-2 text-lg font-bold font-syne mb-4 text-blue-400">
                <Settings size={18} /> Challenges Faced
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="bg-[#121626] rounded-2xl p-6 border border-white/5">
              <h3 className="flex items-center gap-2 text-lg font-bold font-syne mb-4 text-purple-400">
                <Rocket size={18} /> Future Improvements
              </h3>
              <ul className="space-y-3">
                {project.improvements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
