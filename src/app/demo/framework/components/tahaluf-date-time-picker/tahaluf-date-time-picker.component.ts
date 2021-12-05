import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  OnInit,
} from '@angular/core';
import { BaseComponent } from '../../core/base-component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Data } from '@angular/router';

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TahalufDateTimePickerComponent),
  multi: true,
};

@Component({
  selector: 'tahaluf-date-time-picker',
  templateUrl: './tahaluf-date-time-picker.component.html',
  styleUrls: ['./tahaluf-date-time-picker.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class TahalufDateTimePickerComponent
  extends BaseComponent
  implements ControlValueAccessor, OnInit
{
  //The internal data model
  private innerValue: any = '';
  event: string | undefined;

  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
    return this.innerValue;
  }

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

  // #region Constructor
  constructor() {
    super();
  }
  // #endregion

  override ngOnInit(): void {
    if (this.placeholder == undefined) {
      this.placeholder = this.dateformat;
    }
  }

  // #region Optional Inputs
  @Input('disabled') disabled: boolean = false;
  @Input('disabled-dates') disabledDates: Array<Date> = new Array<Date>();
  @Input('disabled-days') disabledDays: Array<number> = new Array<number>();
  @Input('show-button-bar') showButtonBar: boolean = true;
  @Input('readonly-input') readonlyInput: boolean = false;
  @Input('show-time') showTime: boolean = true;
  @Input('time-only') timeOnly: boolean = false;
  @Input('hour-format') hourFormat: number = this.HourFormat;
  @Input('month-navigator') monthNavigator: boolean = true;
  @Input('year-navigator') yearNavigator: boolean = true;
  @Input('year-range') yearRange: string = this.dateYearRange;
  @Input('date-format') dateformat: string = this.dateFormat;
  @Input('placeholder') placeholder: string | undefined;
  @Input('min-date') minDate: Date | undefined;
  @Input('max-date') maxDate: Date | undefined;
  @Input('selection-mode') selectionMode: string = 'single';
  @Input('required') required: boolean = false;
  // #endregion

  // #region Outputs
  @Output() onChange = new EventEmitter<any>();
  //#endregion

  // #region Event

  onChangeEvent(event: any) {
    this.onChange.emit(event);
  }

  // #endregion
}
