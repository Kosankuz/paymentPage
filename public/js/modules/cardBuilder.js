export class cardBuilder {
    element(title, copy, price, image, divToAppend) {
        let cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
            <div class="card" style="background-image: url(${image});">       
            <div class="content">
            <form action="/buy" method="POST">
                <h2 class="title">${title}</h2>
                <p class="copy">${copy}</p>
                <p class="price">Only £${price}</p>
                <input name="price" id="price" style="display:none" value="${price}">  
                <button type="submit" class="btn btn-lg"> Buy now ! </button>
                </form>
            </div>
        </div>    
            `;
        return document.querySelector('#main_container').appendChild(cardDiv);
    }
}