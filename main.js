// Warning: no elegant things on this script.
// Just for fun, and to avoid boredness logging hours in 2 systems.

// Adding jQuery.
var jQueryScript =
document.createElement('script');
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

// Waiting for jQuery.
setTimeout(start, 1000);

async function start() {

  // Avoids issues with other JS libraries.
  var $ = jQuery.noConflict(true);

  function logTime(csvLine, project) {
    return new Promise(resolve => {

      // Splitting line on this invisble character... probably a tab?
      csvLine = csvLine.split('	');

      if (csvLine[0] == 'Project') {
        return resolve();
      }

      if (csvLine[0] == 'Total') {
        return resolve();
      }

      // Verify line format.
      if (csvLine.length != 9) {
        return resolve();
      }

      // Fill entry.
      $('#quickentry_date_value').val(csvLine[5].split(' ')[0]);
      $('#hashtags_description').val(csvLine[2] + ' - ' + csvLine[3] + ' - ' + csvLine[8]);
      $('#client_input').val(project);
      $('#time_input').val(csvLine[7]);
      var blurEvt = new Event('blur');
      $('#time_input')[0].dispatchEvent(blurEvt);

      // Log entry.
      $('#log_it').click();

      // Check the entry was submitted, because it is clean.
      var interval = setInterval(() => {
        if ($('#time_input').val()) {
          return;
        }
        clearInterval(interval);
        return resolve();
       }, 1000);

    });
  }

  // Use the same login button.
  $('#log_it').click(async function () {

    if ($('#time_input').val() != '' && $('#client_input').val() == '' && $('#hashtags_description').val() == '') {
      return;
    }

    var csv = $('#hashtags_description').val();
    var csvLines = csv.split("\n");
    var i = 0;
    var project = $('#client_input').val();

    for (var i=0; i < csv.length ; i++) {
      await logTime(csvLines[i], project);
    }
  });

}
