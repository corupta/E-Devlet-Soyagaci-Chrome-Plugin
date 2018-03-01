function colorThingy(document_root) {
    function rgb2hex(red, green, blue) {
      var rgb = blue | (green << 8) | (red << 16);
      return '#' + (0x1000000 + rgb).toString(16).slice(1)
    }
    var rows = document_root.getElementById('layerFills').getElementsByClassName('colorValue')
    var colors = [];
    var midColors = [];
    for (var i = 0; i < rows.length; ++i) {
      var text = rows[i].innerText.split(" ").slice(1);
      var currRow = { r: parseInt(text[0]), g: parseInt(text[1]), b: parseInt(text[2]) };
      currRow["hex"] = rgb2hex(currRow["r"], currRow["g"], currRow["b"]);
      colors.push(currRow);
    };
    function colAvg(i, col) {
      return Math.round((colors[i][col] + colors[i - 1][col]) / 2);
    }
    function fun(i) {
      ans = { r: colAvg(i, "r"), g: colAvg(i, "g"), b: colAvg(i, "b") };
      ans["hex"] = rgb2hex(ans["r"], ans["g"], ans["b"]);
      return ans;
    }
    for (var i = 1; i < rows.length; ++i) {
      midColors.push(fun(i));
    }
    var html = '<style>* { vertical-align: middle; margin-top: 0; padding-top: 0 } ul { margin-left: 12px; font-size: 64px; list-style-type: square; } h3 { color: black; font-size: 16px; margin-top: -24px; } </style><ul>';
    for (var i = 0; i < colors.length; ++i) {
      html += `<li style="color: ${ colors[i]["hex"] };"><h3>rgb(${ colors[i]["r"] }, ${ colors[i]["g"] }, ${ colors[i]["b"] } )</h3><h3>${ colors[i]["hex"] }</h3>`
      if (i + 1 < colors.length) {
        html += `<ul><li style="color: ${ midColors[i]["hex"] };"><h3>rgb(${ midColors[i]["r"] }, ${ midColors[i]["g"] }, ${ midColors[i]["b"] } )</h3><h3>${ midColors[i]["hex"] }</h3></li></ul>`
      }
      html += '</li>';
    }
    html += '</ul>';
    return html;
}