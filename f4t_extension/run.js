// // chrome.runtime.sendMessage({todo:"showPageAction"});

// interval = setInterval(function () {
//     console.log('total rooms:::', Object.keys((JSON.parse(localStorage['groups:groupMap']))['data']).length);
//     count = 0;
//     all_sup_count = 0;
//     curr_sup_count = 0;

//     data = JSON.parse(localStorage['groups:groupMap'])['data'];
//     for (const [item, value] of Object.entries(data)) {
//         count += Object.keys(value['clients']).length;
//         for (const [item1, value1] of Object.entries(value['clients'])) {
//             all_sup_count += value1['supporter'] ? 1 : 0;
//             if (value1['supporter']) { curr_sup_count += value1['noBadge'] ? 0 : 1; }
//         }
//     };
//     console.log('total audience:::', count);
//     console.log('total supporters:::', all_sup_count);
//     console.log('current supporters:::', curr_sup_count);
// }, 5000);

function curr_users(){
    console.log('total rooms:::', Object.keys((JSON.parse(localStorage['groups:groupMap']))['data']).length);
    count = 0;
    all_sup_count = 0;
    curr_sup_count = 0;

    data = JSON.parse(localStorage['groups:groupMap'])['data'];
    for (const [item, value] of Object.entries(data)) {
        count += Object.keys(value['clients']).length;
        for (const [item1, value1] of Object.entries(value['clients'])) {
            all_sup_count += value1['supporter'] ? 1 : 0;
            if (value1['supporter']) { curr_sup_count += value1['noBadge'] ? 0 : 1; }
        }
    };
    console.log('total audience:::', count);
    console.log('total supporters:::', all_sup_count);
    console.log('current supporters:::', curr_sup_count);
}




// injecting robo::
var roboBtn = document.createElement('div')
roboBtn.className = '_robo__Button'
roboBtn.innerHTML = `<img id="icon" class="btn-icon" src="https://c.tenor.com/0VVpuOV8ZmQAAAAi/o2-o2robot.gif" alt="https://www.free4talk.com/favicon.ico"></img> <p class="text">Free4talk Bot</p>`
roboBtn.style.display = 'none'
document.body.appendChild(roboBtn)


// making it draggable
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  };

  dragElement(document.getElementsByClassName("_robo__Button")[0]);


//   click on robobtn

document.getElementsByClassName("_robo__Button")[0].addEventListener("dblclick", curr_users);

// drag or click:
let drag = false;
document.getElementsByClassName("_robo__Button")[0].addEventListener(
    'mousedown', () => drag = false);

document.getElementsByClassName("_robo__Button")[0].addEventListener(
    'mousemove', () => drag = true);

document.getElementsByClassName("_robo__Button")[0].addEventListener(
    'mouseup', () => 
        drag ? null : bot_size());


// func to resize

document.getElementsByClassName("_robo__Button")[0].ondblclick = function() {
  if (this.offsetHeight == 378 & this.offsetWidth == 411 & this.offsetLeft == 1110 & this.offsetTop == 409) {
    // this.style.height = 500 + "px";
    // this.style.position= 'fixed';
    // this.style.bottom= 5+ 'px';
    // this.style.right= 5+ 'px';
    // this.style.z-index= 10;
    this.style.top= 713+ 'px';
    this.style.left= 1370+ 'px';
  }
  else{
    this.style.top= 409+ 'px';
    this.style.left= 1110+ 'px';
  }
};

function bot_size(){
  let element = document.getElementsByClassName("_robo__Button")[0]
  if (element.offsetHeight < 200 || element.offsetWidth < 200) {
    // this.style.height = 500 + "px";
    // element.style.position= 'fixed';
    // element.style.bottom= 5+ 'px';
    // element.style.right= 5+ 'px';
    // this.style.z-index= 10;
    element.style.top= 409+ 'px';
    element.style.left= 1110+ 'px';
  }
}



// chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
//   if (message === 'showBot'){
//     bot_size()

//   }
//   return true;

// });