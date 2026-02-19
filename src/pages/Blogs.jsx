import React, { useState, useEffect } from 'react';
import BlogPostCard from './BlogPostCard';
// We'll use a mock data file for simplicity, replace this with your API call later
import { mockBlogPosts } from '../constants/BlogData'; 

function BlogsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect to simulate fetching data when the component mounts
    useEffect(() => {
        // Simulating an API call delay
        setTimeout(() => {
            try {
                // In a real application, you'd use axios or the fetch API here:
                // const response = await fetch('/api/blogs');
                // const data = await response.json();

                setPosts(mockBlogPosts); // Set the fetched data
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch blog posts.");
                setLoading(false);
            }
        }, 1000); // 1 second delay
    }, []);

    if (loading) {
        return <div className="p-8 text-center text-xl">Loading blog posts...</div>;
    }

    if (error) {
        return <div className="p-8 text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <h1 className="text-4xl font-bold mb-8 border-b pb-2">Latest Posts</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.length > 0 ? (
                    posts.map(post => (
                        // Map through the posts array and render a card for each
                        <BlogPostCard 
                            key={post.id} 
                            post={post} 
                        />
                    ))
                ) : (
                    <p className="text-gray-600 col-span-full">No blog posts found.</p>
                )}
            </div>
        </div>
    );
}

export default BlogsPage;