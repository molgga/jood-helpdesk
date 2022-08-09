/**
 * 날짜 포맷 옵션
 * @interface
 * @property format {string} at 정보를 변경할 문자 포맷 (예: YYYY-MM-DD AA hh -> 2020-01-01 오전 12시)
 * @property multiple {number} at 의 곱셈(at 정보를 unixtime 으로 다루는 경우 1000 을 옵션으로 지정)
 * @property alternative {string} at 정보가 invalid 할 때 대체 문자
 */
export interface DateFormatOption {
  format?: string;
  multiple?: number;
  alternative?: string;
  labelDays?: string[];
}

/**
 * 지난시간 포맷 옵션
 * @interface
 * @property justMax? {number} 방금 전으로 표시될 최대 시간(초)
 * @property justLabel? {string} '방금 전' 라벨
 * @property minuteMax? {number} 'n분 전' 으로 표시될 최대 시간(초)
 * @property minuteLabel? {string} '분 전' 라벨
 * @property hourMax? {number} 'n시간 전' 으로 표시될 최대 시간(초)
 * @property hourLabel? {string} '시간 전' 라벨
 * @property dayMax? {number} 'n일 전' 으로 표시될 최대 시간(초)
 * @property dayLabel? {string} '일 전' 라벨
 * @property format? {string} dayMax 도 넘어가는 시간인 경우 표시될 날짜 포맷
 */
export interface DatePastOption {
  justMax?: number;
  justLabel?: string;
  minuteMax?: number;
  minuteLabel?: string;
  hourMax?: number;
  hourLabel?: string;
  dayMax?: number;
  dayLabel?: string;
  format?: string;
  alternative?: any;
  overThenJust?: boolean;
}
