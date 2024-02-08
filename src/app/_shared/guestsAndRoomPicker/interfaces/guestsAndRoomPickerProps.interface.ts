export interface IGuestsAndRoomPickerProps {
  onSelectGuestsAndRoom: (
    adultsCount: number,
    childrenCount: number,
    roomCount: number
  ) => void;
  required: boolean;
}
