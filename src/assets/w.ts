export class Aluno{
    private nome: string = ""; 
    private matricula: number = 0;
    public passou: boolean = true;

    constructor(nome: string, mat: number){

    }

    aprovado(media: number){
        if(media >= 7 ){
            this.passou = true;
        }else{
            this.passou = false;
        }
        return this.passou;
     }
}

export interface Nota{
    ponto: number;
    cadeira: string;
    aluno: Aluno;
}