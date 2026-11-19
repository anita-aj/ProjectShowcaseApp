# Project portfolio Showcase Platform

A modern, responsive single page application built with React for a creative agency. It displays the agency's past projects and lets the team update the portfolio as new work is completed.

## Features

- Landing page with a list of projects
- Form to add a new project (title, description and category)
- Search box that filters projects by title
- Category navigation (All, HTML, CSS, JavaScript, React)
- Like and unlike each project
- Delete a project
- Responsive layout that works on phones and desktops

## Setup

1. Install [Node.js]
2. Run `npm install`
3. Run `npm run dev` and open the link shown in the terminal

## Usage

- **Add a project:** fill in the title and description, choose a category, then click **Add**. The new project appears at the top of the list.
- **Filter by category:** click a category button above the search box. Click **All** to see everything.
- **Search:** type in the search box to filter projects by title.
- **Like or unlike:** click the **Like** button on a project. Click **Unlike** to undo it.
- **Delete:** click **Delete** on a project to remove it.

## Changing the sample projects

The projects shown when the app first loads are sample data stored in `src/data/initialProjects.js`. Replace them with the agency's own projects by editing that file.

## Run the tests

```
npm test
```

Tests use Jest and React Testing Library.

## Project structure

```
portfolio-showcase/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx                 
    ├── components/
    │   ├── Header.jsx
    │   ├── ProjectForm.jsx
    │   ├── CategoryNav.jsx
    │   ├── SearchBar.jsx
    │   ├── ProjectList.jsx
    │   └── ProjectCard.jsx
    ├── data/
    │   └── initialProjects.js  sample projects
    └── tests/
        └── App.test.jsx
```
