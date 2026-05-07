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
  id: number;
  name: string;
  rating: number;
  comment: string;
  service: string;
}

export interface NavbarData {
  brand: string;
  links: {
    name: string;
    path: string;
    hasDropdown?: boolean;
  }[];
  cta: {
    name: string;
    path: string;
  };
}

export interface FooterData {
  description: string;
  quickLinks: {
    title: string;
    links: {
      name: string;
      path: string;
    }[];
  };
  contact: {
    title: string;
    location: string;
    email: string;
  };
  copyright: string;
}

export interface HomeData {
  pageTitle: string;
  hero: {
    slides: Slide[];
    cta: string;
  };
  bookingForm: {
    title: string;
    description: string;
    fields: {
      name: string;
      phone: string;
      service: string;
      city: string;
      area: string;
      address: string;
      button: string;
    };
    whatsappNumber: string;
    placeholders: {
      name: string;
      phone: string;
      address: string;
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
    badge: string;
  };
  affiliations: {
    title: string;
    logos: string[];
  };
}
