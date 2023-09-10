document.querySelector(".polish-button").addEventListener("click", function () {
    document.querySelector(".lang").textContent = "Język:";
    document.querySelector(".polish-button").textContent = "Polski";
    document.querySelector(".english-button").textContent = "Angielski";
    document.querySelector(".job-title").textContent =
        "Początkujący Front-End Developer";
    document.querySelector(".desc").textContent = `
    Jestem początkującym programistą front-end specjalizującym się w HTML, CSS oraz JavaScript. Chętnie zdobywam nową wiedzę i doświadczenie.`;
    document.querySelector(".projects-header").textContent = "Projekty:";
    document.querySelector(".education-header").textContent = "Edukacja:";
    document.querySelector(".job-date").textContent =
        "Wrzesień 2018 - Kwiecień 2022";
    document.querySelector(".contact-header").textContent = "Kontakt:";
    document.querySelector(".tech-header").textContent =
        "Umiejętności Techniczne:";
    document.querySelector(".skills-header").textContent =
        "Umiejętności Miękkie:";
    document.querySelector(".soft-skill1").textContent = "Szybko się uczę";
    document.querySelector(".soft-skill2").textContent =
        "Chętnie zdobywam doświadczenie";
    document.querySelector(".soft-skill3").textContent = "Komunikatywny";
    document.querySelector(".soft-skill4").textContent =
        "Chętnie współpracuję z innymi";
    document.querySelector(".lang-header").textContent = "Języki";
    document.querySelector(".english-lang").textContent = "Angielski:";
    document.querySelector(".polish-lang").textContent = "Polski:";
    document.querySelector(".pl-lvl").textContent = "C2 (ojczysty)";
    document.querySelector(".cv").textContent = "CV w wersji internetowej:";
    document.querySelector(".location").textContent =
        "Puławy, Lubelskie, Polska";
    document.querySelector(".polish-button").classList.add("clicked");
    document.querySelector(".english-button").classList.remove("clicked");
    document.querySelector(".jquery").textContent =
        "jQuery (podstawy)";
});
document
    .querySelector(".english-button")
    .addEventListener("click", function () {
        document.querySelector(".lang").textContent = "Language:";
        document.querySelector(".polish-button").textContent = "Polish";
        document.querySelector(".english-button").textContent = "English";
        document.querySelector(".job-title").textContent =
            "Beginner Front-End Developer";
        document.querySelector(".desc").textContent = `
        I am a beginner front-end programmer specializing in HTML, CSS, and JavaScript. I am eager to gain new knowledge and experience.`;
        document.querySelector(".projects-header").textContent = "Projects:";
        document.querySelector(".education-header").textContent = "Education:";
        document.querySelector(".job-date").textContent =
            "September 2018 - April 2022";
        document.querySelector(".contact-header").textContent = "Contact:";
        document.querySelector(".tech-header").textContent = "Tech Skills:";
        document.querySelector(".skills-header").textContent = "Soft Skills:";
        document.querySelector(".soft-skill1").textContent = "Fast Learner";
        document.querySelector(".soft-skill2").textContent =
            "Desire to gain experience";
        document.querySelector(".soft-skill3").textContent =
            "Communications skills";
        document.querySelector(".soft-skill4").textContent = "Teamwork";
        document.querySelector(".lang-header").textContent = "Languages:";
        document.querySelector(".english-lang").textContent = "English:";
        document.querySelector(".polish-lang").textContent = "Polish:";
        document.querySelector(".pl-lvl").textContent = "C2 (native)";
        document.querySelector(".cv").textContent = "CV in web version:";
        document.querySelector(".location").textContent =
            "Puławy, Lubelskie, Poland";
        document.querySelector(".polish-button").classList.remove("clicked");
        document.querySelector(".english-button").classList.add("clicked");
        document.querySelector(".jquery").textContent =
        "jQuery (basics)";
    });
