import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import downIcon from '../../../assets/images/down-arrow.svg'
import './dropdown.scss'


const DropDown = ({placeholder, orderData}) => {
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false);
  const [items] = useState(orderData);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);
  const selectedOrderItem = (id) => {
    setOpen(!isOpen);
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    if (id == 0) dispatch({ type: "MOST_VOTED" })
    else dispatch({ type: "LESS_VOTED" })
  }

  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : placeholder}
        <img src={downIcon} className={`fa fa-chevron-right icon ${isOpen && "open"}`}/>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map((item,index) => (
          <div key={index} className="dropdown-item" onClick={e => selectedOrderItem(e.target.id)} id={item.id}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
};

export default DropDown;