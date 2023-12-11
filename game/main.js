class BootScene extends Phaser.Scene
{
		create () { 
			this.game.scene.start('Preloader');
		}
}

class PreloadScene extends Phaser.Scene
{
		preload () {
			// this.load.baseURL = 'https://zbeyer.meteorapp.com/assets/';
			// Access to XMLHttpRequest at 'https://zbeyer.meteorapp.com/assets/sloth.png' from origin 'null'
			// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header
			// is present on the requested resource.

			this.load.baseURL = './game/images/';
			this.load.image('Background', 'bg.jpg');
			this.load.image('Blue Gem', 'gems/Blue.png');
			this.load.image('Green Gem', 'gems/Green.png');
			this.load.image('Orange Gem', 'gems/Orange.png');
			this.load.image('Pink Gem', 'gems/Pink.png');
			this.load.image('Purple Gem', 'gems/Purple.png');

		}
	
		create () {

			this.scene.start('MainMenu');
			this.scene.stop('Preloader');
		}
}

class QuitScreen extends Phaser.Scene
{
	create ()
	{
		this.game.destroy(true);
	}
}

class Poker
{
	static 	newGame = function ()
	{
		const gameConfig = {
			render: {
				pixelArt: true,
			},
			scale: {
				mode: Phaser.Scale.ScaleModes.FIT,
				height: 1280,
				width: 768,
			},
			audio: {
				disableWebAudio: false,
			}
			
		};
		let game = new Phaser.Game(gameConfig);
		this.game = game;
		
		game.scene.add('Boot', BootScene);
		game.scene.add('Preloader', PreloadScene);
		game.scene.add('MainMenu', MainMenu);
		game.scene.add('Credits', Credits);
		game.scene.add('Quit', QuitScreen);
		// Dimensions.game = game;

		game.scene.start('Boot');
		return game;
	}
	
	static quit = function ()
	{
		let game = this.game;
		game.destroy(true);
	}
	
}

Poker.newGame();