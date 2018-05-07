/* Filename: visualizer.js
 * Author: Hank Wikle
 * Last modified 7 May 2018
 * Implements a simple audio visualization tool using the Web Audio API.
 * Adapted from www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html 
 */

window.onload = function() {
    let ctx = new AudioContext(); // create audio context
    let audio = document.getElementById('myAudio'); // get audio file from html document
    let audioSrc = ctx.createMediaElementSource(audio); // create audio source obj from file
    let analyser = ctx.createAnalyser(); // create analyser

    audioSrc.connect(analyser);

    let frequencyData = new Uint8Array(analyser.frequencyBinCount); // sort freqs into bins

    // receive data
    function renderFrame() {
        requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(frequencyData);
    }

    audio.start();
    renderFrame();
}
;
