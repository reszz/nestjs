import { Injectable } from "@nestjs/common";
import { Mahasiswa } from "./mahasiswa.interface";

@Injectable()
export class MahasiswaService{
    private readonly mahasiswas: Mahasiswa[] = [
        {id: 1, nim: 240414018, nama: "Salira Restu Gusti", kelas: "3IF"},
        {id: 2, nim: 240414001, nama: "Raka Mulfaidzy", kelas: "3IF"},
        {id: 3, nim: 240414002, nama: "Dzakwan Alif", kelas: "3IF"},
        {id: 4, nim: 240514004, nama: "Alvan Dhan", kelas: "3SI"},
        {id: 5, nim: 240414003, nama: "Dzaki Ahmad Fauzan", kelas: "3IF"},
    ];

    findAll(): Mahasiswa[]{
        return this.mahasiswas;
    }
    
    
}