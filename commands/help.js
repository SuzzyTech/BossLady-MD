const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭─❖ ⚡ *${settings.botName || 'BossLady-MD'}* ⚡
│ Version : *${settings.version || '2.0.5'}*
│ Owner   : *${settings.botOwner || 'SuzzyTech'}*
│ YT      : ${global.ytch}
╰─────────────❖

╭─❖ 🌐 GENERAL
│> .help / .menu
│> .ping
│> .alive
│> .tts <text>
│> .owner
│> .joke
│> .quote
│> .fact
│> .weather <city>
│> .news
│> .attp <text>
│> .lyrics <song>
│> .8ball <question>
│> .groupinfo
│> .staff / .admins
│> .vv
│> .trt <text> <lang>
│> .ss <link>
│> .jid
│> .url
╰─────────────❖

╭─❖ 👮 ADMIN
│> .ban @user
│> .promote @user
│> .demote @user
│> .mute <minutes>
│> .unmute
│> .delete / .del
│> .kick @user
│> .warnings @user
│> .warn @user
│> .antilink
│> .antibadword
│> .clear
│> .tag <msg>
│> .tagall
│> .tagnotadmin
│> .hidetag <msg>
│> .chatbot
│> .resetlink
│> .antitag on/off
│> .welcome on/off
│> .goodbye on/off
│> .setgdesc <desc>
│> .setgname <name>
│> .setgpp (reply img)
╰─────────────❖

╭─❖ 🔒 OWNER
│> .mode public/private
│> .clearsession
│> .antidelete
│> .cleartmp
│> .update
│> .settings
│> .setpp (reply img)
│> .autoreact on/off
│> .autostatus on/off
│> .autotyping on/off
│> .autoread on/off
│> .anticall on/off
│> .pmblocker on/off
│> .pmblocker setmsg <text>
╰─────────────❖

╭─❖ 🎨 IMAGE/STICKERS
│> .blur
│> .simage
│> .sticker
│> .removebg
│> .remini
│> .crop
│> .tgsticker <link>
│> .meme
│> .take <pack>
│> .emojimix 😀+🔥
│> .igs <link>
│> .igsc <link>
╰─────────────❖

╭─❖ 🖼️ PIES
│> .pies <country>
│> .china
│> .indonesia
│> .japan
│> .korea
│> .hijab
╰─────────────❖

╭─❖ 🎮 GAMES
│> .tictactoe @user
│> .hangman
│> .guess <letter>
│> .trivia
│> .answer <ans>
│> .truth
│> .dare
╰─────────────❖

╭─❖ 🤖 AI
│> .gpt <ask>
│> .gemini <ask>
│> .imagine <prompt>
│> .flux <prompt>
│> .sora <prompt>
╰─────────────❖

╭─❖ 🎯 FUN
│> .compliment @user
│> .insult @user
│> .flirt
│> .shayari
│> .goodnight
│> .roseday
│> .character @user
│> .wasted @user
│> .ship @user
│> .simp @user
│> .stupid @user <text>
╰─────────────❖

╭─❖ 🔤 TEXTMAKER
│> .metallic <txt>
│> .ice <txt>
│> .snow <txt>
│> .matrix <txt>
│> .light <txt>
│> .neon <txt>
│> .devil <txt>
│> .purple <txt>
│> .thunder <txt>
│> .leaves <txt>
│> .1917 <txt>
│> .arena <txt>
│> .hacker <txt>
│> .sand <txt>
│> .blackpink <txt>
│> .glitch <txt>
│> .fire <txt>
╰─────────────❖

╭─❖ 📥 DOWNLOADERS
│> .play <song>
│> .song <song>
│> .spotify <query>
│> .instagram <link>
│> .facebook <link>
│> .tiktok <link>
│> .video <song>
│> .ytmp4 <link>
╰─────────────❖

╭─❖ 🧩 MISC
│> .heart
│> .horny
│> .circle
│> .lgbt
│> .lolice
│> .its-so-stupid
│> .namecard
│> .oogway
│> .tweet
│> .ytcomment
│> .comrade
│> .gay
│> .glass
│> .jail
│> .passed
│> .triggered
╰─────────────❖

╭─❖ 🖼️ ANIME
│> .neko
│> .waifu
│> .loli
│> .nom
│> .poke
│> .cry
│> .kiss
│> .pat
│> .hug
│> .wink
│> .facepalm
╰─────────────❖

╭─❖ 💻 GITHUB
│> .git
│> .github
│> .sc
│> .script
│> .repo
╰─────────────❖

📢 Join our channel for updates!
`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363421299105029@newsletter',
                        newsletterName: 'SuzzyTech',
                        serverMessageId: -1
                    }
                }
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363421299105029@newsletter',
                        newsletterName: 'BossLady MD by SuzzyTech',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
