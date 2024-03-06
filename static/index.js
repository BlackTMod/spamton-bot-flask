var shaking = setInterval(moveImage, shakeInterval);


  function OnStart() {
    var spamtonFace = document.getElementById('spamton').getAttribute('face')
    DisplayText(document.getElementById('dialog-box').textContent);
    document.getElementById('dialog-box').textContent = '';

    OpenPopupInit()

    if (spamtonFace == "Happy") {
      spamton.src = "static/Images/Spamton_0001.png"
      shakeValue = 10
      moveImage()
      shaking = setInterval(moveImage, shakeInterval);
  
  
  
    }
    else {
      shakeValue = 0
    }
    if (spamtonFace == "Neutral") {
      spamton.src = 'static/Images/Spamton_0002.png'
    }
    if (spamtonFace == "Depression" || spamtonFace == "Flashback") {
      spamton.src = 'static/Images/Spamton_0003.png'
    }
    if (spamtonFace == "No Reaction") {
      spamton.src = 'static/Images/Spamton_0004.png'
    }
    if (spamtonFace == "Looking at user") {
      spamton.src = 'static/Images/Spamton_0005.png'
    }
  }
  function OpenPopupInit() {
    document.getElementById("popup-1").classList.toggle("active");
    var audio = document.getElementById("music");
    audio.play();
  }
  

function DisplayText(text) {
    var originalText = text;

    var textContainer = document.getElementById('dialog-box');


    var voice = document.getElementById('voice');

    // Initialize the index to 0
    var currentIndex = 0;
    // Get the audio element
    
    // Function to display text letter by letter
    function displayText() {
      // Extract the current part of the text
      var currentText = originalText.slice(0, currentIndex + 1);

      // Set the text content of the container
      textContainer.textContent = currentText;

      // Increment the index
      currentIndex++;

      // Check if we have reached the end of the text
      if (currentIndex < originalText.length) {
        // If not, set a timeout to call the function again after a delay
        setTimeout(displayText, 100); // Adjust the delay as needed
        voice.playbackRate = 1.25;
        voice.play();
      }
    }

    // Call the function to start displaying text
    displayText();
}


const movingImage = document.getElementById('spamton-face');
const spamton = document.getElementById('spamton');
var shakeInterval = 60
var shakeValue = 10

function moveImage() {
  // Gera valores de translate X e Y aleatórios
  const translateX = Math.random() * shakeValue - shakeValue/2; // Valores podem ser ajustados conforme necessário
  const translateY = Math.random() * shakeValue - shakeValue/2;

  // Aplica a transformação à imagem
  movingImage.style.transform = `translate(${translateX}px, ${translateY}px)`;

  
}

// Chama a função para mover a imagem a cada 2 segundos (2000 milissegundos)

function submitInput() {

  
  
}