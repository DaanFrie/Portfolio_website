// Mobile Navigation Logic
import { projects } from "./projects.js"

const overview = document.getElementById("project-overview")
const detailView = document.getElementById("project-detail")
const detailContent = document.getElementById("detail-content")
const closeBtn = document.getElementById("close-detail")

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("nav-toggle")
    const menu = document.getElementById("nav-menu")
    const overlay = document.getElementById("nav-overlay")
    const body = document.body

    function openMenu() {
        menu.classList.remove("-translate-x-full")
        overlay.classList.remove("opacity-0", "pointer-events-none")
        overlay.classList.add("opacity-100")
        body.classList.add("overflow-hidden")
        toggleButton.classList.add("hamburger-active")
    }

    function closeMenu() {
        menu.classList.add("-translate-x-full")
        overlay.classList.remove("opacity-100")
        overlay.classList.add("opacity-0", "pointer-events-none")
        body.classList.remove("overflow-hidden")
        toggleButton.classList.remove("hamburger-active")
    }

    toggleButton.addEventListener("click", () => {
        const isOpen = !menu.classList.contains("-translate-x-full")
        if (isOpen) {
            closeMenu()
        } else {
            openMenu()
        }
    })

    overlay.addEventListener("click", closeMenu)

    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            if (!menu.classList.contains("-translate-x-full")) {
                closeMenu()
            }
        })
    })

    document.querySelectorAll(".project-trigger").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const id = Number.parseInt(trigger.dataset.id, 10)
            showDetail(id)
        })
    })

    // Smooth Scrolling Navigation
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault()
            const sec = document.querySelector(link.getAttribute("href"))
            sec?.scrollIntoView({ behavior: "smooth" })
        })
    })

    // Intersection Observer for Animations - INCLUDING NAVBAR
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("visible", entry.isIntersecting)
            })
        },
        { threshold: 0.1 },
    )

    document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right").forEach((el) => {
        observer.observe(el)
    })

    // Console Log for Development
    console.log(`
    ⚫✨ Portfolio Loaded Successfully! ⚫✨
    
    🖤 Simple & Working:
    • Pure black backgrounds
    • Simple fade-in animations (once only)
    • No complex stagger effects
    • No complex stagger effects
    • No bidirectional animations
    • Clean and stable
    
    📧 Contact: daan.developer@email.com
  `)
})

// Custom Scroll Indicator
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100

    const indicator = document.getElementById("scroll-indicator")
    if (indicator) {
        indicator.style.height = scrollPercent + "vh"
    }
})

