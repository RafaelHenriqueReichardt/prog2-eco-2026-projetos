class Curso{
    constructor(id,nome,carga_horaria){
        if(carga_horaria<0){
            throw new Error('Carga horaria invalida');
        }
        if(!nome){
            throw new Error('Nome invalido');
        }
        if(!id || id<0){
            throw new Error('ID invalido');
        }
    }
}
class Estudante{
    constructor(matricula,nome){
        if(!nome){
            throw new Error('Nome invalido');
        }
        if(!matricula){
            throw new Error('Matricula invalida');
        }
    }
}
class Turma{
    estudante=new Array(20);
    constructor(curso,estudante,){
        var i=0;
        var j=i+1;
        while(i<=20){
            for(j;j<=20;j++){
                if(estudante[i]==estudante[j]){
                    throw new Error('Estudante duplicado');
                }
            }
            i++;
            if(!estudante[i] && !estudante[i++]){
                break;
            }
        }
        if(!curso){
            throw new Error('Curso invalido');
        }
    }
}

eng = new Curso(1,'engenharia', 60);
jonas= new Estudante(1234,'Jonas');
jair= new Estudante(4321,'jair');
turma = new Turma(1,[1234,4321]);