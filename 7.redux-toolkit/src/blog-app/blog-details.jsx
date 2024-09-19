import React from 'react';
import { useSelector } from 'react-redux';

function BlogDisplay() {
  // Access different parts of the blog slice
  const { formData, blogList, currentEditedBlogId } = useSelector((state) => state.blog);

  return (
    <div>
      <h1>Blog Details</h1>
      <div>
        <h3>Form Data</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
      <div>
        <h3>Blog List</h3>
        <ul>
          {blogList.length > 0 ? (
            blogList.map((blog, index) => (
              <li key={index}>{JSON.stringify(blog)}</li>
            ))
          ) : (
            <li>No blogs available</li>
          )}
        </ul>
      </div>
      <div>
        <h3>Current Edited Blog ID</h3>
        <p>{currentEditedBlogId || 'No blog is being edited'}</p>
      </div>
    </div>
  );
}

export default BlogDisplay;
