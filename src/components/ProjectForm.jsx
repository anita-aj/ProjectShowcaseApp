import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("HTML");

  function handleSubmit(event) {
    event.preventDefault(); // stops the page from reloading

    if (title === "" || description === "") {
      return; // do nothing if a field is empty
    }

    onAddProject(title, description, category);
    setTitle("");
    setDescription("");
  }

  return (
    <section className="rounded-lg border bg-white p-4">
      <h2 className="mb-3 text-lg font-semibold">Add Project</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded border p-2"
          >
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>React</option>
          </select>
        </div>

        <button className="rounded bg-indigo-600 px-5 py-2 text-white">Add</button>
      </form>
    </section>
  );
}

export default ProjectForm;