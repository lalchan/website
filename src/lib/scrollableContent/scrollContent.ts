export type ScrollableImage = string;

export interface ScrollableTextContent {
	title: string;
	text: string;
}

export interface ScrollableContent {
	id: string;
	props: ScrollableTextContent;
	image: ScrollableImage;
}

export class ContentHandler {
	private _index: number;
	private _contents: (ScrollableContent & {
		index: number;
		isVisible: boolean;
	})[];
	constructor(contents: ScrollableContent[]) {
		this._contents = contents.map((content, index) => ({
			...content,
			index,
			isVisible: index === 0,
		}));
		this._index = 0;
	}
	getImage(): ScrollableImage {
		return this._contents[this._index].image;
	}

	setVisible(index: number, value: boolean): void | ScrollableImage {
		this._contents[index].isVisible = value;
		const oldIndex = this._index;

		this._index = Math.min(
			Math.max(
				this._contents.findIndex((dat) => dat.isVisible),
				0,
			),
			this._contents.length - 1,
		);
		if (oldIndex !== this._index) {
			return this.getImage();
		}
	}
	getContents(): (ScrollableContent & { index: number })[] {
		return this._contents.map((content) => {
			const { isVisible, ..._content } = content;
			return _content;
		});
	}
}
