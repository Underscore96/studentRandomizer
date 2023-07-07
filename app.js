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

console.log(s1.toString());




const class1 = new Classroom([s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]);

class1.shuffleStudents()

console.log(class1.getSquads());

