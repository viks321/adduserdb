"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userData = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
});
exports.userData = mongoose_1.default.model('User', userSchema);
