import { myShoes } from "./myshoes.mjs";
console.log(myShoes);


const displaymenuitems = document.getElementById('shoes');

function displayItems(data) {
    console.log(data)
    myShoes.forEach(x => {
        console.log(x)

        const myItemContainer = document.createElement('div')
myItemContainer.className =
  "border border-black rounded-xl text-center bg-neutral-700 shadow-lg overflow-hidden"

// --- Image ---
const myPhoto = document.createElement('img')
myPhoto.src = x.imagePath
myPhoto.alt = x.name
myPhoto.className = "w-full block object-cover"

        // --- Title ---
        const myTitle = document.createElement('h2')
        myTitle.className = "text-lg mx-1 text-white"
        myTitle.innerHTML = x.name

        // --- View Button ---
        const myLearnBtn = document.createElement('button')
        myLearnBtn.innerText = "View"
        myLearnBtn.className = "border border-mygrey-50 rounded-full shadow-lg text-sm px-4 py-1 m-4 cursor-pointer bg-neutral-200 text-black font-semibold tracking-wide"

        myLearnBtn.addEventListener('click', (e) => showStuff(x))

        myItemContainer.appendChild(myPhoto)
        myItemContainer.appendChild(myTitle)
        myItemContainer.appendChild(myLearnBtn)

        displaymenuitems.appendChild(myItemContainer)
    })
} // end loop
// end function

displayItems(myShoes);

const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myclose = document.querySelector('#mydialog button')
myclose.addEventListener("click", () => mydialog.close())

const myphoto = document.querySelector('#photo')
const mydesc = document.querySelector('#desc')
const mybrand = document.querySelector('#brand')
const myyear = document.querySelector('#year')
const myprice = document.querySelector('#price')
const mysizerange = document.querySelector('#size-range')


// populate the popup dialog box
function showStuff(x) {
    mytitle.innerHTML = x.name
    myphoto.src = x.imagePath
    myphoto.className = "w-full rounded"
    mydesc.innerHTML = x.description

    mybrand.innerHTML = `Brand: <span class="text-gray-800">${x.brand}</span>`
    myyear.innerHTML = `Released: <span class="text-gray-800">${x.yearReleased}</span>`
    myprice.innerHTML = `Price: <span class="text-gray-800">${x.price}</span>`

    mysizerange.innerHTML = `<span class="text-gray-800">${x.sizeRange}</span>`

    mydialog.showModal()
}
