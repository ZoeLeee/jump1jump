

export default class GamePage {

  constructor(callbacks,scene) {
    this.callbacks = callbacks;
    this.scene=scene;
  }
  init() {
    var geometry = new THREE.BoxGeometry(100,100,100);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
  }
  show() {
    this.cube.visible = true;
  }
  hide() {
    this.cube.visible = false;
  }
  restart() {

  }
}