import {Button, Col, DatePicker, Form, Input, Modal, Row, TimePicker} from "antd";
import React, {useState} from "react";
import {toast} from "react-toastify";
import {useForm} from "antd/es/form/Form";
import {useAppDispatch, useAppSelector} from "../../../../../Store/store";
import {createUser} from "../../../../../Store/Action/app.action";
import Overlay from "../../../../../Components/Layout/Overlay"
import {createCourse} from "../../../../../Store/Action/course.action";

export const CreateCourseModel = ({open, show, hide, title}) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false)
  const {message, isLoading} = useAppSelector(state => state.app)
  const [form] = useForm()
  const onFinish = async (values) => {
    setLoading(true)
    await dispatch(createCourse(values))
      .then(res => {
        if (res?.type === 'course/create-course/fulfilled') {
          toast.success("Create success")
          form.resetFields(['code', 'name', 'className', 'tc', 'shift', 'jd', 'room', 'teacher']);
          hide()
        } else if(res?.type === 'course/create-course/rejected') {
          toast.error("Network error")
          hide()
        }
        setLoading(false)
      })
  };

  const onSubmit = () => {
    form.submit();
  }
  return (
    <Modal
      title={title}
      centered
      open={open}
      onOk={onSubmit}
      onCancel={hide}
      width={1000}
      footer={(_, {OkBtn, CancelBtn}) => !loading ? (
        <>
          <CancelBtn/>
          <OkBtn/>
        </>
      ) : (<div></div>)}
    >
      <Form
        form={form}
        name="insertStudentForm"
        onFinish={onFinish}
        layout="vertical"
        className='pt-4'
      >
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              label="Mã môn"
              name="code"
              rules={[{required: true, message: 'Nhập mã môn!!'}]}
            >
              <Input placeholder="Mã môn"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tên môn"
              name="name"
              rules={[{required: true, message: 'Nhập tên môn'}]}
            >
              <Input placeholder="Tên môn"/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              label="Tên lớp"
              name='className'
              rules={[{required: true}]}
            >
              <Input placeholder="Tên lớp"/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
                label="Tín chỉ"
                name="tc"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số tín chỉ.'
                  },
                  ({getFieldValue}) => ({
                    validator(_, value) {
                      const intValue = parseInt(value);
                      if (isNaN(intValue) || intValue <= 0 || intValue % 1 !== 0) {
                        return Promise.reject('Vui lòng nhập một số nguyên dương.');
                      } else {
                        return Promise.resolve();
                      }
                    },
                  }),
                ]}
            >
              <Input placeholder="Tín chỉ" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
                label="Ca học"
                name="shift"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập thời gian ca học.'
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      const [start, end] = value.split('-').map(val => val.trim()); // Tách giá trị "Start" và "End"
                      if (start && end && start >= end) { // Kiểm tra nếu "Start" không lớn hơn "End"
                        return Promise.reject('Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc.');
                      } else {
                        return Promise.resolve();
                      }
                    },
                  }),
                ]}
            >
              <Input placeholder="Start - End" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
                label="Thứ"
                name="value"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập giá trị.'
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      const intValue = parseInt(value);
                      if (isNaN(intValue) || intValue < 2 || intValue > 7) { // Kiểm tra giá trị nằm trong khoảng từ 2 đến 7
                        return Promise.reject('Vui lòng nhập giá trị từ 2 đến 7.');
                      } else {
                        return Promise.resolve();
                      }
                    },
                  }),
                ]}
            >
              <Input placeholder="Nhập giá trị từ 2 đến 7" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Phòng học"
              name="room"
              rules={[{required: true}]}
            >
              <Input placeholder="Phòng học"/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Giáo viên"
              name="teacher"
              rules={[{required: true}]}
            >
              <Input placeholder="Mã giáo viên"/>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {loading && <Overlay/>}
    </Modal>
  )
}
