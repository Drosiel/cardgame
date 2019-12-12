export default class Card {
    constructor(crd) {
        this.ctx = crd.ctx
        this.width = crd.width
        this.height = crd.height
        this.color = 'red'
        this.x = crd.x
        this.y = crd.y
    }

    draw = () => {
        
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}