import React from "react";

function NavBar() {
  
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 70;
      const topPosition = target.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="navbar fixed-top bg-light shadow-sm">
      <div className="container d-flex align-items-center justify-content-between py-2">
      
        <h1 className="m-0 fw-bold l-h1">Jadesola</h1>

        
        <nav className="d-flex align-items-center gap-4">
          <a
            href="#home"
            className="nav-link"
            onClick={(e) => handleScroll(e, "home")}
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => handleScroll(e, "about")}
          >
            About
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={(e) => handleScroll(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => handleScroll(e, "contact")}
          >
            Contact
          </a>

          <div
            className="profile-pic"
            style={{
              backgroundImage: "url('/images/jayde.jpeg')",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
