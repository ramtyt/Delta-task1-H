var diet=[];
 function addDiet(){
    
    
    let basic={
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        Weight:document.getElementById('Weight').value,
        height:document.getElementById('height').value
    }
   
    diet.push(basic);
    console.warn('added',{diet});
    
    let adv={

        calorie:document.getElementById("calorie").value,
        food:document.getElementById("food").value,
        fat:document.getElementById("fat").value,
        carbs:document.getElementById("carbs").value,
        protein:document.getElementById("protein").value,
        net:document.getElementById("net").value
    }
    diet.push(adv);
    document.getElementById("form1").reset();
    document.getElementById("form2").reset();


    window.localStorage.setItem('details',JSON.stringify(diet));
   


    
}

