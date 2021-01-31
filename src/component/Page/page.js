import React from 'react'
import PageProject from './Project/project'
import PageAbout from './About/about'
import PageContact from './Contact/contact'
import Loader from '../Loader/loader'
import PageStyle from './page.module.css'

function Page({PageName}) {
  if (PageName === 'project') {
    return (
      <div className={PageStyle.page_container} >
        <PageProject />
        <Loader />
      </div>
    )
  }else if (PageName === 'about') {
    return (
      <div className={PageStyle.page_container} >
        <PageAbout />
        <Loader />
      </div>
    )
  }else if (PageName === 'contact') {
    return (
      <div className={PageStyle.page_container} >
        <PageContact />
        <Loader />
      </div>
    )
  }

}

export default Page
