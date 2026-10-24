import { Controller, Get } from "@nestjs/common";
import { MahasiswaService } from "./mahasiswa.service";
import { Mahasiswa } from "./mahasiswa.interface";

@Controller('mahasiswa')
export class MahasiswaController{
    constructor(private readonly mahasiswasService: MahasiswaService){}

    @Get()
    findAll(): Mahasiswa[] {
        return this.mahasiswasService.findAll();
    }
}