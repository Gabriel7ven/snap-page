document.addEventListener("DOMContentLoaded", () => {
    
    let features = document.getElementById("features") // LI
    let company = document.getElementById("company")   // LI
    let closeMenu = document.getElementById("close-menu")
    let hamburguerMenu = document.getElementById("hamburguer-menu")
    let winShadowed = document.getElementById("win-shadowed")

    features.addEventListener("click", showHide)
    company.addEventListener("click", showHide)
    closeMenu.addEventListener("click", hideMenu)
    hamburguerMenu.addEventListener("click", showMenu)

    document.addEventListener("click", (e) => {
        let element = e.target
        if(!searchElement(element, "hidden", "shown")){ 
            hideAll(features.firstChild) // A
        }
    })


    function showHide(event){
        let element = event.target
        if(searchElement(element, "hidden")){
            hideAll(element)
            searchElement(element, "hidden").setAttribute("class", "shown")
            searchElement(element,"arrow").setAttribute("src", "images/icon-arrow-up.svg")
        }else if(searchElement(element, "shown")){
            searchElement(element, "shown").setAttribute("class", "hidden")
            searchElement(element,"arrow").setAttribute("src", "images/icon-arrow-down.svg")
        }
    }



    function hideMenu(){
        document.querySelector(".header-right").style.display = "none"
        document.getElementById("win-shadowed").style.display = "none"
        document.getElementById("hamburguer-menu").style.display = "block"
        
    }

    function showMenu(){
        document.querySelector(".header-right").style.display = "flex";
        winShadowed.style.display = "block"
    }



    function hideAll(element){ // A
        let liElements = element.parentNode.parentNode.children // LI elements of main UL
        for(let li of liElements){
            let elementChild = searchElement(li.firstChild, "shown")
            let findArrow = searchElement(li.firstChild,"arrow")
            if(elementChild){
                elementChild.setAttribute("class", "hidden")
            }
            if(findArrow){
                findArrow.setAttribute("src", "images/icon-arrow-down.svg")
            }
        }
    }

// ----------------------------------------------------------
   // Verifica se há, no mesmo nível, algum elemento com a classe especificada

    function searchElement(element, ...classes){
        let children = element.parentNode.children
        for(let e of children){
            if(classes.includes(e.getAttribute("class"))){
                return e
            }
        }
        return false
    }


})