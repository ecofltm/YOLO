const addons = [
    { id: 'addon1', name: 'Creamy Biscoff', price: 10, imgSrc: 'img/1.png' },
    { id: 'addon2', name: 'Chocolate Sauce', price: 10, imgSrc: 'img/2.png' },
    { id: 'addon3', name: 'Matcha Sauce', price: 10, imgSrc: 'img/3.png' },
    { id: 'addon4', name: 'Strawberry Jam', price: 10, imgSrc: 'img/4.png' },
    { id: 'addon5', name: 'Peach', price: 10, imgSrc: 'img/5.png' },
    { id: 'addon6', name: 'Dragonfruit', price: 10, imgSrc: 'img/6.png' },
    { id: 'addon7', name: 'Strawberries', price: 10, imgSrc: 'img/7.png' },
    { id: 'addon8', name: 'Mango', price: 10, imgSrc: 'img/8.png' },
    { id: 'addon9', name: 'Oreos', price: 10, imgSrc: 'img/9.png' },
    { id: 'addon10', name: 'Crushed Grahams', price: 10, imgSrc: 'img/10.png' },
    { id: 'addon11', name: 'Brownies', price: 10, imgSrc: 'img/11.png' },
    { id: 'addon12', name: 'Choco Chip Cookies', price: 10, imgSrc: 'img/12.png' },
    { id: 'addon13', name: 'Strawberry Popping Boba', price: 10, imgSrc: 'img/13.png' },
    { id: 'addon14', name: 'Almonds', price: 10, imgSrc: 'img/14.png' },
    { id: 'addon15', name: 'Cashew', price: 10, imgSrc: 'img/15.png' },
    { id: 'addon16', name: 'Pumpkin Seed', price: 10, imgSrc: 'img/16.png' },
    { id: 'addon17', name: 'Cranberries', price: 10, imgSrc: 'img/17.png' }
];

const images = [
    {id: 'base1', src: 'img/b1.png', title: 'Banana Mango Base', price: 75, addons: addons},
    {id: 'base2', src: 'img/b2.png', title: 'Apple Berry Base', price: 75, addons: addons},
    {id: 'base3', src: 'img/b3.png', title: 'Mixed Berries Base', price: 75, addons: addons},
    {id: 'base4', src: 'img/b4.png', title: 'Frozen Yogurt Base', price: 75, addons: addons},
    {id: 'base5', src: 'img/b5.png', title: 'Berry Smoothie Base', price: 75, addons: addons}
];
const cart = [];
let isCartSummaryVisible = false;
let currentIndex = 0;
let cartVisible = false;
 
const baseQuantityContainer = document.createElement('div');
const baseDecreaseButton = document.createElement('button');
const baseQuantityInput = document.createElement('input');
const baseIncreaseButton = document.createElement('button');
 
baseDecreaseButton.textContent = '-';
baseDecreaseButton.style.padding = '5px 10px';
baseDecreaseButton.style.border = 'none';
baseDecreaseButton.style.backgroundColor = '#FB4983';
baseDecreaseButton.style.color = 'white';
baseDecreaseButton.style.cursor = 'pointer';
baseDecreaseButton.style.fontWeight = 'bold';
baseDecreaseButton.style.height = '30px';
baseDecreaseButton.style.width = '30px';


baseIncreaseButton.textContent = '+';
baseIncreaseButton.style.padding = '5px 10px';
baseIncreaseButton.style.border = 'none';
baseIncreaseButton.style.backgroundColor = '#FB4983';
baseIncreaseButton.style.color = 'white';
baseIncreaseButton.style.cursor = 'pointer';
baseIncreaseButton.style.fontWeight = 'bold';
baseIncreaseButton.style.height = '30px';
baseIncreaseButton.style.width = '30px';
 
baseQuantityInput.type = 'number';
baseQuantityInput.value = 1;
baseQuantityInput.min = 1;
baseQuantityInput.max = 10;

baseQuantityInput.style.width = '40px';
baseQuantityInput.style.height = '30px';
baseQuantityInput.style.textAlign = 'center';
baseQuantityInput.style.border = '1px solid #FB4983';
baseQuantityInput.style.margin = '0 5px' ;
baseQuantityInput.style.fontWeight = 'bold';

baseQuantityInput.style.MozAppearance = 'textfield';
baseQuantityInput.style.WebkitAppearance = 'none';
baseQuantityInput.style.margin = '0';

const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = `
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
`;
document.head.appendChild(styleSheet);



baseQuantityContainer.appendChild(baseDecreaseButton);
baseQuantityContainer.appendChild(baseQuantityInput);
baseQuantityContainer.appendChild(baseIncreaseButton);
document.body.appendChild(baseQuantityContainer);

 
const sliderContainer = document.querySelector('.slider-container');
baseQuantityContainer.appendChild(baseDecreaseButton);
baseQuantityContainer.appendChild(baseQuantityInput);
baseQuantityContainer.appendChild(baseIncreaseButton);
sliderContainer.appendChild(baseQuantityContainer);

