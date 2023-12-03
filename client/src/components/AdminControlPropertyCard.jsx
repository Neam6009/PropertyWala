import React, { useState } from "react";
import classes from "../assets/Styles/AdminControlPropertyCard.module.css";

const AdminControlPropertyCard = ({ property }) => {
	const [deleted, setDeleted] = useState(false);

	const removePropertyHandler = async () => {
		fetch(`http://localhost:3003/properties/remove/${property._id}`, {
			method: "POST",
		}).then(() => setDeleted(true));
	};

	return (
		<div>
			{!deleted && (
				<div className={classes.propertyCardAdminControl}>
					<div className={classes.propertyCardAdminControlChild}>
						<div>
							<p className={classes.icon}>{property.name[0]}</p>
						</div>
						<div>
							<h2>{property.name}</h2>
							<div className={classes.card__handle}>
								<span className={classes.handle}>
									{property.location}
								</span>
							</div>
						</div>
					</div>
					<div className={classes.propertyCardAdminControlButtons}>
						<button onClick={removePropertyHandler}>
							Remove Property
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminControlPropertyCard;
