const newColourBtnElement = document.getElementById(
    'new-colour-btn'
);

const currentColourElement = document.getElementById(
    'current-colour'
);

//0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

const hexValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];

function getRandomHexValue(){
    const randomIndexPosition = Math.floor(Math.random() * hexValues.length)
    const randomHexaValue  = hexValues[randomIndexPosition]

    return randomHexaValue;
}

function getRandomHexString(stringlength) {
    let hexString = '';
    for (let i=0; i< stringlength; i++) {
        hexString += getRandomHexValue();
        
    }

    return hexString;
}


newColourBtnElement.addEventListener('click' , function (){
    
    const randomHexString = '#' + getRandomHexString(6);
    
    document.body.style.setProperty(
        'background-color',
        randomHexString   
    );

    currentColourElement.textContent = randomHexString;
   
});