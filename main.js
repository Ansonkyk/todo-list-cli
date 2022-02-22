var prompt = require('prompt-sync')();
const todos = [];
const areTodosComplete = [];
console.log('Use zero to exit')
z=1
while (z==1){
console.log('~ Select an action ~');
console.log('[1] Create a to-do item');
if (todos.length>0){
    console.log('[2] Complete a to-do item');
}

var num=Number(prompt('Please enter the number at the front'));
if (num==0){
    z=0;
}


if (num==1){
    console.log('~ Creating a new to-do item ~');
    temp1=prompt('What is this to-do item called?');
    todos.push(temp1);
    areTodosComplete.push(false);

}else if (num==2 && todos.length>0){
    console.log('~ Completing a to-do item ~');
    temp1=Number(prompt('Which to-do item would you like to complete?'));
    if (temp1>0){
        areTodosComplete[temp1-1]=true
    }

}else if (num==2 && todos.length==0){
    console.log("Empty to do list, please try again")


}else{
    console.log("error please try again");
}
for(let i = 0; i < todos.length; i++){
    j=i+1;
    if (areTodosComplete[i]==true){console.log(j+'. [Completed]'+todos[i])};
    
    
    if (areTodosComplete[i]==false){console.log(j+'. [InCompleted]'+todos[i])};
  }
}