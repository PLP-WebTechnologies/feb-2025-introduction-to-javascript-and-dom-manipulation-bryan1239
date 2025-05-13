// Function to change the text content dynamically when the button is clicked
document.getElementById('changeTextButton').addEventListener('click', function() {
  const contentSection = document.getElementById('contentSection');
  contentSection.querySelector('p').textContent = "The text has been changed dynamically!";
  
  // Modify the CSS style of the content section dynamically
  contentSection.style.backgroundColor = "#e0f7fa";  // Change the background color
  contentSection.style.color = "darkblue";  // Change the text color
});

// Function to add a new element when the button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
  const elementContainer = document.getElementById('elementContainer');
  
  // Create a new paragraph element
  const newParagraph = document.createElement('p');
  newParagraph.textContent = "This is a new element added dynamically!";
  
  // Append the new paragraph to the container
  elementContainer.appendChild(newParagraph);
});
