function main() {
  var f = new numberformat.Formatter({sigfigs: 1, backend: 'decimal.js'})
  //var formats = f.listFormats()
  var formats = ['standard', 'hybrid', 'longScale']
  var flavors = ['full', 'short']
  var table = $('#table');

  var tr = $('<tr>').appendTo(table);
  tr.append($('<th>').text('scientific'))
  $.each(formats, function(_, format) {
    $.each(flavors, function(_, flavor) {
      tr.append($('<th>').text(format+'/'+flavor))
    });
  });

  // 1e350 is a bit beyond where decimal.js is required, just to show it's possible
  for (var i=0; i*3 < 350; i++) {
    var exp = i * 3;
    var val = new Decimal('1e'+exp)
    var tr = $('<tr>').appendTo(table);
    tr.append($('<td>').text(f.format(val, {format: 'scientific'})))
    $.each(formats, function(_, format) {
      $.each(flavors, function(_, flavor) {
        tr.append($('<td>').text(f.formatFlavor(val, flavor, {format: format})))
      });
    });
  }
}
main();
