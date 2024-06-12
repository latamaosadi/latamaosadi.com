import contentful from "contentful";

const config = useRuntimeConfig();

export default defineEventHandler(async () => {
  const client = contentful.createClient({
    space: config.contentfulSpaceId,
    accessToken: config.contentfulAccessToken,
  });

  const data = await client.getEntries({
    content_type: "project",
    "metadata.tags.sys.id[in]": ["featured"],
  });

  return data.items.map((item) => ({
    title: item.fields.title,
    cover: (item.fields.cover as any).fields.file,
    description: item.fields.description,
    url: item.fields.url,
    tools: item.fields.tools,
  }));
});
