// AdminPostService.js
const AdminPostService = {
    getAdminPosts: async () => {
      // Simulate fetching admin posts (replace with actual implementation)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, adminEvent: true, type: 'class', description: 'Sept-5-2024 Final Exam Starts' },
            { id: 2, adminEvent: true, type: 'club', description: 'Sept-5 GDSC Panel Discussion' },
          ]);
        }, 1000); // Simulate delay
      });
    },
  };
  
  export default AdminPostService;
  