import 'lodash';
import 'angular';

import SomeService, {ISomeService} from './services/service';
import Progressbar from './directive/Progressbar';

export {Progressbar};

export class MyImplementationOfISomeService implements ISomeService{
    gg:string;
    bb:string;

    getString(aa:string, bb:boolean):string {
        return 'my implementation of get string';
    }
}

export interface ISomeModule{
    gg: string;
    bb: string;
    someFunction(aa:string):string;
}

export default class SomeModule implements ISomeModule {
    constructor(public gg:string, public bb:string) {
    }

    someFunction(aa:string):string{
        return _.map([MyImplementationOfISomeService, SomeService], (Service):string=>{
            return new Service('asdasddas', 'asdsad').getString('asdasd', true);
        }).join(', ');
    }
}