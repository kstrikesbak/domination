function setsImageWithIdToHaveUrl(id,url) {
    const newImage = document.querySelector(id)
    newImage.src = url; 
}

const newUrl = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
setsImageWithIdToHaveUrl("#image-1",newUrl);
setsImageWithIdToHaveUrl("#image-2",newUrl);
setsImageWithIdToHaveUrl("#image-3",newUrl);

function putsALineThroughText() {
    const newElement = document.querySelector('#arguments li:first-child');
    newElement.style.textDecoration = 'line-through';
}

putsALineThroughText()

function removeTheLastLi() {
    const newElement = document.querySelector('li:last-child');
    newElement.remove();
    
}

removeTheLastLi()

// works for text only...
// function takesInNodeElementAndAppendsIt(element) {
//     const newUl = document.querySelector('#arguments');
//     const newLi = document.createElement('li');
//     newLi.appendChild(document.createTextNode(element));
//     newUl.appendChild(newLi);
// }

// takesInNodeElementAndAppendsIt('TEST');


function takesInNodeElementAndAppendsIt(myImage) {
    const newUl = document.querySelector('#arguments');
    const newLi = document.createElement('img');
    newLi.appendChild(document.createElement(myImage))
    newUl.appendChild(newLi);
}
myImage.setAttribute("src", "https://ak9.picdn.net/shutterstock/videos/32738299/thumb/1.jpg");
takesInNodeElementAndAppendsIt(myImage);




function takeInImageAndMakesIt30Pixels(img) {
    const changeHeight = document.createElement(img);
    changeHeight.style.height = '30px';
}
const monkeyURL = "http://cdn01.cdn.justjaredjr.com/wp-content/uploads/headlines/2015/04/monkey-king-clip.jpg"
takeInImageAndMakesIt30Pixels(monkeyURL);




function makesElementDisappear (element) {
    const cloak = document.querySelector(element);
    cloak.style.visibility = 'invisible';
}

makesElementDisappear(h1);




function setsTheThingWithThatIdToHaveThatSizeForText (size,id) {
    const AdjustId = document.querySelector(id);
    // no idea

}
