const template = require('./Progressbar.tpl');

export interface IProgressbarScope extends ng.IScope {
    value : number;
}

export default class Progressbar implements ng.IDirective {

    static instance() : ng.IDirective {
        return new Progressbar;
    }

    restrict = 'E';

    template = template;

    link(scope : IProgressbarScope, elements : ng.IAugmentedJQuery, attrs : ng.IAttributes) {

        scope.value = 0;
        setInterval(() => {
            scope.$apply(() => {
                if(scope.value >= 100) {
                    scope.value = 0;
                    return;
                }
                scope.value = scope.value + 10;
            });
        }, 1000);

        console.log('using angular in directive: ' + angular.toJson({"a": "angular"}));
    }
}