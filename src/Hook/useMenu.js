import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faStar} from "@fortawesome/free-solid-svg-icons";
import {useAppSelector} from "../Store/store";


const useMenu = () => {
  const {account} = useAppSelector(state => state.auth)
  if (account?.isGV) {
    return [{
      key: 'class',
      label: (<Link to='/class'>
        <div>
          <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Quản lí lớp học</h4>
        </div>
      </Link>),
    }]
  }
  return [{
    key: 'home',
    label: (<Link to='/home'>
      <div>
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Thời khóa biểu toàn trường</h4>
      </div>
    </Link>),
  },
    ...((!account?.isAdmin) ? [
      //   {
      //   key: 'register',
      //   label: (<Link to='/registerSubject'>
      //     <div>
      //       <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Đăng kí học</h4>
      //     </div>
      //   </Link>),
      // }, {
      //   key: 'scores',
      //   label: (<Link to='/scores'>
      //     <div>
      //       <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Bảng điểm</h4>
      //     </div>
      //   </Link>),
      // }, {
      //   key: 'tuition',
      //   label: (<Link to='/tuition'>
      //     <div>
      //       <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Học phí</h4>
      //     </div>
      //   </Link>),
      // },
      {
        key: 'studentImformation',
        label: (<Link to='/studentImformation'>
          <div>
            <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Thông tin cá nhân</h4>
          </div>
        </Link>),
      }] : []),
    ...((account?.isAdmin) ? [{
      key: 'studentList',
      label: (<Link to='/studentList'>
        <div>
          <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Quản lí sinh viên</h4>
        </div>
      </Link>),
    }, {
      key: 'teacher',
      label: (<Link to='/teacher'>
        <div>
          <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Danh sách giáo viên</h4>
        </div>
      </Link>),
    }
    ] : [])
  ]
}

export default useMenu;
