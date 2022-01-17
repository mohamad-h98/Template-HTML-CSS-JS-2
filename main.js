// select Element

let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results >span");
let theInput = document.getElementById("the-input");


allSpans.forEach(span => {

    span.addEventListener("click", (e) => {

        if (e.target.classList.contains("check-item")) {
            checkItem();
        }


        if (e.target.classList.contains("add-item")) {
            addItem();
        }


        if (e.target.classList.contains("delete-item")) {
            deleteItem();
        }

        if (e.target.classList.contains("show-item")) {
            showItem();
        }


    });
});



function showMessage() {
    results.innerHTML = 'Input Cant Be Empty';
}



function checkItem() {
    // !== يعني لو الاعنصر لايساوي هذا ,,,فأذا
    if (theInput.Value !== ''){

        if (localStorage.getItem(theInput.value)) {

            results.innerHTML = `Found Local Storge Item Called <span>${theInput.value}</span>`;

        }else {

            results.innerHTML = `No Local Storge Item With The Name <span>${theInput.value}</span>`;
        }

    }else{

        showMessage()
    }
}




function addItem() {
    // !== يعني لو الاعنصر لايساوي هذا ,,,فأذا
    if (theInput.Value !== ''){

        localStorage.setItem(theInput.value, "Test") ;

            results.innerHTML = `Local Storge Item Called <span>${theInput.value}</span> Is Added`;

            theInput.value = '';

        

    }else{

        showMessage()
    }
}




function deleteItem() {
    // !== يعني لو الاعنصر لايساوي هذا ,,,فأذا
    if (theInput.Value !== ''){

        if (localStorage.getItem(theInput.value)) {

            localStorage.removeItem(theInput.value);

            results.innerHTML = `Local Storge Item Called <span>${theInput.value}</span>Deleted`;

            theInput.value = '';

        }else {

            results.innerHTML = `No Local Storge Item With The Name <span>${theInput.value}</span>`;
        }


    }else{

        showMessage()
    }}




function showItem() {
    
    if (localStorage.length) {

        results.innerHTML = '';

        for (let [key, value] of Object.entries(localStorage)) {

            results.innerHTML+= `<span class="keys">${key}</span>`;

        }
    }else{
        results.innerHTML = 'Local Storge Is Impty';
    }


}




