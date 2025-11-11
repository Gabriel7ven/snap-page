document.addEventListener("DOMContentLoaded", () => {
    
    function showHide(event){
        let element = event.target
        let equalsChildren = element.parentNode.children // LI elements
        let features = document.getElementById("features")
        let company = document.getElementById("company")
        // console.log(equalsChildren)
        // for(let e of equalsChildren){
        //     console.log(typeof e)
        // }
        

        function hideAll(childList){
            for(let child of childList){
                console.log(child)
                for(let e of child.children){
                    // console.log(e.getAttribute("class"))
                    if(e.getAttribute("class") === "shown"){
                        e.setAttribute("class", "hidden")
                    }
                }
            }
        }

        // function hideAllTwo(childList){
        //     for(let child of childList){
        //         console.log(child)
        //         // if(child.getAttribute("class") === "shown"){
        //         //         child.setAttribute("class", "hidden")
        //         //     }
        //         hideAllTwo(child.children)
        //     }
        // }

        if(searchElement(element, "hidden")){
            hideAll(equalsChildren)
            element.firstElementChild.setAttribute("class", "shown")
            element.lastElementChild.setAttribute("src", "images/icon-arrow-up.svg")
            
        }else if(searchElement(element, "shown")){
            element.firstElementChild.setAttribute("class", "hidden")
            element.lastElementChild.setAttribute("src", "images/icon-arrow-down.svg")
        }
    }
    
    
    

    features.addEventListener("click", showHide)
    company.addEventListener("click", showHide)


    function searchElement(element, ...classes){
        let children = element.children
        for(let e of children){
            if(classes.includes(e.getAttribute("class"))){
                // console.log(...classes)
                return true
            }
        }
    }

    document.addEventListener("click", (e) => {
        let element = e.target
        let children = features.children
        if(!searchElement(element, "shown", "hidden")){
            features.firstElementChild.setAttribute("class", "hidden")
            company.firstElementChild.setAttribute("class", "hidden")
            features.lastElementChild.setAttribute("src", "images/icon-arrow-down.svg")
            company.lastElementChild.setAttribute("src", "images/icon-arrow-down.svg")
        }
    })

})