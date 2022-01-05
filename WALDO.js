const whereisWaldo = (a) =>{
    let col = 0;
    let row = 0;
    
    for(let i = 0;i < a.length;i++){

       row = row + 1;
       if(a[i].includes("WALDO")){
        for(let j = 0; j < a[i].length;j++){
           
           col = col + 1
            if(a[i][j] == "WALDO"){
                
                console.log([row , col])
                
              
            }else{
                
            }
          }
        }
    }

}
whereisWaldo([
    ["A" , "A" , "A"],
    ["A" , "A" , "A"],
    ["A" , "A" , "A"],
    ["A" , "A" , "A"],
    ["A" , "A" , "A"],
    ["A" , "WALDO" , "A"],
    ["A" , "A" , "A"]
]);