/**********************
* Truthy and falsy
*/

//falsy values are: undefined, null, 0, '', NaN
//truthy vals: all the rest

var height = 23;

// Zero counts as undefined?!
if(height || height === 0){
    console.log('Var is defined');
}else{
    console.log('Variable has NOT been defined');
}

//Equalit operators
if(height == '23')
    console.log("True, because of type coercion");
if(height === '23')
    console.log("Does not go true");


