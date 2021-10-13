import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import Footer from '../components/Footer'

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Eric Julianto</title>
        <meta name="author" content="Eric Julianto" />
        <meta name="robots" content="noindex,nofollow"></meta>
        {/* Primary Meta Tags */}
        <meta name="description" content="Portfolio Eric Julianto" />
        <meta name="title" content="Eric Julianto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post}/>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Get Files from the posts directory
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create Slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts',
    filename), 'utf-8')

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}