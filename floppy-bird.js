const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');// ctx veut dire context.
const img = new Image();
img.src = "flappy-bird-set.png";

// general setting (réglage général)

let gamePlaying = false;
const gravity = .5;
const speed = 4.8; // c'est la vitesse du jeux 
const size = [51, 36]; // la première valeur représente la largeur et la 2em valeur pour la hauteur
const jump = -11.5; // le niveau de difficulté du jump
const cTenth = (canvas.width / 10);

// Ensuite nous avons ci-dessous toutes le variables qui peuvent évoluer au fur et à mesure que nous avançons dans le jeu
//qui crée un effet d'optique

let index = 0,
    bestScore = 0, 
    flight, 
    flyHeight, 
    currentScore, 
    pipes = [];

// pipe settings ( tuyau général )
const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) + pipeWidth;

const setup = () => {
  currentScore = 0;
  flight = jump;

  // set initial flyHeight (middle of screen - size of the bird) / définir flyHeight initiale (milieu de l'écran - taille de l'oiseau)
  flyHeight = (canvas.height / 2) - (size[1] / 2);

  // setup first 3 pipes / installer les 3 premiers tuyaux
  pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);
}

const render = () => {
  // make the pipe and bird moving /  faire bouger le tuyau et l'oiseau
  index++;

  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  // background first part / fond première partie
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width) + canvas.width, 0, canvas.width, canvas.height);
  // background second part / fond deuxième partie
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -(index * (speed / 2)) % canvas.width, 0, canvas.width, canvas.height);
  
  // pipe display / affichage de tuyau
  if (gamePlaying){
    pipes.map(pipe => {
      // pipe moving /  tuyau en mouvement
      pipe[0] -= speed;

      // top pipe / tuyau du haut
      ctx.drawImage(img, 432, 588 - pipe[1], pipeWidth, pipe[1], pipe[0], 0, pipeWidth, pipe[1]);
      // bottom pipe / tuyau du bas
      ctx.drawImage(img, 432 + pipeWidth, 108, pipeWidth, canvas.height - pipe[1] + pipeGap, pipe[0], pipe[1] + pipeGap, pipeWidth, canvas.height - pipe[1] + pipeGap);

      // give 1 point & create new pipe / donner 1 point et créer un nouveau tuyau
      if(pipe[0] <= -pipeWidth){
        currentScore++;
        // check if it's the best score / vérifier si c'est le meilleur score
        bestScore = Math.max(bestScore, currentScore);
        
        // remove & create new pipe / supprimer et créer un nouveau tuyau
        pipes = [...pipes.slice(1), [pipes[pipes.length-1][0] + pipeGap + pipeWidth, pipeLoc()]];
        console.log(pipes);
      }
    
      // if hit the pipe, end / si vous frappez le tuyau, fin
      if ([
        pipe[0] <= cTenth + size[0], 
        pipe[0] + pipeWidth >= cTenth, 
        pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1]
      ].every(elem => elem)) {
        gamePlaying = false;
        setup();
      }
    })
  }
  // draw bird / dessiner un oiseau
  if (gamePlaying) {
    ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, cTenth, flyHeight, ...size);
    flight += gravity;
    flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
  } else {
    ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, ((canvas.width / 2) - size[0] / 2), flyHeight, ...size);
    flyHeight = (canvas.height / 2) - (size[1] / 2);

    // text accueil
    ctx.fillText(`Best score : ${bestScore}`, 85, 245);
    ctx.fillText('Click to play', 90, 535);
    ctx.font = "bold 30px courier";
  }

  document.getElementById('bestScore').innerHTML = `Best : ${bestScore}`;
  document.getElementById('currentScore').innerHTML = `Current : ${currentScore}`;

  // tell the browser to perform anim / dire au navigateur d'effectuer l'animation
  window.requestAnimationFrame(render);
}

// launch setup / configuration de lancement
setup();
img.onload = render;

// start game / Commencer le jeu
document.addEventListener('click', () => gamePlaying = true);
window.onclick = () => flight = jump;

