document.addEventListener('DOMContentLoaded', function () {
  function clearSearch () {
    document.getElementById('search-input').value = ''
    filterProjects()
  }
  // List of projects initialized with the project names you provided
  const projects = [
    { name: 'Change Background', url: 'change-background/' },
    {
      name: 'Character and Word Counter',
      url: 'character-word-counter/'
    },
    { name: 'Expense Tracker', url: 'expense-tracker/' },
    { name: 'Menu List', url: 'menu-list/' },
    { name: 'Pomodoro Timer', url: 'pomodoro-timer/' },
    { name: 'Random Quote', url: 'random-quote/' },
    { name: 'Recipe', url: 'recipe/' },
    { name: 'Speech to Text', url: 'speech-to-text/' },
    { name: 'To-do Application', url: 'todo-application/' },
    { name: 'Weather App', url: 'weather-app/' },
    { name: 'Workout Log', url: 'workout-log/' },
    {name: 'Note Taking app', url: 'note-taking-app/'}
  ]

  const projectsContainer = document.getElementById('projects-container')

  // Function to display all projects
  function displayProjects (projects) {
    // Clear the container
    projectsContainer.innerHTML = ''

    // Add each project to the container
    projects.forEach(project => {
      const projectElement = document.createElement('div')
      projectElement.classList.add('project-tile')
      projectElement.innerHTML = `
                <div class="project-title">${project.name}</div>
                <a class="project-link" href="${project.url}" target="_blank">View Project</a>
            `
      projectsContainer.appendChild(projectElement)
    })
  }

  // Ensure your existing filterProjects function is updated to handle empty search gracefully
  function filterProjects () {
    const searchText = document
      .getElementById('search-input')
      .value.toLowerCase()
    const filteredProjects = projects.filter(project =>
      project.name.toLowerCase().includes(searchText)
    )
    displayProjects(filteredProjects)
  }

  // After defining filterProjects, attach the keyup event listener to the search input
  document
    .getElementById('search-input')
    .addEventListener('keyup', filterProjects)

  // Initially display all projects
  displayProjects(projects)
  document.getElementById('clear-search').addEventListener('click', clearSearch)
})
