const s1 = new Student('Manuela','Ariotti');
const s2 = new Student('Damiano','Di lionardo');
const s3 = new Student('Cesare','Falzone');
const s4 = new Student('stefania','ghergut');
const s5 = new Student('ares','fiumicelli');
const s6 = new Student('stefano','florio');
const s7 = new Student('francesca','ercolani');
const s8 = new Student('bryan','rojas');
const s9 = new Student('luca','verducci');
const s10 = new Student('isabella','ottonello');



const class1 = new Classroom([s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]);


// console.log(document);

// console.log(document.getElementById("main-container"))

// const mainContainer = document.getElementById('main-container')

// const h2Element = document.createElement('h2');

// const textNode = document.createTextNode(s1.toString());

// h2Element.appendChild(textNode);

// mainContainer.appendChild(textNode);





function renderPage(){

    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';
    for (let i = 0; i < class1.studentsArray.length; i++){

        if(i % 2 === 0){
            const h3Element = document.createElement('h3');
            const node = document.createTextNode('Coppia:' + (i/2+1) + ': ');
            h3Element.appendChild(node);

            mainContainer.appendChild(h3Element);
        }

        const student = class1.studentsArray[i]

        const pElement = document.createElement('p');
        
        pElement.classList.add('student-p')
        
        const textNode = document.createTextNode(s1.toString());
        
        pElement.appendChild(textNode);
        mainContainer.appendChild(pElement);
    }
}

renderPage();


function shuffle(){
    console.log('sto rimescolando');
    class1.shuffleStudents();
    renderPage();
}

