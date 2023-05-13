import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'biography',
  title: 'Biography',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'blockContent',
    }),
    defineField({
      name: 'latest',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {name: 'title', type: 'string'},
            {name: 'stage', type: 'string'},
            {name: 'mediaType', type: 'string'},
            {name: 'role', type: 'string'},
            {name: 'company', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'press',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {name: 'media', type: 'string'},
            {name: 'year', type: 'string'},
            {name: 'journalist', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'blockContent',
    }),
  ],
})
