import React from 'react'
import Layout from '../Components/Layout/Layout'
import Banner from '../Images/home3.jpg'
import "../Styles/HomeStyle.css"
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage:`url(${Banner})` }}>
        <div className="headerContainer">
          <h1>MY RESTURANT</h1>
          <p>Best Food In The World</p>
          <a href="./Menu"><button>Order Now</button></a>
        </div>
      </div>
    </Layout>
  )
}

export default Home