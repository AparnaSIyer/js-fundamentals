const btn = document.getElementById('btnDemo');
console.log(btn);

btn.addEventListener('click', () => {
    let mydate;

    for (let i = 0; i < 10000000; i++) {
        mydate = new Date();
    }

    console.log(mydate);

    let p = document.createElement('p');
    p.textContent = 'Added paragraph after calculating 10 million dates';
    document.body.appendChild(p);
});
