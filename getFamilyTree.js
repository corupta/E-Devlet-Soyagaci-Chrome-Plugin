// @author corupta - github.com/corupta
// script to load family data from the following link
// https://www.turkiye.gov.tr/nvi-alt-ust-soy-bilgisi-sorgulama

// https://github.com/xibre/FastMD5
// md5.min.js BEGIN
!function(r){function n(r){for(var n="",t="",o=0,e=0,a=0,i=r.length;i>a;a++){var f=r.charCodeAt(a);128>f?e++:(t=2048>f?String.fromCharCode(f>>6|192,63&f|128):String.fromCharCode(f>>12|224,f>>6&63|128,63&f|128),e>o&&(n+=r.slice(o,e)),n+=t,o=e=a+1)}return e>o&&(n+=r.slice(o,i)),n}function t(r){var n,t;if(r+="",s=!1,v=w=r.length,w>63){for(o(r.substring(0,64)),i(A),s=!0,n=128;w>=n;n+=64)o(r.substring(n-64,n)),f(A);r=r.substring(n-64),w=r.length}for(d[0]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,n=0;w>n;n++)t=3&n,0===t?d[n>>2]=r.charCodeAt(n):d[n>>2]|=r.charCodeAt(n)<<C[t];return d[n>>2]|=h[3&n],n>55?(s?f(d):(i(d),s=!0),f([0,0,0,0,0,0,0,0,0,0,0,0,0,0,v<<3,0])):(d[14]=v<<3,void(s?f(d):i(d)))}function o(r){for(var n=16;n--;){var t=n<<2;A[n]=r.charCodeAt(t)+(r.charCodeAt(t+1)<<8)+(r.charCodeAt(t+2)<<16)+(r.charCodeAt(t+3)<<24)}}function e(r,o,e){t(o?r:n(r));var a=g[0];return u[1]=l[15&a],u[0]=l[15&(a>>=4)],u[3]=l[15&(a>>=4)],u[2]=l[15&(a>>=4)],u[5]=l[15&(a>>=4)],u[4]=l[15&(a>>=4)],u[7]=l[15&(a>>=4)],u[6]=l[15&(a>>=4)],a=g[1],u[9]=l[15&a],u[8]=l[15&(a>>=4)],u[11]=l[15&(a>>=4)],u[10]=l[15&(a>>=4)],u[13]=l[15&(a>>=4)],u[12]=l[15&(a>>=4)],u[15]=l[15&(a>>=4)],u[14]=l[15&(a>>=4)],a=g[2],u[17]=l[15&a],u[16]=l[15&(a>>=4)],u[19]=l[15&(a>>=4)],u[18]=l[15&(a>>=4)],u[21]=l[15&(a>>=4)],u[20]=l[15&(a>>=4)],u[23]=l[15&(a>>=4)],u[22]=l[15&(a>>=4)],a=g[3],u[25]=l[15&a],u[24]=l[15&(a>>=4)],u[27]=l[15&(a>>=4)],u[26]=l[15&(a>>=4)],u[29]=l[15&(a>>=4)],u[28]=l[15&(a>>=4)],u[31]=l[15&(a>>=4)],u[30]=l[15&(a>>=4)],e?u:u.join("")}function a(r,n,t,o,e,a,i){return n+=r+o+i,(n<<e|n>>>a)+t<<0}function i(r){c(0,0,0,0,r),g[0]=y[0]+1732584193<<0,g[1]=y[1]-271733879<<0,g[2]=y[2]-1732584194<<0,g[3]=y[3]+271733878<<0}function f(r){c(g[0],g[1],g[2],g[3],r),g[0]=y[0]+g[0]<<0,g[1]=y[1]+g[1]<<0,g[2]=y[2]+g[2]<<0,g[3]=y[3]+g[3]<<0}function c(r,n,t,o,e){var i,f;s?(r=a((t^o)&n^o,r,n,e[0],7,25,-680876936),o=a((n^t)&r^t,o,r,e[1],12,20,-389564586),t=a((r^n)&o^n,t,o,e[2],17,15,606105819),n=a((o^r)&t^r,n,t,e[3],22,10,-1044525330)):(r=e[0]-680876937,r=(r<<7|r>>>25)-271733879<<0,o=e[1]-117830708+(2004318071&r^-1732584194),o=(o<<12|o>>>20)+r<<0,t=e[2]-1126478375+((-271733879^r)&o^-271733879),t=(t<<17|t>>>15)+o<<0,n=e[3]-1316259209+((o^r)&t^r),n=(n<<22|n>>>10)+t<<0),r=a((t^o)&n^o,r,n,e[4],7,25,-176418897),o=a((n^t)&r^t,o,r,e[5],12,20,1200080426),t=a((r^n)&o^n,t,o,e[6],17,15,-1473231341),n=a((o^r)&t^r,n,t,e[7],22,10,-45705983),r=a((t^o)&n^o,r,n,e[8],7,25,1770035416),o=a((n^t)&r^t,o,r,e[9],12,20,-1958414417),t=a((r^n)&o^n,t,o,e[10],17,15,-42063),n=a((o^r)&t^r,n,t,e[11],22,10,-1990404162),r=a((t^o)&n^o,r,n,e[12],7,25,1804603682),o=a((n^t)&r^t,o,r,e[13],12,20,-40341101),t=a((r^n)&o^n,t,o,e[14],17,15,-1502002290),n=a((o^r)&t^r,n,t,e[15],22,10,1236535329),r=a((n^t)&o^t,r,n,e[1],5,27,-165796510),o=a((r^n)&t^n,o,r,e[6],9,23,-1069501632),t=a((o^r)&n^r,t,o,e[11],14,18,643717713),n=a((t^o)&r^o,n,t,e[0],20,12,-373897302),r=a((n^t)&o^t,r,n,e[5],5,27,-701558691),o=a((r^n)&t^n,o,r,e[10],9,23,38016083),t=a((o^r)&n^r,t,o,e[15],14,18,-660478335),n=a((t^o)&r^o,n,t,e[4],20,12,-405537848),r=a((n^t)&o^t,r,n,e[9],5,27,568446438),o=a((r^n)&t^n,o,r,e[14],9,23,-1019803690),t=a((o^r)&n^r,t,o,e[3],14,18,-187363961),n=a((t^o)&r^o,n,t,e[8],20,12,1163531501),r=a((n^t)&o^t,r,n,e[13],5,27,-1444681467),o=a((r^n)&t^n,o,r,e[2],9,23,-51403784),t=a((o^r)&n^r,t,o,e[7],14,18,1735328473),n=a((t^o)&r^o,n,t,e[12],20,12,-1926607734),i=n^t,r=a(i^o,r,n,e[5],4,28,-378558),o=a(i^r,o,r,e[8],11,21,-2022574463),f=o^r,t=a(f^n,t,o,e[11],16,16,1839030562),n=a(f^t,n,t,e[14],23,9,-35309556),i=n^t,r=a(i^o,r,n,e[1],4,28,-1530992060),o=a(i^r,o,r,e[4],11,21,1272893353),f=o^r,t=a(f^n,t,o,e[7],16,16,-155497632),n=a(f^t,n,t,e[10],23,9,-1094730640),i=n^t,r=a(i^o,r,n,e[13],4,28,681279174),o=a(i^r,o,r,e[0],11,21,-358537222),f=o^r,t=a(f^n,t,o,e[3],16,16,-722521979),n=a(f^t,n,t,e[6],23,9,76029189),i=n^t,r=a(i^o,r,n,e[9],4,28,-640364487),o=a(i^r,o,r,e[12],11,21,-421815835),f=o^r,t=a(f^n,t,o,e[15],16,16,530742520),n=a(f^t,n,t,e[2],23,9,-995338651),r=a(t^(n|~o),r,n,e[0],6,26,-198630844),o=a(n^(r|~t),o,r,e[7],10,22,1126891415),t=a(r^(o|~n),t,o,e[14],15,17,-1416354905),n=a(o^(t|~r),n,t,e[5],21,11,-57434055),r=a(t^(n|~o),r,n,e[12],6,26,1700485571),o=a(n^(r|~t),o,r,e[3],10,22,-1894986606),t=a(r^(o|~n),t,o,e[10],15,17,-1051523),n=a(o^(t|~r),n,t,e[1],21,11,-2054922799),r=a(t^(n|~o),r,n,e[8],6,26,1873313359),o=a(n^(r|~t),o,r,e[15],10,22,-30611744),t=a(r^(o|~n),t,o,e[6],15,17,-1560198380),n=a(o^(t|~r),n,t,e[13],21,11,1309151649),r=a(t^(n|~o),r,n,e[4],6,26,-145523070),o=a(n^(r|~t),o,r,e[11],10,22,-1120210379),t=a(r^(o|~n),t,o,e[2],15,17,718787259),n=a(o^(t|~r),n,t,e[9],21,11,-343485551),y[0]=r,y[1]=n,y[2]=t,y[3]=o}var u=[],d=[],A=[],h=[],l="0123456789abcdef".split(""),C=[],g=[],s=!1,v=0,w=0,y=[];if(r.Int32Array)d=new Int32Array(16),A=new Int32Array(16),h=new Int32Array(4),C=new Int32Array(4),g=new Int32Array(4),y=new Int32Array(4);else{var I;for(I=0;16>I;I++)d[I]=A[I]=0;for(I=0;4>I;I++)h[I]=C[I]=g[I]=y[I]=0}h[0]=128,h[1]=32768,h[2]=8388608,h[3]=-2147483648,C[0]=0,C[1]=8,C[2]=16,C[3]=24,r.md5=r.md5||e}("undefined"==typeof global?window:global);
// md5.min.js END

