var languages=[]
async function get_names(name){
    return fetch(`https://api.github.com/users/${name}/repos`)
}
async function language_for_repo(user, repo){
    (await fetch(`https://api.github.com/repos/${user}/${repo}/languages`)).json()
    .then(res =>{set_languages(res)})

}
function set_languages(lang){
    console.log(lang);
    languages.push(lang);console.log(languages);
}

function search_diretory(user,answer){
    var listName=[]
    answer.forEach(element => {
        language_for_repo(user,element.name)
    });
}
async function get_github(){
    const user = "HanielCostaDaSilva";
    let aux = (await get_names(user)).json()
    aux.then(total =>{search_diretory(user,total)})
}
     
console.log(get_github())



//https://api.github.com/repos/nonluck/competitive-programming/languages