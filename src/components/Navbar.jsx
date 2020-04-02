import React, { Component,useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
// class Navbar extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     // const { isLightTheme, light, dark } = this.context;
//     // const theme = isLightTheme ? light : dark;
//     return (
//       <AuthContext.Consumer>{(authContext) => (
//         <ThemeContext.Consumer>{(context) => {
//           const { isAuthenticated, toggleAuth } = authContext;
//           const { isLightTheme, light, dark } = context;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <nav style={{ background: theme.ui, color: theme.color }}>
//               <h1>Context App</h1>
//               <button onClick={toggleAuth}>{isAuthenticated ? 'logged in' : 'logged out'}</button>
//               <ul>
//                 <li>Home </li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>)
//         }}
//         </ThemeContext.Consumer>
//       )}
//       </AuthContext.Consumer>
//     );
//   }
// }
const NavBar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return ( 
    <nav style={{ background: theme.ui, color: theme.color }}>
    <h1>Context App</h1>
    <button onClick={toggleAuth}>{isAuthenticated ? 'logged in' : 'logged out'}</button>
    <ul>
      <li>Home </li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
   );
}
 
export default NavBar;
