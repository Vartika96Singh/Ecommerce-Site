import React from 'react'

const Item = ({image,title,description,price}) => {
  return (
    <div>
      <section className='card'>
        <img className ="card-img" src={image} alt='game-image'/>
        <article className='card-title'>{title}</article>
        <article className='card-description'>{description}</article>
        <article className='footer'>
            <article className='price'>{price}</article>
            <button className='cart-button'>Add to Cart</button>
        </article>
      </section>
    </div>
  )
}

export default Item
