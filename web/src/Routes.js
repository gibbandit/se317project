// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'
import TitleHeaderLayout from 'src/layouts/TitleHeaderLayout'
import HomeHeaderLayout from 'src/layouts/HomeHeaderLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/image" page={ImagePage} name="image" />
      <Set wrap={TitleHeaderLayout}>
        <Route path="/" page={TitlePage} name="title" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
      </Set>
      <Set wrap={HomeHeaderLayout}>
        <Private unauthenticated="title">
          <Route path="/home" page={HomePage} name="home" />
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
