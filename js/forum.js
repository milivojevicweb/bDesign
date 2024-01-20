$(document).ready(function() {
    forum();
});

function forum(){
    
    let blogPosts = localStorage.getItem('blogPosts');
    blogPosts = blogPosts ? JSON.parse(blogPosts) : [];

    const blogPostsContainer = document.getElementById('blog-posts');
    blogPosts.forEach((blog, index) => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog-post');
        blogElement.innerHTML = `
            <h2 class="blog-title">${blog.title}</h2>
            <p class="blog-content">${blog.content}</p>
            <button class="delete-btn btn delete" data-index="${index}">Delete</button>
        `;
        blogPostsContainer.appendChild(blogElement);

        const deleteBtn = blogElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            deleteBlogPost(index);
        });
    });

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', function() {
        const titleInput = document.getElementById('title');
        const contentInput = document.getElementById('content');

        const titleValue = titleInput.value.trim();
        const contentValue = contentInput.value.trim();

        if (titleValue === '' || contentValue === '') {
            alert('Naslov i sadržaj ne mogu biti prazni.');
            return;
        }

        const newBlogPost = {
            title: titleValue,
            content: contentValue
        };

        blogPosts.push(newBlogPost);

        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        titleInput.value = '';
        contentInput.value = '';

        const blogElement = document.createElement('div');
        blogElement.classList.add('blog-post');
        blogElement.innerHTML = `
            <h2 class="blog-title">${newBlogPost.title}</h2>
            <p class="blog-content">${newBlogPost.content}</p>
            <button class="delete-btn blogBtn delete" data-index="${blogPosts.length - 1}">Delete</button>
        `;
        blogPostsContainer.appendChild(blogElement);

        const deleteBtn = blogElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            deleteBlogPost(blogPosts.length - 1);
        });
    });

    function deleteBlogPost(index) {
        blogPosts.splice(index, 1);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        refreshBlogPosts();
    }

    function refreshBlogPosts() {
        blogPostsContainer.innerHTML = '';
        blogPosts.forEach((blog, index) => {
            const blogElement = document.createElement('div');
            blogElement.classList.add('blog-post');
            blogElement.innerHTML = `
                <h2 class="blog-title">${blog.title}</h2>
                <p class="blog-content">${blog.content}</p>
                <button class="delete-btn btn delete" data-index="${index}">Delete</button>
            `;
            blogPostsContainer.appendChild(blogElement);

            const deleteBtn = blogElement.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function() {
                deleteBlogPost(index);
            });
        });
    }
}