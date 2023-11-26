
export default class Item{
    static identifier = 0;
    constructor(text){
        this.id = Item.identifier ++;
        this.text = text;
        this.done = false;
    }
}