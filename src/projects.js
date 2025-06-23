// src/projects.js
export const projects = [
    {
        id: 1,
        title: "UE5 FPS Parkour Game",
        image: "images/ue5fpsparcourgamehome.png",
        videoSrc: "videos/ue5fpsparkourgame/ue5fpsparkourgamegameplay.mp4" ,
        videoPoster: "videos/ue5fpsparkourgame/ue5fpsparkourgameposter.png",
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
            "images/showcase/FPSparkour/ue5fpsparkourgameshowcasevid.gif",
            "images/showcase/FPSparkour/fpsparkourgame1.png",
            "images/showcase/FPSparkour/fpsparkourgame2.png",
            "images/showcase/FPSparkour/fpsparkourgame3.png",
            "images/showcase/FPSparkour/fpsparkourgame4.png",
            "images/showcase/FPSparkour/fpsparkourgame5.png",


        ]
    },

    {
        id: 2,
        title: "AI Geoguessr Assistant",
        image: "images/ChatbotPortfolio1.png",
        description: `
An LLM Geoguessr assistant that helps you guess the location in the game Geoguessr by providing hints and information about the location. It uses the OpenAI API to generate responses based on the user's input. I used promt engineering to create a chatbot that can understand the context of the game and provide relevant information. The chatbot is designed to be user-friendly and easy to use, with a simple interface that allows users to interact with it easily.
    `,
        technicalDescription: `
I used embeddings and system prompts to create a chatbot awsners the user accordingly. It only awsners questions about geoguesser and helps the player identify the courty they are in. I used React and CSS for the frontend of the website, and Vite for the build tool.
    `,
        tags: ["JavaScript", "Vite", "OpenAI API"],
        github: "https://github.com/DaanFrie/LLM-project-Geoguessr-Chatbot",
        live: "#",
        showcaseImages: [
            "images/showcase/geoguessrchatbot/geoguessrchatbot1.png",

        ]
    },
    {
        id: 3,
        title: "Laravel Vacancy Website",
        image: "images/OpenHiring2portfolio.jpg",
        videoSrc: "videos/project4video.mp4",
        videoPoster: "images/project4poster.jpg",
        description: `

              A full-stack web application for an anonymous hiring agency, made with laravel. It features a dashboard for companies to manage job vacancies, a dashboard for users to apply for jobs, and a dashboard for admins to manage the entire platform. 
              <br>  <br>
              This was a group project where I was mostly responsible for the front end of the application. The company already had a design in mind, which I implemented using Tailwind CSS.
        
        
    `,
        technicalDescription: `
      Built with Laravel 9, using Eloquent ORM for MySQL database interactions. 
        Frontend developed with Tailwind CSS for responsive design and Figma for UI/UX. The application is both for desktop and mobile. 
        
        <br>  <br>
        
        The applcation is fully secured according to the OWASP top 10 vulnerabilities.
    `,
        tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Figma", "Git"],
        github: "https://github.com/GinusHR/TLE-Agency-Team6",
        live: "#",
        showcaseImages: [

            "images/showcase/openhiring/openhiringmobile1.png",
            "images/showcase/openhiring/openhiringmobile2.png",

        ]
    },
    {
        id: 4,
        title: "UE5 Sustainability Demo",
        image: "images/nowaybackportfoliohome.png",
        videoSrc: "videos/ue5sustainability/ue5sustainabilitydemovideocomp.mp4",
        videoPoster: "videos/ue5sustainability/ue5sustainabilityposter.png",
        description: `
        A demo for a game in unreal engine 5 for an post-apocalyptic extraction shooter game, with the goal to both entertain an raise awareness among players about the importance of sustainability and the impact of climate change. by showing the player a world that has been ravaged by climate change, it makes the player subconsciously aware of the impact of climate change and the importance of sustainability and taking care of our planet. 
        <br>  <br>
        The world will be filled with trash, dead trees, foggy skies, black smoke from factories, and other environmental hazards like polluted lakes and rivers. The player is part of a climate activist group that is trying to save the world from becoming inhabitable. You have the objective to clean up the world by picking up trash, cleaning up polluted lakes and rivers and extract enough your trash before the time is up. While you explore and clean up the polluted world you will face mutated and hungy animals hunting you.
        <br>  <br>
        Players will also have to raid factories to stop them from polluting the environment. these facories will be guarded by turrets and robots that will make the player think about how to approach the situation. The player will have to use stealth and strategy while being under pressure of time to take out the guards and disable the factory's pollution output.
        <br>  <br>
        The game is mostly focussed on being entertaining and fun to play, while also raising awareness about the importance of sustainability and the impact of climate change. The game will be a mix of action, stealth, and exploration with a focus on environmental storytelling and keeping the player engaged and emotionally invested.
    `,
        technicalDescription: `
      Built in Unreal Engine 5 with Blueprints. The project is made by me and one of my team members, where we focussed on level and graphics design, setting the scene and atmosphere to create a good sense of what we would be able to create with more time. Since we only had 3 days to create this demo, i am proud of what we achieved in such a short time.
      <br>  <br>
      With the trash you collect in game you can recycle items at recycle stations across the maps like bullets etc. The materials used to craft will substract from the amount of trash you have and need to extract, so players have to think carefully if it is worth it to recycle or not.
        <br>  <br>
        Implementing multiplayer functionality would be a next step, making it more risky to explore and find trash because of the risk of being killed by other players.

    `,
        tags: ["Unreal Engine 5", "Blueprints", "Level Design", "Animation"],
        github: "#",
        live: "#",
        showcaseImages: [
            "images/showcase/ue5sustainability/ue5sustainability1.png",
            "images/showcase/ue5sustainability/ue5sustainability2.png",
            "images/showcase/ue5sustainability/ue5sustainability3.png",
            "images/showcase/ue5sustainability/ue5sustainability4.png",
            "images/showcase/ue5sustainability/ue5sustainability5.png",
            "images/showcase/ue5sustainability/ue5sustainability6.png",
            "images/showcase/ue5sustainability/ue5sustainability7.png",
            "images/showcase/ue5sustainability/ue5sustainability8.png",
            "images/showcase/ue5sustainability/ue5sustainability9.png",
            "images/showcase/ue5sustainability/ue5sustainability10.png",
            "images/showcase/ue5sustainability/ue5sustainability11.png",
            "images/showcase/ue5sustainability/ue5sustainability12.png",
        ]
    },
    {
        id: 5,
        title: "PHP-JS South Park Fan Site",
        image: "images/SouthParkWebsiteportfoliohome.png",
        videoSrc: "videos/project4video.mp4",
        videoPoster: "images/project4poster.jpg",
        description: `
A PHP, HTML, and JavaScript-based South Park magazine website where you can view South Park characters, and add and delete them from a list of favorites. This was my first time working with PHP , and I learned a lot about PHP programming and practiced with frontend development using CSS.
    `,
        technicalDescription: `
      The backend is developed in PHP and the Backend in JavaScript. The database is also managed by PHP. The Frontend is designed with HTML and CSS, with some JavaScript for interactivity. 
    `,
        tags: ["PHP", "JavaScript", "CSS", "HTML", "MySQL"],
        github: "https://github.com/DaanFrie/SouthParkMagazine",
        live: "#",
        showcaseImages: [
            "images/showcase/southpark/southpark1.png",
            "images/showcase/southpark/southpark2.png",
            "images/showcase/southpark/southpark3.png",
        ]
    },
    {
        id: 6,
        title: "Excalibur.js Racing Game",
        image: "images/showcase/geesecandrive/geesecandrivegif.gif",
        videoSrc: "videos/geesecandrive/geesecandrivevid.mp4",
        videoPoster: "images/project4poster.jpg",
        description: `
      A top-down racing game project built with Excalibur.js, where you have to race against a goose to the finish line. It has a timer and a high score, so you can grind for the best time possible.
    `,
        technicalDescription: `
Built using Excalibur.js as the core 2D game engine, with features like scenes, actors, and collision detection.
Game assets are efficiently managed using sprite sheets to improve loading performance.
The UI and HUD are integrated using standard DOM elements.
High scores are stored locally using the browser's LocalStorage API, allowing them to persist between sessions.
    `,
        tags: ["Excalibur.js", "JavaScript", "Game Design"],
        github: "https://github.com/DaanFrie/GEESECANDRIVE",
        live: "#",
        showcaseImages: [
            "images/showcase/geesecandrive/geesecandrive1.png",
            "images/showcase/geesecandrive/geesecandrive2.png",
            "images/showcase/geesecandrive/geesecandrive3.png",
        ]
    }
];
