// src/projects.js
export const projects = [
    {
        id: 1,
        title: "UE5 FPS Parkour Game",
        image: "images/ue5fpsparcourgamehome.png",
        description: `
      A first person sniper rifle parkour game developed in Unreal Engine 5. Players run, jump, snipe and use advanced gameplay mechanics like air-dashes and wall-runs to navigate through challenging levels. By sniping and killing an enemy you gain a dash, which you can use to make difficult jumps. the game will get progressively harder and will require you to snipe multiple enemies mid-air to complete the level.
       <br>  <br> 
       The game will feature a timer and leaderboard system to encourage speedrunners to compete for the best times. The game is focused on very challenging fast-paced gameplay that feels satisfying and rewarding. Part of the fun is having to grind for hours to make it through the later levels while being easy to pick up and play for beginners.

       
    `,
        technicalDescription: `
       I built this game in unreal engine 5 using blueprints. I also did de animating of de character en de level design. Working on this game i mainly focussed on the mechanics and gameplay, so i am sure i have a stable foundation to build on. i spent a lot of time perfecting the dash mechanic and the sniping mechanics to make them feel satisfying and rewarding. I also spent a lot of time designing levels to find out what is fun and what isn't, intentionally leaving out the graphics and visuals for now.
       <br>  <br> 
       The game is still in development and I will be focussing on de graphics and visuals of de game since I haven't worked on that yet. I will also be adding more levels and more advanced gameplay mechanics to give it more depth and replayability.
    `,
        tags: ["Unreal Engine 5", "Blueprints", "C++", "Level Design"],
        github: "#",
        live: "#",
        showcaseImages: [
            "images/showcase/FPSparkour/fpsparcourgame1.png",
            "images/showcase/FPSparkour/fpsparcourgame2.png",
            "images/showcase/FPSparkour/fpsparcourgame3.png",
        ]
    },

    {
        id: 2,
        title: "AI Geoguessr Assistant",
        image: "images/ChatbotPortfolio1.png",
        description: `
      An innovative chatbot built with a JavaScript LLM optimized for Geoguessr players. 
      It analyzes hints, provides location predictions, and continuously learns via the OpenAI API. 
      Ideal for both beginners and advanced users seeking to improve their scores with smart prompting techniques.
    `,
        technicalDescription: `
      A browser-based assistant written in vanilla JavaScript and bundled with Vite. 
      Uses the OpenAI Node client to send and receive prompts. 
      State management handled by simple observable patterns. 
      Geo-data parsing performed with custom regex, and caching implemented for faster repeated queries.
    `,
        tags: ["JavaScript", "Vite", "OpenAI API"],
        github: "https://github.com/DaanFrie/LLM-project-Geoguessr-Chatbot",
        live: "#",
        showcaseImages: [
            "images/showcase2-1.jpg",
            "images/showcase2-2.jpg",
            "images/showcase2-3.jpg"
        ]
    },
    {
        id: 3,
        title: "Laravel Vacancy Website",
        image: "images/OpenHiring2portfolio.jpg",
        description: `

              A full-stack web application for an anonymous hiring agency, made with laravel. It features a dashboard for companies to manage job vacancies, a dashboard for users to apply for jobs, and a dashboard for admins to manage the entire platform. This was a group project where I was mostly responsible for the front end of the application. The company already had a design in mind, which I implemented using Tailwind CSS.
        
        
    `,
        technicalDescription: `
      Built with Laravel 9, using Eloquent ORM for MySQL database interactions. 
        Frontend developed with Tailwind CSS for responsive design and Figma for UI/UX. The application is both for desktop and mobile.
    `,
        tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Figma", "Git"],
        github: "https://github.com/GinusHR/TLE-Agency-Team6",
        live: "#",
        showcaseImages: [
            "images/showcase1-1.jpg",
            "images/showcase1-2.jpg",
            "images/showcase1-3.jpg"
        ]
    },
    {
        id: 4,
        title: "UE5 Sustainability Demo",
        image: "images/nowaybackportfoliohome.png",
        description: `
      A demo in Unreal Engine 5 designed to raise sustainability awareness through interactive level design. 
      Visitors explore a virtual world where ecological challenges—such as water conservation 
      and reforestation—are conveyed visually and through gameplay. 
      Created with dynamic lighting effects and environment-driven animations.
    `,
        technicalDescription: `
      Built in Unreal Engine 5 with Blueprints for interactive triggers and environmental storytelling. 
      Implements a dynamic day-night cycle using Directional Light en Sky Atmosphere. 
      Procedural foliage placement achieved via de Foliage tool. 
      Animations en effects crafted in Niagara for realistic water droplets and flame simulations.
    `,
        tags: ["Unreal Engine 5", "Blueprints", "Level Design", "Animation"],
        github: "#",
        live: "#",
        showcaseImages: [
            "images/showcase4-1.jpg",
            "images/showcase4-2.jpg",
            "images/showcase4-3.jpg"
        ]
    },
    {
        id: 5,
        title: "PHP-JS South Park Fan Site",
        image: "images/SouthParkWebsiteportfoliohome.png",
        description: `
      A fan site where users can create, share, and rate their own South Park characters. 
      The backend is powered by raw PHP and MySQL, while the frontend uses JavaScript for 
      real-time interactivity. Features include profile management, character galleries, 
      and social sharing.
    `,
        technicalDescription: `
      Backend developed in vanilla PHP with PDO for secure MySQL connections. 
      Frontend interactivity implemented in vanilla JavaScript with drag-and-drop character creation. 
      AJAX requests handled via the Fetch API for real-time updates. 
      Responsive layout achieved with CSS Grid and Flexbox. 
      Server-side validation and CSRF protection ensure secure form submissions.
    `,
        tags: ["PHP", "JavaScript", "CSS", "HTML", "MySQL"],
        github: "https://github.com/DaanFrie/SouthParkMagazine",
        live: "#",
        showcaseImages: [
            "images/showcase5-1.jpg",
            "images/showcase5-2.jpg",
            "images/showcase5-3.jpg"
        ]
    },
    {
        id: 6,
        title: "Excalibur.js Racing Game",
        image: "images/geesecandriveportfoliohome.png",
        description: `
      A top-down racing game built with Excalibur.js, where players navigate fast circuits 
      and use sprint boosts to race against the clock or friends. Features simple yet engaging 
      physics, customizable vehicles, and challenging track design, perfect for casual competitive sessions.
    `,
        technicalDescription: `
      Built with Excalibur.js for 2D game engine functionality: scenes, actors, and collision detection. 
      Physics implemented through custom vector-based movement. 
      Asset loading optimized using sprite sheets. 
      UI en HUD integrated with DOM elements. 
      High score persistence handled via de LocalStorage API.
    `,
        tags: ["Excalibur.js", "JavaScript", "Game Design"],
        github: "https://github.com/DaanFrie/GEESECANDRIVE",
        live: "#",
        showcaseImages: [
            "images/showcase6-1.jpg",
            "images/showcase6-2.jpg",
            "images/showcase6-3.jpg"
        ]
    }
];
