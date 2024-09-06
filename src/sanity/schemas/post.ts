import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      },
      // validation: Rule => Rule.custom(async (slug, context) => {
      //   const { document } = context;
      //   const query = `*[_type == "post" && slug.current == $slug && !(_id in [$id])]`
      //   const params = { slug: slug?.current || '', id: document?._id || '' };

      //   // const existingSlugs = await client.fetch(query, params);
      //   // return existingSlugs.length > 0
      //   //   ? "This slug is already in use"
      //   //   : true;
      // })
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    // optional
    defineField({
      name: 'language',
      type: 'string',
      initialValue: 'id',
      readOnly: true,
    }),
  ],
});
