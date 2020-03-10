const TelegramBot = require('node-telegram-bot-api');
const token = '1080028454:AAHv0ujGNhVJaxOtp4poS1W2AqaqMdghonc';
const bot = new TelegramBot(token, {polling: true});
const fs = require("fs");
let users = [];

const SETTINGS = JSON.parse(fs.readFileSync("SETTINGS.json"));

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const guest = users.indexOf(chatId) == -1 ? true : false;

    if(guest){
        if(SETTINGS["start"].files.length){
            for(let i in SETTINGS["start"].files){
                if(SETTINGS["start"].files[i].type == "video"){
                    bot.sendMessage(chatId, SETTINGS["start"].files[i].file);
                } else if(SETTINGS["start"].files[i].type == "photo"){
                    bot.sendPhoto(chatId, SETTINGS["start"].files[i].file);
                }
            }
        }
        bot.sendMessage(chatId, SETTINGS["start"].text, {
            "reply_markup": {
                "inline_keyboard": [
                    [
                        {
                            text: SETTINGS["start"].buttons[0],
                            callback_data: "buttons1_1",
                        },
                        {
                            text: SETTINGS["start"].buttons[1],
                            callback_data: "buttons1_2",
                        }
                    ]
                ]
            }
        });

        users.push(chatId);
    } else {

    }
});

bot.on("callback_query", (callbackQuery) => {
    const msg = callbackQuery.message;
    const callbackData = callbackQuery.data;
    bot.answerCallbackQuery(callbackQuery.id).then(async () => {
        if(callbackData == "buttons1_1"){
            let id = "buttons1_1";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ],
                        [
                            {
                                text: SETTINGS[id].buttons[1],
                                callback_data: "buttons2_2",
                            }
                        ],
                        [
                            {
                                text: SETTINGS[id].buttons[2],
                                callback_data: "buttons2_3",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons1_2"){
            let id = "buttons1_2";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ],
                        [
                            {
                                text: SETTINGS[id].buttons[1],
                                callback_data: "buttons2_2",
                            }
                        ],
                        [
                            {
                                text: SETTINGS[id].buttons[2],
                                callback_data: "buttons2_3",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons2_1"){
            let id = "buttons2_1";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons3_1_1",
                            },
                            {
                                text: SETTINGS[id].buttons[1],
                                callback_data: "buttons3_1_2",
                            },
                            {
                                text: SETTINGS[id].buttons[2],
                                callback_data: "buttons3_1_3",
                            },
                            {
                                text: SETTINGS[id].buttons[3],
                                callback_data: "buttons3_1_4",
                            },
                            {
                                text: SETTINGS[id].buttons[4],
                                callback_data: "buttons3_1_5",
                            }
                        ],
                        [
                            {
                                text: SETTINGS[id].buttons[5],
                                callback_data: "buttons3_1_6",
                            },
                            {
                                text: SETTINGS[id].buttons[6],
                                callback_data: "buttons3_1_7",
                            },
                            {
                                text: SETTINGS[id].buttons[7],
                                callback_data: "buttons3_1_8",
                            },
                            {
                                text: SETTINGS[id].buttons[8],
                                callback_data: "buttons3_1_9",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons2_2"){
            let id = "buttons2_2";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons3_2_1",
                            },
                            {
                                text: SETTINGS[id].buttons[1],
                                callback_data: "buttons3_2_2",
                            },
                            {
                                text: SETTINGS[id].buttons[2],
                                callback_data: "buttons3_2_3",
                            },
                            {
                                text: SETTINGS[id].buttons[3],
                                callback_data: "buttons3_2_4",
                            },
                            {
                                text: SETTINGS[id].buttons[4],
                                callback_data: "buttons3_2_5",
                            }
                        ],
                        [
                            {
                                text: SETTINGS[id].buttons[5],
                                callback_data: "buttons3_2_6",
                            },
                            {
                                text: SETTINGS[id].buttons[6],
                                callback_data: "buttons3_2_7",
                            },
                            {
                                text: SETTINGS[id].buttons[7],
                                callback_data: "buttons3_2_8",
                            },
                            {
                                text: SETTINGS[id].buttons[8],
                                callback_data: "buttons3_2_9",
                            },
                            {
                                text: SETTINGS[id].buttons[9],
                                callback_data: "buttons3_2_10",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons2_3"){
            let id = "buttons2_3";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons3_2_1",
                            },
                            {
                                text: SETTINGS[id].buttons[1],
                                callback_data: "buttons3_2_2",
                            },
                            {
                                text: SETTINGS[id].buttons[2],
                                callback_data: "buttons3_2_3",
                            },
                            {
                                text: SETTINGS[id].buttons[3],
                                callback_data: "buttons3_2_4",
                            },
                            {
                                text: SETTINGS[id].buttons[4],
                                callback_data: "buttons3_2_5",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_1_1"){
            let id = "buttons3_1_1";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_1_2"){
            let id = "buttons3_1_2";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_1_3"){
            let id = "buttons3_1_3";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_1_4"){
            let id = "buttons3_1_4";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_1_5"){
            let id = "buttons3_1_5";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_1_6"){
            let id = "buttons3_1_6";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_1_7"){
            let id = "buttons3_1_7";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_1_8"){
            let id = "buttons3_1_8";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_1_9"){
            let id = "buttons3_1_9";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_1",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_2_1"){
            let id = "buttons3_2_1";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_2",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_2_2"){
            let id = "buttons3_2_2";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_2",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_2_3"){
            let id = "buttons3_2_3";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_2",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_2_4"){
            let id = "buttons3_2_4";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_2",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_2_5"){
            let id = "buttons3_2_5";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_2",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_2_6"){
            let id = "buttons3_2_6";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_2",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_2_7"){
            let id = "buttons3_2_7";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_2",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_2_8"){
            let id = "buttons3_2_8";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_2",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_2_9"){
            let id = "buttons3_2_9";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_2",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_2_10"){
            let id = "buttons3_2_10";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_2",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_3_1"){
            let id = "buttons3_3_1";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_3",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_3_2"){
            let id = "buttons3_3_2";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_3",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_3_3"){
            let id = "buttons3_3_3";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_3",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_3_4"){
            let id = "buttons3_3_4";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_3",
                            }
                        ]
                    ]
                }
            });
        } else if(callbackData == "buttons3_3_5"){
            let id = "buttons3_3_5";
            if(SETTINGS[id].files.length){
                for(let i in SETTINGS[id].files){
                    if(SETTINGS[id].files[i].type == "video"){
                        await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "photo"){
                        await bot.sendPhoto(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    } else if(SETTINGS[id].files[i].type == "pdf"){
                        await bot.sendDocument(callbackQuery.from.id, SETTINGS[id].files[i].file);
                    }
                }
            }
            await bot.sendMessage(callbackQuery.from.id, SETTINGS[id].text, {
                "parse_mode": "HTML",
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: SETTINGS[id].buttons[0],
                                callback_data: "buttons2_3",
                            }
                        ]
                    ]
                }
            });
        }
    });
});