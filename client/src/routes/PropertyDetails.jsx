const PropertyDetails = ({ property_id }) => {
	const [property, setProperty] = useState();

	return;

	//      <div class="header">
	//     <div>
	//       <h1> {property.name} </h1>
	//       <p> {property.location}, {property.locality} </p>
	//     </div>
	//     <div class="buttons">
	//       <button onclick="favourite()" id="favouriteButton">Favourite</button>
	//     </div>
	//   </div>
	//   <div class="image-container">
	//     <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
	//       <!-- Indicators -->
	//       <div class="carousel-indicators">
	//         <button
	//           type="button"
	//           data-mdb-target="#carouselBasicExample"
	//           data-mdb-slide-to="0"
	//           class="active"
	//           aria-current="true"
	//           aria-label="Slide 1"
	//         ></button>
	//         <button
	//           type="button"
	//           data-mdb-target="#carouselBasicExample"
	//           data-mdb-slide-to="1"
	//           aria-label="Slide 2"
	//         ></button>
	//         <button
	//           type="button"
	//           data-mdb-target="#carouselBasicExample"
	//           data-mdb-slide-to="2"
	//           aria-label="Slide 3"
	//         ></button>
	//       </div>

	//       {/* <div class="carousel-inner" >
	//         <!-- Single item -->
	//         <div class="carousel-item active">
	//           <img align="middle"
	//           <% if(property.propertyImage[0]){ %>
	//             src="data:<%= property.propertyImage[0].contentType %>;base64,<%= property.propertyImage[0].data.toString('base64') %>"
	//             <% } else{%>
	//               src="/images/PW_noImageFound.png"
	//               <% } %>
	//             class="d-block w-100"
	//             alt="Sunset Over the City"
	//           />
	//         </div>

	//         <!-- Single item -->
	//         <div class="carousel-item">
	//           <img
	//           <% if(property.propertyImage[1]){ %>
	//           src="data:<%= property.propertyImage[1].contentType %>;base64,<%= property.propertyImage[1].data.toString('base64') %>"
	//           <% } else{%>
	//             src="/images/PW_noImageFound.png"
	//             <% } %>
	//             class="d-block w-100"
	//             alt="Canyon at Nigh"
	//           />
	//         </div>

	//         <!-- Single item -->
	//         <div class="carousel-item">
	//           <img
	//           <% if(property.propertyImage[2]){ %>
	//             src="data:<%= property.propertyImage[2].contentType %>;base64,<%= property.propertyImage[2].data.toString('base64') %>"
	//             <% } else{%>
	//               src="/images/PW_noImageFound.png"
	//               <% } %>
	//             class="d-block w-100"
	//             alt="Cliff Above a Stormy Sea"
	//           />
	//         </div>

	//       <!-- Inner -->

	//       <!-- Controls -->
	//       <button
	//         class="carousel-control-prev"
	//         type="button"
	//         data-mdb-target="#carouselBasicExample"
	//         data-mdb-slide="prev"
	//       >
	//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	//         <span class="visually-hidden">Previous</span>
	//       </button>
	//       <button
	//         class="carousel-control-next"
	//         type="button"
	//         data-mdb-target="#carouselBasicExample"
	//         data-mdb-slide="next"
	//       >
	//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
	//         <span class="visually-hidden">Next</span>
	//       </button>
	//     </div>
	//     <!-- Carousel wrapper --> */}
	//   </div>
	//   <div class="detail_parent_container">
	//     <div class="detail_child_container">
	//       <div class="property_data">
	//         <div>
	//           <p>Bedrooms</p>
	//           <p class="data">3</p>
	//         </div>
	//         <div>
	//           <p>Bathrooms</p>
	//           <p class="data">3</p>
	//         </div>
	//         <div>
	//           <p>Sqare Area</p>
	//           <p class="data">1200 m<sup>2</sup></p>
	//         </div>
	//         <div>
	//           <p>Status</p>
	//           <p class="data">available</p>
	//         </div>
	//       </div>
	//       <div style="margin-top: 1rem">
	//         <h2>About this home</h2>
	//         <p>
	//           <%=property.description%>
	//         </p>
	//         <div class="ownerParentContainer">
	//           <p>Listed by property owner</p>
	//           <div class="ownerContainer">
	//             <div style="display: flex; align-items: center">
	//               <div>
	//                 <h4>VR Goyani</h4>
	//                 <p>This is property description</p>
	//                 <div class="display_none" id="moreInfo">
	//                   <p><%=property.lister.email%></p>
	//                   <p><%=property.lister.mobileNumber%></p>
	//                 </div>
	//               </div>
	//             </div>
	//             <div class="buttons">
	//               <button>Ask a question</button>
	//               <button onclick="getMoreInfo()">Get more info</button>
	//             </div>
	//           </div>
	//         </div>
	//         <hr />
	//         <div class="rental-features">
	//           <div class="child-container">
	//             <div class="rental-data">
	//               <p>Date available</p>
	//               <b>Available now</b>
	//             </div>
	//             <div class="rental-data">
	//               <p>Type</p>
	//               <b><%=property.purpose%></b>
	//             </div>
	//             <div class="rental-data">
	//               <p>City</p>
	//               <b><%=property.location%></b>
	//             </div>
	//             <div class="rental-data">
	//               <p>Year Built</p>
	//               <b><%=property.yearBuilt%></b>
	//             </div>
	//           </div>
	//           <div class="child-container">
	//             <div class="rental-data">
	//               <p>Size</p>
	//               <b><%=property.area%>sqft</b>
	//             </div>
	//             <div class="rental-data">
	//               <p>Lot Size</p>
	//               <b><%=property.area%>sqft</b>
	//             </div>
	//             <div class="rental-data">
	//               <p>Parking Area</p>
	//               <b><%=property.parkingArea%></b>
	//             </div>
	//             <div class="rental-data">
	//               <%if(property.purpose == 'sale'){%>
	//               <p>Price</p>
	//               <%}else{%>
	//               <p>Rent</p>
	//               <%}%>
	//               <b>₹ <%=property.price%></b>
	//             </div>
	//           </div>
	//         </div>
	//         <hr />
	//         <!-- <div class="rent-history">
	//           <h2>Rent Price History for Beverly Springfield</h2>
	//           <table>
	//             <tr>
	//               <th>Date</th>
	//               <th>Price</th>
	//               <th>Event</th>
	//               <th>Source</th>
	//             </tr>
	//             <tr>
	//               <td>28/12/2021</td>
	//               <td>$2,700/mo</td>
	//               <td>Listed for Sale</td>
	//               <td>PropertyWala</td>
	//             </tr>
	//             <tr>
	//               <td>10/10/2021</td>
	//               <td>$2,700/mo</td>
	//               <td>Listed for Sale</td>
	//               <td>PropertyWala</td>
	//             </tr>
	//             <tr>
	//               <td>03/04/2020</td>
	//               <td>$2,700/mo</td>
	//               <td>Listed for Sale</td>
	//               <td>PropertyWala</td>
	//             </tr>
	//             <tr>
	//               <td>25/11/2019</td>
	//               <td>$2,700/mo</td>
	//               <td>Listed for Sale</td>
	//               <td>PropertyWala</td>
	//             </tr>
	//             <tr>
	//               <td>09/02/2019</td>
	//               <td>$2,700/mo</td>
	//               <td>Listed for Sale</td>
	//               <td>PropertyWala</td>
	//             </tr>
	//           </table>
	//         </div> -->
	//         <p class="terms">
	//           You agree to PropertyWala's Terms of Use & Privacy Policy. By choosing to contact a
	//           property, you also agree that PropertyWalaGroup, landlords, and property managers may
	//           call or text you about any inquiries you submit through our services,which may involve
	//           use of automated means and prerecorded/artifhcial voices. You don't need to consent as
	//           acondition of renting any property, or buying any other goods or services. Message/data
	//           rates may apply.
	//         </p>
	//         <h2>Similar listings</h2>
	//         <div class="similar-container"></div>
	//       </div>
	//     </div>
	//   </div>
};

export default PropertyDetails;
