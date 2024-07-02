//Getting all the elements with the given id's
let del = document.getElementById("del");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let write_me = document.getElementById("type");
let result = document.getElementById("result");
//Getting the buttons
let btn_0 = document.getElementById("ze");
let btn_00 = document.getElementById("db_ze");
let btn_1 = document.getElementById("on");
let btn_2 = document.getElementById("tw");
let btn_3 = document.getElementById("th");
let btn_4 = document.getElementById("four");
let btn_5 = document.getElementById("five");
let btn_6 = document.getElementById("six");
let btn_7 = document.getElementById("sev");
let btn_8 = document.getElementById("eig");
let btn_9 = document.getElementById("nin");
let btn_plus = document.getElementById("plus");
let btn_minus = document.getElementById("subt");
let btn_divide = document.getElementById("div");
let btn_multiply = document.getElementById("mult");
let btn_period = document.getElementById("per");
let btn_perc = document.getElementById("perc");

//EventListner's on the following button's
btn_0.onclick = () => {
  type_to(0);
};
btn_00.onclick = () => {
  type_to("00");
};
btn_1.onclick = () => {
  type_to(1);
};
btn_2.onclick = () => {
  type_to(2);
};
btn_3.onclick = () => {
  type_to(3);
};
btn_4.onclick = () => {
  type_to(4);
};
btn_5.onclick = () => {
  type_to(5);
};
btn_6.onclick = () => {
  type_to(6);
};
btn_7.onclick = () => {
  type_to(7);
};
btn_8.onclick = () => {
  type_to(8);
};
btn_9.onclick = () => {
  type_to(9);
};
btn_plus.onclick = () => {
  type_to("+");
};
btn_period.onclick = () => {
  type_to(".");
};
btn_minus.onclick = () => {
  type_to("-");
};
btn_multiply.onclick = () => {
  type_to("*");
};
btn_divide.onclick = () => {
  type_to("/");
};
btn_perc.onclick = () => {
  type_to("%");
};
//Function EventListner's
clear.onclick = () => {
  clear_screen();
};
del.onclick = () => {
  del_screen();
};

//Code for keyEvents for accessing the buttons via keyboard buttons
document.onkeyup = (e) => {
  if (e.key == "0" || e.key == "Num0") {
    type_to(0);
  } else if (e.key == "1" || e.key == "Num1") {
    type_to(1);
  } else if (e.key == "2" || e.key == "Num2") {
    type_to(2);
  } else if (e.key == "3" || e.key == "Num3") {
    type_to(3);
  } else if (e.key == "4" || e.key == "Num4") {
    type_to(4);
  } else if (e.key == "5" || e.key == "Num5") {
    type_to(5);
  } else if (e.key == "6" || e.key == "Num6") {
    type_to(6);
  } else if (e.key == "7" || e.key == "Num7") {
    type_to(7);
  } else if (e.key == "8" || e.key == "Num8") {
    type_to(8);
  } else if (e.key == "9" || e.key == "Num9") {
    type_to(9);
  } else if (e.key == "+" || e.key == "Num+") {
    type_to("+");
  } else if (e.key == "-" || e.key == "Num-") {
    type_to("-");
  } else if (e.key == "/" || e.key == "Num/") {
    type_to("/");
  } else if (e.key == "*" || e.key == "Num*") {
    type_to("*");
  } else if (e.key == "." || e.key == "Num.") {
    type_to(".");
  } else if (e.key == "%" || e.key == "Num/") {
    type_to("%");
  } else if (e.key == "Enter" || e.key == "Numenter") {
    calculate();
  } else if (e.key == "Delete") {
    clear_screen();
  } else if (e.key == "Backspace") {
    del_screen();
  }
};

//Function for getting the final result
equal.onclick = () => {
  calculate();
};

//Code for the recent calculatation result
let type_to = (text) => {
  if (write_me.innerText == "") {
    write_me.innerText = text;
  } else if (write_me.innerText.length <= 23) {
    write_me.innerText = write_me.innerText + text;
  } else {
    alert("Digit Limit reached");
  }
};

//Function to calculate final result with error handling
function calculate() {
  try {
    let res = write_me.innerText;
    result.innerHTML = eval(res);
  } catch (error) {
    result.innerText = "Error";
  }
}

//Function to clear the display
function clear_screen() {
  write_me.innerText = "";
  result.innerText = "";
}

//Function to delete the number
function del_screen() {
  write_me.innerText = write_me.innerText.slice(
    0,
    write_me.innerText.length - 1
  );
}
