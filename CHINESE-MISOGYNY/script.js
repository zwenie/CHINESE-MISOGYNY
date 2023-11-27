
const height = document.querySelector("#height span"); 
const width = document.querySelector("#width span"); 
  
// Insert values on load of page 
window.onload = function() { 
    height.innerHTML = window.innerHeight; 
    width.innerHTML = window.innerWidth; 
}; 
  
// Change values when window is resized 
window.onresize = function() { 
  
    // Setting the current height & width 
    // to the elements 
    height.innerHTML = window.innerHeight; 
    width.innerHTML = window.innerWidth; 
};    
         boxElem = document.querySelector('#box') 

let resizeObserver = new ResizeObserver((entries) => { 
    for (entry of entries) { 

        // get the height and width of the element 
        console.log('Height: ', entry.contentRect.height); 
        console.log('Width:', entry.contentRect.width); 
    } 
}); 

// observe the given element for changes 
resizeObserver.observe(boxElem); 

boxElem = document.querySelector('#box') 

let resizeObserver = new ResizeObserver((entries) => { 
for (entry of entries) { 

// get the height and width of the element 
console.log('Height: ', entry.contentRect.height); 
console.log('Width:', entry.contentRect.width); 
} 
}); 

// observe the given element for changes 
resizeObserver.observe(boxElem); 

function handleResize() {
    // Check if the screen width is 800px
    if (window.innerWidth === 900) {
        // Trigger the print function
        window.print();
    }
}

// Attach the handleResize function to the resize event
window.addEventListener('resize', handleResize);

// Initial check on page load
handleResize();
