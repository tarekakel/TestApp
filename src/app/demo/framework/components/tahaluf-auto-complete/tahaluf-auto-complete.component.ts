import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { BaseComponent } from '../../core/base-component';
import { PrimengGridHelper } from './../../helpers/primeng-grid-helper';
import { SearchCriteria } from './../../view-models/grid/search-criteria';
import { PagedResult } from './../../view-models/grid/paged-result';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomerProfileSearchFilter } from '../../../shared/view-models/customer-profile-search-filter';
import { CustomerProfileService } from '../../../shared/service/CustomerProfileService';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TahalufAutoCompleteComponent),
  multi: true
};

@Component({
  selector: 'tahaluf-auto-complete',
  templateUrl: './tahaluf-auto-complete.component.html',
  styleUrls: ['./tahaluf-auto-complete.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TahalufAutoCompleteComponent extends BaseComponent implements ControlValueAccessor {

  //The internal data model
  private innerValue: any = '';

  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {

    if (value !== this.innerValue) {

      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {

    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {

    this.onTouchedCallback = fn;
  }

  // #region Outputs

  @Output() searchItemsMethod = new EventEmitter<any>();

  //#endregion

  // #region Inputs

  @Input('items') items: any[];
  @Input('value-field') valueField: string;
  @Input('text-field') textField: string;
  @Input('force-selection') forceSelection: boolean = true;

  //Optional Inputs

  @Input('dropdown-mode') dropdownMode: string = 'blank';//set any value except 'blank' to prevent fetch data when click on down arrow
  @Input('multiple-selected') multipleSelected: boolean = false;
  @Input('placeholder') placeholder: string = this.translationService.translate('Common.AutoCompletePlaceholder');
  @Input('empty-message') emptyMessage: string = this.translationService.translate('Common.AutoCompleteEmptyMessage');

  @Output('onSelect') autoCompleteSelectedChanged = new EventEmitter<any>();

  // #endregion

  // #region Constructor

  constructor(private primengGridHelper: PrimengGridHelper<CustomerProfileSearchFilter>,
    private customerProfileService: CustomerProfileService) {

    super();
  }

  // #endregion 

  // #region Methods

  searchItems(event) {

    this.searchItemsMethod.emit(event);
  }

  onSelect(event: any) {
    console.log(this.value);
    this.autoCompleteSelectedChanged.emit(this.value);
  }
  // #endregion  
}