function showDetail(id) {
    const project = projects.find((p) => p.id === id)
    if (!project) return



    // Smooth slide animation - homepage slides out to the LEFT
    const mainContent = document.querySelector("main")
    mainContent.style.transform = "translateX(-100vw)"
    mainContent.style.transition = "transform 0.6s ease-in-out"

    // Show detail view with slide-in from RIGHT animation
    detailView.classList.remove("hidden")
    detailView.classList.add("block")
    detailView.style.transform = "translateX(100vw)"
    detailView.style.transition = "transform 0.6s ease-in-out"

    // Show detail view after a short delay
    setTimeout(() => {
        detailContent.innerHTML = `
        <div class="min-h-screen bg-black text-white">
            <!-- Previous project button -->
            <button id="prev-project-btn" class="fixed top-[50%] left-[3vw] z-[60] flex items-center justify-center w-[10vw] h-[10vw] bg-accentGold-500 text-black rounded-full font-bold text-[3vw] transition-all duration-300 transform -translate-y-1/2 md:w-[3vw] md:h-[3vw] md:text-[0.9vw] md:hover:scale-110 md:hover:bg-accentGold-400 md:left-[2vw] fade-in">
                <svg class="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>

            <!-- Next project button -->
            <button id="next-project-btn" class="fixed top-[50%] right-[3vw] z-[60] flex items-center justify-center w-[10vw] h-[10vw] bg-accentGold-500 text-black rounded-full font-bold text-[3vw] transition-all duration-300 transform -translate-y-1/2 md:w-[3vw] md:h-[3vw] md:text-[0.9vw] md:hover:scale-110 md:hover:bg-accentGold-400 md:right-[2vw] fade-in">
                <svg class="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/>
                </svg>
            </button>

            <!-- Main content -->
            <div class="pt-[6vw] pb-[8vw] px-[4vw] md:pt-[4vh] md:pb-[6vh] md:px-[6vw]">
                <div class="max-w-[85vw] mx-auto md:max-w-[65vw]">
                    
                    <!-- Project title -->
                    <h1 class="text-[7vw] font-bold mb-[4vw] text-accentGold-500 text-center md:text-[2.5vw] md:mb-[3vh] md:text-left fade-in">
                        ${project.title}
                    </h1>

                    <!-- Hero image - SMALLER & CLEANER -->
                    <div class="mb-[6vw] md:mb-[4vh] fade-in">
                        <div class="relative overflow-hidden rounded-[2vw] md:rounded-[1vh] shadow-lg max-w-[50vw] mx-auto md:max-w-[35vw]">
                            <img src="${project.image}" 
                                 alt="${project.title}" 
                                 class="w-full h-auto object-cover" />
                        </div>
                    </div>

                    <!-- Clean two-column layout -->
                    <div class="grid grid-cols-1 gap-[6vw] md:grid-cols-2 md:gap-[3vw] mb-[6vw] md:mb-[4vh]">
                        
                        <!-- Left column - Description -->
                        <div class="fade-in">
                            <h2 class="text-[4vw] font-bold text-accentGold-500 mb-[3vw] md:text-[1.2vw] md:mb-[1.5vh]">
                                About This Project
                            </h2>
                            <p class="text-[3.5vw] text-gray-300 leading-relaxed mb-[4vw] md:text-[0.9vw] md:leading-relaxed md:mb-[2vh]">
                                ${project.description}
                            </p>
                            
                            ${getProjectSpecificContent(project)}
                        </div>

                        <!-- Right column - Tech & Links -->
                        <div class="fade-in">
                            <h3 class="text-[4vw] font-bold text-accentGold-500 mb-[3vw] md:text-[1.2vw] md:mb-[1.5vh]">
                                Technologies
                            </h3>
                            <div class="flex flex-wrap gap-[1.5vw] mb-[4vw] md:gap-[0.4vw] md:mb-[2vh]">
                                ${project.tags
            .map(
                (tag) => `
                                    <span class="text-white border border-gray-600 rounded-full px-[2vw] py-[0.5vw] font-medium text-[3vw] md:px-[0.6vw] md:py-[0.15vw] md:text-[0.6vw]">${tag}</span>
                                `,
            )
            .join("")}
                            </div>

                            <!-- Project links - cleaner -->
                            <div class="space-y-[3vw] md:space-y-[1vh]">
                                ${
            project.github !== "#"
                ? `
                                    <a href="${project.github}" target="_blank" 
                                       class="flex items-center gap-[2vw] px-[3vw] py-[1.5vw] bg-accentGold-500 text-black rounded-lg text-[3vw] font-medium transition-all duration-300 ease-in-out hover:bg-accentGold-600 md:gap-[0.4vw] md:px-[1vw] md:py-[0.6vw] md:text-[0.7vw] md:rounded-[0.4vw]">
                                        <svg class="w-[3.5vw] h-[3.5vw] md:w-[0.8vw] md:h-[0.8vw]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.932 0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404 11.52 11.52 0 0 1 3.003.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.912 1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z"/>
                                        </svg>
                                        View on GitHub
                                    </a>
                                `
                : ""
        }
                                
                                ${
            project.live !== "#"
                ? `
                                    <a href="${project.live}" target="_blank" 
                                       class="flex items-center gap-[2vw] px-[3vw] py-[1.5vw] bg-gray-800 text-white rounded-lg text-[3vw] font-medium transition-all duration-300 ease-in-out hover:bg-gray-700 md:gap-[0.4vw] md:px-[1vw] md:py-[0.6vw] md:text-[0.7vw] md:rounded-[0.4vw]">
                                        <svg class="w-[3.5vw] h-[3.5vw] md:w-[0.8vw] md:h-[0.8vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                        </svg>
                                        View Live Site
                                    </a>
                                `
                : ""
        }
                            </div>
                        </div>
                    </div>

                    <!-- Back to homepage button - cleaner -->
                    <div class="text-center fade-in">
                        <button id="back-to-homepage-btn" 
                                class="inline-flex items-center justify-center gap-[2vw] px-[4vw] py-[2vw] bg-black text-accentGold-500 rounded-lg text-[3.5vw] font-medium transition-all duration-300 ease-in-out border border-accentGold-500 hover:bg-accentGold-500 hover:text-black md:gap-[0.4vw] md:px-[1.5vw] md:py-[0.8vw] md:rounded-[0.5vw] md:text-[0.8vw]">
                            <svg class="w-[3.5vw] h-[3.5vw] md:w-[0.8vw] md:h-[0.8vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 12l6-6M3 12l6 6"/>
                            </svg>
                            <span>Back to Homepage</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `

        // Slide in detail view
        setTimeout(() => {
            detailView.style.transform = "translateX(0)"
        }, 50)

        document.body.classList.add("overflow-hidden")

        // Add event listener to the next project button
        const nextProjectBtn = document.getElementById("next-project-btn")
        nextProjectBtn.addEventListener("click", () => {
            const currentIndex = projects.findIndex((p) => p.id === id)
            const nextIndex = (currentIndex + 1) % projects.length
            const nextProjectId = projects[nextIndex].id

            // NEXT: Slide current detail out to LEFT and show next project from RIGHT (same as homepage->detail)
            detailView.style.transform = "translateX(-100vw)"
            setTimeout(() => {
                showDetailFromDirection(nextProjectId, "right")
            }, 300)
        })

        // Add event listener to the previous project button
        const prevProjectBtn = document.getElementById("prev-project-btn")
        prevProjectBtn.addEventListener("click", () => {
            const currentIndex = projects.findIndex((p) => p.id === id)
            const prevIndex = (currentIndex - 1 + projects.length) % projects.length
            const prevProjectId = projects[prevIndex].id

            // PREV: Slide current detail out to RIGHT and show previous project from LEFT (same as detail->homepage)
            detailView.style.transform = "translateX(100vw)"
            setTimeout(() => {
                showDetailFromDirection(prevProjectId, "left")
            }, 300)
        })

        // Add event listener to the back to homepage button
        const backToHomepageBtn = document.getElementById("back-to-homepage-btn")
        backToHomepageBtn.addEventListener("click", () => {
            closeDetail()
        })

        // Add fade-in animations
        setTimeout(() => {
            document.querySelectorAll("#project-detail .fade-in").forEach((el) => {
                el.classList.add("visible")
            })
        }, 700)

        history.pushState({ id }, "", `#project-${id}`)
    }, 200)
}

