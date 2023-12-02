const AdminControlBlogCard = () => {
	return <div>Blogs</div>;
};

export default AdminControlBlogCard;

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <!-- Font Awesome -->
//     <link
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
//       rel="stylesheet"
//     />

//     <style>
//       .blogCardAdminControl {
//         background-color: white;
//         color: black;
//         padding: 1rem;
//         display: flex;
//         align-items: center;
//         margin-bottom: 2rem;
//         border-radius: 0.5rem;
//         justify-content: space-between;
//         box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
//       }

//       .blogCardAdminControlChild {
//         display: flex;
//         gap: 1rem;
//       }

//       .icon {
//         width: 50px;
//         height: 50px;
//         border-radius: 50%;
//         background-color: #7164f0;
//         color: white;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       }

//       .blogCardAdminControlButtons {
//         justify-self: left;
//       }

//       .blogCardAdminControlButtons button {
//         padding: 1rem 2rem;
//         border-radius: 5px;
//         outline: none;
//         background-color: #7164f0;
//         color: white;
//         border: 1px solid white;
//         cursor: pointer;
//       }
//       .display_none {
//         display: none;
//       }

//       @media (max-width: 700px) {
//         .blogCardAdminControl {
//           flex-direction: column;
//           gap: 1rem;
//         }
//         .blogCardAdminControlButtons button {
//           padding: 0.5rem 1rem;
//         }
//       }
//     </style>
//   </head>

//   <body>
//     <div class="blogCardAdminControl" id="blogCardAdminControl<%=blog._id%>">
//       <div class="blogCardAdminControlChild">
//         <div>
//           <p class="icon"><%= blog.title[0] %></p>
//         </div>
//         <div>
//           <h2><%= blog.title %></h2>
//           <div class="card__handle">
//             <span class="handle"><%= blog.date %></span>
//           </div>
//         </div>
//       </div>
//       <div class="blogCardAdminControlButtons">
//         <button onclick="deleteBlog('<%=blog._id%>')" id="deleteBlogButton<%=blog._id%>">
//           Remove Blog
//         </button>
//       </div>
//     </div>
//   </body>

//   <script>
//     function deleteBlog(blog_id) {
//       const mainBlogItem = document.querySelector(`#blogCardAdminControl${blog_id}`);
//       const deleteBlogButton = document.querySelector(`#deleteBlogButton${blog_id}`);
//       const result = confirm('Are you sure?');
//       if (result) {
//         fetch(`/blogs/deleteBlog/${blog_id}`, {
//           method: 'POST',
//         }).then((res) => {
//           console.log(res);
//         });
//       }
//       mainBlogItem.classList.add('display_none');
//     }
//   </script>
// </html>
