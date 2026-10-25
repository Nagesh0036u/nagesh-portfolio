const projectData = {
  voice: {
    type: "AI / AUTOMATION",
    title: "Offline Voice Command Deck",
    description: "An offline voice-controlled desktop assistant for PC automation using speech recognition.",
    tech: ["Python", "Streamlit", "Faster Whisper", "Speech Recognition", "Windows Automation"]
  },
  resume: {
    type: "NLP / CAREER AI",
    title: "AI Resume Screening & Job Match Analyzer",
    description: "An AI-based ATS resume analyzer that compares resumes with job descriptions using NLP and similarity scoring.",
    tech: ["Python", "Streamlit", "Scikit-learn", "NLP", "Pandas", "Plotly", "Cosine Similarity", "PyPDF2"]
  },
  heart: {
    type: "MACHINE LEARNING",
    title: "Heart Health Analyzer",
    description: "An ML application to predict heart disease risk from health parameters.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Random Forest", "Pickle", "UCI Heart Disease"]
  },
  hearing: {
    type: "REAL-TIME AI",
    title: "Smart Hearing Protector",
    description: "A real-time system that detects unsafe noise levels and alerts users.",
    tech: ["Python", "Flask", "JavaScript", "HTML5", "CSS3", "Pycaw", "Multithreading", "GitHub"]
  },
  drowsy: {
    type: "COMPUTER VISION",
    title: "Sleepy Driver Alarm",
    description: "A real-time driver drowsiness detection system using computer vision.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "Computer Vision", "Real-Time Video Processing"]
  }
};

const nav = document.querySelector(".nav-links");
document.querySelector(".menu-toggle").addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");
filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
    const wanted = filter.dataset.filter;
    cards.forEach(card => {
      const show = wanted === "all" || card.dataset.category.includes(wanted);
      card.style.display = show ? "flex" : "none";
    });
  });
});

const modal = document.querySelector(".modal");
const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
};
document.querySelectorAll(".project-open").forEach(button => {
  button.addEventListener("click", () => {
    const data = projectData[button.closest(".project-card").dataset.project];
    document.querySelector("#modal-type").textContent = data.type;
    document.querySelector("#modal-title").textContent = data.title;
    document.querySelector("#modal-description").textContent = data.description;
    document.querySelector("#modal-tech").innerHTML = data.tech.map(t => `<span>${t}</span>`).join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});
document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
