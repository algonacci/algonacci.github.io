import Link from 'next/link'
import Image from 'next/image'


export default function Post({post}) {
    return (
        <div class='card'>
            <Image src={post.frontmatter.cover_image}  width={330} height={220} alt='Eric Julianto'/>

            <div className="post-date">Posted on {post.frontmatter.date}</div>

            <h3>{post.frontmatter.title}</h3>

            <p>{post.frontmatter.excerpt}</p>

            <Link href={`/blog/${post.slug}`}>
                <a className="btn">
                    Read More
                </a>
            </Link>
        </div>
    )
}
