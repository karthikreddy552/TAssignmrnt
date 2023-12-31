export const navbarBrand = "News App";
export const header = (category) => `News - Top ${category} Headlines`;
export const navs = [
  { nav: "Home", page: "/" },
  { nav: "General", page: "/general" },
  { nav: "Science", page: "/science" },
  { nav: "Business", page: "/business" },
  { nav: "Technology", page: "/technology" },
  { nav: "Sports", page: "/sports" },
  { nav: "Health", page: "/health" },
  { nav: "Entertainment", page: "/entertainment" },
];

export const router = [
  { path: "/", key: "general", category: "general", country: "us" },
  { path: "/general", key: "general", category: "general", country: "us" },
  { path: "/business", key: "business", category: "business", country: "us" },
  { path: "/sports", key: "sports", category: "sports", country: "us" },
  { path: "/science", key: "science", category: "science", country: "us" },
  { path: "/health", key: "health", category: "health", country: "us" },
  {
    path: "/entertainment",
    key: "entertainment",
    category: "entertainment",
    country: "us",
  },
  {
    path: "/technology",
    key: "technology",
    category: "technology",
    country: "us",
  },
];

export const summary = "Channel and PublishedAt";
export const channel = (channel) => `Channel: ${channel}`;
export const lastUpdate = (published) =>
  `Published at: ${new Date(published).toGMTString()}`;
