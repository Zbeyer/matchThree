class Credits extends Phaser.Scene
{
	create ()
	{
		const scene = this;

		const BG = scene.add.image(0, 0, 'Background');
		BG.setScale(Dimensions.backgroundScale);
		scene.graphics = scene.add.graphics();
		scene.graphics.fillStyle(0x000000, 1);
		scene.graphics.alpha = 0.75;
		scene.graphics.fillRoundedRect(Dimensions.buttonPadding , Dimensions.buttonPadding,
			scene.cameras.main.width - Dimensions.buttonPadding * 2.0,
			scene.cameras.main.height - Dimensions.buttonPadding * 5.0,
			16);
		scene.graphics.fillStyle(0xff00ff, 1);

		let attriubtionText = scene.add.text(Dimensions.buttonPadding * 2.0,
			Dimensions.buttonPadding * 2.0, 'Attribution', {fontSize: '32px', fill: '#FFF'});
		attriubtionText.setOrigin(0, 0);
		attriubtionText.setText([
			'Credits',
			'', // empty line

			'Pixabay for background image',
		])

		let buttonBack = scene.add.rectangle(0,
			scene.cameras.main.height - Dimensions.buttonHeight,
			scene.cameras.main.width,
			Dimensions.buttonHeight,
			0x333333);

		buttonBack.setOrigin(0, 0);
		buttonBack.setInteractive();
		buttonBack.on('pointerdown', function (pointer) {
			scene.scene.stop ('Credits');
			scene.scene.start('MainMenu');
		});
		scene.add.text(buttonBack.x + Dimensions.buttonPadding, buttonBack.y + Dimensions.buttonPadding, 'Back To Menu', {fontSize: '32px', fill: '#FFF'});

	}
}
