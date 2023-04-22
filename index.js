const openaiApiKey = 'token'; 
const comando = "R@bot:" 
const entrada= 'message'

const qrcode = require('qrcode-terminal');
const { Client,LocalAuth } = require('whatsapp-web.js');
const openai = require('openai-api');
const openaiClient = new openai(openaiApiKey);


const client = new Client({
    authStrategy:new LocalAuth(),
    session: null,
    puppeteer: {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  });

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('cliente conectado!');
});

client.on(entrada, async (message) => {
  if (message.body.startsWith(comando)) {
    const prompt = message.body.replace(comando,"");
    const completions = await openaiClient.complete({
      engine: 'text-davinci-003',
      prompt,
      maxTokens: 800,
      temperature: 0.5,
      n: 1,
    });
    const respuesta = completions.data.choices[0].text;
    message.reply("ChatGpt: "+ respuesta);
  } 
});

client.initialize();