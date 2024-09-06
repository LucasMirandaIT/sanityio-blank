import { groq } from 'next-sanity';
import { client } from './sanity.client';
import { Post } from '@/types/post';


// for the query can be adjusted to be data that you need
export async function getPostsByLang(lang: string): Promise<Post[]> {
  console.log('Lang ::: ', lang);
  const postQuery = groq`*[_type == 'post' && language == $lang] {
        _id,
        title,
        slug,
        language,
        description,
      }`;

  const posts = await client.fetch(postQuery, { lang });

  return posts;
}
export async function getPostByLang(lang: string, slug: string): Promise<Post> {
  const postQuery = groq`*[_type == 'post' && slug[$lang].current == $lang + '/' + $slug][0] {
        _id,
        title,
        slug,
        language,
        description,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          slug,
        },
      }`;

  const post = await client.fetch(postQuery, { lang, slug });
  return post;
}