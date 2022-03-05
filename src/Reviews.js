import React from 'react';
import './App.css';

function Reviews() {
  const reviewers = [
    {
      "id" : 1,
      "name" : "Heru",
      "review" : "Kualitas sip matab",
      "photo" : "https://images.pexels.com/photos/6015909/pexels-photo-6015909.jpeg?cs=srgb&dl=pexels-harsha-vardhan-6015909.jpg&fm=jpg"
    },
    {
      "id" : 2,
      "name" : "Jarwo",
      "review" : "Nyaman dipakai empuk banget",
      "photo" : "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "id" : 3,
      "name" : "Anwar",
      "review" : "Aman dipakai hujan-hujan",
      "photo" : "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
  ]

  const reviews = reviewers.map((itemReviews)=>
                  <div key={itemReviews.id} className="Item">
                    <div className="User">
                      <img src={itemReviews.photo} />
                      <h3>{itemReviews.name}</h3>
                      <p>{itemReviews.review}</p>
                    </div>
                  </div>
                  );

  return(
    <div className="Review-box">
        <h2>Reviews</h2>
        {reviews}
      </div>
  )
}

export default Reviews;