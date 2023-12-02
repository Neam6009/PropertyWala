const AdminControlPropertyCard = () => {
	return <div>properties</div>;
};

export default AdminControlPropertyCard;

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <!-- Font Awesome -->
//     <link
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
//       rel="stylesheet"
//     />

//     <style>
//       .propertyCardAdminControl {
//         background-color: white;
//         color: black;
//         padding: 1rem;
//         display: flex;
//         align-items: center;
//         border-radius: 0.5rem;
//         justify-content: space-between;
//         box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
//       }

//       .propertyCardAdminControlChild {
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

//       .propertyCardAdminControlButtons {
//         justify-self: left;
//       }

//       .propertyCardAdminControlButtons button {
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
//         .propertyCardAdminControl {
//           flex-direction: column;
//           gap: 1rem;
//         }
//         .propertyCardAdminControlButtons button {
//           padding: 0.5rem 1rem;
//         }
//       }
//     </style>
//   </head>

//   <body>
//     <div class="propertyCardAdminControl" id="propertyCardAdminControl<%=property._id%>">
//       <div class="propertyCardAdminControlChild">
//         <div>
//           <p class="icon"><%= property.name[0] %></p>
//         </div>
//         <div>
//           <h2><%= property.name %></h2>
//           <div class="card__handle">
//             <span class="handle"><%= property.location %></span>
//           </div>
//         </div>
//       </div>
//       <div class="propertyCardAdminControlButtons">
//         <button onclick="deleteProperty('<%=property._id%>')" id="deleteButton<%=property._id%>">
//           Remove Property
//         </button>
//       </div>
//     </div>
//   </body>

//   <script>
//     function deleteProperty(propertyId) {
//       const mainItem = document.querySelector(`#propertyCardAdminControl${propertyId}`);
//       const deleteButton = document.querySelector(`#deleteButton${propertyId}`);
//       const result = confirm('Are you sure?');
//       if (result) {
//         fetch(`properties/remove/${propertyId}`, {
//           method: 'POST',
//         }).then((res) => {
//           console.log(res);
//         });
//       }
//       mainItem.classList.add('display_none');
//     }
//   </script>
// </html>
