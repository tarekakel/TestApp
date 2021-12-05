export enum Lookup {
  status = 1,
  type = 2,
  application = 3,
  priority = 4
}

export enum UIMode {
  Add = 1,
  Update = 2
}

export enum Rate {
  Sad = 1,
  Normal = 2,
  Happy = 3
}


export enum Status {
  New = 1,
  Open = 2,
  Closed = 3,
  Resolved = 4,
  Cancelled = 5,
  InProgress = 6,
  WaitingInfo = 7,
  NeedsBuild = 8,
  OnHold = 9
}

export enum Type {
  Problem = 1,
  Question = 2,
  ChangeRequest = 3,
  NewRequest = 4,
}

export enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
  Urgent = 4,
}


export enum Months {
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
  December = 12
}


export enum PreferredLanguage {
  Arabic = 1,
  English = 2
}


export enum Gender {
  Male = 1,
  Female = 2
}

export enum Reason {
  NotReproducible = 1,
  OutOfScope = 2,
  SolvedByChange = 3,
  SolvedByUserInstruction = 4,
  SolvedByWorkaround = 5,
  UnableToSolve = 6,
  WithdrawnByUser = 7,
  NoFaultFound = 8,
  NoUserResponse = 9,
  ResolvedSuccessfully = 10,
  DiagnosedSuccessfully = 11
}


export enum ConfirmationTokenType {
  ForgetPassword = 1,

}

export enum EventType{
  Distraction = "red",
  Driver_Fatigue = "red",
  Forward_Collision_Warning="red",
  FOV_exception = "pueple",
  Harsh_Acceleration = "yellow",
  Over_Speeding = "yellow",
  Cell_Phone_Detected = "yellow",
  Cigarette_Detected = "yellow"
  
}