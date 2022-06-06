
function downloadAll()
{
    console.log("DOWNLOAD STARTED");
    document.getElementById("rozwin").click();
    let links = [];
    $( 'table.obj a' ).each( (idx, el) => {
        
        var linkToPdf = el.getAttribute("data-href");
        links.push(linkToPdf);
    });
    chrome.runtime.sendMessage(links);
    console.log("DOWNLOAD COMPLETED");
}


var a = document.createElement("a");
a.appendChild(document.createTextNode("SCIAGNIJ"));
document.getElementById("rozwin").removeAttribute("href");
a.addEventListener("click", ()=>{downloadAll();})

document.getElementById("rozwin").parentNode.appendChild(document.createTextNode(" / "));
document.getElementById("rozwin").parentNode.appendChild(a);
