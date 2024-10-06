let input = document.querySelector('.input');
let add = document.querySelector('.add');
const task = document.querySelector('.task');
add.addEventListener('click',()=>{
    if(input.value == ''){
        console.log('you want to write something')
    }
    else{
        let string = input.value;
        let time = new Date('23:42');
        let get = time.getTime;
        let create = document.createElement('li');
        create.innerHTML = string+get;
        task.appendChild(create);
        input.value = '';
        
    }

})






