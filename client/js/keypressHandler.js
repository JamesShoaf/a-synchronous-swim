
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
    //POST direction to server
    
    //..wait for setInterval to retrieve method from server
  }
});

console.log('Client is running in the browser!');
