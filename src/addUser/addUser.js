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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var connect_1 = require("../db/connect");
var user_1 = require("../models/user");
var app = (0, express_1.default)();
app.use(express_1.default.json());
(0, connect_1.default)();
app.post('/add-user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, age, email, userEmail, newUser, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, username = _a.username, age = _a.age, email = _a.email;
                return [4 /*yield*/, user_1.userData.find];
            case 1:
                userEmail = _b.sent();
                if (!(userEmail.arguments.email === "vikas@gmail.com")) return [3 /*break*/, 3];
                newUser = new user_1.userData({ username: username, age: age, email: email });
                return [4 /*yield*/, newUser.save()];
            case 2:
                _b.sent();
                res.status(201).json({ message: 'User saved!', user: newUser });
                return [3 /*break*/, 4];
            case 3:
                res.status(400).json({ message: 'User already saved!' });
                _b.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                err_1 = _b.sent();
                res.status(500).json({ error: err_1 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
app.get('/users', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, valuesArray;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_1.userData.find()];
            case 1:
                users = _a.sent();
                valuesArray = Object.values(users);
                res.json({ allusers: valuesArray });
                return [2 /*return*/];
        }
    });
}); });
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server running on http://localhost:".concat(PORT));
});
