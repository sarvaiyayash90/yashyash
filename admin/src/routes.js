import React from 'react';
import axios from 'axios';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

// blog start
const Blog_Create = React.lazy(() => import('./views/blog/Blog_Create'));
const Blog_List = React.lazy(() => import('./views/blog/Blog_List'));
const Blog_List_Delete = React.lazy(() => import('./views/blog/Blog_List_Delete'));
const Blog_view = React.lazy(() => import('./views/blog/Blog_view'));
const Blog_Edit = React.lazy(() => import('./views/blog/Blog_Edit'));
// blog end

// user
const User_Register = React.lazy(() => import('./views/users/User_Register'));
const User_List = React.lazy(() => import('./views/users/User_List'));
const User_view = React.lazy(() => import('./views/users/User_view'));
const User_Edit = React.lazy(() => import('./views/users/User_Edit'));
const User_List_Delete = React.lazy(() => import('./views/users/User_List_Delete'));
const User_Pdf = React.lazy(() => import('./views/users/User_Pdf'));
// user EOF

// user profile
const User_profile = React.lazy(() => import('./views/users/User_profile'));
const User_profile_edit = React.lazy(() => import('./views/users/User_profile_edit'));
const User_Password_Change = React.lazy(() => import('./views/users/User_Password_Change'));
// User profile EOF

var routes = [];

(function() {

  axios.get(`http://localhost:5000/admin_permissiondata/permission_components_check`,{params:
      {   
        l_id : localStorage.getItem('Token_Key')
      }
    })
    .then((res)=>{

      const routes_new = [
        { path: '/', exact: true, name: 'Home' },
        { path: '/dashboard', name: 'Dashboard', component: Dashboard },
        { path: '/theme', name: 'Theme', component: Colors, exact: true },
        { path: '/theme/colors', name: 'Colors', component: Colors },
        { path: '/theme/typography', name: 'Typography', component: Typography },
        { path: '/base', name: 'Base', component: Cards, exact: true },
        { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
        { path: '/base/cards', name: 'Cards', component: Cards },
        { path: '/base/carousels', name: 'Carousel', component: Carousels },
        { path: '/base/collapses', name: 'Collapse', component: Collapses },
        { path: '/base/forms', name: 'Forms', component: BasicForms },
        { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
        { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
        { path: '/base/navbars', name: 'Navbars', component: Navbars },
        { path: '/base/navs', name: 'Navs', component: Navs },
        { path: '/base/paginations', name: 'Paginations', component: Paginations },
        { path: '/base/popovers', name: 'Popovers', component: Popovers },
        { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
        { path: '/base/switches', name: 'Switches', component: Switches },
        { path: '/base/tables', name: 'Tables', component: Tables },
        { path: '/base/tabs', name: 'Tabs', component: Tabs },
        { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
        { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
        { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
        { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
        { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
        { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
        { path: '/charts', name: 'Charts', component: Charts },
        { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
        { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
        { path: '/icons/flags', name: 'Flags', component: Flags },
        { path: '/icons/brands', name: 'Brands', component: Brands },
        { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
        { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
        { path: '/notifications/badges', name: 'Badges', component: Badges },
        { path: '/notifications/modals', name: 'Modals', component: Modals },
        { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
        { path: '/widgets', name: 'Widgets', component: Widgets },
        { path: '/users', exact: true,  name: 'Users', component: Users },
        { path: '/users/:id', exact: true, name: 'User Details', component: User },
      
        // blog start
        { path: '/Blog_Create', exact: true, name: 'New Blog', component: Blog_Create },
        { path: '/Blog_List', exact: true, name: 'Blog List', component: Blog_List },
        { path: '/Blog_List_Delete', exact: true, name: 'Deleted Blog', component: Blog_List_Delete },
        { path: '/Blog_view/:id', exact: true, name: 'Blog View', component: Blog_view },
        { path: '/Blog_Edit/:id', exact: true, name: 'Blog View', component: Blog_Edit },
        // blog end
      
        // user
        { path: '/user_register', exact: true, name: 'User Register', component: User_Register },
        { path: '/user_list', exact: true, name: 'User List', component: User_List },
        { path: '/user_view/:id', exact: true, name: 'User View', component: User_view },
        { path: '/user_edit/:id', exact: true, name: 'User Edit', component: User_Edit },
        { path: '/user_list_delete', exact: true, name: 'User Delete List', component: User_List_Delete },
        { path: '/user_pdf/:id', exact: true, name: 'User PDF', component: User_Pdf },
        // user EOF

        // user profile start
        { path: '/user_profile', exact: true, name: 'Profile', component: User_profile },
        { path: '/user_profile_edit', exact: true, name: 'Profile Edit', component: User_profile_edit },
        { path: '/user_password_change', exact: true, name: 'Password Change', component: User_Password_Change },
        // uset Profile EOF
      ];

      const chk_user_data = localStorage.getItem('chk_user')
      const Auth_check_data = localStorage.getItem('Auth_check')
      const Token_Key_data = localStorage.getItem('Token_Key')

      // console.log("data",res.data)
      
      if(chk_user_data === Auth_check_data && Token_Key_data === chk_user_data )
      {   
         routes.push(...routes_new);
        // console.log("sasasa_if",routes);
      }else{
        const data = routes_new.filter((item)=>
          res.data.find((val)=> item.path === val.form_path && val.status === 'Active')
        )
        routes.push(...data);
        //console.log("sasasa_else",routes);
      }
    }).catch((err)=>{
      console.log("res",err);  
    })        
})();




export default routes;
