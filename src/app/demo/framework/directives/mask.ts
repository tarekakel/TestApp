import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[eidMask]"
})
export class EidDirective {
  @HostListener("input", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, "");

    if (trimmed.length > 18) {
      trimmed = trimmed.substr(0, 18);
    }

    trimmed = trimmed.replace(/-/g, "");

    let numbers = [];

    numbers.push(trimmed.substr(0, 3));
    if (trimmed.substr(3, 4) !== "") numbers.push(trimmed.substr(3, 4));
    if (trimmed.substr(7, 12) != "") numbers.push(trimmed.substr(7, 12));
    if (trimmed.substr(14, 15) != "") numbers.push(trimmed.substr(14, 15));

    input.value = numbers.join("-");
  }
}