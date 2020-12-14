'use strict';
//-------------------------------------------------------------------------
// TetrisManager class
// Original Source: www.albertlobo.com/games/tetris
// Original Author: Albert Lobo
//-------------------------------------------------------------------------
class TetrisManager {
  
  constructor(tetris) {
        
    // tetris game and leaderboard
    this.tetris = tetris;
    //this.tetrisLeaderboard = tetrisLeaderboard;
    
    // game result 
    this.lastResult = {
      id: 0,
      score: 0,
    };
    
    this.tetris.on(ClassicTetris.GAME_OVER, event => {
      //this._gameOverHandler(event);
      const { score, lines } = event;
        if (score === 0) return;   
        this.lastResult.score = score;
        this.lastResult.lines = lines;

      var skor = this.lastResult.score;
      document.getElementById('numberfans').innerHTML = skor;
      var persenskor = ((parseInt(skor)/60260)*100).toFixed(2);
      document.getElementById('percentstad').innerHTML = persenskor+"% kapasiti Stadium Emirates";  
      var gover = document.getElementById('gameover');
      gover.style.display='block';
      
    });
    
  }
 
}  