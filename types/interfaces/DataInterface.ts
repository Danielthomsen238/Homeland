export interface Categorie {
  title: string;
  id: number;
  description: string;
  parent_id: number;
  sortnumber: number;
  request: {
    type: string;
    url: string;
  };
  subgroups: Array<{
    title: string;
    id: number;
    description: string;
    parent_id: number;
    sortnumber: number;
    request: {
      type: string;
      url: string;
    };
  }>;
}
