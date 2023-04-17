import {defineField, defineType} from 'sanity'
import Placeholder from '../components/Placeholder'

export default defineType({
  name: 'header',
  title: 'Header',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'vimeoUrl',
      title: 'Vimeo Video URL',
      type: 'string',
      components: {
        input: Placeholder,
      },
      options: {
        placeholder: 'https://player.vimeo.com/video/530984056?h=337e6011fd',
      },
    }),
  ],
})
