function updatePrice() {
    
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }
    
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");
    
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "3" ? "none" : "block");
  
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
    
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = price + " рублей";
  }
  
  function getPrices() {
    return {
      prodTypes: [100, 200, 150],
      prodOptions: {
        option2: 10,
        option3: 5,
      },
      prodProperties: {
        prop1: 1,
        prop2: 2,
      }
    };
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {
 
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";

    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = "none";
    
    let s = document.getElementsByName("prodType");
    let select = s[0];

    select.addEventListener("change", function(event) {
      let target = event.target;
      console.log(target.value);
      updatePrice();
    });
    
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    });
   
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice();
      });
    });
  
    updatePrice();
  });
  
/*const prices = {
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

document.addEventListener("DOMContentLoaded", (event) => {
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
*/
