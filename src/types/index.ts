export interface ServiceCategory {
  name: string;
  items: string[];
}

export interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface HomeData {
  pageTitle: string;
  hero: {
    slides: Slide[];
  };
  bookingForm: {
    title: string;
    fields: {
      name: string;
      phone: string;
      service: string;
      city: string;
      area: string;
      address: string;
      button: string;
    };
    services: string[];
    areas: string[];
  };
  topServices: {
    title: string;
    items: {
      id: string;
      name: string;
      image: string;
    }[];
  };
  locationSection: {
    title: string;
    description: string;
  };
  affiliations: {
    title: string;
    logos: string[];
  };
}
