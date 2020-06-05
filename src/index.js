import lottie from 'lottie-web'
import "./index.css"

console.log(lottie);
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie_container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
});
