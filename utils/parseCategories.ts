import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { Category } from '../types/Category';

export const parseCategories = (database: QueryDatabaseResponse): Category[] => {
  return database.results.map((row:any) => {
    const id = row.id;
    const name = row.properties.Name.title?.[0]?.plain_text ?? null;
    const slug = row.properties.slug.rich_text?.[0]?.plain_text ?? null;
    const image = row.properties.image?.files?.[0]?.file?.url ?? null;
    return { id, name, slug, image};
  });
}