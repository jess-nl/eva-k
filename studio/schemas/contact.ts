import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Work With Me',
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
        maxLength: 96,
      },
    }),
    defineField({
      name: 'agentName',
      type: 'string',
    }),
    defineField({
      name: 'agentEmail',
      type: 'string',
    }),
    defineField({
      name: 'agentPhone',
      type: 'string',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {name: 'title', title: "Title", type: 'string'},
            {name: 'url', title: "URL", type: 'string'},
          ],
        },
      ],
    }),
  ],
})
