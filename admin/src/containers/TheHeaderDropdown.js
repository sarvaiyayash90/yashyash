import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


import axios from 'axios';


const TheHeaderDropdown = () => {

  const history = useHistory()

  const [users, setUsers] = useState({})
  useEffect(() => {
    
    load_user_data();

  }, [])

  const load_user_data = async ()  =>{
    await axios.get(`http://localhost:5000/admin_userdata/User_view/${localStorage.getItem('Token_Key')}`).then(resu=>{
      setUsers(resu.data)
      // console.log("sasa",resu.data)
    }).catch(err=>{
      console.log(err);
    })
  }

  const userProfile = () =>{
    history.push(`/user_profile`)
  }

  const user_logout = () =>{
    history.push(`/Logout`)
  }

  const chk_user_data = localStorage.getItem('chk_user')

  return (
    
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          
          { users.login_type === "User" ?
          <CImg
            src={'/uploads/User_img/' + users.profile_img}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
            style={{width:'100%',height:'100%'}}
          />
          
          : <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          /> }

          {/* <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          /> */}
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Updates
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
          Tasks
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>

        { chk_user_data ? '' : <CDropdownItem onClick={userProfile}>
          <CIcon name="cil-user"  className="mfe-2" />Profile
        </CDropdownItem> }
        
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" />
          Projects
          <CBadge color="primary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={user_logout}>
          <CIcon name="cil-arrow-right" className="mfe-2" />Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
