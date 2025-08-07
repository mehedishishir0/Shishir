'use client'

import { useEffect, useState } from 'react'

export default function CodingAnimation() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [displayedCode, setDisplayedCode] = useState<string[]>([])

  const codeLines = [
    "const developer = {",
    "  name: 'Alex Chen',",
    "  role: 'Full Stack Developer',",
    "  skills: ['React', 'Node.js', 'Python'],",
    "  passion: 'Creating amazing experiences',",
    "  coffee: '∞',",
    "  status: 'Available for hire'",
    "}",
    "",
    "function createMagic() {",
    "  return code + creativity + coffee;",
    "}",
    "",
    "// Let's build something amazing! 🚀"
  ]

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine]
      if (line !== undefined && currentChar < line.length) {
        const timer = setTimeout(() => {
          setDisplayedCode(prev => {
            const newCode = [...prev]
            if (!newCode[currentLine]) newCode[currentLine] = ''
            newCode[currentLine] += line[currentChar]
            return newCode
          })
          setCurrentChar(prev => prev + 1)
        }, 50)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + 1)
          setCurrentChar(0)
        }, 500)
        return () => clearTimeout(timer)
      }
    }
  }, [currentLine, currentChar, codeLines])

  const getSyntaxHighlighting = (line: string, index: number) => {
    if (!line) return <span className="text-gray-300">{line}</span>

    if (line.includes('const') || line.includes('function')) {
      return <span className="text-purple-400">{line}</span>
    } else if (line.includes('name:') || line.includes('role:')) {
      return <span className="text-green-400">{line}</span>
    } else if (line.includes('//')) {
      return <span className="text-gray-500">{line}</span>
    } else {
      return <span className="text-cyan-400">{line}</span>
    }
  }

  return (
    <div className="font-mono text-sm bg-gray-900/90 backdrop-blur-lg rounded-lg p-6 border border-gray-700 shadow-2xl max-w-2xl w-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 ml-2">developer.js</span>
      </div>
      <div className="space-y-1">
        {displayedCode.map((line, index) => (
          <div key={index} className="flex">
            <span className="text-gray-500 w-8 text-right mr-4">{index + 1}</span>
            <span className="text-gray-300">
              {getSyntaxHighlighting(line || '', index)}
              {index === currentLine && 
               currentChar === (codeLines[currentLine]?.length || 0) && 
               currentLine < codeLines.length && (
                <span className="animate-pulse text-white">|</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
