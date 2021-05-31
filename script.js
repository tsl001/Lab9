class OutputError extends Error{
constructor(message){
    super(message);
    this.name = "OutputError";
}
}

let calculateBtn = document.querySelector('#calculate');
calculateBtn.addEventListener('click', () => {
let output = document.querySelector('output');
let firstNum = document.querySelector('#first-num').value;
let secondNum = document.querySelector('#second-num').value;
let operator = document.querySelector('#operator').value;
output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
// TODO - Make buttons functional
errorBtns.forEach(btn => {
btn.addEventListener('click',() => {

    try{
    let output = document.querySelector('output');
    const label = "Label started";
    if(btn.innerHTML == 'Console Log Demo'){
        console.log(output.innerHTML);
    }else if(btn.innerHTML == 'Console Error Demo'){
        console.error(output.innerHTML);
    }else if(btn.innerHTML == 'Console Dir'){
        console.dir(document);
    }else if(btn.innerHTML == 'Console dirxml'){
        console.dirxml(output);
    }else if(btn.innerHTML == 'Console Group Start'){
        console.group(label);
    }else if(btn.innerHTML == 'Console Group End'){
        console.groupEnd(label);
    }else if(btn.innerHTML == 'Console Table'){
        console.table([
        {
            firstNum: document.querySelector('#first-num').value,
            secondNum: document.querySelector('#second-num').value,
            operator: document.querySelector('#operator').value,
            outputVal: output.innerHTML
        }
        ]);
    }else if(btn.innerHTML == 'Start Timer'){
        console.time();
    }else if(btn.innerHTML == 'End Timer'){
        console.timeEnd();
    }else if(btn.innerHTML == 'Console Trace'){
        const firstNum = () => {
        console.log(document.querySelector('#first-num').value);
        operatorSign();
        };

        const operatorSign = () => {
        console.log(document.querySelector('#operator').value);
        secondNum();
        };

        const secondNum = () => {
        console.log(document.querySelector('#second-num').value);
        outputVal();
        };

        const outputVal = () => {
        console.log(output.innerHTML);
        console.trace();
        }

        firstNum();
    }else if(btn.innerHTML == 'Trigger a Global Error'){
        calculateBtn.addEventListener('click', () => {
        let output = document.querySelector('output');
        output.innerHTML = "error";
        });
        output.innerHTML = "error"
    }

    if(output.innerHTML == "error"){
        throw new OutputError("Output value error");
    }
    }catch(err){
    window.onerror = err;
    console.error(err.message);
    console.error(err.name);
    console.error(err.stack);
    }

    console.log(window.onerror);
});
});


TrackJS.track('Testing TrackJS!');                 
