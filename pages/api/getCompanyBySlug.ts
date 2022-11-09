
import { notion } from './clients';

export const getCompanyByName = async ({name}:{name: string}) => {
  console.log('quering')
  console.log('notion.databases', notion.databases)
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? '',
    filter: {
      property: "slug",
      rich_text: {
         equals: name,
      },
    },
  });
}
