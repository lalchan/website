type Image = string;

interface IContent {
	value: string;
	image: Image;
}

export class ContentHandler {
	private _index: number;
	private _contents: (IContent & { index: number; isVisible: boolean })[];
	constructor(contents: IContent[]) {
		this._contents = contents.map((content, index) => ({
			...content,
			index,
			isVisible: index === 0,
		}));
		this._index = 0;
	}
	getImage(): Image {
		return this._contents[this._index].image;
	}

	setVisible(index: number, value: boolean): void | Image {
		this._contents[index].isVisible = value;
		if (!value && index <= this._index) {
			this._index = Math.min(
				Math.max(
					this._contents.findIndex((dat) => dat.isVisible),
					0,
				),
				this._contents.length - 1,
			);
			return this.getImage();
		}
	}
	getContents(): (IContent & { index: number })[] {
		return this._contents.map((content) => {
			const { isVisible, ..._content } = content;
			return _content;
		});
	}
}
