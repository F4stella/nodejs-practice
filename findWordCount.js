const fs = require('fs')

const checkWord = w => {
  let letters = /^[A-Za-z]+$/
  if (w.match(letters)) return true
  return false
}

const findWordCount = path => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {

            let lines = data.toString().split("\n")

            let w = lines.reduce((acc, cur) => {
                let words = cur.split(" ").filter(w => checkWord(w)).map(w=> w.toLowerCase());
                return acc.concat(words)
            }, [])

            let wordCount = w.reduce((acc, cur) => {
                acc[cur] = acc[cur] == undefined ? 1 : acc[cur] + 1;
                return acc
            }, {})
            resolve(wordCount)

            ///object negtgeed ....
        })
    })
}

Promise.all([findWordCount(`./smaller.txt`) , findWordCount(`./smaller.txt`)]).then(e =>{
    // e == [{the:10}, {the:130, of: 2000}] ==> {the: 140}
    let res = e.reduce((acc , cur)=>{
        //cur == {the:10, a: 100}

        let keys = Object.keys(cur) // ['the', 'a']
        acc = keys.reduce((w, w1) => {
            w[w1] = w[w1] == undefined ? cur[w1] : w[w1] + cur[w1];
            return w
        }, acc)
        return acc

    }, {})
    console.log(res['the'])

})

// findWordCount(`smaller.txt`).then(e=>{
//     console.log(e)
// })


