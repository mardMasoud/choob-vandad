// src/types.ts یا src/app/types.ts
export interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}
