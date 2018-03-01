chrome.runtime.onMessage.addListener(function(request, sender) {
  
  if (request.action == "getFamilyTree") {
    if (request.response.error) {
      
      document.getElementById('error').innerText = request.response.error.replace('Error', 'Hata');
      document.getElementById('errorField').style.display = 'block';
    } else {
      document.getElementById('myLabel').innerText = request.response.name;
      document.getElementById('myId').value = request.response.id;
      document.getElementById('id').value = request.response.id;
      document.getElementById('soy').value = request.response.soy;
      document.getElementById('edevletactive').style.display = 'block';
    }
  }
});


function compareItems(a, b) {
  if (a.timestamp > b.timestamp) {
    return -1;
  } else if (a.timestamp < b.timestamp) {
    return 1;
  }
  return 0;
}

function onWindowLoad() {
  
  var form = document.getElementById('myform');
  form.addEventListener('click', handleSubmit);
  
  var notice = document.getElementById('edevlet');
  var errorMessage = document.getElementById('error');
  var errorField = document.getElementById('errorField');
  
  window.items = [];
  window.itemsById = {};
  
  chrome.storage.sync.get(null, (items) => {
    console.log(items);
    if (!chrome.runtime.lastError && items) {
      console.log('uuu',items);
      window.itemsById = items;
      window.items = [];
      keys = Object.keys(items);
      for (var i = 0; i < keys.length; ++i) {
        var item = items[keys[i]];
        var id = keys[i];
        window.items.push({id: id, name: item.name, timestamp: item.timestamp });
      }
      console.log('up', window.items);
      window.items.sort(compareItems);
      console.log(window.items);
    } else {
      window.items = [];
    }
    listOldEntries();
    
    chrome.tabs.query({ active: true }, (tabs) => {
      var url = tabs[0].url;  
      console.log('retrieved url', url, url === "https://www.turkiye.gov.tr/nvi-alt-ust-soy-bilgisi-sorgulama");
      if (url === "https://www.turkiye.gov.tr/nvi-alt-ust-soy-bilgisi-sorgulama") {
        chrome.tabs.executeScript(null, {
          file: "getFamilyTree.js"
        }, function() {
          // If you try and inject into an extensions page or the webstore/NTP you'll get an error
          if (chrome.runtime.lastError) {
            errorMessage.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
            errorField.style.display = 'block';
          }
        });
      } else {
        notice.style.display = 'block';
      }
    });
  });
}

function handleSubmit(e, t) {
  e.preventDefault();
  var button = document.getElementById('submitButton');
  button.setAttribute('disabled', true);
  var form = document.getElementById('myform');
  //e.preventDefault();
  //alert('ep');
  //return false;
  var id = document.getElementById('id').value;
  var name = document.getElementById('myLabel').innerText;
  storeData(name, id).then(() => form.submit() );
}

async function storeData(name, id) {
  var timestamp = Date.now();
  var item = {};
  item[id] = {name: name, timestamp: timestamp};
  await chrome.storage.sync.set(item);
  if (!window.itemsById[id]) {
    window.items.push({ id: id, name: name, timstamp: timestamp });
  }
}

function removeItem(id, row, root) {
  console.log('ccc', id);
  window.items = window.items.filter((item) => item.id !== id);
  window.itemsById[id] = undefined;
  chrome.storage.sync.remove(id, () => {
    root.removeChild(row);
  });
}
  
function listOldEntries() {
  var root = document.getElementById('oldEntries');
  for (var i = 0; i < window.items.length; ++i) {
    var row = window.items[i];
    var url = `http://edevletsoy.cf/soyagaci.php?id=${row.id}`;
    var rowElement = document.createElement('div');
    rowElement.className = "input-group";
    var name = document.createElement('span');
    name.className = "input-group-addon";
    name.innerText = row.name;
    var id = document.createElement('input');
    id.type = 'text';
    id.disabled = true;
    id.value = row.id;
    id.className = "form-control";
    var goButton = document.createElement('a');
    goButton.href = url;
    goButton.target = '_blank';
    goButton.innerText = 'Git';
    goButton.className = "btn btn-success";
    var cancelButton = document.createElement('button');
    cancelButton.innerText = 'X';
    cancelButton.onclick = () => removeItem(row.id, rowElement, root);
    cancelButton.className = "btn btn-danger";
    
    var buttons = document.createElement('div');
    buttons.className = "input-group-btn";
    
    buttons.appendChild(goButton)
    buttons.appendChild(cancelButton);
    
    rowElement.appendChild(name);
    rowElement.appendChild(id);
    rowElement.appendChild(buttons);
    root.appendChild(rowElement);
  }
}
  
window.onload = onWindowLoad;