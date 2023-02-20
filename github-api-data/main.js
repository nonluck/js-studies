
var total=0;
var resumedlanguages=[];
var languages=[];
function resetvalues(){
    total=0;
    resumedlanguages=[];
    anguages=[];
}
function counterusability(data){
    if (resumedlanguages.find(item => item.language === data.language)){
        for(let i=0; i < resumedlanguages.length;i++){
            if(resumedlanguages[i].language==data.language){
                resumedlanguages[i].usability += data.usability;
            }
        }
        total += data.usability;
    }else{
        resumedlanguages.push(data)
        total += data.usability;
    }
}

async function get_names(name){
    return fetch(`https://api.github.com/users/${name}/repos`)
}
async function language_for_repo(user, repo){
    (await fetch(`https://api.github.com/repos/${user}/${repo}/languages`)).json()
    .then(res =>{set_languages(res)})

}

function set_languages(lang){
    
    Object.keys(lang).forEach(element => {
        const aux = {language:`${element}`,usability:lang[element]}
        languages.push(aux);
        counterusability(aux)
        
    }
    )
    
}

function search_diretory(user,answer){
    answer.forEach(element => {
        language_for_repo(user,element.name)
    })
}

function sendName(){
    const user = document.getElementById("name").value
    document.getElementById("name").value = ''
    get_github(user)
}

async function get_github(user){
    //const user = "HanielCostaDaSilva";
    resetvalues();
    let aux = (await get_names(user)).json()
    await aux.then(total =>{search_diretory(user,total)})
    .catch(e => console.log(e+"deu ruim"))
    loadingPages();
    setTimeout(function() {
        showData(user);
      }, 500);
}

function showData(user){
    const root = document.getElementById("root")
    root.innerHTML = `<div id="user">${user}</div>`;
    resumedlanguages.forEach(content =>{
        console.log(content)
        let aux = root.innerHTML;
        const aux2 = `<div >${content.language} : ${(content.usability/total*100).toFixed(2)}%</div>`
        aux+=aux2;
        root.innerHTML = aux;
    })
}

function loadingPages(){
    const loading = `<div> <i class="fa fa-spinner"></i></div>`
    document.getElementById("root").innerHTML = loading;
}

//https://api.github.com/repos/nonluck/competitive-programming/languages