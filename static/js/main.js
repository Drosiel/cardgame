import Map from './map';
import Card from './card';

const WIDTH = 1200
const HEIGHT = 1024

const CRDH = 170
const CRDW = CRDH/100*64.7

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

var selected = false;

var mouse = {
    x: 0,
    y: 0,
}

class Game {
  
  	constructor(){
  	    canvas.width = WIDTH
  	    canvas.height = HEIGHT
        this.map = false
        this.cards = []
    }

  	init = () => {

        //столы
        this.map = new Map({
            ctx: ctx,
            width: WIDTH,
            height: HEIGHT,
            color: '#fff',
            colortable: '#989898',
        })

        //игральная карта
        const card = new Card({
            ctx: ctx,
            width: CRDW,
            height: CRDH,
            x: 100,
            y: 100
        })
        
        var isCursorInRect = function (card) {
            return mouse.x > card.x && mouse.x < card.x + card.width && mouse.y > card.y && mouse.y < card.y + card.height
        }
        
        //событие мыши(мышь в движении)
        window.onmousemove = function (e) {
            mouse.x = e.pageX - 12;
            mouse.y = e.pageY - 12;
        };

        //событие мыши(кнопка мыши нажата)
        window.onmousedown = function () {
            if (!selected) {
                if(isCursorInRect(card)) {
                    selected = card;
                }
            }
        };

        //событие мыши(кнопка мыши отжата)
        window.onmouseup = function () {
            selected = false;
        };
        
        this.cards.push(card);
        this.map.draw();
        this.cards.forEach(card => {
            card.draw()
        })
        
		requestAnimationFrame(this.draw);
	}
    
    draw = () => {

        if (selected) {
            selected.x = mouse.x - selected.width / 2;
            selected.y = mouse.y - selected.height / 2;
        }

        this.map.draw();
        this.cards.forEach(card => {
            card.draw()
        })

  		requestAnimationFrame(this.draw);
  	}
}

window.onload = new Game().init()