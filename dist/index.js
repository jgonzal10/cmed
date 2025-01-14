"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/health", (req, res) => {
    res.status(200).json("Server running!!!");
});
app.listen(4000, () => {
    console.log(`App is listening on port 4000`);
});
