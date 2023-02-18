const paragraph = document.getElementById('key-paragraph');

      // Add the keydown event listener to the document
      document.addEventListener('keydown', (event) => {
        // Get the pressed key 
        const key = event.key;

        //pressed key to the paragraph
        paragraph.textContent += key;
      });