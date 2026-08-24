document.addEventListener("DOMContentLoaded", function () {
    // 1. Typing Animation
    const textToType = "MOCH RIFKY";
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    function typeEffect() {
        if (index < textToType.length) {
            typingElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }
    typeEffect();

    // 2. Matrix Rain Background Effect
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01100101010001010101011010101010101';
    const fontSize = 14;
    const columns = canvas.w…
