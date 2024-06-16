import React from 'react';
import { useParams } from 'react-router-dom';
import './Productview.css'
import Productdata from '../../../component/ProductCards/Productdata/Data';
import ProductCards from '../../../component/ProductCards/ProductCards';

function Productview() {
  const { id } = useParams();
  const selectCard = Productdata.find((cardObj) => cardObj.id === id);

  if (!selectCard) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className='main-view-container'>
        <div className='product-img-container'>
          <img className='product-img' src={selectCard.ProductImg} alt={selectCard.name} />
        </div>
        <div className='Dis-container'>

          <span className='title'>{selectCard.Title}</span>
          <br />
          <br />
          <p>Price: {selectCard.Price}</p>
          <p>Rating: {selectCard.Rating}</p>
          <p>Reviews: {selectCard.Reviews}</p>
          <p>Category: {selectCard.Category}</p>
          <p>Brand: {selectCard.Brand}</p>
          <p className='discription'>Product Description: {selectCard.Description}</p>

        </div>
      </div>
      <div className='use-discription-container'>
        <div className='Ingrediants-container'>
          <span className='Ingridiant-title'>Ingredients</span>
        </div>
        <div className='Uses-container'> 
          <span className='Uses-heading'>Uses</span>
          <p>{selectCard.Uses}</p>
        </div>
      </div>
      <span className='Related-content-heading'>Related Products</span>
      <div className='pcardsContainers2'>

        {
          Productdata.map((Carddata, i) => {
            const {
              id,
              ProductImg,
              Title,
              Price,
            } = Carddata
            return (
              <ProductCards
                key={3}
                id={id}
                ProductImg={ProductImg}
                Title={Title}
                Price={Price}
              />)
          })
        }
      </div>
    </>
  );
}

export default Productview;