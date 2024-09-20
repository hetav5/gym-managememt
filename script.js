// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('gym-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior
      
      // Get the form input values
      const muscleGroup = document.getElementById('muscle-group').value;
      const exercise = document.getElementById('exercise').value;
      const weight = document.getElementById('weight').value;
      
      // Create a new list item element to display the session
      const li = document.createElement('li');
      li.textContent = `${muscleGroup.toUpperCase()}: ${exercise} - ${weight} kg`;
      
      // Add the new list item to the session list
      document.getElementById('session-list').appendChild(li);
      
      // Clear the form fields after adding the session
      document.getElementById('exercise').value = '';
      document.getElementById('weight').value = '';
    });
  });
  