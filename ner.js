
const yargs = require("yargs").argv


const gen = (a) => {
    if(a.length == 3){
        if(a[0].includes(".") || a[1].includes(".") || a[2].includes(".")){
            if(a[2].includes(".")){
                console.log(false)
            };
             if(a[1].includes(".")){
                let m = a[1].split(".");
                if(m[0].length != 1){
                    console.log(false)
                }else{
                    if(a[0].includes(".")){
                        let i = a[0].split(".");
                        if(i.length != 1){
                            console.log(false)
                        }else{
                            console.log(true)
                        }
                    }
                }
            }else if(a[0].includes(".")){
                console.log(false)
            
            }
        }else{
            console.log(true)
        }
        console.log(a[2])
        console.log(3)

    };
    if(a.length == 2){
        if(a[1].includes(".")){
            console.log(false)
        }else{
            if(a[0].includes(".")){
            let p = a[0].split(".")
                    if(p[0].length != 1){
                        console.log(false)
                    }else{
                        console.log(true)
                    }
        }else{
            console.log(true)
        }
        console.log(2)
    }
        
    }; 
    if(a.length == 1){
        console.log(false)
        console.log(1)

    }else{
        
    }

}
console.log(gen(yargs._))