export interface IProgressbarScope extends ng.IScope {
    value: number;
}
export default class Progressbar implements ng.IDirective {
    static instance(): ng.IDirective;
    restrict: string;
    template: any;
    link(scope: IProgressbarScope, elements: ng.IAugmentedJQuery, attrs: ng.IAttributes): void;
}
