const prices = {
    "Почесать спину": 185,
    "Рассказать анекдот": 50,
    "Дать боком": 500
};

const prices_add = {
    "Про Штирлица": 0,
    "Про улитку": 5
};

const not_in_the_post_price = {
    "true": 200,
    "false": 0
};

function priceCheck() {
    let VALUE = 0;
    let radios = document.getElementsByName("r");
    let radio_val = "Почесать спину";

    radios.forEach((radio) => {
        if(radio.checked) {
            radio_val = radio.value;
            let radio_price = prices[radio.value];

            if (radio_price !== undefined) {
                VALUE += radio_price;
            }
        }
    });
  
    let sel = document.getElementById("anecdote_choise");
    sel.style.display = (radio_val == "Рассказать анекдот" ? "block" : "none");
    let selection = document.getElementById("anecdote");
    VALUE += prices_add[selection.value];

    let check = document.getElementById("check");
    check.style.display = (radio_val == "Дать боком" ? "block" : "none");
    document.getElementById("checkbox").checked ? VALUE += 200 : null; 

    let input = document.getElementById("service_count");
    (input.value !== undefined) ?
        /^[0-9]+$/.test(input.value) ? VALUE *= Number(input.value) : null : null;

    document.getElementById("final_price").innerHTML = `${VALUE} Рублей`;
}

function anec() {
    document.getElementById("anecdote").value = "Про Штирлица";
    document.getElementById("checkbox").checked = false;
}

document‎.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    anec();
    
    let radios = document.getElementsByName("r");
    let additionals = document.getElementById("anecdote_choise");
    let additional_select = document.getElementById("anecdote");
    let check = document.getElementById("check");
    let input = document.getElementById("service_count");
    
    additional_select.value="Про Штирлица";
    additionals.style.display = "none";
    check.style.display = "none";

    input.addEventListener("input", () => {
        priceCheck();
    })

    additional_select.addEventListener("change", (event) => {
        priceCheck();
    });

    radios.forEach((radio) => {
        radio.checked = false;
        radio.addEventListener("change", (event) => {
            anec();
            priceCheck();
        })
    });

    document.getElementById("checkbox").addEventListener("change", (event) => {
        priceCheck();
    });
});
