export interface ISearchDestinationProps {
  onSelectDestination: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void;
  required: boolean;
  defaultValue: string;
}
