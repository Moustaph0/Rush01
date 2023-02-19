function displayCaracter(n){
  
    for(let i=1;i<=n/2;i++){
        if(i%2!=0){
            console.log('A');
            console.log('B')
        }else{
            console.log('A');
            console.log('C');
        }
    }
    if(n%2 != 0){console.log('A')}
}
displayCaracter(12);

module.exports = displayCaracter

