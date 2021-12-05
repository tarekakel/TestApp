export enum AlertMessageType {
  Success = 1,
  Error = 2,
  Warning = 3,
  Information = 4,
}
export enum MonthType {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

export const CategoryMapping = [
  { value: MonthType.January, type: 'January' },
  { value: MonthType.February, type: 'February' },
  { value: MonthType.March, type: 'March' },
  { value: MonthType.April, type: 'April' },
  { value: MonthType.May, type: 'May' },
  { value: MonthType.June, type: 'June' },
  { value: MonthType.July, type: 'July' },
  { value: MonthType.August, type: 'August' },
  { value: MonthType.September, type: 'September' },
  { value: MonthType.October, type: 'October' },
  { value: MonthType.November, type: 'November' },
  { value: MonthType.December, type: 'December' },
];

export enum DownloadRequestStatus {
  'Pause' = -6,
  'Connection Number Is Limited' = -5,
  'Analysisng' = -4,
  'Un Done' = -3,
  'Insufficient Space In Drive' = -2,
  'Waiting' = -1,
  'Resulation Is Complete' = 0,
  'Downloading' = 1,
  'None Recording File' = 2,
  'Task Complete' = 3,
  'Task Failed' = 4,
  'Delete' = 5,
  'Download Failed' = 6,
}
