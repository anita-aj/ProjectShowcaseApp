import ProjectCard from "./ProjectCard";

function ProjectList({ projects, onToggleLike, onDelete }) {
  if (projects.length === 0) {
    return <p className="p-4 text-center text-slate-500">No projects found.</p>;
  }

  return (
    <ul className="divide-y">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onToggleLike={onToggleLike}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ProjectList;