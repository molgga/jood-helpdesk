export interface VisibilityState {
  hidden: boolean;
}

export interface VisibilityIdleState {
  // visibility 변경이 있던것 기준
  nowAt: number; // 현재 시간
  hiddenAt: number; // hidden 된 시간
  isHidden: boolean; // hidden 여부
  isChangedDay: boolean; // 날짜가 변경 되었는지
  idleTime: number; // idle 시간
  idleSecond: number;
  idleMinute: number;
  idleHour: number;
}

export enum VisibilityIdleType {
  IDEL = 'IDEL', // hidden 된
  VISIBLE = 'VISIBLE', // visibility change 된
}