// New function to show detail from specific direction
function showDetailFromDirection(id, direction) {
    const project = projects.find((p) => p.id === id)
    if (!project) return

    // Same content as showDetail but without the initial homepage slide
    detailContent.innerHTML = `
        <div class="min-h-screen bg-black text-white">
            <!-- Previous project button -->
            <button id="prev-project-btn" class="fixed top-[50%] left-[3vw] z-[60] flex items-center justify-center w-[10vw] h-[10vw] bg-accentGold-500 text-black rounded-full font-bold text-[3vw] transition-all duration-300 transform -translate-y-1/2 md:w-[3vw] md:h-[3vw] md:text-[0.9vw] md:hover:scale-110 md:hover:bg-accentGold-400 md:left-[2vw] fade-in">
                <svg class="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>

            <!-- Next project button -->
            <button id="next-project-btn" class="fixed top-[50%] right-[3vw] z-[60] flex items-center justify-center w-[10vw] h-[10vw] bg-accentGold-500 text-black rounded-full font-bold text-[3vw] transition-all duration-300 transform -translate-y-1/2 md:w-[3vw] md:h-[3vw] md:text-[0.9vw] md:hover:scale-110 md:hover:bg-accentGold-400 md:right-[2vw] fade-in">
                <svg class="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/>
                </svg>
            </button>

            <!-- Main content -->
            <div class="pt-[6vw] pb-[8vw] px-[4vw] md:pt-[4vh] md:pb-[6vh] md:px-[6vw]">
                <div class="max-w-[85vw] mx-auto md:max-w-[65vw]">
                    
                    <!-- Project title -->
                    <h1 class="text-[7vw] font-bold mb-[4vw] text-accentGold-500 text-center md:text-[2.5vw] md:mb-[3vh] md:text-left fade-in">
                        ${project.title}
                    </h1>

                    <!-- Hero image - SMALLER & CLEANER -->
                    <div class="mb-[6vw] md:mb-[4vh] fade-in">
                        <div class="relative overflow-hidden rounded-[2vw] md:rounded-[1vh] shadow-lg max-w-[50vw] mx-auto md:max-w-[35vw]">
                            <img src="${project.image}" 
                                 alt="${project.title}" 
                                 class="w-full h-auto object-cover" />
                        </div>
                    </div>

                    <!-- Clean two-column layout -->
                    <div class="grid grid-cols-1 gap-[6vw] md:grid-cols-2 md:gap-[3vw] mb-[6vw] md:mb-[4vh]">
                        
                        <!-- Left column - Description -->
                        <div class="fade-in">
                            <h2 class="text-[4vw] font-bold text-accentGold-500 mb-[3vw] md:text-[1.2vw] md:mb-[1.5vh]">
                                About This Project
                            </h2>
                            <p class="text-[3.5vw] text-gray-300 leading-relaxed mb-[4vw] md:text-[0.9vw] md:leading-relaxed md:mb-[2vh]">
                                ${project.description}
                            </p>
                            
                            ${getProjectSpecificContent(project)}
                        </div>

                        <!-- Right column - Tech & Links -->
                        <div class="fade-in">
                            <h3 class="text-[4vw] font-bold text-accentGold-500 mb-[3vw] md:text-[1.2vw] md:mb-[1.5vh]">
                                Technologies
                            </h3>
                            <div class="flex flex-wrap gap-[1.5vw] mb-[4vw] md:gap-[0.4vw] md:mb-[2vh]">
                                ${project.tags
        .map(
            (tag) => `
                                    <span class="text-white border border-gray-600 rounded-full px-[2vw] py-[0.5vw] font-medium text-[3vw] md:px-[0.6vw] md:py-[0.15vw] md:text-[0.6vw]">${tag}</span>
                                `,
        )
        .join("")}
                            </div>

                            <!-- Project links - cleaner -->
                            <div class="space-y-[3vw] md:space-y-[1vh]">
                                ${
        project.github !== "#"
            ? `
                                    <a href="${project.github}" target="_blank" 
                                       class="flex items-center gap-[2vw] px-[3vw] py-[1.5vw] bg-accentGold-500 text-black rounded-lg text-[3vw] font-medium transition-all duration-300 ease-in-out hover:bg-accentGold-600 md:gap-[0.4vw] md:px-[1vw] md:py-[0.6vw] md:text-[0.7vw] md:rounded-[0.4vw]">
                                        <svg class="w-[3.5vw] h-[3.5vw] md:w-[0.8vw] md:h-[0.8vw]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.932 0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404 11.52 11.52 0 0 1 3.003.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.912 1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z"/>
                                        </svg>
                                        View on GitHub
                                    </a>
                                `
            : ""
    }
                                
                                ${
        project.live !== "#"
            ? `
                                    <a href="${project.live}" target="_blank" 
                                       class="flex items-center gap-[2vw] px-[3vw] py-[1.5vw] bg-gray-800 text-white rounded-lg text-[3vw] font-medium transition-all duration-300 ease-in-out hover:bg-gray-700 md:gap-[0.4vw] md:px-[1vw] md:py-[0.6vw] md:text-[0.7vw] md:rounded-[0.4vw]">
                                        <svg class="w-[3.5vw] h-[3.5vw] md:w-[0.8vw] md:h-[0.8vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                        </svg>
                                        View Live Site
                                    </a>
                                `
            : ""
    }
                            </div>
                        </div>
                    </div>

                    <!-- Back to homepage button - cleaner -->
                    <div class="text-center fade-in">
                        <button id="back-to-homepage-btn" 
                                class="inline-flex items-center justify-center gap-[2vw] px-[4vw] py-[2vw] bg-black text-accentGold-500 rounded-lg text-[3.5vw] font-medium transition-all duration-300 ease-in-out border border-accentGold-500 hover:bg-accentGold-500 hover:text-black md:gap-[0.4vw] md:px-[1.5vw] md:py-[0.8vw] md:rounded-[0.5vw] md:text-[0.8vw]">
                            <svg class="w-[3.5vw] h-[3.5vw] md:w-[0.8vw] md:h-[0.8vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 12l6-6M3 12l6 6"/>
                            </svg>
                            <span>Back to Homepage</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `

    // Set initial position based on direction
    if (direction === "right") {
        detailView.style.transform = "translateX(100vw)"
    } else {
        detailView.style.transform = "translateX(-100vw)"
    }

    // Slide in detail view
    setTimeout(() => {
        detailView.style.transform = "translateX(0)"
    }, 50)

    // Add event listeners for navigation buttons
    const nextProjectBtn = document.getElementById("next-project-btn")
    nextProjectBtn.addEventListener("click", () => {
        const currentIndex = projects.findIndex((p) => p.id === id)
        const nextIndex = (currentIndex + 1) % projects.length
        const nextProjectId = projects[nextIndex].id

        // NEXT: Slide current detail out to LEFT and show next project from RIGHT
        detailView.style.transform = "translateX(-100vw)"
        setTimeout(() => {
            showDetailFromDirection(nextProjectId, "right")
        }, 300)
    })

    const prevProjectBtn = document.getElementById("prev-project-btn")
    prevProjectBtn.addEventListener("click", () => {
        const currentIndex = projects.findIndex((p) => p.id === id)
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length
        const prevProjectId = projects[prevIndex].id

        // PREV: Slide current detail out to RIGHT and show previous project from LEFT
        detailView.style.transform = "translateX(100vw)"
        setTimeout(() => {
            showDetailFromDirection(prevProjectId, "left")
        }, 300)
    })

    // Add event listener to the back to homepage button
    const backToHomepageBtn = document.getElementById("back-to-homepage-btn")
    backToHomepageBtn.addEventListener("click", () => {
        closeDetail()
    })

    // Add fade-in animations
    setTimeout(() => {
        document.querySelectorAll("#project-detail .fade-in").forEach((el) => {
            el.classList.add("visible")
        })
    }, 700)

    history.pushState({ id }, "", `#project-${id}`)
}

