import { PlaneGeometry, MeshBasicMaterial, Texture, Mesh, DoubleSide } from "three";

export default class GameOverPage {
  constructor(callbacks,scene) {
    this.callbacks = callbacks;
    this.scene=scene;
  }
  init() {
    const [width,height]=[window.innerWidth,window.innerHeight];
    let canvas=document.createElement("canvas");
    let ctx=canvas.getContext('2d');
    canvas.width=width;
    canvas.height=height;
    
    ctx.fillStyle="#333";
    ctx.fillRect((width-200)/2,(height-100)/2,200,100);

    ctx.fillStyle="#eee";
    ctx.font="20px Georgia";
    ctx.fillText("GAME OVER",(width-200)/2+50,(height-100)/2+55);

    let texture=new Texture(canvas);
    let plane=new PlaneGeometry(width,height);

    let mat=new MeshBasicMaterial({
      map:texture,
      side:DoubleSide,
      transparent:true,
    })

    let mesh=new Mesh(plane,mat);
    mesh.position.z=0;
    texture.needsUpdate=true;

    this.scene.add(mesh);
    console.log('this.scene: ', this.scene);
  }
  show() {
    console.log('show gameOver');
  }
}