export const renderOffers = (data) => {
    let offers = "";

    const showcaseOffers = document.getElementById("showcaseOffers");

    for (let item of data) {
        offers += `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 gx-4 gy-4">
                <a href="#" class="offer-card ${ item.sold ? 'offer-card-sold' : "" }">
                    <div class="offer-card-img">
                        <img src="${item.image}" alt="${item.make}">
                        ${ item.new ? '<span class="offer-card-label">New</span>' : "" }
                        ${ item.sold ? '<span class="offer-card-label-sold">sold</span>' : "" }
                    </div>
                    <div class="offer-card-descr">
                        <div class="d-flex">
                            <span class="offer-card-year">${item.year}</span>
                            <h6 class="h6 offer-card-h6">
                                ${item.make} ${item.model}
                            </h6>
                        </div>
                        <ul class="d-flex offer-card-specifications">
                            <li class="offer-card-specifications-item">${item.mileage} km</li>
                            <li class="offer-card-specifications-item">${item.transmission}</li>
                            <li class="offer-card-specifications-item">${item.fuel}</li>
                        </ul>
                        <p class="offer-card-price">$${item.price.replace(/\./g, ',')}</p>
                    </div>
                </a>
            </div>`
    }

    showcaseOffers.innerHTML = offers;
};
