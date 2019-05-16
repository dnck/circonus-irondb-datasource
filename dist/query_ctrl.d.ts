/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import IrondbQuery from './irondb_query';
import { SegmentType } from './irondb_query';
import { QueryCtrl } from 'app/plugins/sdk';
export declare class IrondbQueryCtrl extends QueryCtrl {
    private uiSegmentSrv;
    private templateSrv;
    static templateUrl: string;
    defaults: {};
    queryModel: IrondbQuery;
    pointTypeOptions: {
        value: string;
        text: string;
    }[];
    egressTypeOptions: {
        value: string;
        text: string;
    }[];
    segments: any[];
    loadSegments: boolean;
    /** @ngInject **/
    constructor($scope: any, $injector: any, uiSegmentSrv: any, templateSrv: any);
    typeValueChanged(): void;
    egressValueChanged(): void;
    onChangeInternal(): void;
    getCollapsedText(): any;
    getSegments(index: any, prefix: any): any;
    parseTarget(): void;
    setSegmentType(segment: any, type: SegmentType): any;
    newSegment(type: SegmentType, options: any): any;
    mapSegment(segment: any): any;
    buildSegments(): void;
    addSelectMetricSegment(): void;
    buildSelectTagPlusSegment(): any;
    addSelectTagPlusSegment(): void;
    newSelectTagValSegment(): any;
    checkOtherSegments(fromIndex: any): Promise<void>;
    setSegmentFocus(segmentIndex: any): void;
    segmentValueChanged(segment: any, segmentIndex: any): Promise<void>;
    spliceSegments(index: any): void;
    emptySegments(): void;
    segmentsToStreamTags(): string;
    segmentsToCaqlFind(): string;
    updateModelTarget(): void;
    targetChanged(): void;
    showDelimiter(index: any): boolean;
    escapeRegExp(regexp: any): string;
}
