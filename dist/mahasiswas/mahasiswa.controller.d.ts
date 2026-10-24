import { MahasiswaService } from "./mahasiswa.service";
import { Mahasiswa } from "./mahasiswa.interface";
export declare class MahasiswaController {
    private readonly mahasiswasService;
    constructor(mahasiswasService: MahasiswaService);
    findAll(): Mahasiswa[];
}
