import React, { useState } from 'react'
import Cards from './Cards'
import {useSelector} from 'react-redux'
import {allCategory} from '../features/categorySlice'

function MiddleElement() {
    const [active,setActive] =useState("")
    const [cards,setCards]=useState([])
    const categorys=useSelector(allCategory)
  return (
    <>
    <div className="container-fluid ">
        <div className="row">
          <nav className="col-md-2 d-fixed d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                {/* <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span data-feather="home"></span>
                    Dashboard <span className="sr-only"></span>
                  </a>
                </li> */}
                
                {categorys.map((category) => {
          const bgColor = active === category.id ? '#2196f8':"";
          return (
            <li style={{
              backgroundColor: `${bgColor}`
            }} className="nav-item"
            key={category.id} >
              <a role="button" href="#foo" className='nav-link active' onClick={() => {
                setCards(category.cards);
                setActive(category.id)
              } } >
                {category.name}
              </a>
            </li>
          )
        })}
              </ul>
            </div>
          </nav>

          <main
            role="main"
            className="col-md-9 d-inline mb-5 ml-sm-auto col-lg-10 pt-3 px-4 h-100"
          >
            <div className=" row pb-2 mb-3 border-bottom">
              {/* <div className="row"> */}
                <Cards cards={cards}/>
              {/* </div> */}
            </div>
          </main>
        </div>
      </div>
      {/* <div>MiddleElement</div> */}
    </>
  )
}

export default MiddleElement