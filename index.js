const duino = require('johnny-five')
const board = new duino.Board({
  repl: false,
})
const player = require('play-sound')((opts = { player: 'mpg123' }))

const musicPlayer = {
  playBGmusic: () =>
    player.play('test.mp3', function (err) {
      if (err) throw err
    }),
  stopBGmusic: () =>
    player.play('test.mp3', function (err) {
      if (err && !err.killed) throw err
    }),
}

board.on('ready', function () {
  console.log('playing 1')
  musicPlayer.playBGmusic()
})
