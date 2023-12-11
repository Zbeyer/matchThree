class MainMenu extends Phaser.Scene
{
	create ()
	{
		let scene = this;
		let height = scene.cameras.main.height;
		let width = scene.cameras.main.width;
		let BG = scene.add.image(0, 0, 'Background');
		let BGRatio = Math.max(width, height) / Math.min(BG.width * 0.5, BG.height * 0.5);
		BG.setScale(BGRatio);

		const padding = 32;
		const buttonHeight = padding * 3;
		const buttonWidth = padding * 13;

		let buttonNewGame = scene.add.rectangle(padding, padding, buttonWidth, buttonHeight, 0x111111);
		buttonNewGame.setOrigin(0, 0);
		buttonNewGame.setInteractive();
		buttonNewGame.on('pointerdown', function (pointer) {
			console.log('New Game');
		});
		let buttonNewGameText = scene.add.text(buttonNewGame.x+padding, buttonNewGame.y+padding, 'New Game', {fontSize: '32px', fill: '#FFF'});

		let buttonQuit = scene.add.rectangle(padding, padding * 2.0 + buttonHeight, buttonWidth, buttonHeight, 0x111111);
		buttonQuit.setOrigin(0, 0);
		buttonQuit.setInteractive();
		buttonQuit.on('pointerdown', function (pointer) {
			scene.scene.stop ('MainMenu');
			scene.scene.start('Quit');
		});
	}
};
