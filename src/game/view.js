import * as THREE from 'three';
import GamePage from '../pages/game_view.js';
import GameOverPage from '../pages/game_over.js';

class GameView{
  constructor(){
    this.initScene();
  }
  initScene(){
    var scene = new THREE.Scene();
    this.scene=scene;
    let [width,height]=[window.innerWidth,window.innerHeight];
    var camera = new THREE.OrthographicCamera(-width/2, width/2, height/2, -height/2,-1000,1000);

    var renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    renderer.setSize(375, 667);

    camera.position.z = 50;

    var animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }
  initGameOverPage(){
    this.gameOverPage.show();
  }
  initGameOverPage(callbacks) {
    this.gameOverPage = new GameOverPage(callbacks,this.scene);
    this.gameOverPage.init();
  }
  initGamePage(callbacks){
    this.gamePage=new GamePage(callbacks,this.scene);
    this.gamePage.init();
  }
  showGamePage(){

  }
  showGameOverPage(){
    
  }
}

export default new GameView();