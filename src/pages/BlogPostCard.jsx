import React from 'react';

function BlogPostCard({ post }) {
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
                src={post.imageUrl} 
                alt={`Cover image for ${post.title}`} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                    {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                    By {post.author} on {post.date}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.summary}
                </p>
                <a 
                    href={`/blog/${post.id}`} // Link to the full blog post detail page
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                    Read More &rarr;
                </a>
            </div>
        </div>
    );
}

export default BlogPostCard;