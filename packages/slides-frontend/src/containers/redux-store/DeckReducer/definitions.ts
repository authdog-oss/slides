const uuidv4 = require("uuid/v4");

export type position = {
    x: number
    y: number
  }
export type size = {
    width: number
    height: number
  }

export const ItemTypes = {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
}

class baseItem {
    ID: string
    Position: position
    Size: size
    constructor() {
      this.ID = uuidv4();
      this.Position= { x: 0, y: 0 };
      this.Size = { width: 0, height: 0 };
    }
}

export class Text extends baseItem {
    readonly type: string
    Data: string
    Edit: boolean
    constructor() {
      super();
      this.type = ItemTypes.TEXT
      this.Data = "<p></p>\n";
      this.Edit = false;
      this.Position= { x: 0.30, y: 0.40 };
      this.Size = { width: 0.25, height: 0.05 };
    }
  }

export class Image extends baseItem {
    readonly type: string
    Src: string
    constructor(Src: string) {
      super();
      this.type = ItemTypes.IMAGE;
      this.Src = Src;
      this.Position= { x: 0.30, y: 0.25 };
      this.Size = { width: 0.20, height: 0.55 };
    }
  }

export type Item = Text | Image;

export type Slide = {
  ID: string
  itemsArray: Array<Item>
}

export type Deck = {
  currentSlide: number
  slides: Array<Slide>
}

export const newItem = (obj: any): Item => {
    switch (obj.type) {
      case ItemTypes.TEXT:
        return new Text();
      case ItemTypes.IMAGE:
        const { Src } = obj;
        return new Image(Src);
      default:
        throw new Error('Object type is not TEXT neither IMAGE');
    }
}
