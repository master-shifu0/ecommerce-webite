// OBJECTS
const openMenu = document.getElementById("open-menu")
const closeMenu = document.getElementById("close-menu")
const slideBar = document.querySelector(".slide-bar")
const slideLinks = document.querySelectorAll(".navlink")
const overFlow = document.getElementById("overflow")
const cartImg = document.getElementById("cart-img")
const cartInfo = document.querySelector(".cart-info")
const logo = document.querySelector(".logo")
// add and minus
const add = document.querySelector(".add")
const minus = document.querySelector(".minus")
const count = document.querySelectorAll(".count-number")
const cartCount = document.querySelector(".cart-count")
const finalPrice = document.querySelector(".final-price")
// cart
const cartNotEmpty = document.querySelector(".cart-not-empty")
const checkoutButton = document.querySelector(".checkout")
const cartEmpty = document.querySelector(".empty-cart")
// nextAndPrevious
const next = document.querySelector(".next")
const previous = document.querySelector(".previous")
const mainImage = document.querySelector(".big-image")

// FUNCTIONS
let mainImgCount = 0
function displayImage(count){
    let src = "images/image-product-" + (((mainImgCount + count)%4)+1) + ".jpg"
    mainImage.setAttribute('src', src)
    mainImgCount++
}


function displayBlock(element) {
    if (element.classList.contains('display-block')) {
        element.classList.remove('display-block')
    } else {
        element.classList.add('display-block')
    }
}


function openSlide() {
    slideBar.classList.add("slide-bar-open")
    slideLinks.forEach(link => {
        link.classList.add("navlink-open")
    })
    overFlow.classList.add('full-page')
}

function closeSlide() {
    slideBar.classList.remove("slide-bar-open")
    slideLinks.forEach(link => {
        link.classList.remove("navlink-open")
    })
    overFlow.classList.remove('full-page')

}
// LOGIC AND STUFF
openMenu.addEventListener("click", openSlide)

closeMenu.addEventListener("click", closeSlide)

cartImg.addEventListener("click", () => {
    displayBlock(cartInfo)
})

minus.addEventListener("click", function () {
    count.forEach(element => {
        if (element.textContent != 0) {
            element.textContent--
        }
        if (cartCount.textContent == 0) {
            cartCount.classList.remove("display-block")
            cartEmpty.classList.add('display-block')
            cartEmpty.classList.remove('display-none')
            cartNotEmpty.classList.add("display-none")
            checkoutButton.classList.add("display-none")
        }
        finalPrice.textContent = " $" + 125 * Number(cartCount.textContent)
    });
})

add.addEventListener("click", function () {
    count.forEach(element => {
        element.textContent++
    });
    cartNotEmpty.classList.add("display-block")
    cartNotEmpty.classList.remove("display-none")
    cartEmpty.classList.remove('display-none')
    cartEmpty.classList.add("display-none")
    cartCount.classList.add("display-block")
    checkoutButton.classList.add("display-block")
    checkoutButton.classList.remove("display-none")

    finalPrice.textContent = " $" + 125 * Number(cartCount.textContent)
})

next.addEventListener("click", function () {
    displayImage(1)
})
previous.addEventListener("click", function () {
    displayImage(-1)
})