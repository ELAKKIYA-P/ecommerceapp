import React, { useState ,useContext} from 'react';
import '../css/ShopBackGround.css';
import { Dropdown, Input, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons'
import Card from 'antd/es/card/Card';
import { products } from '../assets/Products';
import { Link } from 'react-router-dom';
const tableImg = require('../assets/Images/table.jpg');

export default function ShopBackground({setCart}) {
  const [selectedSection, setSelectedSection] = useState(products.filter(value => value.category === 'sofa'));
  

  const handleSectionClick = (section) => {
    const FilterData = products.filter(item => item.category === section)
    setSelectedSection(FilterData);
  };

  const setSearchInput = (value) => {
    const FilterData = products.filter(items => items.category.toLowerCase().includes(value.toLowerCase()) ||
      items.productName.toLowerCase().includes(value.toLowerCase()))
    setSelectedSection(FilterData);
  }
  const setLocalStorage = (value) =>{
      const existingData = JSON.parse(localStorage.getItem('k') || [])
      const storeData = products.filter(items => items.id === value);
      console.log({storeData})
      const updatedData = [...existingData,...storeData];
      localStorage.setItem('k',JSON.stringify(updatedData));
    
   
  }
  const items = [
    {
      label: (
        <div className='DropDown_Section ' onClick={() => handleSectionClick('sofa')}>Sofa</div>
      ),
      key: '0',
    },
    {
      label: (
        <div className='DropDown_Section' onClick={() => { console.log('clicked chair'); handleSectionClick('chair') }}>Chair</div>
      ),
      key: '1',
    },
    {
      label: (
        <div className='DropDown_Section' onClick={() => handleSectionClick('watch')}>Watch</div>
      ),
      key: '2',
    },
    {
      label: (
        <div className='DropDown_Section' onClick={() => handleSectionClick('mobile')}>Mobile</div>
      ),
      key: '3',
    },
    {
      label: (
        <div className='DropDown_Section' onClick={() => handleSectionClick('wireless')}>Wireless</div>
      ),
      key: '4',
    },
  ];
  return (
    <div>
      <div className='image-container'>
        <img src={tableImg} alt="table" id='tableImg' />
        <div className='background-text p-5 m-5'><h1>Products</h1>
        </div>
      </div>

      <div className='Filter_Data p-5' >
        <Dropdown
          menu={{
            items,
          }}

          trigger={['click']}
        >
          <a href=' #' className='DropDown_Section' onClick={(e) => e.preventDefault()}>
            <Space style={{ backgroundColor: '#1e3a8a', textDecoration: 'none', color: "white", lineHeight: 2 }}>
              Filter By Category
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      {<div style={{ textAlign: 'center', margin: '20px' }}>
        <Input
          placeholder="Search products"
          // value={selectedSection}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{ width: 400 }}
        />
      </div>}

      <div style={{ display: "grid", gridTemplateColumns: 'auto auto auto', justifyContent: 'center', alignItems: 'center', gap: 35 }}>
        {selectedSection.map((product) => (

          <Link to={`/product/${product.id}`} key={product.id}>
                     <Space direction="vertical" size={16} key={product.id} >
            <Card
              style={{
                width: "100%",
                boxShadow: 'box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px'
              }}
            >
              <div><img src={product.imgUrl} alt="" style={{ width: 250, height: 250 }} /></div>
              <div><b>{product.productName}</b></div>
              <div>{Array.from({ length: product.reviews[0].rating }, (_, i) => (
                <span key={i} className='text-warning'>&#9733;</span>
              ))}</div>
              <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <h6><b>${product.price}</b></h6>
                {/* <a href="cart" style={{ textDecoration: 'none', color: 'inherit' }}><span style={{ fontSize: 26 }}>+</span>
                </a> */}
                <button style={{border:'none',backgroundColor:'transparent'}} onClick={(e) => setLocalStorage(product.id)}><span style={{ fontSize: 26 }} >+</span></button>
              </div>
            </Card>
          </Space>
          </Link>
        )
        )}
      </div>
    </div>
  );
}