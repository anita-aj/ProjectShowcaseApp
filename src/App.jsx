import { useState } from "react";
import { initialProjects } from "./data/initialProjects";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import CategoryNav from "./components/CategoryNav";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add a new project at the top of the list
  function addProject(title, description, category) {
        const newProject = { id: Date.now(), title, description, category, liked: false, likes: 0 };
    setProjects([newProject, ...projects]);
  }
  // Like or unlike a project and update the likes count 
  function toggleLike(id) {
    const updated = projects.map((project) => {
      if (project.id === id) {
        if (project.liked) {
          return { ...project, liked: false, likes: project.likes - 1 };
        }
        return { ...project, liked: true, likes: project.likes + 1 };
      }
      return project;
    });
    setProjects(updated);
  }

  // Keep every project except the one with this id
  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  // Only show projects that match the search and the selected category
  const visibleProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-2xl space-y-6 p-4">
        <ProjectForm onAddProject={addProject} />

        <section className="rounded-lg border bg-white">
          <CategoryNav
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <SearchBar search={search} onSearchChange={setSearch} />
          <ProjectList
            projects={visibleProjects}
            onToggleLike={toggleLike}
            onDelete={deleteProject}
          />
        </section>
      </main>
    </div>
  );
}

export default App;