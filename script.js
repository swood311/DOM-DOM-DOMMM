document.addEventListener('DOMContentLoaded', function () {
    const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];
    const btn = document.createElement("button");
    const btnTextNode = document.createTextNode('Add Square');
    btn.className = "button";
    btn.appendChild(btnTextNode);
    document.body.appendChild(btn);
    let id = 0;

    btn.addEventListener('click', function () {
        id++;
        let div = document.createElement('div');
        div.className = "square"
        div.id = 'id'
        let mouseOver = document.createElement('mouseOver');
        let divTextNode = document.createTextNode(id);
        mouseOver.appendChild(divTextNode)
        div.appendChild(mouseOver)
        document.body.appendChild(div)
        mouseOver.style.opacity = '0'


        div.addEventListener("mouseenter", hoverOver)
        function hoverOver() {
            mouseOver.style.opacity = "1"
        }

        div.addEventListener("mouseleave", hoverOff)
        function hoverOff() {
            mouseOver.style.opacity = "0";
        }
        div.addEventListener('click', changeFontColor)
        function changeFontColor(element) {
            const randomNum = Math.floor((Math.random() * colorArray.length));
            element.style.color = colorArray[square];
        }
        div.addEventListener('dblclick', clickSquares) 
            function clickSquares(){
            if (div.id % 2 === 0) {
                let elementID = parseInt(div.id) + 1;
                let element = document.getElementById(elementID);
                if (element === null) {
                    alert("This square" + elementID + "does not exist.")
                } else {
                    element.parentNode.removeChild(element);
                }
            } else {
                let elementID = parseInt(div.id) - 1;
                let element = document.getElementById(elementID);
                if (element === null) {
                    alert("This square" + elementID + "does not exist.")

                } else {
                    element.parentNode.removeChild(element)
                }
            }
        })
    })


    function changeFontColor(element) {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        element.style.color = colorArray[div];
    }
    
})