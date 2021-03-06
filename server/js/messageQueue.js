const messages = []; // the storage unit for messages


module.exports.enqueue = (message) => {
  messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  var message = messages.shift();
  return message === undefined ? 'empty' : message;
};

//strictly for testing purposes. Delete this later
module.exports.declareQueue = () => {
  console.log(messages);
  return messages;
}