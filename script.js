




let containerAnime = document.createElement("div")
containerAnime.setAttribute("class","container")
let rowAnime = document.createElement("div");
rowAnime.setAttribute("class","row")


async function animeFetch (){

    let anime = await fetch ("https://anime-facts-rest-api.herokuapp.com/api/v1")
    let animeData = await anime.json()
    console.log(animeData);
    try {
        if (Response ==200){
            throw new Error ("Not found pls check the url")
        }
        for (let i=0;i<animeData.data.length;i++){
            
            async function animeFetchFact(){
                let animeF = await fetch (`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeData.data[i].anime_name}`)
                let animeFData = await animeF.json()
                try {
                    if (Response == 200) {
                        throw new Error ("Not found pls check the url")
                    }
                    console.log(animeFData);


                    let colAnime = document.createElement("div");
                    colAnime.setAttribute("class","col-md-12");
                    

                    let dAnime = document.createElement("div");
                    dAnime.setAttribute("class","HI-anime");
                    dAnime.innerHTML=`
                    <div class="anime-title">${animeData.data[i].anime_id}. ${animeData.data[i].anime_name}</div>
                    <img src="${animeData.data[i].anime_img}" class="anime-image" alt="">
                    `
                    let title=document.createElement("div")
                    title.setAttribute("class","anime-title")
                    title.innerHTML="FACTS"

                    let factCol = document.createElement("p")
                    factCol.setAttribute("class","anime-facts")
                    for (let i=0;i<animeFData.data.length;i++){
                    
                    factCol.innerHTML+=`${animeFData.data[i].fact_id}. ${animeFData.data[i].fact}<br><br>`

                   }
                   title.append(factCol)
                   colAnime.append(dAnime,title)
                   rowAnime.append(colAnime)
                } catch (error) {
                    console.log(error)
                }
                
                
                } animeFetchFact()



               
            
        }
    } catch (error) {
        console.log(error)
    }  
    // let dDog = await dog
}
animeFetch()
containerAnime.append(rowAnime);
document.body.append(containerAnime)


