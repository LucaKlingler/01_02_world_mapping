/*
 * WORLD MAP VISUALIZER
 * Author: <your name here>
 * ---------------------------
 *
 * Visualizing the world!
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe 2.0: Das Script soll eine Weltkarte auf der Konsole als ASCII-Art zeichnen.
 *  Dafür muss jeder Pixel eines Bild einer Weltkarte gelesen und geprüft werden (world.jpg).
 *  Ist der Pixel schwarz, soll ein Zeichen (z.B. "#") an die richtige Stelle der Konsole 
 *  gesetzt werden. Dafür braucht ihr zwei Funktionen:
 *
 *  getPixelColor(x,y) - kann mit map_image-Objekt benutzt werden (also map_image.getPixelColor(x,y))
 *  writeCharacterToConsole(char, x, y) - Schreibt ein Zeichen an eine Position x/y auf die Konsole
 *
 *  Aufgabe 2.1: Farbe! Schaut euch das npm-Modul "chalk" an, und versucht die Zeichen in Farbe auszugeben
 *
 */

const rl = require('readline')
  const chalk = require('chalk');
  const jimp = require('jimp')

clearConsole()

/*jimp.read('Autos.jpg', (err, map_image) => {
  if (err) throw err;
  map_image.resize(100, 50);
  console.log(map_image.getPixelColor(0, 0)); //gibt die Farbe des Pixels links oben zurück
  writeCharacterToConsole('#', 0, 0); //schreibt ein # links oben in die Konsole
  //----- Hier kommt euer Code hin -----
  /*  1:Überprüfen, ob der Pixel weiß oder schwarz ist
  2:Wenn Weiß, weiter zum nächsten Pixel
  3:Wenn Schwarz, pixel an der position x/y in der Konsole mit # markieren, dann weiter zum nächsten Pixel
  4:Wenn die reihe fertig ist, nächste reihe drunter anfangen
  
  const chalk = require('chalk');
  for (let x = 0; x < 101; x++) {
    for (let y = 0; y < 51; y++) {

      const color = jimp.intToRGBA(map_image.getPixelColor(x, y));
      writeCharacterToConsole(chalk.rgb(color.r, color.g, color.b)('0'), x, y);

      //console.log(map_image.getPixelColor(i, u));
    }
  }






}); 
*/


const space = generateInvader(7, 8, 5, 5);

//Vorerst nur ein Platzhalter
setInterval(function () {
  const xpos = Math.floor(Math.random() * 190);
  const ypos = Math.floor(Math.random() * 60);
  clearConsole()
  printInvader(space, xpos,ypos);
  //generateInvader(20, 8);
}, 1000);

function printInvader(space, xpos, ypos) {
  for (let x = 0; x < space.length; x++) {
    for (let y = 0; y < space[0].length; y++) {
      const hue = Math.random() * 360;
      if (space[x][y] == 1) {
        writeCharacterToConsole((chalk.hsv(hue, 100, 100)('■')), x + xpos, y + ypos);
        writeCharacterToConsole((chalk.hsv(hue, 100, 100)('■')), space.length * 2 - x + xpos, y + ypos);
      }

    }
  }

}
/*
 * HELPER FUNCTIONS - DO NOT CHANGE
 */
function clearConsole() {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)
  rl.cursorTo(process.stdout, 0, 0)

  rl.clearScreenDown(process.stdout)
}

function writeCharacterToConsole(char, x, y) {
  rl.cursorTo(process.stdout, x, y)
  process.stdout.write(char)
}

//random funktion:
//Math.random() // gibt random zahlen zwischen 0 und 1 -> zb. grenze bei 0.5 ziehen alles kleiner schwarz alles größer weiß

function generateInvader(width, height, xpos, ypos) {
  /*  In der vorgegebenen Weite und Höhe soll ein zufälliger space invader generiert werden.
      Es muss nur eine hälfte gecoded werden, die andere wird einfach gespiegelt.
      Die Funktion muss also in der Hälfte des vorgegebenen Rahmens: */
  //  - weiße und schwarze pixel random generieren:
  //  - alle schwarzen pixel mit "#" markieren
  //  - alles spiegeln
  //  - die "#" in ein Koordinatensystem übertragen
  //  - die mit "#" markierten pixel in der Konsole wieder schwarz färben und ausgeben
  let invader = [];
  const hue = Math.random() * 360;
  const chalk = require('chalk');
  for (let x = 0; x < width; x++) {
    invader[x] = [];
    for (let y = 0; y < height; y++) {
      const random = Math.random();
      if (random < 0.5) {
        // const color = getRandomColor();
        // writeCharacterToConsole('0', x, y);
        writeCharacterToConsole(chalk.hsv(hue, 100, 100)('■'), x + xpos, y + ypos);
        // writeCharacterToConsole('0', width * 2 - x, y);
        writeCharacterToConsole(chalk.hsv(hue, 100, 100)('■'), width * 2 - x + xpos, y + ypos);
        rl.cursorTo(process.stdout, 0, 0)
        invader[x][y] = 1

      } else {
        invader[x][y] = 0
      }

    }


  }
  // console.log(invader)
  return invader;

}

// console.log('invader')
/*function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}*/