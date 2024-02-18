const activateDyslexia = false;

const cssRules = `

@font-face {
    font-family: 'OpenDyslexic3-Bold';
    src: url(${chrome.runtime.getURL('./assets/fonts/OpenDyslexic3-Bold.ttf')});
    font-weight: bold;
  }
  
@font-face {
    font-family: 'OpenDyslexic3-Regular';
    src: url(${chrome.runtime.getURL('./assets/fonts/OpenDyslexic3-Regular.ttf')});
    font-weight: normal;
}

* {
    font-family: 'OpenDyslexic3-Regular', sans-serif !important;
}
`;

if (activateDyslexia) {
// Create a <style> element
const styleElement = document.createElement('style');

// Set the CSS content
styleElement.textContent = cssRules;

// Append the <style> element to the <head> of the document
document.head.appendChild(styleElement);
}

