// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()

// Array of predefined poster objects
const posters = [
    {
      image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/Fearless_Motivational_Quote_Desktop_Wallpaper_1.png?format=webp&v=1600450412',
      title: 'Winston S. Churchill',
      quote: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/Arlan_Hamilton.png?format=webp&v=1600448610',
      title: 'Arlan Hamilton',
      quote: 'We don’t just sit around and wait for other people. We just make, and we do',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/Nelsson_Mandela.png?format=webp&v=1600448850',
      title: 'Nelson Mandela',
      quote: 'Education is the most powerful weapon which you can use to change the world.',
    },
    // Add more poster objects as needed
    {
    image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/Zig_Ziglar.png?format=webp&v=1600448915',
    title: 'Zig Ziglar',
    quote: 'People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily',
    }

  ];
  
  // Event listener for randomize button
  // TODO: Add an event listener to the randomizeButton that calls a function when clicked
  document.getElementById('randomize').addEventListener('click', generateRandomPoster);

  // Event listener for submit button
  // TODO: Add an event listener to the submitButton that calls a function when clicked
  document.getElementById('submit').addEventListener('click', generateCustomPoster);
  // Function to generate a random poster
  function generateRandomPoster() {
    // TODO: Generate a random index within the range of the posters array length
    let random = Math.floor(Math.random() * posters.length);
    // TODO: Retrieve the random poster object from the posters array
    let randomPoster = posters[random];
    // TODO: Call the function to update the DOM with the values from the random poster object
    updatePoster(randomPoster.image, randomPoster.title, randomPoster.quote);
  }
  
  // Function to generate a custom poster
  function generateCustomPoster(event) {
    event.preventDefault();

    // TODO: Retrieve the entered quote and author from the input fields
    let imageUrl = document.getElementById('poster-form-image').value;
    let quote = document.getElementById('poster-form-quote').value;
    let author = document.getElementById('poster-form-author').value;

    // TODO: Create a custom poster object with the entered values
    let customPoster = {
      image: imageUrl,
      title: author,
      quote: quote,
    };
    posters.push(customPoster);
    // TODO: Call the function to update the DOM with the values from the custom poster object
    updatePoster(imageUrl, author, quote);
  }
  
  // Function to update the poster content in the DOM
  function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    document.getElementById('poster-image').src = imageUrl;
    document.getElementById('poster-title').textContent = title;
    document.getElementById('poster-quote').textContent = quote;
  }
  
