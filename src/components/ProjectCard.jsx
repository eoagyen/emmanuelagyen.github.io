import { FaArrowRight } from "react-icons/fa";

export default function ProjectCard({ title, description, tags, visual = "retina" }) {
  return <article className="project-card">
    <div className={`project-visual ${visual}`} />
    <div className="project-body">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <a className="text-link" href="#project">View Project <FaArrowRight /></a>
    </div>
  </article>;
}
