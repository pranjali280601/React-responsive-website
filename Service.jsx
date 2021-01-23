import React from 'react';
import servimg from "../src/images/img2.jpg";
import logo from "../src/images/logo.png";
import brochure from "../src/images/brochure.jfif";
import book from "../src/images/book.jfif";
import photo from "../src/images/photo.jfif";
import diary from "../src/images/diary.png";
const Service =() =>{
  return (
    <>
    <div className='my-5'>
            	<h1 className="text-center">Our Services</h1>
            	</div>
            	
    <div className="container-fluid mb-5">
         <div className='row'>
            <div className='col-10 mx-auto'>
            <div className='row gy-8'>
            <div className='col-md-4 col-10 mx-auto'>
            	<div class="card" >
  					<img src={logo} class="card-img-top" alt="..." />
  					<div class="card-body">
    				<h5 class="card-title">Multifaceted Services</h5>
    				<p class="card-text">Logo design, Business Cards, I-Cards, Printed Stationery, Presentations, E-mailers.</p>
    				
  				</div>
			</div>
            </div>
            	<div className='col-md-4 col-10 mx-auto'>
            	<div class="card" >
  					<img src={brochure} class="card-img-top" alt="..." />
  					<div class="card-body">
    				<h5 class="card-title">Promotional Materials</h5>
    				<p class="card-text">Leaflets, Brochures, Catalogues, Posters, Booklets, Paper Bags, Souvenir Printing, Print Advertising, Large Format Digital Printing, Large Format Solvent Printing.</p>
    				
  				</div>
			</div>
            </div>
            <div className='col-md-4 col-10 mx-auto'>
            	<div class="card" >
  					<img src={book} class="card-img-top" alt="..." />
  					<div class="card-body">
    				<h5 class="card-title">Book Designing & Printing</h5>
    				<p class="card-text">Text Books, Picture Books, Training Module Books, Doctrine, Staff Handbooks, Technical Manuals, Installation Guides, Field Force Books.</p>
    				
  				</div>
			</div>
            </div>
            <div className='col-md-4 col-10 mx-auto'>
            	<div class="card" >
  					<img src={photo} class="card-img-top" alt="..." />
  					<div class="card-body">
    				<h5 class="card-title">Photography</h5>
    				<p class="card-text">Product Shoot, Tabletop Shoot, Industrial Shoot.</p>
    				
  				</div>
			</div>
            </div>
            <div className='col-md-4 col-10 mx-auto'>
            	<div class="card" >
  					<img src={diary} class="card-img-top" alt="..." />
  					<div class="card-body">
    				<h5 class="card-title">Souvenirs & Special Novelties</h5>
    				<p class="card-text">Coffee Mug, Pen Stand, Customized Wall Clock, Photo Frames, Mouse Pad, Coaster Set, Paperweight, Customized Badges, Magnet Stickers, PVC & Wood Key Rings, Pen, Bottle Openers, T-Shirts, Caps, Bags, Business Organizers & Diaries, Awards & Shields, Certificates, Table & Wall Calendars, Corporate Gifts, Occasional Gifts, Promotional Gifts, Hand-Crafted Gifts</p>
    				
  				</div>
			</div>
            </div>
            
            </div>
            </div>
         </div>
    </div> 
    </>);
};

export default Service;
