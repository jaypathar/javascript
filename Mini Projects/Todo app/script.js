// Define a class for the submitted information
class Information {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get input values from the form
  const title = document.getElementById("titleInput").value;
  const description = document.getElementById("descriptionInput").value;

  // Create an instance of the Information class
  const info = new Information(title, description);

  // Display the submitted information in the list
  const list = document.getElementById("infoList");
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span class="info-title">${info.title}</span>
    <span class="info-description">${info.description}</span>
    <button class="delete-btn">Delete</button>
  `;
  list.appendChild(listItem);

  // Reset the form inputs
  document.getElementById("myForm").reset();

  // Add event listener to the delete button in the appended list item
  const deleteBtn = listItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    listItem.remove(); // Delete the list item when the delete button is clicked
  });
}

// Attach event listener to the form
document.getElementById("myForm").addEventListener("submit", handleSubmit);
