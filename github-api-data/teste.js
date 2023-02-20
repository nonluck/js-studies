var languages = [
{ language: "Python", usability: 16664 },
{ language: "JavaScript", usability: 1831 },
{ language: "CSS", usability: 1318 },
{ language: "HTML", usability: 1215 },
{language: "HTML", usability: 8224 },
{ language: "CSS", usability: 1665 },
{ language: "Python", usability: 1156 },
{ language: "HTML", usability: 17197 },
{ language: "CSS", usability: 313 },
{ language: "HTML", usability: 23417 },
{ language: "TypeScript", usability: 6130 },
{ language: "JavaScript", usability: 1435 },
{ language: "SCSS", usability: 80 },
{ language: "CSS", usability: 2099 },
{ language: "JavaScript", usability: 1750 },
{ language: "HTML", usability: 1698 }
];
var resumedlanguages = []
var capter = [];
var total = 0;
// Get the Array item which matchs the quantidade "2"
/*
myArray.forEach(element => {
    if (capter.find(item => item.language === element.language)){
        for(let i=0; i < capter.length;i++){
            if(capter[i].language==element.language){
                capter[i].usability += element.usability;
            }
        }
        total += element.usability;
    }else{
        capter.push(element)
        total += element.usability;
    }
})
console.log(capter)
console.log(total)
capter.forEach(element =>{
    const root = document.getElementById("root");
    const child = `<h3>${element.language}</h3><span>${element.usability}</span>`
    root.innerHTML+=child;
})
var num=0;
for(let j=0; j < capter.length; j++){
    num+=capter[j].usability
}
console.log(num)
*/

function datamanager(){
    console.log(languages)
    languages.forEach(element => {
        console.log(element)
        if (resumedlanguages.find(item => item.language === element.language)){
            for(let i=0; i < resumedlanguages.length;i++){
                if(resumedlanguages[i].language==element.language){
                    resumedlanguages[i].usability += element.usability;
                }
            }
            total += element.usability;
        }else{
            resumedlanguages.push(element)
            total += element.usability;
        }
    })
    
}
datamanager()
console.log(resumedlanguages)