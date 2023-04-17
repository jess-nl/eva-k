import {defineField, defineType} from 'sanity'
import Placeholder from '../components/Placeholder'

export default defineType({
  name: 'timeline',
  title: 'Timeline',
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'yearReleased',
      title: 'Year Released',
      type: 'date',
			options: {
        dateFormat: 'YYYY',
			}
    }),
    defineField({
      name: 'vimeoUrl',
      title: 'Vimeo Video URL',
      type: 'string',
      components: {
        input: Placeholder,
      },
			options: {
				placeholder: 'https://player.vimeo.com/video/530984056?h=337e6011fd'
			}
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'blockContent',
      options: {
        maxLength: 800,
      },
    }),
    defineField({
      name: 'longSummary',
      title: 'Long Summary',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'vimeoUrl',
    },
  },
})
