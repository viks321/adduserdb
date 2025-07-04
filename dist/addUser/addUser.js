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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("../db/connect"));
const user_1 = require("../models/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, connect_1.default)();
app.post('/add-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, age, email } = req.body;
        const newUser = new user_1.userData({ username, age, email });
        yield newUser.save();
        res.status(201).json({ message: 'User saved!', user: newUser });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}));
app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
});
