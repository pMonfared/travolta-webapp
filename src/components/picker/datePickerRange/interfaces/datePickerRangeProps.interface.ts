export interface IDatePickerRangeProps {
  onSelectDateRange: (startDate: Date, endDate: Date | null) => void;
  requiredStartDate: boolean;
  requiredEndDate: boolean;
}