function hexToBase64(hexstring) {
  // uri safe ( + => - , / => _)
    return btoa(hexstring.match(/\w{2}/g).map(function(a) {
        return String.fromCharCode(parseInt(a, 16));
    }).join("")).replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');;
}

function sensorSurname(surname) {
  if (surname && surname.length > 1) {
    return surname.split('').map((str, i) => (i % Math.max(surname.length - 1, 3) ? '*' : str) ).join('');
    // ABCDEFG => A*****G
  }
  return '';
}

function addChild(families, person, relationship, gender /*true:female*/) {
  if (relationship.length > 0) {
    var childType = relationship[0][0] === 'k' ? 'daughters' : 'sons';
    if (relationship[0].length > 4) {
      var familyToChildren = (acc, family) => acc.concat(family[childType]);
      nextGen = families.reduce(familyToChildren, []);
      addChild(nextGen, person, relationship.slice(1), relationship[0][0] === 'k');
    } else {
      var parentType = gender ? 'mother' : 'father'
      family = families.filter((family) => family.data.name === person[parentType].data.name)[0];
      if (!family[childType]) {
        family[childType] = [];
      }
      family[childType].push({
        data: person.data
      });
    }
  }
}
function addPerson(family, person, relationship) {
  if (relationship.length > 0) {
    var nextGen = {};
    var parentType = 'mother';
    switch(relationship[0].substr(0, 3)) {
      case 'bab':
        parentType = 'father';
      case 'ann':
        if (family[parentType]) {
          nextGen = family[parentType];
        } else {
          family[parentType] = nextGen;
        }
        break;
      case 'ken':
        family.pedigree = { data: person.data };
        return;
      case 'kız':
      case 'oğl':
      case 'ogl':
      case 'kiz':
        addChild([family], person, relationship);
        return;
      default:
        //throw new Error(`empty relationship, ${relationship[0]}, ${relationship[0].substr(0, 3)}`);
        // error if here
    }
    addPerson(nextGen, person, relationship.slice(1));
  } else {
    family.data = person.data;
    if (!family.mother && person.mother.data.name.length > 1) {
      family.mother = person.mother;
    }
    if (!family.father && person.father.data.name.length > 1) {
      family.father = person.father;
    }
  }
}