baseDecreaseButton.addEventListener('click', () => {
    let currentValue = parseInt(baseQuantityInput.value);
    if (currentValue > parseInt(baseQuantityInput.min)) {
        baseQuantityInput.value = currentValue - 1;
    }
});
 
baseIncreaseButton.addEventListener('click', () => {
    let currentValue = parseInt(baseQuantityInput.value);
    if (currentValue < parseInt(baseQuantityInput.max)) {
        baseQuantityInput.value = currentValue + 1;
    }
});

const cartBtn = document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', () => {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    addToCartBtn.classList.add('clicked');

    setTimeout(() => {
        cartBtn.classList.remove('clicked');
    }, 3000);

const currentImage = images[currentIndex];
const quantity = parseInt(baseQuantityInput.value);
    if (quantity > 0) {
        const selectedAddons = currentImage.addons
            .map(addon => {
                return {
                    name: addon.name,
                    quantity: parseInt(addon.quantityInput.value),
                    price: addon.price,
                    imgSrc: addon.imgSrc
                };
            })
            .filter(addon => addon.quantity > 0);
        let addonsText = selectedAddons.map(addon => `${addon.quantity} x ${addon.name}`).join(', ');
        if (addonsText) {
            addonsText = ` with add-ons: ${addonsText}`;
        } else {
            addonsText = ' with no add-ons';
        }     
        cart.push({
            base: currentImage,
            baseQuantity: quantity,
            addons: selectedAddons
        });
        baseQuantityInput.value = 1;
        currentImage.addons.forEach(addon => {
            addon.quantityInput.value = 0;
        });
    } 
    localStorage.setItem('cart', JSON.stringify(cart));
});
 
document.addEventListener('DOMContentLoaded', () => {
    updateImage();
});

function updateImage() {
    const currentImage = images[currentIndex];
    sliderImg.src = currentImage.src;
    sliderImg.id = currentImage.id;

    baseQuantityInput.value = 1;

    const titleElement = document.getElementById('image-name');
    const priceElement = document.getElementById('image-amount');
    if (titleElement && priceElement) {
        titleElement.textContent = currentImage.title;
        priceElement.textContent = "Price: ₱" + currentImage.price;
    }
    const addonContainer = document.getElementById('addon-container');
    addonContainer.innerHTML = '';

    currentImage.addons.forEach(addon => {
        const addonDiv = document.createElement('div');
        const addonImg = document.createElement('img');
        const addonInfoDiv = document.createElement('div');
        const addonDetailsDiv = document.createElement('div');
        const addonName = document.createElement('span');
        const addonPrice = document.createElement('span');
        const quantityControls = document.createElement('div');
        const decreaseButton = document.createElement('button');
        const quantityInput = document.createElement('input');
        const increaseButton = document.createElement('button');
            
        addonDiv.classList.add('addon-container');
        addonInfoDiv.classList.add('addon-info');
        addonDetailsDiv.classList.add('addon-details');
        quantityControls.classList.add('quantity-controls');
        addonImg.src = addon.imgSrc;
        addonImg.alt = addon.name;
        addonImg.style.width = '90px';
        addonImg.style.height = '80px';

        addonName.textContent = addon.name;
        addonName.classList.add('addon-name');
        addonPrice.textContent = '₱' + addon.price;
        addonPrice.classList.add('addon-price');

        decreaseButton.textContent = '-';
        increaseButton.textContent = '+';

        quantityInput.type = 'number';
        quantityInput.value = 0;
        quantityInput.min = 0;
        quantityInput.max = 10;

        decreaseButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > parseInt(quantityInput.min)) {
                quantityInput.value = currentValue - 1;
            }
        });

        increaseButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue < parseInt(quantityInput.max)) {
                quantityInput.value = currentValue + 1;
            }
        });

        addonDetailsDiv.appendChild(addonName);
        addonDetailsDiv.appendChild(addonPrice);
        addonInfoDiv.appendChild(addonImg);
        addonInfoDiv.appendChild(addonDetailsDiv);
        addonDiv.appendChild(addonInfoDiv);

        quantityControls.appendChild(decreaseButton);
        quantityControls.appendChild(quantityInput);
        quantityControls.appendChild(increaseButton);
        addonDiv.appendChild(quantityControls);

        addonContainer.appendChild(addonDiv);

        addon.quantityInput = quantityInput;
    });
}

const viewCartButton = document.getElementById('view-cart-button');
const cartSummary = document.getElementById('cart-summary');
const overlay = document.getElementById('overlay');
const alerDiv = document.getElementById('alert');

viewCartBtn.addEventListener('click', () => {
    const cartSummaryContainer = document.getElementById('cart-summary-container');
    cartVisible = !cartVisible;
 
    if (cartVisible) {
        displayCartSummary();
        cartSummaryContainer.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        cartSummaryContainer.style.display = 'none';
        overlay.style.display = 'none';
    }
    cartSummaryContainer.classList.add('pop-up');
});

