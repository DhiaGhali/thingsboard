import { EventEmitter, OnInit } from '@angular/core';
import { LegendConfig, LegendData, LegendKey } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class LegendComponent implements OnInit {
    legendConfig: LegendConfig;
    legendData: LegendData;
    legendKeyHiddenChange: EventEmitter<number>;
    displayHeader: boolean;
    isHorizontal: boolean;
    isRowDirection: boolean;
    ngOnInit(): void;
    toggleHideData(index: number): void;
    legendKeys(): LegendKey[];
    static ɵfac: i0.ɵɵFactoryDeclaration<LegendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LegendComponent, "tb-legend", never, { "legendConfig": { "alias": "legendConfig"; "required": false; }; "legendData": { "alias": "legendData"; "required": false; }; }, { "legendKeyHiddenChange": "legendKeyHiddenChange"; }, never, never, false, never>;
}
