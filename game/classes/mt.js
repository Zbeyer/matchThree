class MT
{
	constructor(height, width, items)
	{
		height = height || 5;
		width = width || 5;
		items = items || ['B', 'G', 'M', 'O', 'P'];
		this.grid = [height][width];
		let length = items.length;
		let random = MT.getRandomInt(length);
		let letter = items[random];

		for (let i = 0; i < height; i++)
		{
			for (let j = 0; j < width; j++)
			{
				random = MT.getRandomInt(length);
				letter = items[random];
				// this.grid[i][j] = letter;
				console.log('letter', letter);
			}
		}
		return this;
	}

	static getRandomInt(max)
	{
		return Math.floor(Math.random() * Math.floor(max));
	}
}