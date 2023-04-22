
# tu whatsapp con chatGpt

Este es un pequeño proyecto pero funcional donde puedes utilizar chatGpt en tu whatsapp

## Instalacion

instalación de dependencias.

```
npm i
```
## Requerimientos
1. se requiere un token de  [openAi.com](https://platform.openai.com/account/api-keys)
2. se necesita una cuenta de whatsapp, se puede utilizar la propia

## configuración de variables en archivo index.js


Remplaza esto con tu propia API key de openAi
```
openaiApiKey = 'token';
```

Comando con el que se activara el Bot en este caso seria de ejemplo, R@bot: hola como estas?;
```
comando = "R@bot:"; 

```
con 'message' solo la persona que le envié un mansaje su whatsapp puede utilizar el chatGpt y con 'message_create' la persona que le escriba como usted lo podrán utilizar
```
entrada= 'message';
```

## instrucción de como utilizar

1. Primer inicio
```
npm start
```
2. Se creara un un código QR en la consola
3. Escanear el código QR con el teléfono con la opción de whatsapp de vincular dispositivo
4. En la consola aparecerá un mensaje "cliente conectado!"
5. Ya puedes empezar a utilizar a chatGpt en tu whatsapp!!
