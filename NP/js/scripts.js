const presentacion = document.querySelector('.presentacion-trans');

let angle = 0;
function balancear() {
  angle = Math.sin(Date.now() / 500) * 2; // balanceo suave
  presentacion.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(balancear);
}
balancear();
