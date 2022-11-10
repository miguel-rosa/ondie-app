
import { notion } from './clients';

export const getCategories = async () => {
  console.log('quering')
  console.log('notion.databases', notion.databases)
  return notion.databases.query({
    database_id: process.env.NOTION_CATEGORY_DATABASE_ID ?? '',
  });
}
