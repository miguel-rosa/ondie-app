
// import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export type Post = {
  id: string;
  title: string;
};

export const parseProperties = (database: any): Post[] => {
  console.log('database.results', database.results)
  return database.results.map((row:any) => {
    console.log('FILE ==========>', row.properties.logo?.files?.[0]?.file)
    const id = row.id;
    const name = row.properties.Name.title?.[0]?.plain_text ?? null;
    const phone = row.properties.Phone.rich_text?.[0]?.plain_text ?? null;
    const slug = row.properties.slug.rich_text?.[0]?.plain_text ?? null;
    const logo = row.properties.logo?.files?.[0]?.file?.url ?? null;
    return { id, name, phone, slug, logo };
  });
}