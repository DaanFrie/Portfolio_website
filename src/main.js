


// Animations: toggle on enter/exit
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sec = document.querySelector(link.getAttribute("href"));
            sec?.scrollIntoView({ behavior: "smooth" });
        });
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("visible", entry.isIntersecting);
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right").forEach((el) => {
        observer.observe(el);
    });
});


document.querySelector("#app").innerHTML = `
  <div class="min-h-screen bg-black bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1024px-World_map_-_low_resolution.svg.png')] bg-no-repeat bg-center bg-contain bg-blend-overlay text-gray-100 scroll-smooth">

    <!-- Simple Clean Navigation -->
    <nav class="w-full bg-black/75 backdrop-blur-sm  sticky top-0 z-50">
      <div class="w-[95vw] mx-auto px[2vw] py-[1.5vw]">
        <div class="flex justify-between items-center">
  <div class="text-[1.2vw] font-bold text-[#b4a978]">
    Daan Friederich
  </div>
  
  <div class="flex items-center gap-8">
    <div class="hidden md:flex items-center gap-[1.5vw]">
      <a href="#hero" class="text-white hover:text-[#b4a978] transition-colors text-[0.7vw] nav-link">Home</a>
      <a href="#about" class="text-white hover:text-[#b4a978] transition-colors text-[0.7vw] nav-link">About</a>
      <a href="#skills" class="text-white hover:text-[#b4a978] transition-colors text-[0.7vw] nav-link">Skills</a>
      <a href="#projects" class="text-white hover:text-[#b4a978] transition-colors text-[0.7vw] nav-link">Projects</a>
      <a href="#contact" class="text-white hover:text-[#b4a978] transition-colors text-[0.7vw] nav-link">Contact</a>
    </div>
    

  </div>
</div>
      </div>
    </nav>

      
<!-- Hero Section -->
<section id="hero" class="h-[calc(100vh-6vh)] flex items-center px-[5vw] bg-black fade-in">
  <div class="w-full max-w-[80vw] mx-auto text-center ">

    <!-- Titel (van 6vw naar 5vw) -->
    <h1 class="text-[4vw] font-bold mb-[3vh] text-[#b4a978] ">
      Web‑ and Game Developer
    </h1>

    <!-- Introductie tekst (van 1.4vw naar 1.2vw) -->
    <p class="text-[1.1vw] text-gray-300 mb-[4vh] max-w-[40vw] mx-auto leading-relaxed ">
      I build fast, responsive, and visually compelling web applications using modern technologies like Vite, Tailwind CSS, and Laravel. In my spare time, I create immersive experiences in Unreal Engine 5. I am currently looking for an internship.
    </p>

    <!-- Tags (van 1vw naar 0.9vw) -->
    <div class="flex justify-center items-center gap-[2vw] mb-[5vh] flex-wrap text-gray-400  text-[1vw]">
      <span>Unreal Engine 5 Wizard</span>
      <span>Frontend Design Genius</span>
      <span>Red Wine Connoisseur</span>
    </div>

    <!-- Buttons (van 1vw naar 0.9vw) -->
    <div class="flex justify-center gap-[2vw] mb-[5vh]  flex-wrap">
<button
  class="relative group overflow-hidden px-[4vw] py-[1.5vh] rounded-lg 
         bg-[#b4a978]
         text-black font-semibold text-[0.9vw] 
         transition-all duration-200 ease-in-out hover:bg-black border-2 border-[#b4a978]"
>
  <!-- Tekst verdwijnt bij hover -->
  <span class="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
    Download Resume
  </span>

  <!-- Download icon fade-in -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="absolute inset-0 m-auto w-[1.75vw] h-[1.75vw] text-[#b4a978]
           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
  >
    <path
      fill-rule="evenodd"
      d="M12 3a.75.75 0 01.75.75v9.19l2.72-2.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 111.06-1.06l2.72 2.72V3.75A.75.75 0 0112 3zm-6.75 13.5a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H5.25z"
      clip-rule="evenodd"
    />
  </svg>
</button>


<button
  class="relative group overflow-hidden px-[4vw] py-[1.5vh] rounded-lg
         bg-transparent border-2 border-[#b4a978]
         text-[#b4a978] font-semibold text-[0.9vw]
         transition-all duration-200 ease-in-out hover:bg-[#b4a978] hover:text-black"
>
  <!-- Text fades out on hover -->
  <span class="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
    View My Work
  </span>

  <!-- Eye icon fades in on hover -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    class="absolute inset-0 m-auto w-[1.9vw] h-[1.9vw] text-black
           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
  >
    <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
  </svg>
</button>


    </div>

    <!-- Social icons (van 1vw naar 0.9vw) -->
    <div class="flex justify-center gap-[2vw]  text-[0.9vw]">
      <!-- Social icons hier -->
    </div>

  </div>
</section>



<!-- About Section -->
<section id="about" class="py-[12vh] px-[5vw] bg-black text-gray-100 slide-in-left">
  <div class="max-w-[70vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[3vw] items-center">

    <!-- Foto + studie/locatie/email -->
    <div class="flex flex-col items-center md:items-start ">
<div class="relative w-[18vw] h-[18vw] mb-[3vh] rounded-2xl overflow-hidden group shadow-xl border-[#b4a978]">
  <img
    src="/images/me.jpg"
    alt="Daan Friederich"
    class="object-cover w-full h-full rounded-2xl transition duration-500 group-hover:scale-105 group-hover:blur-sm"
  />
  <div
    class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  >
    <!-- LinkedIn SVG icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#b4a978"
      class="w-[3.5vw] h-[3.5vw]"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.5c.721-1.107 2.118-1.5 3.5-1.5 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
    </svg>
  </div>
</div>



      <ul class="space-y-[2vh] text-gray-300 text-[0.8vw]">
        <li class="flex items-center">
          <svg class="w-[1vw] h-[1vw] mr-[0.7vw] text-[#b4a978]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 14l6.16-3.422A12.083 12.083 0 0118 13c0 2.21-3.582 4-8 4s-8-1.79-8-4a12.083 12.083 0 01-.16-2.422L12 14z"></path>
          </svg>
          Creative Media & Game Technologies, Hogeschool Rotterdam
        </li>
        <li class="flex items-center">
          <svg class="w-[1vw] h-[1vw] mr-[0.7vw] text-[#b4a978]" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-6.05a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          Berkel en Rodenrijs, The Netherlands
        </li>
        <li class="flex items-center">
          <svg class="w-[1vw] h-[1vw] mr-[0.7vw] text-[#b4a978]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
  Daanfrie@gmail.com
        </li>
      </ul>
    </div>

<!-- About Me Text -->
<div class="space-y-[3vh] leading-relaxed text-[1vw] md:text-[0.9vw]">
  <h2 class="font-bold text-[#b4a978] text-[2.5vw] md:text-[2.5vw]">
    About Me
  </h2>

  <p class="text-gray-200">
    Hi, I’m Daan Friederich, a Creative Media & Game Technologies student based in the Netherlands. I’m passionate about blending design and technology to create experiences that are both visually aesthetic and technically solid. Whether I’m working on a website or a game, I enjoy bringing ideas to life with precision and creativity.
  </p>

  <p class="text-gray-200">
    I specialize in front-end web development and love building clean, responsive interfaces using modern tools like Vite and Tailwind CSS. I also have experience with JavaScript, HTML, CSS, PHP, and Laravel. I’m focused on writing code that supports intuitive, user-friendly design and runs flawlessly.
  </p>

  <p class="text-gray-200">
    Outside of web development, I work with Unreal Engine 5 to create interactive projects that challenge both my technical and creative thinking. I take pride in delivering polished results and constantly look for ways to improve and grow as a developer.
  </p>
</div>


  </div>
</section>





<!-- Skills Section -->
<section id="skills" class="py-[10vh] px-[5vw] bg-black text-white">
  <div class="w-[75vw] mx-auto text-center">
    <h2 class="text-[2vw] font-bold mb-[6vh] text-[#b4a978]">Skills &amp; Technologies</h2>
    <div class="flex flex-wrap justify-between gap-[3vw] text-left">
      
      <!-- Frontend -->
      <div class="flex-1 min-w-[220px] max-w-[calc(25vw-1.5rem)] slide-in-left">
        <h3 class="font-bold mb-[1.5vw] text-[1.2vw] text-[#b4a978]">Frontend</h3>
        <p class="mb-[2vw] text-[0.9vw] leading-relaxed text-gray-400">
          Building responsive and interactive user interfaces
        </p>
        <div class="flex flex-wrap gap-[0.8vw]">
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">HTML5</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">CSS3</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">JavaScript</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Tailwind CSS</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Vite</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">React</span>
        </div>
      </div>

      <!-- Backend -->
      <div class="flex-1 min-w-[220px] max-w-[calc(25vw-1.5rem)] slide-in-left">
        <h3 class="font-bold mb-[1.5vw] text-[1.2vw] text-[#b4a978]">Backend</h3>
        <p class="mb-[2vw] text-[0.9vw] leading-relaxed text-gray-400">
          Server‑side development and API design
        </p>
        <div class="flex flex-wrap gap-[0.8vw]">
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">PHP</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Laravel</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">MySQL</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">SQLite</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">REST APIs</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Python</span>
        </div>
      </div>

      <!-- Game Dev -->
      <div class="flex-1 min-w-[220px] max-w-[calc(25vw-1.5rem)] slide-in-right">
        <h3 class="font-bold mb-[1.5vw] text-[1.2vw] text-[#b4a978]">Game Dev</h3>
        <p class="mb-[2vw] text-[0.9vw] leading-relaxed text-gray-400">
          Gameplay programming &amp; interactive environments
        </p>
        <div class="flex flex-wrap gap-[0.8vw]">
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Unreal Engine 5</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Blueprints</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">3D Modeling</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Level Design</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Animation</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Excalibur</span>
        </div>
      </div>

      <!-- Tools & Others -->
      <div class="flex-1 min-w-[220px] max-w-[calc(25vw-1.5rem)] slide-in-right">
        <h3 class="font-bold mb-[1.5vw] text-[1.2vw] text-[#b4a978]">Tools & Others</h3>
        <p class="mb-[2vw] text-[0.9vw] leading-relaxed text-gray-400">
          Development tools and methodologies
        </p>
        <div class="flex flex-wrap gap-[0.5vw]">
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Git</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Figma</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">VS Code</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">PHPStorm</span>
          <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.7vw]">Wireframing</span>
        </div>
      </div>

    </div>
  </div>
</section>






<!-- Projects Section -->
<section id="projects" class="py-[12vh] bg-black">
  <div class="w-[75vw] mx-auto">
    <h2 class="text-[3vw] font-bold text-[#b4a978] text-center mb-[6vh] fade-in">
      My Projects
    </h2>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-[4vw]">




      <!-- Project 1 -->
      <div class="project-card fade-in">
        <div class="relative overflow-hidden rounded-2xl mb-[1.2vw] group">
          <img
            src="/images/OpenHiring2portfolio.jpg"
            alt="Laravel Vacancy Website"
            class="  hover-blur-sm w-full h-auto transition-transform duration-500 group-hover:scale-110 filter  "
          />
         <div
  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100  transition duration-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    class="w-[2.1vw] h-[2.1vw] text-white
           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
  >
    <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
  </svg>
</div>
        </div>
        <div>
          <h3 class="text-[1.2vw] font-bold text-[#b4a978] mb-[0.8vw]">
            Laravel Vacancy Website
          </h3>
          <p class="text-gray-400 mb-[1vw] text-[0.75vw] leading-relaxed">

            Complete laravel platform for managing job vacancies anonymously including admin dashboard and user profiles.
          </p>
          <div class="flex flex-wrap gap-[0.5vw] mb-[1vw]">
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">React</span>
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">Node.js</span>
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">PostgreSQL</span>
          </div>
          
          
<div class="flex gap-[0.6vw]">
  <a
    href="#"
    class="relative group overflow-hidden flex items-center justify-center gap-[0.5vw]
           px-[0.7vw] py-[0.6vw] bg-gradient-to-r from-[#b4a978] to-[#a39666]
           text-black rounded-[0.7vw] text-[0.7vw] font-medium
           transition-all duration-300 ease-in-out
           hover:bg-black hover:from-black hover:to-black border-2 border-[#b4a978]"
  >
    <!-- GitHub icoon en tekst die verdwijnen bij hover -->
    <span class="flex items-center gap-[0.5vw] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
      <!-- GitHub icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[1vw] h-[1vw]"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 5.302 
          3.438 9.8 8.205 11.387.6.113.82-.26.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
          1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.932
          0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404
          11.52 11.52 0 0 1 3.003.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.912
          1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222
          0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12
          24 5.373 18.627 0 12 0z"
        />
      </svg>
      View on GitHub
    </span>

    <!-- Oog verschijnt op hover -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      class="absolute inset-0 m-auto w-[1.6vw] h-[1.6vw] text-[#b4a978]
             opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
    >
      <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
    </svg>
  </a>
</div>


        </div>
      </div>

      <!-- Project 2 -->
      <div class="project-card fade-in">
        <div class="relative overflow-hidden rounded-2xl mb-[1.2vw] group">
          <img
            src="images/ChatbotPortfolio1.png"
            alt="AI Chatbot"
            class="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110"
          />
        <div
  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    class="w-[2.1vw] h-[2.1vw] text-white
           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
  >
    <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
  </svg>
</div>
        </div>
        <div>
          <h3 class="text-[1.2vw] font-bold text-[#b4a978] mb-[0.8vw]">
            AI Chatbot
          </h3>
          <p class="text-gray-400 mb-[1vw] text-[0.75vw] leading-relaxed">
            An intelligent chat interface powered by OpenAI and Node.js for real‑time conversations.
          </p>
          <div class="flex flex-wrap gap-[0.5vw] mb-[1vw]">
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">Node.js</span>
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">Express</span>
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">OpenAI</span>
          </div>
<div class="flex gap-[0.6vw]">
  <a
    href="#"
    class="relative group overflow-hidden flex items-center justify-center gap-[0.5vw]
           px-[0.7vw] py-[0.6vw] bg-gradient-to-r from-[#b4a978] to-[#a39666]
           text-black rounded-[0.7vw] text-[0.7vw] font-medium
           transition-all duration-300 ease-in-out
           hover:bg-black hover:from-black hover:to-black border-2 border-[#b4a978]"
  >
    <!-- GitHub icoon en tekst die verdwijnen bij hover -->
    <span class="flex items-center gap-[0.5vw] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
      <!-- GitHub icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[1vw] h-[1vw]"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 5.302 
          3.438 9.8 8.205 11.387.6.113.82-.26.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
          1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.932
          0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404
          11.52 11.52 0 0 1 3.003.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.912
          1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222
          0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12
          24 5.373 18.627 0 12 0z"
        />
      </svg>
      View on GitHub
    </span>

    <!-- Oog verschijnt op hover -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      class="absolute inset-0 m-auto w-[1.6vw] h-[1.6vw] text-[#b4a978]
             opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
    >
      <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
    </svg>
  </a>
</div>

        </div>
      </div>

<!-- Project 3 -->
<div class="project-card fade-in">
  <div class="relative overflow-hidden rounded-2xl mb-[1.2vw] group">
    <img
      src="/images/ue5fpsparcourgamehome.png"
      alt="UE5 FPS Parcour Game"
      class="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110"
    />
<div
  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    class="w-[2.1vw] h-[2.1vw] text-white
           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
  >
    <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
  </svg>
</div>

  </div>

  <div>
    <h3 class="text-[1.2vw] font-bold text-[#b4a978] mb-[0.8vw]">
      UE5 FPS Parcour Game
    </h3>
    <p class="text-gray-400 mb-[1vw] text-[0.75vw] leading-relaxed">
      A first‑person speed‑running parcours built in Unreal Engine 5 showcasing advanced gameplay mechanics.
    </p>
    <div class="flex flex-wrap gap-[0.5vw] mb-[1vw]">
      <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">Unreal Engine 5</span>
      <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">Blueprints</span>
      <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">C++</span>
    </div>
    <div class="flex gap-[0.6vw]">
  <a
    href="#"
    class="relative group overflow-hidden flex items-center justify-center gap-[0.5vw]
           px-[0.7vw] py-[0.6vw] bg-gradient-to-r from-[#b4a978] to-[#a39666]
           text-black rounded-[0.7vw] text-[0.7vw] font-medium
           transition-all duration-300 ease-in-out
           hover:bg-black hover:from-black hover:to-black border-2 border-[#b4a978]"
  >
    <!-- GitHub icoon en tekst die verdwijnen bij hover -->
    <span class="flex items-center gap-[0.5vw] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
      <!-- GitHub icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[1vw] h-[1vw]"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 5.302 
          3.438 9.8 8.205 11.387.6.113.82-.26.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
          1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.932
          0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404
          11.52 11.52 0 0 1 3.003.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.912
          1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222
          0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12
          24 5.373 18.627 0 12 0z"
        />
      </svg>
      View on GitHub
    </span>

    <!-- Oog verschijnt op hover -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      class="absolute inset-0 m-auto w-[1.6vw] h-[1.6vw] text-[#b4a978]
             opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
    >
      <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
    </svg>
  </a>
</div>
  </div>
</div>


      <!-- Project 4 -->
      <div class="project-card fade-in">
        <div class="relative overflow-hidden rounded-2xl mb-[1.2vw] group">
          <img
            src="/images/nowaybackportfoliohome.png"
            alt="Financial Analytics Platform"
            class="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110"
          />
          <div
  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    class="w-[2.1vw] h-[2.1vw] text-white
           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
  >
    <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
  </svg>
</div>
        </div>
        <div>
          <h3 class="text-[1.2vw] font-bold text-[#b4a978] mb-[0.8vw]">
            Financial Analytics Platform
          </h3>
          <p class="text-gray-400 mb-[1vw] text-[0.75vw] leading-relaxed">
            A Vue.js & Python app for portfolio tracking, risk analysis, and live financial charts.
          </p>
          <div class="flex flex-wrap gap-[0.5vw] mb-[1vw]">
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">Vue.js</span>
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">Python</span>
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">FastAPI</span>
          </div>
         <div class="flex gap-[0.6vw]">
  <a
    href="#"
    class="relative group overflow-hidden flex items-center justify-center gap-[0.5vw]
           px-[0.7vw] py-[0.6vw] bg-gradient-to-r from-[#b4a978] to-[#a39666]
           text-black rounded-[0.7vw] text-[0.7vw] font-medium
           transition-all duration-300 ease-in-out
           hover:bg-black hover:from-black hover:to-black border-2 border-[#b4a978]"
  >
    <!-- GitHub icoon en tekst die verdwijnen bij hover -->
    <span class="flex items-center gap-[0.5vw] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
      <!-- GitHub icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[1vw] h-[1vw]"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 5.302 
          3.438 9.8 8.205 11.387.6.113.82-.26.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
          1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.932
          0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404
          11.52 11.52 0 0 1 3.003.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.912
          1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222
          0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12
          24 5.373 18.627 0 12 0z"
        />
      </svg>
      View on GitHub
    </span>

    <!-- Oog verschijnt op hover -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      class="absolute inset-0 m-auto w-[1.6vw] h-[1.6vw] text-[#b4a978]
             opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
    >
      <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
    </svg>
  </a>
</div>
        </div>
      </div>

      <!-- Project 5 -->
      <div class="project-card fade-in">
        <div class="relative overflow-hidden rounded-2xl mb-[1.2vw] group">
          <img
            src="/images/SouthParkWebsiteportfoliohome.png"
            alt="Social Media Platform"
            class="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110"
          />
          <div
  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    class="w-[2.1vw] h-[2.1vw] text-white
           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
  >
    <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
  </svg>
</div>
        </div>
        <div>
          <h3 class="text-[1.2vw] font-bold text-[#b4a978] mb-[0.8vw]">
            Social Media Platform
          </h3>
          <p class="text-gray-400 mb-[1vw] text-[0.75vw] leading-relaxed">
            A React Native & Firebase app featuring real‑time messaging, feeds, and user profiles.
          </p>
          <div class="flex flex-wrap gap-[0.5vw] mb-[1vw]">
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">React Native</span>
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">Firebase</span>
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">Socket.io</span>
          </div>
        <div class="flex gap-[0.6vw]">
  <a
    href="#"
    class="relative group overflow-hidden flex items-center justify-center gap-[0.5vw]
           px-[0.7vw] py-[0.6vw] bg-gradient-to-r from-[#b4a978] to-[#a39666]
           text-black rounded-[0.7vw] text-[0.7vw] font-medium
           transition-all duration-300 ease-in-out
           hover:bg-black hover:from-black hover:to-black border-2 border-[#b4a978]"
  >
    <!-- GitHub icoon en tekst die verdwijnen bij hover -->
    <span class="flex items-center gap-[0.5vw] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
      <!-- GitHub icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[1vw] h-[1vw]"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 5.302 
          3.438 9.8 8.205 11.387.6.113.82-.26.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
          1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.932
          0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404
          11.52 11.52 0 0 1 3.003.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.912
          1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222
          0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12
          24 5.373 18.627 0 12 0z"
        />
      </svg>
      View on GitHub
    </span>

    <!-- Oog verschijnt op hover -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      class="absolute inset-0 m-auto w-[1.6vw] h-[1.6vw] text-[#b4a978]
             opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
    >
      <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
    </svg>
  </a>
</div>
        </div>
      </div>

      <!-- Project 6 -->
      <div class="project-card fade-in">
        <div class="relative overflow-hidden rounded-2xl mb-[1.2vw] group">
          <img
            src="/images/geesecandriveportfoliohome.png"
            alt="AI Chatbot Platform"
            class="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110"
          />
         <div
  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    class="w-[2.1vw] h-[2.1vw] text-white
           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
  >
    <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
  </svg>
</div>
        </div>
        <div>
          <h3 class="text-[1.2vw] font-bold text-[#b4a978] mb-[0.8vw]">
            AI Chatbot Platform
          </h3>
          <p class="text-gray-400 mb-[1vw] text-[0.75vw] leading-relaxed">
            A Python & TensorFlow powered NLP interface, integrated with OpenAI models for smart responses.
          </p>
          <div class="flex flex-wrap gap-[0.5vw] mb-[1vw]">
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">Python</span>
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">TensorFlow</span>
            <span class="text-white border border-white rounded-full px-[0.8vw] py-[0.2vw] font-medium text-[0.75vw]">OpenAI</span>
          </div>
         <div class="flex gap-[0.6vw]">
  <a
    href="#"
    class="relative group overflow-hidden flex items-center justify-center gap-[0.5vw]
           px-[0.7vw] py-[0.6vw] bg-gradient-to-r from-[#b4a978] to-[#a39666]
           text-black rounded-[0.7vw] text-[0.7vw] font-medium
           transition-all duration-300 ease-in-out
           hover:bg-black hover:from-black hover:to-black border-2 border-[#b4a978]"
  >
    <!-- GitHub icoon en tekst die verdwijnen bij hover -->
    <span class="flex items-center gap-[0.5vw] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
      <!-- GitHub icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[1vw] h-[1vw]"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 5.302 
          3.438 9.8 8.205 11.387.6.113.82-.26.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
          1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.932
          0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404
          11.52 11.52 0 0 1 3.003.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.912
          1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222
          0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12
          24 5.373 18.627 0 12 0z"
        />
      </svg>
      View on GitHub
    </span>

    <!-- Oog verschijnt op hover -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      class="absolute inset-0 m-auto w-[1.6vw] h-[1.6vw] text-[#b4a978]
             opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
    >
      <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
    </svg>
  </a>
</div>
        </div>
      </div>

    </div>
  </div>
</section>



        
 <div class="text-center mt-[2vw]">
  <a
    href="#"
    class="relative group inline-flex items-center justify-center gap-[0.5vw]
           px-[1.2vw] py-[0.8vw] bg-gradient-to-r from-[#b4a978] to-[#a39666]
           text-black rounded-[0.8vw] text-[0.9vw] font-medium
           transition-all duration-300 ease-in-out
           hover:bg-black hover:from-black hover:to-black border-2 border-[#b4a978]"
  >
    <!-- GitHub icoon + tekst die verdwijnen bij hover -->
    <span class="flex items-center gap-[0.5vw] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[1.7vw] h-[1.7vw]"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 5.302 
          3.438 9.8 8.205 11.387.6.113.82-.26.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
          1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.932
          0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404
          11.52 11.52 0 0 1 3.003.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.912
          1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222
          0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573C20.565 21.795 24 17.298 24 12
          24 5.373 18.627 0 12 0z"
        />
      </svg>
      View all projects on my GitHub
    </span>

    <!-- Oog icoon: zichtbaar bij hover -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      class="absolute w-[2.5vw] h-[2.5vw] text-[#b4a978]
             opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
    >
      <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z"/>
    </svg>
  </a>
</div>


      </div>
<!-- Contact Section -->
<section id="contact" class="py-[15vh] px-[3.25vw] bg-black">
  <div class="w-[55vw]  mx-auto">
    <div class="text-center mb-[8vh] fade-in"> <!-- mb van 6.5vh naar 8vh -->
      <h2 class="text-[2.6vw] font-bold text-[#b4a978] mb-[2.1vh] leading-tight">Contact me</h2> <!-- mb van 1.7vh naar 2.1vh -->
      <p class="text-[1vw] text-gray-300 max-w-[39vw] mx-auto mb-[5.5vh] leading-snug"> <!-- mb van 4.5vh naar 5.5vh -->
        You can reach me here:
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-[3.25vw] text-center slide-in-left"> <!-- gap van 2.6vw naar 3.25vw -->
      <!-- Email -->
      <div>
        <div class="w-[3.5vw] h-[3.5vw] mx-auto mb-[1.5vh] bg-gradient-to-r from-[#b4a978] to-[#a39666] rounded-[0.7vw] flex items-center justify-center"> <!-- mb van 1.2vh naar 1.5vh -->
          <svg class="w-[1.9vw] h-[1.9vw] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <h3 class="text-[0.9vw] font-semibold text-white mb-[0.9vh]">Email</h3> <!-- mb van 0.7vh naar 0.9vh -->
        <p class="text-[0.8vw] text-gray-400">daan.developer@email.com</p>
      </div>

      <!-- LinkedIn -->
      <div>
        <div class="w-[3.5vw] h-[3.5vw] mx-auto mb-[1.5vh] bg-gradient-to-r from-[#b4a978] to-[#a39666] rounded-[0.7vw] flex items-center justify-center">
          <svg class="w-[2vw] h-[2vw] text-black" fill="currentColor" viewBox="-3 0 25 25"
">
            <path
              d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24H.5V8zM7.5 8h3.78v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.09V24H16.3v-8.2c0-1.96-.04-4.48-2.73-4.48-2.73 0-3.15 2.13-3.15 4.34V24H7.5V8z"/>
          </svg>
        </div>
        <h3 class="text-[0.9vw] font-semibold text-white mb-[0.9vh]">LinkedIn</h3>
        <p class="text-[0.8vw] text-gray-400">
          <a href="https://linkedin.com/in/daan-developer" target="_blank" class="hover:text-[#b4a978] transition">
            linkedin.com/in/daan-developer
          </a>
        </p>
      </div>

      <!-- Location -->
      <div>
        <div class="w-[3.5vw] h-[3.5vw] mx-auto mb-[1.5vh] bg-gradient-to-r from-[#b4a978] to-[#a39666] rounded-[0.7vw] flex items-center justify-center">
          <svg class="w-[2vw] h-[2vw] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </div>
        <h3 class="text-[0.9vw] font-semibold text-white mb-[0.9vh]">Location</h3>
        <p class="text-[0.8vw] text-gray-400">Amsterdam, Nederland</p>
      </div>
    </div>
  </div>
</section>




    <!-- Footer -->
    <footer class="py-8 px-8 border-t border-gray-800 bg-black">
      <div class="w-3/4 mx-auto text-center text-gray-400">
        <p>&copy; 2025 Daan's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </div>
`

// Super Simple JavaScript - No Complex Animations
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault()
            const targetId = this.getAttribute("href")
            const targetSection = document.querySelector(targetId)
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" })
            }
        })
    })

    // Very Simple Scroll Animation - Only Fade In Once
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible")
                }
            })
        },
        {
            threshold: 0.1,
        },
    )

    // Only observe fade-in and slide elements
    document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right").forEach((el) => {
        observer.observe(el)
    })

    console.log(`
    ⚫✨ Portfolio Loaded Successfully! ⚫✨
    
    🖤 Simple & Working:
    • Pure black backgrounds
    • Simple fade-in animations (once only)
    • No complex stagger effects
    • No bidirectional animations
    • Clean and stable
    
    📧 Contact: daan.developer@email.com
  `)
})
