
 var maze = {
     patternArray : [],
     mouseClick : false,
     truePattern : [],
     createMaze : function(n){
         var element = document.getElementById("container");
         var width = 50 ;
         element.style.width = width * n + (10*(n+n+2))+"px";
         for (var i = 1; i <= n; i++) {
             for (var j = 1; j <= n; j++) {
                 element.appendChild(this.createElement("" + i + j))
             }
         }
     },
     createElement : function(id){
         var element = document.createElement('div');
         element.id = id;
         element.innerText = id;
         element.className = "maze";
         element.onmousedown = this.doSomething.bind(this);
         element.onmousemove = this.doSomething.bind(this);
         element.onmouseup = this.over.bind(this);
         return element;
     },
     doSomething: function (event) {
         if (event.type === "mousedown") {
             this.mouseClick = true;
         }
         if (this.mouseClick) {
             var num = parseInt(event.target.innerText);
             if (num) {
                 if (this.patternArray.indexOf(num) == -1) {
                     this.patternArray.push(num);
                     event.target.style.backgroundColor = "#a1a1a1";
                 }
             }
         }
     },
     over: function () {
         console.log(this.patternArray);
         this.mouseClick = false;
         if (this.truePattern.length == 0) {
             this.truePattern = this.patternArray;
             this.patternArray = [];
             document.getElementById("container").innerText = "";
             this.createMaze(3);

         } else {
             if (this.truePattern.toString() === this.patternArray.toString()) {
                 alert("match")
             } else {
                 alert("not");
             }
         }
     }
  }




 maze.createMaze(3);