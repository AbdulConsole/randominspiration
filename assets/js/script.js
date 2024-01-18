//Get random index no
function getRandom(){
    var random = Math.floor(Math.random() * 7) + 1;
    return random;
}

var count = 0;

//Change Quote
function quote(){
    var quotes = [
    "first of all, nothing here",
    "The first thing you learn in life is you're a fool. The last thing you learn in life is you're the same fool.  <br> - Ray Bradbury",
    "When you're curious, you find lots of interesting things to do. - Walt Disney",
    "Life may be full of pain but that's not an excuse to give up. - Arnold Schwarzenegger",
    "How you think is as important as as what you think. - Unknown",
    "You become a worrier by practicing worry. You become free of worry by practicing the opposite. - Norman Vincent Peale",
    "Life is simply what our feelings do to us. - Honore de Balzac",
    "I admire those who do good and expect nothing in return. - Roy T. Bennett"
    ];
    
    
    var para =document.getElementById("para");
    var btn = document.getElementById("btn");

    if (count !== 3){
        para.innerHTML = count + quotes[getRandom()];
        count++;
        return
    }
    para.innerHTML = "Subscribe to get more quotes.<b> contact: hzwedt@gmail.com</b>";
    btn.innerHTML = "Subscribe Now"
    btn.type = "text"
    btn.style.backgroundColor = "#ddd";
    btn.style.border = "2px solid #ee6352";
}



