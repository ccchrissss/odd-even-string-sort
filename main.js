function sortMyString(s) {
  
  let evenChars = [],
      oddChars = []


  for (let i = 0; i < s.length; i++) {
    
    if (i % 2 === 0) evenChars.push(s[i])

    if (i % 2 === 1) oddChars.push(s[i])
    
  }

  return `${evenChars.join('')} ${oddChars.join('')}`

}

console.log(sortMyString('hello'))


// params: s    // a string
// return: x    // another string
// e.g. sortMyString('hello')
// results in 'hlo el'

// create two variables, evenChars and oddChars, assign them to empty arrays
// initialize for loop
  // if i is even push that character to evenChars
  // if i is odd then push it to oddChars
// end loop
// return `${evenChars} ${oddChars}`


