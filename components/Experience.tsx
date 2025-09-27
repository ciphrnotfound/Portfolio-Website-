import React from "react"
import { workExperience } from "@/data"

const Experience = () => {
    const getJobIcon = (title: string) => {
        if (title.toLowerCase().includes('frontend')) return (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
        )
        if (title.toLowerCase().includes('mobile')) return (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4zm5 14c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
            </svg>
        )
        if (title.toLowerCase().includes('freelance')) return (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
        )
        if (title.toLowerCase().includes('lead')) return (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
        )
        return (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
            </svg>
        )
    }

    const getJobColor = (title: string) => {
        if (title.toLowerCase().includes('frontend')) return 'from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/60 border-gray-200 dark:border-gray-700/30'
        if (title.toLowerCase().includes('mobile')) return 'from-gray-100 to-gray-200 dark:from-gray-700/40 dark:to-gray-800/50 border-gray-300 dark:border-gray-600/30'
        if (title.toLowerCase().includes('freelance')) return 'from-gray-200 to-gray-300 dark:from-gray-600/40 dark:to-gray-700/50 border-gray-400 dark:border-gray-500/30'
        if (title.toLowerCase().includes('lead')) return 'from-gray-300 to-gray-400 dark:from-gray-900/60 dark:to-black/70 border-gray-500 dark:border-gray-800/40'
        return 'from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/60 border-gray-200 dark:border-gray-700/30'
    }

    return (
        <div className="py-20 bg-white dark:bg-black transition-colors duration-300" id="experience">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="heading text-center mb-16 text-gray-900 dark:text-white">
                    Some{" "}
                    <span className="text-transparent bg-gradient-to-bl from-gray-600 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text">
                        Places I've Worked
                    </span>
                </h1>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600 dark:from-gray-600 dark:via-gray-500 dark:to-gray-700 opacity-40 md:-translate-x-px"></div>

                    <div className="space-y-12 md:space-y-16">
                        {workExperience.map((card, index) => (
                            <div
                                key={card.id}
                                className={`relative flex items-center ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col md:justify-center`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-500 rounded-full border-4 border-white dark:border-black shadow-lg md:-translate-x-2 z-10 shadow-gray-400/30 dark:shadow-gray-500/30"></div>

                                {/* Content card */}
                                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <div className={`
                                        group relative p-6 md:p-8 rounded-2xl
                                        bg-gradient-to-br ${getJobColor(card.title)}
                                        backdrop-blur-sm border
                                        hover:border-gray-400/40 dark:hover:border-gray-500/40 transition-all duration-500
                                        hover:scale-105 hover:shadow-2xl
                                        hover:shadow-gray-400/20 dark:hover:shadow-gray-500/20
                                        animate-float
                                    `} style={{ animationDelay: `${index * 0.2}s` }}>
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-400/5 to-transparent dark:from-gray-500/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Header */}
                                        <div className="relative z-10 flex items-start gap-4 mb-4">
                                            <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors animate-pulse" style={{ animationDelay: `${index * 0.3}s` }}>
                                                {getJobIcon(card.title)}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors">
                                                    {card.title}
                                                </h3>
                                                <div className="h-1 w-12 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-500 rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="relative z-10">
                                            <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white/90 transition-colors text-sm md:text-base leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-400/5 to-transparent dark:from-gray-500/5 dark:to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-4 right-4 text-gray-400/30 dark:text-gray-500/30 text-xs font-mono">
                                            #{card.id}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                {index % 2 === 0 && <div className="hidden md:block md:w-2/12"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/80 dark:to-black border border-gray-200 dark:border-gray-700/30 hover:border-gray-300 dark:hover:border-gray-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-gray-400/30 dark:shadow-gray-500/30">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ready for New Adventures?</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Let's create something amazing together</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience