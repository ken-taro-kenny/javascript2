let result = null;
let equal_flag = false;
let dot_flag = false;
result = document.getElementById('result');

function clear_click(){
  result.value = "0";
  equal_flag = false;
  dot_flag = false;
}

function num_click(input){
  if(equal_flag)
  result.value = "0";
  equal_flag = false;

  if(result.value == "0" && input == "0"){
    result.value = "0";
  }else if(input =="0" && last_input_ope()){
  }else if(result.value == "0" && input == "."){
    result.value = "0.";
  }else if(result.value == "エラー"){
    result.value = input;
  }else if(result.value == "0"){
    result.value = input;
  }else{
    result.value += input;
  }
}

function dot_click(input){
  if(equal_flag)  result.value = "0";
  equal_flag = false;
  
  if(dot_flag){
  }else if(last_input_ope()){
    result.value += "0.";
  }else if(result.value == "エラー"){
    result.value = "0.";
  }else if(result.value == "0" && input == "."){
    result.value = "0.";
  }else{
    result.value += input;
  }
  dot_flag = true;
}

function ope_click(input){
  if(equal_flag)  equal_flag = false;
  
  if(last_input_ope()){
    result.value = result.value.slice(0, -1) + input;
  }else if(result.value == "エラー"){
  } else {
    result.value += input;
  }
  dot_flag = false;
}

function equal_click(){
  if(last_input_ope())  result.value = result.value.slice(0, -1);

  let final_result = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(final_result == Infinity || Number.isNaN(final_result)){
    result.value = "エラー";
  }else{
    result.value = final_result;
    equal_flag = true;
  }
  dot_flag = false;
}

function last_input_ope(){
  return ["+","-","×","÷"].includes(result.value.slice(-1));
}