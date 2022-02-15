"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathBuilder = void 0;
const pathBuilder = (path) => (params) => {
    let res = path;
    if (params) {
        for (const key of Object.keys(params)) {
            res = res.replace(`:${key}`, params[key]);
        }
    }
    return res;
};
exports.pathBuilder = pathBuilder;
