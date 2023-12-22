//your JS code here. If required.

function updateText() {
      // Get the p tag with id 'status'
      var statusParagraph = document.getElementById('status');

      // Change the text content of the p tag
      statusParagraph.textContent = "Entered Metaverse";

      // Create a new h1 element
      var h1Element = document.createElement('h1');
      // Set its text content
      h1Element.textContent = "Entered Metaverse";

      // Replace the existing p tag with the new h1 tag
      statusParagraph.parentNode.replaceChild(h1Element, statusParagraph);
    }