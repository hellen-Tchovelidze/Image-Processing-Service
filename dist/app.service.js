"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const email_sender_service_1 = require("./email-sender/email-sender.service");
let AppService = class AppService {
    emailSenderService;
    constructor(emailSenderService) {
        this.emailSenderService = emailSenderService;
    }
    getHello() {
        return 'Hello World!';
    }
    async sendEmail(to, subject, content) {
        await this.emailSenderService.sendHtmlToSomeone(to, subject, content);
        console.log('sent successfully');
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [email_sender_service_1.EmailSenderService])
], AppService);
//# sourceMappingURL=app.service.js.map