function mergeChildren(families) {
  for (var i = 0; i < families.length; ++i) {
    var family = families[i];
    var children = [];
    
    if (family.daughters) {
      mergeChildren(family.daughters);
      children = children.concat(family.daughters);
      family.daughters = undefined;
    }
    
    if (family.sons) {
      mergeChildren(family.sons);
      children = children.concat(family.sons);
      family.sons = undefined;
    }
    
    if (children.length > 0) {
      family.children = children;
    }
  }
}

function checkForErrors(document_root) {
  var content = document_root.getElementById('contentStart').children;
  if (content.length === 1) {
    if (content[0].classList.contains('authRequired')) {
      throw new Error("Lütfen e-Devlet'e giriş yapıp tekrar deneyin.");
    } else {
      throw new Error("Lütfen sonuçlar e-Devlet'e geldiğinde bu sayfayı açıp tekrar deneyin.");
    }
  }
  var p = document_root.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0].getElementsByTagName('th');
  var x = [];
  for (var i = 0; i < p.length; ++i) {
    x.push(p[i].innerText);
  }
  if ('["Sıra","C","Yakınlık Derecesi","Adı","Soyadı","Baba Adı","Ana Adı","Doğum Yeri ve Tarihi","İl-İlçe-Mahalle/Köy","Cilt-Hane-Birey Sıra No","Medeni Hali","Durumu"]'
     !== JSON.stringify(x)) {
    throw new Error("Lütfen e-Devlet'e giriş yaptığnızdan ve sonuçların geldiğinden emin olun. Başka bir hata oluşmuşsa, bana haber verebilirsiniz.");
  }
}

