interface Location {
  region: string;
  state: string;
  city: string;
  town: string;
  village?: string;
  streetNumber?: number;
}

export default Location;
