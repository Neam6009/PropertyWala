import React from "react";
import classes from "../assets/Styles/propertyCard.module.css";
import noImg from "../assets/images/PW_noImageFound.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBed, faBath,faChartArea} from '@fortawesome/free-solid-svg-icons'

const PropertyCard = ({ property }) => {
    let d = 'type';

    if(property.type == 'rent'){
         d=  '/month';
    }else{
        d=' for sale';
    }

  return (
    <div className={classes.propertyCard}>
      <img src={noImg} alt="image error" />
      <div className={classes.propertyCard_info}>
        <span className={classes.coloredText}>{ '₹ ' +property.price}</span>
        <span className={classes.greyText}>{d}</span>
        <p className={classes.pcBigText}>{property.propertyName}</p>
        <p className={classes.greyText}>{property.location}</p>
        <div className={classes.propertyCardNav}>
            <span><FontAwesomeIcon icon={faBed} /><span>{property.bedsNum}</span></span>
            <span><FontAwesomeIcon icon={faBath} /><span>{property.bathsNum}</span></span>
            <span><FontAwesomeIcon icon={faChartArea} /><span>{property.area}</span></span>
        </div>

      </div>
    </div>
  );
};

export default PropertyCard;
