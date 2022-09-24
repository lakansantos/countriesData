
import {countries} from './countries.js';


let h2Header = document.querySelector('.header>h2');
h2Header.innerText = `Currently, we have ${countries.length} countries in the world`


const getTop10Population=()=>{
	let populationArr = [];
	let count = 10;


	for(let country of countries){

		populationArr.push({country: country.name, population: country.population})
	}
	
	let sorter = populationArr.sort((a,b)=>b.population - a.population);
	let tallySorter = [];
	for(let i = 0; i<count; i++){
		let container = {country: sorter[i].country, population: sorter[i].population}
		tallySorter.push(container)
	}
	return tallySorter
}




getTop10Population()


let getCountries=()=>{
    let ul = document.querySelector('ul')
    

    let totalPopulation=0;
    let worldPopulation = [];
    for(let i = 0 ; i<countries.length; i++){
        totalPopulation+=countries[i].population
        
    }
    worldPopulation.push(totalPopulation)
        
    
    for(let i = 0; i<10; i++){
        let populationArr = [];
        let count = 10;
 
    for(let country of countries){

        populationArr.push({country: country.name, population: country.population})
    }
    
    let sorter = populationArr.sort((a,b)=>b.population - a.population);
    let tallySorter = [];
    for(let i = 0; i<count; i++){
        let container = {country: sorter[i].country, population: sorter[i].population}
        tallySorter.push(container)
        
    }
    let filteredCountries = ['World']
    for(let i = 0; i<tallySorter.length; i++){
         filteredCountries.push(tallySorter[i].country)
    }
    
    for(let i = 0; i<tallySorter.length; i++){
        worldPopulation.push(tallySorter[i].population)
    }

    let li = document.createElement('li');

    let overallPopulation = worldPopulation[0];

    let totalArr = [];
    let totals = 0;
    for(let i = 0 ; i<10; i++){
        totals=(worldPopulation[i]/overallPopulation) * 100;
        totalArr.push(totals)
    }
   
    
    // let arr =[100, 50, 30, 25, 20, 15, 10, 8, 5, 2]
    let charts = `<div class="charts" style="width: 600px"><p class="chartChild" style="width: ${totalArr[i]}%"></p></div>`
    let countriesCont = `<p class="countriesContainer">${filteredCountries[i]}</p>`
    let worldPopulationCont = `<p class="populationContainer">${worldPopulation[i].toLocaleString()}</p>`
    li.innerHTML = `${countriesCont} ${charts} ${worldPopulationCont} `
    

    ul.appendChild(li)
        
    }


}
getCountries()


let getLanguages = () =>{
    let ul = document.querySelector('ul')
    let languagesArr = [];

    let filteredLanguages = [];
  
   
    countries.map(country=>{
        for(let i = 0; i<country.languages.length; i++){
            if(country.languages.length!==1){
                filteredLanguages.push(country.languages[i])
            }
            if(country.languages.length===1){
                filteredLanguages.push(country.languages[i])
            }
           }
    })
    for(let i = 0; i<10; i++){
    let container = {};

    for(let i = 0; i<filteredLanguages.length; i++){
        let num = filteredLanguages[i]
        if(typeof container[num]==='number'){
            container[num]+=1;
        }
        else{
            container[num]=1;
        }
    }

    let sorter = Object.entries(container).sort((a,b)=> b[1]-a[1])
    
    let tallySorter=[];
    for(let i = 0; i<10; i++){
        let carry={languages: sorter[i][0], counts: sorter[i][1]}
        tallySorter.push(carry)
    }

    let li = document.createElement('li');
    let totalLanguages = Object.entries(container).length
    let totals = 0;
    let totalArr = [];

    for(let i = 0; i<10; i++){
        let counts = tallySorter[i].counts
        totals = (counts/totalLanguages)*100;
        totalArr.push(totals)
    }

    console.log(tallySorter)
    
    
    let charts = `<div class="charts" style="width: 600px"><p class="chartChild" style="width: ${totalArr[i]}%"></p></div>`
    let languagesContainer = `<p class="languagesContainer">${tallySorter[i].languages}</p>`
    let countsContainer = `<p class="countsContainer">${tallySorter[i].counts}</p>`
    li.innerHTML = `${languagesContainer} ${charts} ${countsContainer} `
    ul.appendChild(li)

    }

}



let  toggleButtons = () =>{
    let pToggle = document.querySelector('.toggleContainer > p')
    let btns = document.querySelectorAll('button')
    let h3 = document.querySelector('h3');
    let ul = document.querySelector('ul')


    
    for(let i = 0; i<btns.length; i++){

        btns[i].addEventListener('click',function(){
            let current = document.getElementsByClassName("active");
            ul.innerHTML=''
            if(btns[i]===btns[0]){
                pToggle.innerText = '10 Most populated countries in the World'
                getCountries()
                
            }
            if(btns[i]===btns[1]){
                pToggle.innerText = '10 Most spoken languages in the World'
                getLanguages()
            }

            if(current.length > 0){
                current[0].className = current[0].className.replace(" active", "");
                
            }
 
            this.className += " active";    

        })

    }
}
toggleButtons()



