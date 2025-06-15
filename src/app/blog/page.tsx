import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

interface BlogMeta {
  title: string
  slug: string
  date: string
  summary: string
  author: string
  authorImage: string
  banner:string
}

export default function BlogListPage() {
  const blogDir = path.join(process.cwd(), 'src/content/blogs')
  const files = fs.readdirSync(blogDir)

  const blogs: BlogMeta[] = files.map((file) => {
    const fileContent = fs.readFileSync(path.join(blogDir, file), 'utf8')
    const { data } = matter(fileContent)
    return data as BlogMeta
  })

  return (
  <div className="h-screen relative bg-gray-900 py-12 lg:pt-40 pt-24 md:pt-44 sm:pt-42 overflow-hidden">
    <h1 className="text-4xl md:text-4xl lg:text-5xl text-emerald-400 font-bold text-center mt-10">My Blogs</h1>
    
    <div className="flex flex-wrap justify-center gap-10 mt-20 px-6">
      {blogs.map((blog) => (
        <Link key={blog.slug} href={`/blog/${blog.slug}`} className="w-full sm:w-[90%] md:w-[45%] lg:w-[40%] xl:w-[30%]">
          <div className="border rounded overflow-hidden transition-transform duration-300 transform hover:scale-105 
          hover:shadow-xl hover:shadow-emerald-400/10">
            <img
            src={blog.banner}
            alt="Banner"
            className="w-full h-48 object-cover"
            />
            <div className='space-y-3 px-4 py-4'>
            <h2 className="text-gray-100 text-2xl font-semibold">{blog.title}</h2>
            <div className="flex items-center gap-2">
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="w-14 h-14 rounded-full"
              />
              <span className="text-lg text-white">{blog.author}</span>
            </div>
            <span className="block text-base font-semibold text-gray-100">{blog.date}</span>
            <p className="text-gray-300">{blog.summary}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

}
