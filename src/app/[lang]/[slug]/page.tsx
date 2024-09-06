import { getPostByLang } from '@/sanity/sanity.utils';

type Props = {
  params: { lang: string; slug: string };
};

export default async function SlugPage({ params }: Props) {
  const post = await getPostByLang(params.lang, params.slug);

  return (
    <>
      <h1>Title : {post?.title}</h1>
      <p>Description : {post?.description}</p>
    </>
  );
}