console.log("Hej!");

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")



const img = new Image(); // Create new img element
img.src = "tiles.png"; // Set source path

// Wait for the image to load
img.onload = function () {
    // Now the image is fully loaded, and you can draw it on the canvas
    requestAnimationFrame(draw);
  };
  
// const index = row * map.cols + column;

const map = {
    cols: Math.ceil(canvas.width/64),
    rows: Math.ceil(canvas.height/64),
    tsize: 64,
    tiles: [
      1, 3, 3, 3, 1, 1, 3, 1, 
      1, 1, 1, 1, 1, 4, 1, 1,
      1, 1, 1, 1, 1, 3, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 
      1, 1, 4, 2, 2, 4, 1, 1,
      1, 1, 3, 2, 2, 3, 1, 1,
      1, 1, 4, 2, 2, 4, 1, 1,
      1, 1, 3, 2, 2, 3, 1, 1,
    ],
    getTile(col, row) {
      return this.tiles[row * map.cols + col];
    },
  };
function draw() {
    // Gör hela canvasen vit för att "tömma den". Kan också göras med c.clearRect(...).
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
      for (let c = 0; c < map.cols; c++) {
        for (let r = 0; r < map.rows; r++) {
          const tile = map.getTile(c, r);

          if (tile !== 0) {
            // 0 => empty tile
            ctx.drawImage(
              img, // image
              (tile - 1) * map.tsize, // source x
              0, // source y
              map.tsize, // source width
              map.tsize, // source height
              c * map.tsize, // target x
              r * map.tsize, // target y
              map.tsize, // target width
              map.tsize, // target height
            );
          }
        }
    }

  requestAnimationFrame(draw) //Kör den här funktionen igen.
}
requestAnimationFrame(draw)
