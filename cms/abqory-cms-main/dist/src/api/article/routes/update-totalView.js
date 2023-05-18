"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'PUT',
            path: '/articles/:id/count-view',
            handler: 'article.countView',
            config: {
                auth: false,
            },
        },
    ],
};