// Updated closeDetail function with smooth reverse animation
function closeDetail() {
    const mainContent = document.querySelector("main")
    const navbar = document.querySelector("nav")

    // Show navbar again completely with fade in
    navbar.style.opacity = "1"
    navbar.style.pointerEvents = "auto"
    navbar.style.visibility = "visible"

    // Slide detail view out to the RIGHT
    detailView.style.transform = "translateX(100vw)"
    detailView.style.transition = "transform 0.6s ease-in-out"

    // Slide homepage back in from the LEFT
    setTimeout(() => {
        mainContent.style.transform = "translateX(0)"
        mainContent.style.transition = "transform 0.6s ease-in-out"

        setTimeout(() => {
            detailView.classList.add("hidden")
            detailView.classList.remove("block")
            document.body.classList.remove("overflow-hidden")

            // Reset transforms
            detailView.style.transform = ""
            detailView.style.transition = ""
            mainContent.style.transform = ""
            mainContent.style.transition = ""
        }, 600)
    }, 100)

    history.pushState({}, "", location.pathname)
}

function getProjectSpecificContent(project) {
    // Add specific content based on project type or ID
    const specificContent = {
        1: `
            <div class="space-y-[3vh] md:space-y-[1.5vh] mt-[4vw] md:mt-[2vh]">
                <h3 class="text-[4vw] font-bold text-accentGold-500 md:text-[1vw]">Key Features</h3>
                <ul class="space-y-[1.5vh] text-[3vw] text-gray-300 md:space-y-[0.8vh] md:text-[0.8vw]">
                    <li class="flex items-start gap-[1.5vw] md:gap-[0.3vw]">
                        <span class="text-accentGold-500 mt-[0.3vh]">•</span>
                        Anonymous job application system
                    </li>
                    <li class="flex items-start gap-[1.5vw] md:gap-[0.3vw]">
                        <span class="text-accentGold-500 mt-[0.3vh]">•</span>
                        Admin dashboard for vacancy management
                    </li>
                    <li class="flex items-start gap-[1.5vw] md:gap-[0.3vw]">
                        <span class="text-accentGold-500 mt-[0.3vh]">•</span>
                        User profile system with application tracking
                    </li>
                    <li class="flex items-start gap-[1.5vw] md:gap-[0.3vw]">
                        <span class="text-accentGold-500 mt-[0.3vh]">•</span>
                        Responsive design with Tailwind CSS
                    </li>
                </ul>
            </div>
        `,
        2: `
            <div class="space-y-[3vh] md:space-y-[1.5vh] mt-[4vw] md:mt-[2vh]">
                <h3 class="text-[4vw] font-bold text-accentGold-500 md:text-[1vw]">AI Features</h3>
                <ul class="space-y-[1.5vh] text-[3vw] text-gray-300 md:space-y-[0.8vh] md:text-[0.8vw]">
                    <li class="flex items-start gap-[1.5vw] md:gap-[0.3vw]">
                        <span class="text-accentGold-500 mt-[0.3vh]">•</span>
                        Advanced prompting techniques for location guessing
                    </li>
                    <li class="flex items-start gap-[1.5vw] md:gap-[0.3vw]">
                        <span class="text-accentGold-500 mt-[0.3vh]">•</span>
                        OpenAI API integration
                    </li>
                    <li class="flex items-start gap-[1.5vw] md:gap-[0.3vw]">
                        <span class="text-accentGold-500 mt-[0.3vh]">•</span>
                        Interactive chat interface
                    </li>
                    <li class="flex items-start gap-[1.5vw] md:gap-[0.3vw]">
                        <span class="text-accentGold-500 mt-[0.3vh]">•</span>
                        Real-time assistance for Geoguessr gameplay
                    </li>
                </ul>
            </div>
        `,
    }

    return (
        specificContent[project.id] ||
        `
        <div class="space-y-[3vh] md:space-y-[1.5vh] mt-[4vw] md:mt-[2vh]">
            <h3 class="text-[4vw] font-bold text-accentGold-500 md:text-[1vw]">Project Highlights</h3>
            <p class="text-[3vw] text-gray-300 md:text-[0.8vw]">
                This project showcases my skills in ${project.tags.slice(0, 3).join(", ")} and demonstrates my ability to create engaging, functional applications.
            </p>
        </div>
    `
    )
}

closeBtn.addEventListener("click", closeDetail)

// Update the popstate event listener
window.addEventListener("popstate", closeDetail)

// Make closeDetail globally available
window.closeDetail = closeDetail