function extractFamilyTree(document_root) {
  try {
    checkForErrors(document_root);
    var rows = document_root.getElementsByTagName('tr');
    var people = [];
    var res = {};
    for (var i = 1; i < rows.length - 2; ++i) {
      currRow = [];
      for (var j = 0; j < rows[i].children.length; ++j) { 
        currRow.push(rows[i].children[j].innerText);
      }
      var currPerson = {};
      var data = {};
      // surname - sensored with *** for privacy.
      // a => '' (one character is not allowed)
      // ab => a*
      // abc => a**
      // abcd => a**b
      // acasdkajsdnmak => a***********k
      data.name = `${currRow[3]} ${sensorSurname(currRow[4])}`;
      currPerson.father = { data: { name : currRow[5], alive: false, gender: 'male' } };
      currPerson.mother = { data: { name : currRow[6], alive: false, gender: 'female' } };
      var birth = currRow[7].split('\n');
      var birthdate = birth[1].split('/');
      // birth - day is not included and shared for privacy.
      data.birth = { place: birth[0], month: birthdate[1], year: birthdate[2] };
      // md5 hash of all user info.
      // so, the owner of the info can get the id, but from the id the info cannot be retrieved.
      // id - used to identify each unique person
      data.id = hexToBase64(md5(currRow.join('')));
      data.gender = currRow[1] === 'K' ? 'female' : (currRow[1] === 'E' ? 'male' : 'other');
      var death = currRow[11].split('\n');
      data.alive = death[0].length === 3;
      if (death[1].length > 1) {
        var deathdate = death[1].split('/');
        // death - day is not included and shared for privacy.
        data.death = { month: deathdate[1], year: deathdate[2] };
      }
      currPerson.data = data;
      var relationship = currRow[2].split(' ').map((str) => str.substr(0, 5).toLowerCase()).filter((str) => str.length > 1);
      if (!people[relationship.length]) {
        people[relationship.length] = [];
      }
      people[relationship.length].push({
        person: currPerson,
        relationship
      });
      //addPerson(res, currPerson, relationship);
      // a unique id is generated based on user info.
      // *** user info cannot be obtained from the id. (hashed with md5)
    }
    for (var i = 0; i < people.length; ++i) {
      if (people[i]) {
        for (var j = 0; j < people[i].length; ++j) {
          //return people[i][j];
          addPerson(res, people[i][j].person, people[i][j].relationship);
        }
      }
    }
  
    mergeChildren([res]);
    return { soy: JSON.stringify(res), id: res.pedigree.data.id, name: res.pedigree.data.name, v: 1 };
  } catch (e) {
    return { error: e.toString() };
  }
}
chrome.runtime.sendMessage({
    action: "getFamilyTree",
    response: extractFamilyTree(document)
});