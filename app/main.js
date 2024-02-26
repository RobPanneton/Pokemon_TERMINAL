"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { initiateBattle } from "./battle/battle";
const introScreen_1 = require("./introScreen");
// import { mainMenu } from "./mainMenu";
// import { teambuilderMainMenu } from "./teambuilder/teambuilderMainMenu";
// const { timeDelay } = require("./utils");    FOR GAME PAUSES
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    // need async await for any key prompt to wait
    yield (0, introScreen_1.introScreen)();
    return process.exit();
    while (true) {
        // let mainMenuInput = mainMenu();
        // if (mainMenuInput === 1) initiateBattle();
        // if (mainMenuInput === 2) teambuilderMainMenu();
        // if (mainMenuInput === 9) return process.exit();
    }
    return process.exit();
});
start();
// test
// response = prompt("Pokemon TERMINAL");
