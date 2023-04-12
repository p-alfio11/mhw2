/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
/*Tutte le funzioni*/

let vettorescelte=[];
function quizcompleto(){
    const article=document.querySelector("article");
    const div=document.createElement('div');
    div.classList.add("result");
    const h1=document.createElement('h1');
    const p=document.createElement('p');
    const bottone=document.createElement("button");
    bottone.classList.add("bottone");
    bottone.addEventListener("click",ricomincia);
    bottone.textContent="Ricomincia Quiz";
    const ris=personalita();
    if(ris==0){
        h1.textContent=RESULTS_MAP[vettorescelte[1]]["title"];
        p.textContent=RESULTS_MAP[vettorescelte[1]]["contents"];
    }else{
        h1.textContent=RESULTS_MAP[ris]["title"];
        p.textContent=RESULTS_MAP[ris]["contents"];
    }
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(bottone);
    article.appendChild(div);
    
}
function personalita(){
    if (vettorescelte[0]==vettorescelte[1]||vettorescelte[0]==vettorescelte[2])
    {
        return vettorescelte[0];
        
    }else{
        if(vettorescelte[1]==vettorescelte[2]){
            return vettorescelte[1];
        }else{
            return vettorescelte[0];
        }

    }
}
function changestate(vettore,state){

    
    
        for(o of vettore)
        {
            console.log("Aggiungo opaco");
            console.log(o);
            
            o.removeChild(o.lastElementChild);
            const image=document.createElement('img');
            image.className="checkbox";
            image.src="images/unchecked.png";
            o.appendChild(image);
            o.classList.remove("selezionato")
            o.classList.add("opaco");
        }
        
    
    
}
function onclick(contenitore)
{
    
    contenitore.removeChild(contenitore.lastElementChild);  
    
    const image=document.createElement('img');
    image.className="checkbox";
    image.src="images/checked.png";
    contenitore.appendChild(image);
}
function Domanda(event)
{
    const contenitore=event.currentTarget;
    const ndomanda=contenitore.dataset.questionId;
    
    

    
    switch (ndomanda)
    {
        case "one":
            vettorescelte[0]=contenitore.dataset.choiceId;
            console.log("prima scelta"+vettorescelte[0]);
            break;
        case "two":
            vettorescelte[1]=contenitore.dataset.choiceId;
                console.log("seconda scelta"+vettorescelte[1]);
            break;
        case "three":
            vettorescelte[2]=contenitore.dataset.choiceId;
                console.log("terzascelsta"+vettorescelte[2]);
            break;
    }
    const quadri=document.querySelectorAll('[data-question-id='+ndomanda+']');/*selezioniamo tutte le risposte della domanda scelta*/
    
    
    if(vettorescelte.length==3 && vettorescelte[0]!=null&& vettorescelte[1]!=null)
    {
        for(const o of quadri){
            console.log("Sto rimuovendo eventlistener tutti gli event listner");
            o.removeEventListener("click",Domanda)
            
          

        }
        quizcompleto();
    }

        
    
    changestate(quadri,true);
   
    contenitore.classList.remove("opaco");
    contenitore.classList.add("selezionato")
    console.log(quadri);
  
    onclick(contenitore,true);
    

}

function ricomincia(){
    console.log("clicco ricominci");
    const cosi= document.querySelectorAll(".choice-grid div");
    for(const button of cosi )
    {
        button.addEventListener("click",Domanda);
        
    }
    for(const c of cosi){
        c.removeChild(c.lastElementChild);  
    
        const image=document.createElement('img');
        image.className="checkbox";
        image.src="images/unchecked.png";
        c.appendChild(image);
        c.classList.remove("opaco");
        c.classList.remove("selezionato");
    }
    const article=document.querySelector("article");
    article.removeChild(article.lastElementChild);
    vettorescelte=[];
    
}


/*fine funzioni*/
const buttons = document.querySelectorAll(".choice-grid div");
for(const button of buttons )
{
    button.addEventListener("click",Domanda);
}
