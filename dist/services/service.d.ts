export interface ISomeService {
    gg: string;
    bb: string;
    getString(aa: string, bb: boolean): string;
}
export default class SomeService implements ISomeService {
    gg: string;
    bb: string;
    constructor(gg: string, bb: string);
    getString(aa: string, bb: boolean): string;
}
