"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MahasiswaService = void 0;
const common_1 = require("@nestjs/common");
let MahasiswaService = class MahasiswaService {
    constructor() {
        this.mahasiswas = [
            { id: 1, nim: 240414018, nama: "Salira Restu Gusti", kelas: "3IF" },
            { id: 2, nim: 240414001, nama: "Raka Mulfaidzy", kelas: "3IF" },
            { id: 3, nim: 240414002, nama: "Dzakwan Alif", kelas: "3IF" },
            { id: 4, nim: 240514004, nama: "Alvan Dhan", kelas: "3SI" },
            { id: 5, nim: 240414003, nama: "Dzaki Ahmad Fauzan", kelas: "3IF" },
        ];
    }
    findAll() {
        return this.mahasiswas;
    }
};
exports.MahasiswaService = MahasiswaService;
exports.MahasiswaService = MahasiswaService = __decorate([
    (0, common_1.Injectable)()
], MahasiswaService);
//# sourceMappingURL=mahasiswa.service.js.map