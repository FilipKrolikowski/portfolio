import "../scss/SingleProject.scss";
import GithubIcon from "../images/githubIcon";
import WwwIcon from "../images/wwwIcon";

function SingleProject({ project }) {
  return (
    <div className="single-project col-12 animated-element col-lg-6 px-md-5 px-1 my-5 d-flex flex-column align-items-center">
      <div className="project-image-container">
        <img src={project.image} alt="" className="project-image" />
        <div className="image-overlay"></div>
      </div>
      <div>
        <div className="project-title text-center my-3">{project.name}</div>
        <div className="project-desc text-center my-3">{project.desc}</div>
        <div className="d-flex justify-content-center mt-4">
          <a href={project.live} target="_blank" className="text-decoration-none">
            <button type="button" className="project-btn mx-3 d-flex align-items-center">
              <WwwIcon className="btn-icon me-3" />
              Live
            </button>
          </a>
          {project.code && (
            <a href={project.code} target="_blank" className="text-decoration-none">
              <button type="button" className="project-btn mx-3 d-flex align-items-center">
                <GithubIcon className="btn-icon me-3" />
                Code
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
