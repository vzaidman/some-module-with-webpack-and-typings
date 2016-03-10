import { ISomeService } from './services/service';
import Progressbar from './directive/Progressbar';
export { Progressbar };
export declare class MyImplementationOfISomeService implements ISomeService {
    gg: string;
    bb: string;
    getString(aa: string, bb: boolean): string;
}
export interface ISomeModule {
    gg: string;
    bb: string;
    someFunction(aa: string): string;
}
export default class SomeModule implements ISomeModule {
    gg: string;
    bb: string;
    constructor(gg: string, bb: string);
    someFunction(aa: string): string;
}
