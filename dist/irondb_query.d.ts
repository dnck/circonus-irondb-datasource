export declare enum SegmentType {
    MetricName = 0,
    TagCat = 1,
    TagVal = 2,
    TagOpAnd = 3,
    TagOpOr = 4,
    TagOpNot = 5,
    TagPair = 6,
    TagSep = 7,
    TagEnd = 8,
}
export default class IrondbQuery {
    datasource: any;
    target: any;
    segments: any[];
    error: any;
    checkOtherSegmentsIndex: number;
    templateSrv: any;
    scopedVars: any;
    /** @ngInject */
    constructor(datasource: any, target: any, templateSrv?: any, scopedVars?: any);
    parseTarget(): void;
    getSegmentPathUpTo(index: any): any;
    parseTargetRecursive(astNode: any, func: any): any;
    updateSegmentValue(segment: any, index: any): void;
    addSelectMetricSegment(): void;
    updateModelTarget(targets: any): void;
    updateRenderedTarget(target: any, targets: any): void;
}
