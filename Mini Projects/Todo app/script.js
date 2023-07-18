// Define a class for the submitted information.
class Information {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

// Check if the list is empty initially.
const list = document.getElementById("infoList");
const noItemMessage = document.getElementById("noItemMessage");
if (list.children.length === 0) {
  noItemMessage.style.display = "block";
}

// Function to handle form submission.
function handleSubmit(event) {
  event.preventDefault(); // Prevent form from refreshing the page.

  // Get input values from the form.
  const title = document.getElementById("titleInput").value;
  const description = document.getElementById("descriptionInput").value;

  // Create an instance of the Information class.
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

  // Resetting the form inputs.
  document.getElementById("myForm").reset();

  // hide "No item in the list" message.
  const noItemMessage = document.getElementById("noItemMessage");
  noItemMessage.style.display = "none";

  // Add event listener to the delete button in the appended list item.
  const deleteBtn = listItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    listItem.remove(); // Delete the list item on click of delete button.
    if (list.children.length === 0) {
      noItemMessage.style.display = "block";
    }
  });
}

// Attach event listener to the form.
document.getElementById("myForm").addEventListener("submit", handleSubmit);
