import p5 from 'p5'
import Grid from './Grid'
import { Animation } from 'animations'

class AnimationsUI extends Grid {
  currentStep: number
  animationList: Animation[]
  animations: Animation[][]

  constructor(p: p5, cells: binary[][], ox: number, oy: number, cellSize: number, currentStep: number, animationList: Animation[]) {
    super(p, cells, ox, oy, cellSize, currentStep)
    this.animationList = animationList
    this.animations = []
    this.setupAnimations()
  }

  setupAnimations() {
    for (let y = 0; y < this.column; y++) {
      this.animations.push([])
      for (let x = 0; x < this.row; x++) {
        const anime = new this.animationList[y](this.p, this.cellSize * (1 / 2), this.cellSize * (1 / 2)) // 描画位置はGridで計算されるから(0,0)の位置でOK
        this.animations[y].push(anime)
      }
    }
  }

  updateCell(x: number, y: number) {
    this.animations[y][x].update()
  }

  displayCell(x: number, y: number) {
    this.animations[y][x].display()
  }

  play(currentStep: number, time?: number) {
    for (let track = 0; track < this.column; track++){
      if (this.cells[track][currentStep]) {
        this.animations[track][currentStep].play(time)
      }
    }
  }
}

export default AnimationsUI