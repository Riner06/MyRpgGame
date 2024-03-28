
var img = new Image();
img.src = 'tiles.png'; // replace with your image path

(function(){
    
    var buffer, context, drawMap, map, size;
    buffer = document.createElement("canvas").getContext("2d");
    context = document.querySelector("canvas").getContext("2d");

    map = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
           1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,
           1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,
           1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,
           1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,
           1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
 

    size = 32;

    buffer.canvas.width = 16*size;
    buffer.canvas.height = 9 * size;

    let tileSize = 64

    drawMap = function(){
        for (let index = 0; index < map.length; index++) {
            // buffer.fillStyle = (map[index] == 1)?img:"#ffffff";
            // buffer.fillRect((index % 16) * size, Math.floor(index/16) * size, size, size)
            context.drawImage(img,map[index]*tileSize,0,tileSize,tileSize, (index % 16) * size, Math.floor(index/16) * size, size, size    );
            
        }
        context.drawImage(buffer.canvas,0,0,buffer.canvas.width,buffer.canvas.height);
    }

   

    drawMap()
})()