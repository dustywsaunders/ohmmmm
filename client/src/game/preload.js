export default game => {
  game.load.image('stage', 'assets/Stage.png');
  game.load.image('bubble', 'assets/bubble.png')
  game.load.image('star', 'assets/star.png');
  game.load.image('gohm', 'assets/DotGreen 2.png');
  game.load.image('pohm', 'assets/DotPurple 2.png');
  game.load.image('oohm', 'assets/DotOrange 2.png');
  game.load.audio('theme', 'assets/music.mp3');
  game.load.audio('lowpop', 'assets/lowpop.wav');
  game.load.audio('midpop', 'assets/midpop.wav');
  game.load.audio('highpop', 'assets/highpop.wav');
  game.load.audio('endgame', 'assets/endgame.mp3');
  game.load.spritesheet('player', 'assets/BreatheIn3.png', {
    frameWidth: 150,
    frameHeight: 150
  });
};
