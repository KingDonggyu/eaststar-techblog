import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    introduce: { type: 'string', required: true },
    image: { type: 'string', required: false },
    createdAt: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: doc => `/post/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Post],
  mdx: { rehypePlugins: [[rehypePrettyCode, { theme: 'material-theme-ocean' }]] },
});
