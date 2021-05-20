import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
import axios from 'axios';

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  const [sidebar_data, setsidebar] = useState([]);


  useEffect( async () => {  

    await axios.get(`http://localhost:5000/admin_permissiondata/permission_check_sidebar`,{params:
        {   
          l_id : localStorage.getItem('Token_Key')
        }
      })
      .then((res)=>{

        // console.log("--------ddd",res)
        // // find data all _nav file database cheak paticular
        // const data_new_new = navigation.filter((item)=>
        //   res.data.find((val)=> val.form_path === item.to || val.form_path === item.route)
        // )
        // // console.log("-------",data_new_new);
        
        // // _children array inside all data show
        // let data_data = [];
        // for (let index = 0; index < data_new_new.length; index++) {
        //   data_data = data_new_new[index]._children;
        // }
        // // console.log("======//",data_data);
        
        // // _children inside paticular data show
        // var data_d = data_data.filter((new_item)=> 
        //     res.data.find((valu)=> valu.form_path === new_item.to)
        // )
        // // console.log("dsadaddsadasdd",data_d)

        // // only show parent array
        // // setTimeout(()=>{  
        //   var data_new = navigation.filter((item)=>
        //     res.data.find((val)=> val.form_path === item.to || val.form_path === item.route)
        //   )
        //   //console.log("=====>",data_new)

        //   // parent array inside _children delete array
        //   let dd = [];
        //   for (let index = 0; index < data_new.length; index++) {
        //     dd = delete data_new[index]._children;
        //   }
        //   //console.log("======//",dd);

        //   // setTimeout(() => {
        //   //   Object.assign(data_new, {_children: ""});
        //   //   console.log("----------------_____",data_new);
        //   // }, 2000);

        //   // append the data in _children data
        //   // setTimeout(() => {
        //     setsidebar(data_new.map((item)=>{
        //       if(item.name === "Buttons")
        //       {
        //         item._children = data_d;return item
        //       }else{
        //         return item
        //       }
        //     }))
        //   // },1000)

        //   // data_new._children.push(data_d);
        //   // console.log("sasasa",data_new);

        // // },5000)

        // ============
        let result1 = navigation.map((nav,index)=>{
          return {
            ...nav,
            _children : nav._children instanceof Array && nav._children.filter((child) => 
                 res.data.find((data) =>  child.to === data.form_path)
             )
          }
        })
        
        // const data_new_new = result1.filter((item)=>
        //   res.data.find((val)=> val.form_path === item.to || val.form_path === item.route)
        // )
        // setsidebar(data_new_new)
        
        let data = result1.filter(({to, _children}) => 
          // console.log(item)
          res.data.find(({form_path}) => {
            if (form_path === to) return true 
            if(_children instanceof Array) return _children.find(function(element) {
              return element.to === form_path;
            })
            else return false
            // if(item._children) item._children.find((child) => { if(child.to===val.path) return true })
            // console.log("path value",val.path);
            })
        )
        setsidebar(data)
      }).catch((err)=>{
        // localStorage.removeItem('Auth_check');
        // localStorage.removeItem('Token_Key');
        // localStorage.removeItem('chk_user');
        // console.log("res",err);  
      })
  },[]);

  const chk_user_data = localStorage.getItem('chk_user')
  const Auth_check_data = localStorage.getItem('Auth_check')
  const Token_Key_data = localStorage.getItem('Token_Key')
  
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        {/* <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        /> */}

        {chk_user_data != Auth_check_data && <CCreateElement
          items={sidebar_data}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />}

        {chk_user_data === Auth_check_data && Token_Key_data === chk_user_data && <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />}

      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
