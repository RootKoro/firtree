import { print } from './putchar';
export function my_firtree(size: number) {
    let ft_size = 4, cpt = 0
    /* for (let i = 0; i < size; i++) {
        for (let j = 0; j < ft_size+i; j++) {
            let starplace = 2*i + j + cpt, line = (size*4 + starplace);
            for (let k = 0; k < line; k++)
                if(k < line-1 - (starplace *2)) print(' ');
                else    print('*');
            print('\n');
        }
        if(i == 1)  cpt = 1
        else if (i > 1) cpt *= 2
    }
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size*4; j++)
            if(j < size*4 -1) print(' ');
            else    print('|');
        print('\n');
    } */
}


function sections(initSize: number, treeSize: number) {
    for (let i = 0; i < treeSize; i++) {
        lines(initSize + i)
    }
}

function lines(sectionSize: number) {
    for (let i = 0; i < sectionSize; i++) {
        caracts(i, sectionSize)
    }
}

function caracts(lineSize: number, sectionSize: number) {
    for (let i = 0; i < lineSize; i++) {
        if (i)
            print(' ')
        else
            print('*')
    }
}

function tronc(size: number) {
    for (let i = 0; i < size * 4; i++) {
        // 
    }
}