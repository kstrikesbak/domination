function setsImageWithIdToHaveUrl(id,url) {
    const newImage = document.querySelector(id)
    newImage.src = url; 
}

const newUrl = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
setsImageWithIdToHaveUrl("#image-1",newUrl);
setsImageWithIdToHaveUrl("#image-2",newUrl);
setsImageWithIdToHaveUrl("#image-3",newUrl);

function 
