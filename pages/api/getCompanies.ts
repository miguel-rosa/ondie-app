
import { notion } from './clients';

export const getCompanies = async () => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? ''
  });
}
