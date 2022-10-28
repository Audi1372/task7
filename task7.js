let xhr = new XMLHttpRequest;
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = () => {
    let data = JSON.parse(xhr.response);
        // console.log(data)

    //1. Get all the countries from the Asia continent /region using the Filter function

                let filtercontry1 = data.filter((ele) => ele.region == 'Asia')
                filtercontry1.map((data1) => {
                    console.table(`
                                ${data1.name}--${data1.region}`)
                    // console.table(data1.name.common ,data1.region)
                })
                console.log(filtercontry1)




    //  2. Get all the countries with a population of less than 2 lakhs using Filter function

                // let filterCountry2 = data.filter((ele1) => ele1.population > 200000)
                // filterCountry2.map((data2) => {
                //     console.table(`
                //                 ${data2.name}---${data2.region}---${data2.population}`
                //                  )
                // })

                // console.log(filterCountry2)


    // 3.Print the following details name, capital, flag using forEach function
                // data.forEach(ele2 => {
                //      console.table(`${ele2.name}  ---   ${ele2.capital} ---   ${ele2.flags.png}`)                            
                // })

    
    
     // 4. Print the total population of countries using reduce function
            //     let population=data.map((ele)=> {return ele.population})
            //         console.table(population)
            //     let poplationSum=population.reduce((acc,ele)=>acc+ele,population[0])
            //         console.log(`totalpopulation:${poplationSum}`)

            //  output:totalpopulation:7799656343

    
    // 5. Print the country which uses US Dollars as currency.
     const filtercountry4 = data.filter((data1) => { data1.currencies[0].code == 'USD'})
         console.log(filtercountry4)

}