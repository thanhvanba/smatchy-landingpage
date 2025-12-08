export interface BioLink {
  id: number;
  platform: string | null;
  url: string | null;
}

export interface Person {
  id: number;
  documentId: string;
  name: string;
  role: string;
  url: string;
  excerpt: string | null;
  createdAt: string; // ISO-8601
  updatedAt: string; // ISO-8601
  publishedAt: string; // ISO-8601
  description: string;
  avatar: string | null;
  bio: BioLink[];
}

export interface Team {
  title: string;
  blocks: BlocksTeam[];
}

export interface BlocksTeam {
  heading: string;
  sub_heading: string;
  title: string;
  button: {
    label: string;
    link: string;
  } | null;
}
