import React, {Fragment, useContext} from 'react'
import Link from 'next/link'
import {RadioAppData} from '../../../utils/contextapi/context'
import {showMenu, getTotal, urlFormatTxt, setName} from '../../../utils/common/helpers'

function Categories() {
  const {radiodata} = useContext(RadioAppData)

  const topMenu = radiodata.isSet ? radiodata.data.topMenu.map((cat, i) => {
    return (
      <Link key={i}
        href='/featured/[slug]'
        as={`/featured/${urlFormatTxt(cat.name)}`}>
        <a>
          <li 
            onClick={()=>showMenu('right')}
            className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src={`/images/${cat.name}.svg`} 
                alt={`${setName(cat.name)} icon`}/>{cat.name}</span>
          </li>
        </a>
      </Link>
    )
  }) : null

  const categories = radiodata.isSet ? radiodata.data.categories.map((cat, i) => {
    return (
      <Link key={i}
        href='/categories/[slug]'
        as={`/categories/${urlFormatTxt(cat.name)}`}>
        <a>
          <li 
            onClick={()=>showMenu('right')}
            className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src={`/images/${cat.name}.svg`} 
                alt={`${setName(cat.name)} icon`}/>{cat.name}</span>
            <span className='menu-station font-8'>{getTotal(cat.lists)}</span>
          </li>
        </a>
      </Link>
    )
  }) : null

  return (
    <Fragment>
      <div className="right-menu">

        <div className="content-center close-btn">
          <img 
          onClick={()=>showMenu('right')}
            src="/images/close.svg" alt="close icon"/>
        </div>

        <div className="sidebar-menu">
          <div className='content-center menu-header text-3'>
            <span className='font-2'>All Radio</span>
          </div>
          <ul className='menu-items'>
            {topMenu}
            <li 
              onClick={()=>showMenu('right')}
              className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/My Favorites.svg" alt=""/>
                My Favorites
              </span>
            </li>
          </ul>
        </div>


        <div className="sidebar-menu">
          <div className='content-center menu-header text-3'>
            <span className='font-2'>Radio Categories</span>
          </div>
          <ul className='menu-items'>
            {categories}
          </ul>
        </div>

      </div>
    </Fragment>
  )
}

export default Categories
