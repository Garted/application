import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'components/shared-components/Loading';
import { useHistory } from 'react-router-dom';
import { Button, Input, Form } from 'antd';
import { updateUser } from 'redux/actions/Data';
const UserProfile = ({ id }) => {
  const data = useSelector(
    (state) => state.usersData.data.filter((item) => item.id === +id)[0]
  );
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);
  const handleChange = (path) => (e) => {
    setUserData((prev) => {
      const keys = path.split('.');
      const newData = { ...prev };
      let temp = newData;
      keys.slice(0, -1).forEach((key) => {
        temp[key] = { ...temp[key] };
        temp = temp[key];
      });
      temp[keys[keys.length - 1]] = e.target.value;
      return newData;
    });
  };

  const handleClick = () => {
    dispatch(updateUser(userData));
    setShowLoader(true);
    setTimeout(() => {
      history.push('/app/users');
    }, 1000);
  };
  return (
    <>
      {!userData ? (
        <Loading />
      ) : (
        <Form
          style={{
            maxWidth: '1000px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
          onFinish={handleClick}
          layout="vertical"
          name="basic"
          initialValues={{
            name: userData.name,
            email: userData.email,
            username: userData.username,
            phone: userData.phone,
            website: userData.website,
            city: userData.address.city,
            street: userData.address.street,
            suite: userData.address.suite,
            zipcode: userData.address.zipcode,
            company: userData.company.name,
            phrase: userData.company.bs,
          }}
        >
          <Form.Item
            style={{
              width: '50%',
            }}
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input onChange={handleChange('name')} />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            style={{
              width: '50%',
            }}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input onChange={handleChange('username')} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            style={{
              width: '50%',
            }}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input onChange={handleChange('email')} />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            style={{
              width: '50%',
            }}
          >
            <Input onChange={handleChange('phone')} />
          </Form.Item>
          <Form.Item
            label="Website"
            name="website"
            style={{
              width: '100%',
            }}
          >
            <Input onChange={handleChange('website')} />
          </Form.Item>
          <h4
            style={{
              width: '100%',
              marginBottom: '10px',
            }}
          >
            Address
          </h4>
          <Form.Item
            label="City"
            name="city"
            style={{
              width: '50%',
            }}
          >
            <Input onChange={handleChange('address.city')} />
          </Form.Item>
          <Form.Item
            label="Street"
            name="street"
            style={{
              width: '50%',
            }}
          >
            <Input onChange={handleChange('address.street')} />
          </Form.Item>
          <Form.Item
            label="Suite"
            name="suite"
            style={{
              width: '50%',
            }}
          >
            <Input onChange={handleChange('address.suite')} />
          </Form.Item>
          <Form.Item
            label="Postcode"
            name="zipcode"
            style={{
              width: '50%',
            }}
          >
            <Input onChange={handleChange('address.zipcode')} />
          </Form.Item>
          <h4
            style={{
              width: '100%',
              marginBottom: '10px',
            }}
          >
            Work
          </h4>

          <Form.Item
            label="Company"
            name="company"
            style={{
              width: '50%',
            }}
          >
            <Input onChange={handleChange('company.name')} />
          </Form.Item>
          <Form.Item
            label="Phrase"
            name="phrase"
            style={{
              width: '50%',
            }}
          >
            <Input onChange={handleChange('company.bs')} />
          </Form.Item>

          <Form.Item
            style={{
              width: '50%',
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          <div
            style={{
              display: `${showLoader ? 'block' : 'none'}`,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            <Loading></Loading>
          </div>
        </Form>
      )}
    </>
  );
};

export default UserProfile;
