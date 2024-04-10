import { useState } from "react";
import "./App.css";
import "./styles/navbar.css";
import "./styles/sidebar.css";
import "./styles/display.css";
import photo from "./assets/images/photo.jpg";

function App() {
  const [showForm, setShowForm] = useState(true);

  const [title, setTitle] = useState("Frontend Developer");
  const [name, setName] = useState("Kwagala Trevor");
  const [email, setEmail] = useState("kwagalatrevorbaz@gmail.com");
  const [phone, setPhone] = useState("+265782009476");
  const [bio, setBio] = useState(
    "As a frontend developer, I specialize in crafting engaging user experiences through the implementation of cutting-edge technologies and intuitive design principles. With expertise in HTML, CSS, and JavaScript frameworks such as React and Vue.js, I am adept at translating creative concepts into functional, responsive interfaces. I possess a keen eye for detail, ensuring pixel-perfect rendering across various browsers and devices. Additionally, I am committed to staying updated on industry trends and best practices to deliver dynamic and user-centric web solutions."
  );
  const [position1, setProsition1] = useState(
    "Senior Product Architect, Bixxxy Corp"
  );
  const [year, setYear] = useState("2020");
  const [position2, setProsition2] = useState(
    "Software Engineer, WonderTech INC."
  );
  const [year2, setYear2] = useState("2019");
  const [qualification1, setQualification1] = useState(
    "Bachelor's Degree in Computer Science"
  );
  const [qualification2, setQualification2] = useState(
    "The Odin Web Development Course"
  );

  const [html, setHTML] = useState(true);
  const [css, setCSS] = useState(true);
  const [javascript, setJavaScript] = useState(true);
  const [react, setReact] = useState(true);
  const [typescript, setTypeScript] = useState(true);
  const [node, setNode] = useState(true);
  const [mongo, setMongo] = useState(true);
  const [java, setJava] = useState(true);
  const [python, setPython] = useState(true);
  const [flutter, setFlutter] = useState(true);

  // const data = {
  //   title: "Front-end Developer",
  //   name: "Baz Trevor",
  //   email: "baztrevor@gmail.com",
  //   phone: "0782009475",
  //   bio: "As a frontend developer, I specialize in crafting engaging user experiences through the implementation of cutting-edge technologies and intuitive design principles. With expertise in HTML, CSS, and JavaScript frameworks such as React and Vue.js, I am adept at translating creative concepts into functional, responsive interfaces. I possess a keen eye for detail, ensuring pixel-perfect rendering across various browsers and devices. Additionally, I am committed to staying updated on industry trends and best practices to deliver dynamic and user-centric web solutions.",
  //   position1: "Senior Product Architect, Bixxxy Corp",
  //   year: "2020",
  //   position2: "Software Engineer, WonderTech INC.",
  //   year2: "2019",
  //   qualification1: "Bachelor's Degree in Computer Science",
  //   qualification2: "The Odin Web Development Course",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "JAVASCRIPT",
  //     "REACT",
  //     "TYPESCRIPT",
  //     "NODE JS",
  //     "MONGO DB",
  //     "JAVA",
  //     "PYTHON",
  //     "FLUTTER",
  //     "TENSOR FLOW",
  //     "RUST",
  //     "SWIFT",
  //     "RUBY",
  //     "EXPRESS JS",
  //   ],
  // };

  const [showfullBio, setFullBio] = useState(false);

  var bioData = bio;

  if (!showfullBio) {
    if (bio.length > 300) bioData = bioData.substring(0, 300) + "...";
  }

  var skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "TYPESCRIPT",
    "NODE JS",
    "MONGO DB",
    "JAVA",
    "PYTHON",
    "FLUTTER",
    "TENSOR FLOW",
    "RUST",
    "SWIFT",
    "RUBY",
    "EXPRESS JS",
  ];

  return (
    <>
      <div className={showForm ? "app" : "body"}>
        <nav>
          <div className="left">
            <div className="logo"></div>
            <div className="name">cv app</div>
          </div>
          <div className="right">
            <ul>
              <li>print cv</li>
              <li onClick={() => setShowForm((prevState) => !prevState)}>
                {showForm ? "hide form" : "show form"}
              </li>
            </ul>
          </div>
        </nav>
        <div className="contents">
          {showForm && (
            <aside>
              <form action="">
                <div className="job">
                  <label htmlFor="job">Job Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="name">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="phone">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="bio">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    name=""
                    cols="20"
                    rows="10"
                  ></textarea>
                </div>
                <div className="positions">Last three positions held</div>
                <div className="pos1">
                  <label htmlFor="pos1">Position 1</label>
                  <input
                    type="text"
                    value={position1}
                    onChange={(e) => setProsition1(e.target.value)}
                  />
                  <label htmlFor="from">Year</label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div className="pos2">
                  <label htmlFor="pos2">Position 2</label>
                  <input
                    type="text"
                    value={position2}
                    onChange={(e) => setProsition2(e.target.value)}
                  />
                  <label htmlFor="from">Year</label>
                  <input
                    type="text"
                    value={year2}
                    onChange={(e) => setYear2(e.target.value)}
                  />
                </div>
                <div className="education">Education/Qualification</div>
                <div className="edu1">
                  <label htmlFor="edu1">Qualification 1</label>
                  <input
                    type="text"
                    value={qualification1}
                    onChange={(e) => setQualification1(e.target.value)}
                  />
                </div>
                <div className="edu2">
                  <label htmlFor="edu2">Qualification 2</label>
                  <input
                    type="text"
                    value={qualification2}
                    onChange={(e) => setQualification2(e.target.value)}
                  />
                </div>
                <div className="skills">Skills</div>
                <div className="skillset skillset1">
                  <div>
                    <input
                      type="checkbox"
                      value={html}
                      onChange={() => handleChange("html")}
                    />
                    <label htmlFor="html">HTML</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={css}
                      onChange={() => handleChange("css")}
                    />
                    <label htmlFor="css">CSS</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={javascript}
                      onChange={() => handleChange("javascript")}
                    />
                    <label htmlFor="javascript">JAVASCRIPT</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={react}
                      onChange={() => handleChange("react")}
                    />
                    <label htmlFor="react">REACT</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={typescript}
                      onChange={() => handleChange("typescript")}
                    />
                    <label htmlFor="typescript">TYPESCRIPT</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={node}
                      onChange={() => handleChange("node")}
                    />
                    <label htmlFor="node">NODE JS</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={mongo}
                      onChange={() => handleChange("mongo")}
                    />
                    <label htmlFor="mongo">MONGO DB</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={java}
                      onChange={() => handleChange("java")}
                    />
                    <label htmlFor="java">JAVA</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={python}
                      onChange={() => handleChange("python")}
                    />
                    <label htmlFor="python">PYTHON</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={flutter}
                      onChange={() => handleChange("flutter")}
                    />
                    <label htmlFor="flutter">FLUTTER</label>
                  </div>
                </div>
                <button type="submit" className="submit">
                  Submit Form
                </button>
                <button type="reset" className="submit">
                  Reset
                </button>
              </form>
            </aside>
          )}
          <section>
            <div className="photo">
              <img src={photo} alt="" />
            </div>
            <div className="heading">
              <h1>{name}</h1>
              <h5>{title}</h5>
            </div>
            <p>
              {bioData}{" "}
              <button
                className="show"
                onClick={() => setFullBio((prevState) => !prevState)}
              >
                {showfullBio ? "Less" : "More"}
              </button>
            </p>

            <a href={`mailto: ${email}`} className="email">
              {email}
            </a>
            <a href={`tel: ${phone}`} className="phone">
              {phone}
            </a>
            <div className="positions-held">
              <h2>Positions And Roles</h2>
              <div>
                {position1} <div className="date">{year} - present</div>
              </div>
              <div>
                {position2}{" "}
                <div className="date">
                  {year2} - {year}
                </div>
              </div>
            </div>
            <div className="education-display">
              <h2>Education</h2>
              <div>
                {qualification1} <div className="date">2020</div>
              </div>
              <div>
                {qualification2} <div className="date">2020</div>
              </div>
            </div>
            <div className="skills-display">
              <h3>Skills</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="disclaimer">Requires a desktop for now</div>
    </>
  );
}

export default App;
