// sanity.js
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
    projectId: 'm25o39ox',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-04-24',
    token: 'skLrGHwdzwkBEqaGU2oaDnPOc6N6Jhw6WcZqeuDjiHzCXAoAn4Bb4Dc4zxnLkdszkf0SgGLvnBSX32G2WXBAEJPlJlS0ZIdi1EqflUJq9IfWvMoXuvSYOaNu3Z3fPdirY8gQu7scmxv24oQsyyLKYN4scumqBo047LwkUIxczDqwqSGwH0fb'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);