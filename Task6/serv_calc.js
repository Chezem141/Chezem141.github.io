const prices = {
    "Почесать спину": 185,
    "Рассказать анекдот": 50,
    "Дать боком": 500,
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
    }
    );
  
    let sel = document.getElementById("anecdote_choise");
    sel.style.display = (radio_val == "Рассказать анекдот") ? "block" : "none";
    let selection = document.getElementById("anecdote");

    let check = document.getElementById("check");
    check.style.display = (radio_val == "Дать боком" ? "block" : "none");

    let input = document.getElementById("service_count");
    (input.value !== undefined) ?
        /^[0-9]+$/.test(input.value) ? VALUE *= Number(input.value) : null : null;

    document.getElementById("final_price").innerHTML = `${VALUE} Рублей`;
}
