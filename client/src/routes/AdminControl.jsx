import { useSelector } from "react-redux";
import classes from "../assets/Styles/adminControl.module.css";
import AdminControlPropertyCard from "../components/AdminControlPropertyCard";
import AdminControlBlogCard from "../components/AdminControlBlogCard";
import UserCard from "../components/UserCard";
import { useEffect, useState } from "react";

export default function AdminControl() {
	const user = useSelector((state) => state.auth.user);
	const [properties, setProperties] = useState([]);
	const [blogs, setBlogs] = useState([]);
	const [users, setUsers] = useState([]);
	const [selected, setSelected] = useState(0);

	useEffect(() => {}, []);
	const [selectedItem, setSelectedItem] = useState();

	// const [selectedItem, setSelectedItem] = useState(
	// 	<div id="option0Data">
	// 		<section>
	// 			<h2>{user.name}</h2>
	// 			<div className="card__handle">
	// 				<span className="handle">{user.email}</span>
	// 			</div>
	// 			<form action="/allMail" method="post" className="aform">
	// 				<label htmlFor="subject"></label>
	// 				<input
	// 					type="text"
	// 					placeholder="Enter subject"
	// 					name="subject"
	// 				/>
	// 				<div className="content">
	// 					<textarea
	// 						name="content"
	// 						id="froala1"
	// 						cols="300"
	// 						rows="100"
	// 						required
	// 					></textarea>
	// 				</div>
	// 				<button id="BfButton1" type="submit">
	// 					Mail all users
	// 				</button>
	// 			</form>
	// 		</section>
	// 	</div>
	// );

	useEffect(() => {
		if (selected == 1) {
			setSelectedItem(
				<div id="option1Data" className="display_none">
					<section>
						{properties.map((property) => {
							<div style="margin:1rem 0;">
								<AdminControlPropertyCard property={property} />
							</div>;
						})}
					</section>
				</div>
			);
		}

		if (selected == 2) {
			setSelectedItem(
				<div id="option2Data" className="display_none">
					<section>
						{users.map((user) => {
							<div style="margin:1rem 0;">
								<UserCard user={user} />
							</div>;
						})}
					</section>
				</div>
			);
		}

		if (selected == 3) {
			setSelectedItem(
				<div id="option3Data" className="display_none">
					<section>
						{blogs.map((blog) => {
							<div style="margin:1rem 0;">
								<AdminControlBlogCard blog={blog} />
							</div>;
						})}
					</section>
				</div>
			);
		}
	}, [selected]);

	console.log(selectedItem);

	return (
		<div>
			<nav>
				<ul className={classes.navLinks}>
					<li onClick={() => setSelected(0)}>Home</li>
					<li onClick={() => setSelected(1)}>Properties</li>
					<li onClick={() => setSelected(2)}>Users</li>
					<li onClick={() => setSelected(3)}>Blogs</li>
				</ul>
			</nav>

			{selectedItem}
		</div>
	);
}

{
	/* 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Controls</title>
    <link href="/Styles/main.css" rel="stylesheet" type="text/css" />
    <link href="/Styles/profile.css" rel="stylesheet" type="text/css" />
    <link href="/Styles/adminControl.css" rel="stylesheet" type="text/css" />
    <link
      href="https://cdn.jsdelivr.net/npm/froala-editor@3.2.6/css/froala_editor.pkgd.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/froala-editor@3.2.6/js/froala_editor.pkgd.min.js"
    ></script>
  </head>

  <body>
    <%- include('navbar',user) %>
    <main>

        <nav>
          <ul class="navlinks">
            <li class="link__item selected" onclick="changeData(0)">Home</li>
            <li class="link__item" onclick="changeData(1)">Properties</li>
            <li class="link__item" onclick="changeData(2)">Users</li>
            <li class="link__item" onclick="changeData(3)">Blogs</li>
          </ul>
        </nav>
    
        <div id="option0Data">
          <section>
            <h2><%= user.name %></h2>
            <div class="card__handle">
              <span class="handle"><%= user.email %></span>
            </div>
            <form action="/allMail" method="post" class="aform">
              <label for="subject"></label>
              <input type="text" placeholder="Enter subject" name="subject">
              <div class="content">
                <textarea name="content" id="froala1" cols="300" rows="100" required >
                </textarea>
            </div>
            <button id="BfButton1" type="submit">Mail all users</button>
            </form>
          </section>
        </div>
    
        <div id="option1Data" class="display_none">
          <section>
            <% for(let j = 0; j<properties.length;j++){ %>
            <div style="margin:1rem 0;"><%- include('adminControlPropertyCard',{property:properties[j]}); %></div>
            <% } %>
          </section>
        </div>
    
        <div id="option2Data" class="display_none">
            <section>
                <% for(let j = 0; j<users.length;j++){ %>
                <div style="margin:1rem 0;"><%- include('userCard',{user:users[j]}); %></div>
                <% } %>
            </section>
        </div>
    
        <div id="option3Data" class="display_none">
          <section>
            <% for(let i = 0 ; i < blogs.length; i++){ %>
              <%- include('adminContol_blogCard',{blog : blogs[i]})%>
            <%}%>
          </section>
        </div>
    </main>

    <%- include('footer') %>
  </body>
  <script>
    function changeData(selectedOption) {
      if (selectedOption === 0) {
        addClass(0);
      } else if (selectedOption === 1) {
        addClass(1);
      } else if (selectedOption === 2) {
        addClass(2);
      } else if (selectedOption === 3) {
        addClass(3);
      }
    }
    const options = document.querySelectorAll('.link__item');

    function addClass(option) {
      for (let i = 0; i < 4; i++) {
        if (option == i) {
          document.getElementById(`option${i}Data`).classList.remove('display_none');
          options[i].classList.add('selected');
        } else {
          document.getElementById(`option${i}Data`).classList.add('display_none');
          options[i].classList.remove('selected');
        }
      }
    }
  </script>
  <script>
    var editor = new FroalaEditor('#froala1', {
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'color', 'emoticons', 'insertLink', 'insertTable', 'undo', 'redo', 'fullscreen'],
        pluginsEnabled: ['image', 'link', 'table', 'colors', 'emoticons', 'fontSize'],
        heightMin: 200,
        heightMax: 300,
        placeholderText:'Mail Content...',
        fontSize: {
          selection: true,
          defaultSelection: '20',
          options: ['8', '10', '12', '14', '16', '18', '20', '24', '30']
        }
      });
</script>
</html> */
}
