import React, {useState, useCallback} from 'react';
import {Input, Space, Table, Checkbox} from 'antd';
import {width, height} from '../../../Constant/Size';
import {useAppSelector} from '../../../Store/store';


const {Search} = Input;
const data = [
  {
    stt: 1,
    mm: "VC204",
    name: "Các dân tộc Việt Nam",
    className: "DANTOCVN.1",
    thu: 5,
    ca: "3-5",
    room: "B403",
    tc: 3,
    gv: "Nguyễn Anh Cường(MXV036)"
  },
  {
    stt: 2,
    mm: "VC204",
    name: "Các dân tộc Việt Nam",
    className: "DANTOCVN.1",
    thu: 5,
    ca: "6-7",
    room: "B307",
    tc: 3,
    gv: "Nguyễn Anh Cường(MXV036)"
  },
  {
    stt: 3,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.7",
    thu: 3,
    ca: "1-2",
    room: "A709",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 4,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.8",
    thu: 3,
    ca: "3-5",
    room: "A709",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 5,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.8",
    thu: 3,
    ca: "6-7",
    room: "A708",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 6,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.7",
    thu: 3,
    ca: "8-10",
    room: "A708",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 7,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 3,
    ca: "8-10",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 8,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.9",
    thu: 4,
    ca: "6-8",
    room: "A708",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 9,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.9",
    thu: 5,
    ca: "4-5",
    room: "A709",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 10,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 11,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 12,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 13,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 14,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 15,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 16,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  }
]


const RegisterSubject = () => {
  const {courses} = useAppSelector((state) => state.course);
  const [searchText, setSearchText] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleCheckboxChange = (e, record) => {
    if (e.target.checked) {
      setSelectedSubjects([...selectedSubjects, record]);
    } else {
      setSelectedSubjects(selectedSubjects.filter((subject) => subject.stt !== record.stt));
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredData = data.filter(
    (item) =>
      item.mm.toLowerCase().includes(searchText.toLowerCase()) ||
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.className.toLowerCase().includes(searchText.toLowerCase()) ||
      item.gv.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div style={{flex: 1, height: '100%'}}>
      <Space className='d-flex justify-content-end' style={{marginBottom: 16}}>
        <Search placeholder="Tìm kiếm môn học" onSearch={handleSearch} enterButton/>
      </Space>
      <Table
        columns={
          [
            {
              title: 'STT',
              dataIndex: 'stt',
              key: 'stt',
              width: 50
            },
            {
              title: 'Mã môn',
              dataIndex: 'mm',
              key: 'mm',
              width: 70
            },
            {
              title: 'Tên môn',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Tên lớp',
              key: 'className',
              dataIndex: 'className',
            },
            {
              title: 'Thứ',
              key: 'thu',
              dataIndex: 'thu',
              width: 50
            },
            {
              title: 'Ca học',
              key: 'ca',
              dataIndex: 'ca',
              width: 60
            },
            {
              title: 'Phòng học',
              key: 'room',
              dataIndex: 'room',
              width: 100
            },
            {
              title: 'Chọn',
              key: 'select',
              render: (text, record) => (
                <Checkbox onChange={(e) => handleCheckboxChange(e, record)}/>
              ),
            },
          ]
        }
        dataSource={filteredData}
        scroll={{
          y: height * 0.4,
        }}
        size="small"
        pagination={false}
      />

      <Table
        columns={
          [
            {
              title: 'STT',
              dataIndex: 'stt',
              key: 'stt',
              width: 50
            },
            {
              title: 'Mã môn',
              dataIndex: 'mm',
              key: 'mm',
              width: 70
            },
            {
              title: 'Tên môn',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Tên lớp',
              key: 'className',
              dataIndex: 'className',
            },
            {
              title: 'Thứ',
              key: 'thu',
              dataIndex: 'thu',
              width: 50
            },
            {
              title: 'Ca học',
              key: 'ca',
              dataIndex: 'ca',
              width: 60
            },
            {
              title: 'Phòng học',
              key: 'room',
              dataIndex: 'room',
              width: 100
            },

          ]
        }
        dataSource={selectedSubjects}
        scroll={{
          y: height * 0.45,
        }}
        size="small"
        pagination={false}
        rowKey="stt"
        title={() => <span style={{fontWeight: 'bold', color: 'black'}}>Thời khóa biểu</span>}
      />
    </div>
  );
};

export default RegisterSubject;
