const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let arr = [];
buttons.forEach((item) => {
  item.onclick = () => {

    arr.push(item.classList.value)

    // AC
    if (item.id == "AC") {
      display.innerText = "";
    }
    
    // .
    else if (item.id == "."){

      // character before don't be opreator
      if(arr[arr.length -2] != "btn-operator"){

        // must be one "." character
        let index = display.innerText.indexOf("."); 
        if(index == -1){
          display.innerText += item.id;
        }
      }
    } 
    
    // DE
    else if (item.id == "DE") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    }
    
    else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } 
    
    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
      arr = []
    }
    
    // don't be two oprator next to each other
    else if(arr.length > 1 && arr[arr.length -1] == "btn-operator" && arr[arr.length -1] == arr[arr.length -2]){
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1) + item.id
      arr.pop()
    }

    else {
      display.innerText += item.id;
    }

  };
  
});