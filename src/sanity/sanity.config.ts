import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { documentInternationalization } from '@sanity/document-internationalization';
import { i18n } from '../../i18n.config';
import { schemaTypes } from '@/sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/admin',
  name: 'lm_portfolio',
  title: 'LM Portfolio',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    documentInternationalization({
      supportedLanguages: i18n.languages,
      schemaTypes: ['post'],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
