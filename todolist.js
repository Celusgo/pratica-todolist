import readlineSync from 'readline-sync';

const todoList = [];
const actions = ['add', 'list', 'check', 'remove'];

function startList(){
    while(true){
        const index = readlineSync.keyInSelect(actions, 'Choose your action');

        if (actions[index] === 'add'){
            todoList.push("🔴 " + readlineSync.question("What would you like to add?"));
        }
        
        if(actions[index] === 'list'){
            todoList.length === 0? console.log("No items yet!") : readlineSync.keyInSelect(todoList, "This is your list!");
        }

        if(actions[index] === 'check'){
            if (todoList.length !==0){
                const choice = readlineSync.keyInSelect(todoList, "What do you want to check/uncheck?");
            todoList[choice].includes("🔴") ? todoList[choice] = "🟢" + todoList[choice].substring(1) : todoList[choice] = "🔴" + todoList[choice].substring(1);
            }
            else{
                console.log("No items yet!");
            }
        }

        if(actions[index] === 'remove'){
            if(todoList.length !== 0){
                todoList.splice(readlineSync.keyInSelect(todoList, "What do you want to remove?"),1);
            }
            else{
                console.log("Nothing to remove yet!");
            }
        }

        if(index === -1){
            return;
        }
    }
}

startList();

