(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //setInterval(getDirections, 1000);

  //
  // TODO: build the swim command fetcher here
  var getDirections = () => {
    $.ajax(
      {
        type: 'GET',
        url: serverUrl,
        success: (data) => {
          SwimTeam.move(data); //for the random direction we can instantly execute the command
          //setTimeout(getDirections, 1000);
        },
        datatype: 'string'
      }
    );
  };
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });
setInterval(getDirections, 100); //setInterval handles if the server fails to return a direction with Get (which it might if the queue is empty)

})();
