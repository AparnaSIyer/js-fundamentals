// function loadAsset(url, type, callback) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.responseType = type;
//     xhr.onload = function () {
//         callback(xhr.response);
//     };
//     xhr.send();
// }
// function displayImage(blob) {
//     let objectUrl = URL.createObjectURL(blob);
//     console.log(objectUrl);

//     let img = document.createElement('img');
//     img.src = objectUrl;
//     console.log(img);
//     document.body.appendChild(img);
// }

// loadAsset('https://picsum.photos/200/300', 'blob', displayImage);

// //Array.prototype.forEach() is a  callback function but it is synchronous

//1.
console.log('started');
let img;
fetch('https://picsum.photos/200/300')
    .then((response) => {
        console.log('it worked');
        return response.blob();
    })
    .then((myBlob) => {
        let objectUrl = URL.createObjectURL(myBlob);
        img = document.createElement('img');
        img.src = objectUrl;
        document.body.appendChild(img);
    })
    .then(() => {
        console.log('Done displayed');
    })
    .catch((error) => {
        console.log('There has been an error ', error.message);
    });

//2 .

console.log('Registering click handler');

let btn = document.getElementById('btnDemo');
btn.addEventListener('click', () => {
    console.log('Oh hey! Clicked');
});
console.log('Done !');
