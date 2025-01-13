const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KiSBD9l3rV3uaOGNERC4iogIqIFzb2oSgKpblaFCpO+O8btNPbHbszs708VRTkyZOZ5yTfQFEmNbZwC4bfQEWSM6S4O9K2wmAItCaOMQF9EEEKwRCoEwbezum8EFemsMic63OzYbf1VFyOrsp4sS9S5xYTshjs0Au490HVhFmCfgE4Ou2sSI6l19tYm2VHKwrymA/aIkKbq2QZazLRxzI/Iz3GfQH3DhEmJCkORnXEOSYws3C7hAn5Gv2LvrVP3DQ75s9O1tv42/pg+mkkEub1xuqummJDEPDc53P1a/SVqb8rA8V00nhmTON4ss5zs6ThxNjV1lxH7tpyX6XmZk6MB/06ORQ4mka4oAltv9x3azK4rM3ngmsWW4HwvYQbKXUbQqiwx9MSlauUqaPWMeyd8TXi9Wjmmi1/eF1xi3kak/ne2HCxtphyrP0sWrFRELQpmGvhos/El+RdK+n/6ftULU+V4nib+WI2JUp6iHvTxm4hlBtNEVEQacupfWvX6ebyNfrF/qiaXq9uOcnTdhuDS6ytI9W8q+5QpFET2YpbwhAV7uGDPqQN+RXLs2uJpaYH9Ghai4X63LON3sa7ndClDna5aBZVvHL8QlrLk9U+j+KVuZ/gdOEHfBZmi6W1F8OkPYc8dgRO9LY2mdeMpr68VZTidhqBIXvvA4IPSU0JpElZdHci2wcwOnsYEUzfugs83V1kB+u13bg4MIWlF1A0WLPe/EgGTj0pyn142Y8vPszUF9AHFSkRrmscTZKalqR1cF3DA67B8I+3QXU1E5yXFM+SCAwBJwqywrGMKHLM7/VvlyOkNayq3wpMQR/EpMwdDIaUNLgP3gIkXtFGykAfj0aGwvMjllGYgSSwKjfgZE3QuwrzR9J1kuOawrwCQ1bmJVnmOYG5/9kHBb7Sh3y6onm2D+KE1NQvmiorYfSurfeXEKGyKajXFkjvDpiAIfNxjSlNikPdVdYUkKBjcsZ6VwcYxjCr8b0PInxOEO7wwPY6VcdWUHlyky6PC5YPzIl36Tp3LIvHJ2yMGBZF3JMSx+KTEMbS00BC/BMvQR7FjBIKPAO6djyc28X8VEgzbVx7Eg8v4eSms/Vx3pt7qz27P+0Ob2J4KAATHL13OYQobap1meLiF7iNbzVKS3rTpWA706DSMCsdyh6VHP8T7kNZYPjtY1vqZdThrdmBa4ozHXTT6vL8Sw1D9p96uP/d8y4gwhQmWQ2GQHcST0SlYSwSlNkX01SNg6ofVPAxo3fLPTQdSszFWpu+hlZU8arVeFUGu3B/O60mhqnUfiFH0RIZJM3Tlx+AgCEIblv7JOwMZrOKXDZH5Ca0QsaYZY/mz0IazwfzzdG9bk9ltJ0KMxXB/Dltaoc6MmNaXnxSz6Fjt4pNbJVbTW9Zeb3q7kuX7aGVz8k8r7VN2RsUu5xFkT8LbxIKbotCcUou2RyCXD4y9Tp41uyTAUezbeDp8Sk5LjVfR6++W5yIoanbs53Exli2rdKQlZX6fRm8LaPs+08g+e7Th7LiBL/t1AJ2E/qP2XzWOHPvf4L4vqR/oiNt26OOnl4zdWeEsX/yVz40NxznSOnqqp3D8azH79a8ZomzCtw781YZpHFJcjAEsIhImUSgDzJYU/XDpj9wPi/3Qd6qVeVRSN/dDdTuMYQ9uP8FrElV038IAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