function displayCartSummary() {
    const cartSummaryContainer = document.getElementById('cart-summary-container');
    cartSummaryContainer.innerHTML = '';
 
    const titleElement = document.createElement('div');
    titleElement.classList.add('cart-summary-title');
    titleElement.textContent = 'Cart Summary';
    cartSummaryContainer.appendChild(titleElement);
 
    let totalAmount = 0;
 
    const cartTable = document.createElement('table');
    cartTable.classList.add('cart-table');
 
    const tbody = document.createElement('tbody');
 
    cart.forEach((item, index) => {
        const baseRow = document.createElement('tr');
        baseRow.classList.add('base-row');
 
        const baseImgCell = document.createElement('td');
        const baseImg = document.createElement('img');
        baseImg.src = item.base.src;
        baseImg.alt = item.base.title;
        baseImg.classList.add('base-img');
        baseImgCell.appendChild(baseImg);
        baseRow.appendChild(baseImgCell);
        baseImg.style.width ='25px';
        baseImg.style.height = '50px';
 
        const nameCell = document.createElement('td');
        nameCell.textContent = item.base.title;
        baseRow.appendChild(nameCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.baseQuantity;
        baseRow.appendChild(quantityCell);
 
        const amountCell = document.createElement('td');
        amountCell.textContent = `₱${item.base.price}`;
        baseRow.appendChild(amountCell);
 
        const baseTotal = item.base.price * item.baseQuantity;
        const baseTotalAmountCell = document.createElement('td');
        baseTotalAmountCell.textContent = `₱${baseTotal}`;
        baseRow.appendChild(baseTotalAmountCell);
 
        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.classList.add = ('remove-button');
        const removeIcon = document.createElement('i');
        removeIcon.classList.add('fas', 'fa-trash-alt');
        removeButton.appendChild(removeIcon);

        removeButton.addEventListener('click', () => {
            cart.splice(index, 1);
            displayCartSummary();
        });
        removeCell.appendChild(removeButton);
        baseRow.appendChild(removeCell);
 
        tbody.appendChild(baseRow);
        if (item.addons.length > 0) {
            item.addons.forEach(addon => {
                const addonRow = document.createElement('tr');
                addonRow.classList.add('addon-row');
 
                const addonImgCell = document.createElement('td');
                const addonImg = document.createElement('img');
                addonImg.src = addon.imgSrc;
                addonImg.alt = addon.name;
                addonImg.classList.add('addon-img');
                addonImgCell.appendChild(addonImg);
                addonRow.appendChild(addonImgCell);
 
                const addonNameCell = document.createElement('td');
                addonNameCell.textContent = addon.name;
                addonRow.appendChild(addonNameCell);
 
                const addonQuantityCell = document.createElement('td');
                addonQuantityCell.textContent = addon.quantity;
                addonRow.appendChild(addonQuantityCell);
 
                const addonAmountCell = document.createElement('td');
                addonAmountCell.textContent = `₱${addon.price}`;
                addonRow.appendChild(addonAmountCell);
 
                const addonTotalAmountCell = document.createElement('td');
                addonTotalAmountCell.textContent = `₱${addon.price * addon.quantity}`;
                addonRow.appendChild(addonTotalAmountCell);
 
                const emptyCell = document.createElement('td');
                addonRow.appendChild(emptyCell);
 
                tbody.appendChild(addonRow);
            });
        }
 
        const addonsTotal = item.addons.reduce((acc, addon) => acc + addon.price * addon.quantity, 0);
        totalAmount += baseTotal + addonsTotal;
    });
 
    cartTable.appendChild(tbody);
    cartSummaryContainer.appendChild(cartTable);
 
    const totalAmountDiv = document.createElement('div');
    totalAmountDiv.classList.add('total-amount');
    totalAmountDiv.textContent = `Total Amount: ₱${totalAmount}`;
    cartSummaryContainer.appendChild(totalAmountDiv);
 
    
    const checkoutButton = document.createElement('button');
    checkoutButton.classList.add('checkout-button');
    checkoutButton.textContent = 'Check Out';
    checkoutButton.addEventListener('click', () => {
        const alertDiv = document.getElementById('alert');
        if (cart.length > 0) {
            window.location.href = 'checkout.html';
        } else {
            alertDiv.classList.add('show');
            alertDiv.classList.remove('hide');
            alertDiv.classList.add('showAlert');
            setTimeout(() => {
                alertDiv.classList.remove('show');
                alertDiv.classList.add('hide');
            }, 2000);
            
        }
        cartSummaryContainer.appendChild(alertDiv);  
    });

    
    
    cartSummaryContainer.appendChild(checkoutButton);
    cartSummaryContainer.style.display = 'block';

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = ('Close');
    closeButton.addEventListener('click', () => {
        cartSummaryContainer.style.display = 'none';
        overlay.style.display = 'none';            
    });
    cartSummaryContainer.appendChild(closeButton);
}
 
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderImg = document.getElementById('slider-img');

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
 
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});
updateImage();