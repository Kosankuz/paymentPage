import { items } from './modules/data.js';
import { cardBuilder } from './modules/cardBuilder.js';


let item_card = new cardBuilder();

items.forEach(el => {
    item_card.element(el.title, el.copy, el.price, el.image, 'main_container');
})