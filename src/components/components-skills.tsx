import React from 'react'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma,
  FaNodeJs, FaLanguage, FaImage
} from 'react-icons/fa'
import { SiTypescript, SiMysql, SiMongodb, SiNextdotjs } from 'react-icons/si'

const skillCategories = [
  {
    title: "USING NOW:",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JAVASCRIPT", icon: FaJs, color: "#F7DF1E" },
      { name: "REACT", icon: FaReact, color: "#61DAFB" },
      { name: "GIT", icon: FaGitAlt, color: "#F05032" },
      { name: "FIGMA", icon: FaFigma, color: "#F24E1E" },
      { name: "TYPESCRIPT", icon: SiTypescript, color: "#3178C6" },
      { name: "NEXT.JS", icon: SiNextdotjs, color: "#000000" },
    ]
  },
  {
    title: "LEARNING:",
    skills: [
      { name: "NODE.JS", icon: FaNodeJs, color: "#339933" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MONGODB", icon: SiMongodb, color: "#47A248" },
    ]
  },
  {
    title: "OTHER SKILLS:",
    skills: [
      { name: "PHOTOSHOP", icon: FaImage, color: "#31A8FF" }, // Placeholder for Photoshop
      { name: "ILLUSTRATOR", icon: FaImage, color: "#FF9A00" }, // Placeholder for Illustrator
      { name: "COREL DRAW", icon: FaLanguage, color: "#0070f3" },
      { name: "PYTHON", icon: FaLanguage, color: "#3776AB" },
    ]
  }
]


export default function Skills() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className='flex justify-center'>

      
      <h2 id='skills' className="text-black inline-block text-center  px-4 py-2 text-xl mb-8 mt-20 font-bold" style={{
        width: '187px',
        border: '3px solid black',
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: '0.2em', // Use Montserrat font
      }}>
          SKILLS
        </h2>
        </div>
        
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-left text-gray-700">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center">
                    <skill.icon size={64} color={skill.color} />
                  </div>
                  <span className="text-sm font-medium text-gray-600 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}