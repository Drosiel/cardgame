import pnt from './pnt';

//создание карты
export default class Map {
    constructor(opt) {
        this.table = pnt.points
        this.ctx = opt.ctx
        this.width = opt.width
        this.height = opt.height
        this.color = opt.color
        this.colortable = opt.colortable
    }
    
    draw = () => {
        this.ctx.save()
        
        this.ctx.fillStyle = this.color;
        this.ctx.fill()

        this.ctx.fillRect(0, 0, this.width, this.height)

        //столы
        this.ctx.fillStyle = this.colortable;
        for(let i = 0; i < this.table.length; i++) {
            this.ctx.fillRect(this.table[i].x,this.table[i].y,this.table[i].w,this.table[i].h)
        }
        
        this.ctx.restore()
    }      

}
