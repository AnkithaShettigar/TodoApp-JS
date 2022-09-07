function toggle(){
    var popup = document.getElementById('popup');
    popup.classList.toggle('active'); 
    document.getElementsByClassName('container')[0].style.filter = "blur(5px)";

    
}
function addTask(){
    popup.classList.toggle('active'); 
    document.getElementsByClassName('container')[0].style.filter = "blur(5px)";
    
}


const taskList = [];
    document.getElementById("push").addEventListener('click',
    function (){

    
    const name = document.getElementById("name").value;
    
    const tempObj = {
        id:Date.now(),
        taskname:name
    }
    taskList.push(tempObj);
    if(name === '')
    {
        $("#blur").show();
        return
    }
    else
    {
        addTaskonscreen(); 
    }
});
function addTaskonscreen() {
    document.getElementById("name").value = "";

    const element = document.createElement("div");
    element.setAttribute("class", "child");
    
    element.innerText = taskList[taskList.length - 1].taskname;
    const existingelement = document.getElementById("parent");
    existingelement.appendChild(element);

    const hr_line = document.createElement("hr");
    element.appendChild(hr_line);
    
    const ultag = document.createElement("ul");
    element.appendChild(ultag);

    const task_del = document.createElement("img");
    task_del.setAttribute("src", "trash.png");
    task_del.classList.add("delete-button");
    task_del.setAttribute("onclick", "deleteCard(this)");
    element.appendChild(task_del);

    const task_add = document.createElement("img");
    task_add.setAttribute("src", "plus.png");
    task_add.classList.add("add-button");
    task_add.setAttribute("onclick", "addItems()");
    element.appendChild(task_add);
    document.getElementById("text-empty").style.display = "none";
    
    


    //add new item
    document.getElementById('addbtn').addEventListener('click',
  
    function(){
    const secondinput = document.getElementById('name1').value;
    
    document.getElementById("name1").value = "";

     //create element
    const addsbtn = document.createElement('li');
    const donebtn = document.createElement('button');
    donebtn.setAttribute("id","change");

    donebtn.innerText = "Mark Done";
    addsbtn.innerText = secondinput;

    addsbtn.style.color="red";
    addsbtn.style.fontSize="15px";
    const ul = document.querySelector('ul');

    //appending created element 
    ul.appendChild(addsbtn);
    ultag.appendChild(addsbtn);
    ultag.appendChild(donebtn);
    // ultag.appendChild(addsbtn)
    
    

    //adding functionality to the button
    donebtn.addEventListener('click',
    function(){
        addsbtn.style.textDecoration = "line-through";
      });
    });
    
  }

  //delete card
  let deleteCard = (e) => {
    e.parentElement.remove();
    const noCards = document.getElementsByClassName("child").length;
    if(!noCards){
        $("#text-empty").show();
    }
  };

 function addItems(){
    var popup1 = document.getElementById("popup1");
    popup1.classList.toggle('active1');
 }
 function closeTask(){
    popup1.classList.remove('active1');  
    
}
