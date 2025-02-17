document.addEventListener("DOMContentLoaded", function(){
    // for (начало; условие; шаг) {
    //     // код, который выполняется на каждой итерации
    // }
    
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }    

    let p = 1;
    while (p <= 6){
        console.log(p);
        p++
    }


    const button = document.getElementById("changeImg");
    const image = document.getElementById("image");

    const images = [
        "img/flo.png",
        "img/pi.png",
        "img/ring.png",
        "img/Star.png",
    ];

    let currentIndex = 0;

    // currentIndex - Свойство позволяет устанавливать 
    // и получать индекс текущего элементa

    button.addEventListener("click", function(){
        currentIndex = (currentIndex + 1) % images.length;
        // Свойство length хранит количество ячеек в массиве
        image.src = images[currentIndex];
    });


    let section = document.querySelector(".section1");
    const but = document.getElementById("generate");

    but.addEventListener("click", function() {
        section.innerHTML = "";

        for(let v = 1; v <= 24; v++){
            let newBox = document.createElement("div");
            // Метод createElement позволяет создать новый элемент, 
            // передав в параметре имя тега
            newBox.classList.add("box");
            newBox.textContent = v;
            section.appendChild(newBox);
            // Метод appendChild позволяет вставить 
            // в конец какого-либо другой элемент
            console.log("created boxes");
        }
    });



});