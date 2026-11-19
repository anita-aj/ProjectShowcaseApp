function ProjectCard({ project, onToggleLike, onDelete }) {
  return (
    <li className="flex items-center gap-4 p-3">
      <div className="h-14 w-14 rounded bg-indigo-100"></div>

      <div className="flex-1">
        <h3 className="font-medium">{project.title}</h3>
        <p className="text-sm text-slate-600">{project.description}</p>
        <span className="text-xs text-slate-500">{project.category}</span>
      </div>

      <button
        onClick={() => onToggleLike(project.id)}
        aria-label={project.liked ? "Unlike" : "Like"}
        className="flex items-center gap-1"
      >
        <span>{project.liked ? "\u2665" : "\u2661"}</span>
        <span>{project.likes}</span>
      </button>

      <button onClick={() => onDelete(project.id)} className="text-slate-500">
        Delete
      </button>
    </li>
  );
}

export default ProjectCard;