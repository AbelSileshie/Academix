
// PostService.js

// Dummy data for posts
const dummyPosts = [
    { id: 1, title: "Post 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet urna magna, ac sagittis urna consequat quis. Vestibulum ante ipsum primis in faucibus orci luctus." },
    { id: 2, title: "Post 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet urna magna, ac sagittis urna consequat quis. Vestibulum ante ipsum primis in faucibus orci luctus." },
    { id: 3, title: "Post 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet urna magna, ac sagittis urna consequat quis. Vestibulum ante ipsum primis in faucibus orci luctus." },
    // Add more dummy posts as needed
  ];
  
  const PostService = {
    // Simulate an asynchronous fetch of posts
    getLatestPosts: async () => {
      // Simulate a delay with setTimeout
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(dummyPosts);
        }, 1000); // Simulate 1 second delay
      });
    },
  };
  
  export default PostService;