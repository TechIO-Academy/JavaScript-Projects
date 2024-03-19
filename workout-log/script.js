// Function to add an exercise to the log
function addExercise() {
    const exerciseInput = document.getElementById('exercise');
    const setsInput = document.getElementById('sets');
    const repsInput = document.getElementById('reps');
    const exercise = exerciseInput.value;
    const sets = parseInt(setsInput.value);
    const reps = parseInt(repsInput.value);
  
    if (exercise && sets && reps) {
      const exerciseList = document.getElementById('exercise-list');
      const listItem = document.createElement('li');
  
      const exerciseText = document.createElement('span');
      exerciseText.textContent = `${exercise} - ${sets} sets of ${reps} reps`;
  
      // Add delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.className = 'delete-button';
      deleteButton.onclick = function() {
        exerciseList.removeChild(listItem);
        updateStatistics(-sets, -reps); // Update statistics by subtracting deleted exercise's sets and reps
        removeExerciseFromLocalStorage(exercise, sets, reps);
      };
  
      listItem.appendChild(exerciseText);
      listItem.appendChild(deleteButton);
      exerciseList.appendChild(listItem);
  
      // Update statistics
      updateStatistics(sets, reps);
  
      // Save exercise to local storage
      saveExercise(exercise, sets, reps);
  
      // Clear input fields
      exerciseInput.value = '';
      setsInput.value = '';
      repsInput.value = '';
    } else {
      alert('Please fill out all fields.');
    }
  }
  
  // Function to remove exercise from local storage
  function removeExerciseFromLocalStorage(exercise, sets, reps) {
    let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    exercises = exercises.filter(item => !(item.exercise === exercise && item.sets === sets && item.reps === reps));
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }
  
  // Function to update statistics
  function updateStatistics(sets, reps) {
    const totalSets = parseInt(document.getElementById('total-sets').textContent) + sets;
    const totalReps = parseInt(document.getElementById('total-reps').textContent) + reps;
    const numExercises = document.getElementById('exercise-list').children.length;
    const avgSets = totalSets / numExercises;
    const avgReps = totalReps / numExercises;
  
    document.getElementById('total-sets').textContent = totalSets;
    document.getElementById('total-reps').textContent = totalReps;
    document.getElementById('avg-sets').textContent = avgSets.toFixed(2);
    document.getElementById('avg-reps').textContent = avgReps.toFixed(2);
  }
  
  // Function to save exercise to local storage
  function saveExercise(exercise, sets, reps) {
    let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    exercises.push({ exercise, sets, reps });
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }
  
  // Function to load exercises from local storage
  function loadExercises() {
    const exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    const exerciseList = document.getElementById('exercise-list');
    exercises.forEach(({ exercise, sets, reps }) => {
      const listItem = document.createElement('li');
  
      const exerciseText = document.createElement('span');
      exerciseText.textContent = `${exercise} - ${sets} sets of ${reps} reps`;
  
      // Add delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.className = 'delete-button';
      deleteButton.onclick = function() {
        exerciseList.removeChild(listItem);
        updateStatistics(-sets, -reps); // Update statistics by subtracting deleted exercise's sets and reps
        removeExerciseFromLocalStorage(exercise, sets, reps);
      };
  
      listItem.appendChild(exerciseText);
      listItem.appendChild(deleteButton);
      exerciseList.appendChild(listItem);
  
      updateStatistics(sets, reps);
    });
  }
  
  // Load exercises when the page loads
  window.onload = loadExercises;
  