const venom = require('venom-bot');

venom
  .create({
    session: 'session-name',
    catchQR: (qrCode) => {
      console.log('QR Code gerado: ', qrCode);
    },
    logQR: false
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result);
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro);
        });
    }
  });
}