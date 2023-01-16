type Place = {
  name: string;
  address: string;
  language: string;
  age: number;
  applications: number;
};

type PlaceWithLocation = Place & {
  location: {
    lat: number;
    lng: number;
  };
};

export { Place, PlaceWithLocation };
