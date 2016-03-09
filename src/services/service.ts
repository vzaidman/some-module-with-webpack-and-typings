export interface ISomeService{
    gg: string;
    bb: string;
    getString(aa:string, bb:boolean):string;
}

export default class SomeService implements ISomeService {
    constructor(public gg:string, public bb:string) {
    }

    getString(aa:string, bb:boolean):string{
        return 'service implementation of get string';
    }
}