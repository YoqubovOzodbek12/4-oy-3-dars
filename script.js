let form = document.querySelector('.form')
let btn = document.querySelector('.btn')
let list = document.querySelector('.list')
let listcars = document.querySelector('.listcars')

let cars = [
    {
        name: "Mers",
        narxi: 45000,
        yili: 2022,
    },
    {
        name: "BWN",
        narxi: 75000,
        yili: 2015,
    }, {
        name: "Chevrolet",
        narxi: 1000,
        yili: 1975,
    },
    {
        name: "Qalesiz",
        narxi: 1000,
        yili: 1975,
    },

]

let result = '';

for (const i of cars) {
    result += "<li>" + i.name + "</li>"
}

list.innerHTML = result;

function func() {
    let inp = document.querySelector('.inp').value;
    cars.map((item) => item.name)
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].name.toUpperCase() == inp.toUpperCase()) {
            console.log(cars[i].name);
            listcars.innerHTML = "<p>" + cars[i].name + "</p>" + "<p>" + cars[i].narxi + "</p>" + "<p>" + cars[i].yili + "</p>"
            document.querySelector('.inp').value = ''
            return ''
        } else if (inp == '') {
            listcars.innerHTML = "Malumot kiriting bratan "
        }
        else {
            listcars.innerHTML = "Bu moshina uzbekistonda yoqda oka .😂😂"
        }
    }
    document.querySelector('.inp').value = ''
}


