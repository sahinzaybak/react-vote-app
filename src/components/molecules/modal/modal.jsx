import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import remove from '../../../assets/images/remove.svg'
import Button from '../../atoms/button/button'
import './modal.scss'

let isActiveModal, selectedLinkName, selectedLinkURL, selectedVoteIndexNo
const Modal = ({ headerTitle, title, successButtonName, cancelButtonName }) => {
  const dispatch = useDispatch()
  isActiveModal = useSelector(state => state.modal.activeModal)
  selectedLinkName = useSelector(state => state.modal.selectedLinkName)
  selectedLinkURL = useSelector(state => state.modal.selectedLinkURL)
  selectedVoteIndexNo = useSelector(state => state.modal.selectedVoteIndexNo)

  return (
    <>
      {isActiveModal &&
        <div className={`modal-container ${isActiveModal ? "active" : ""}`}>
          <div className="modal-shadow"></div>
          <div className="modal">
            <div className="modal-wrp">
              <div className="modal-inner">
                <div className="modal-header">
                  <h3>{headerTitle}</h3>
                  <img className="modal-header__icon" src={remove} onClick={() => { (dispatch({ type: 'MODAL_STATUS', payload: false })) }} />
                </div>
                <div className="modal-inner__desc">
                  <p className="modal-inner__desc-title">{title}</p>
                  <p className="modal-inner__desc-link">{selectedLinkName}</p>
                </div>
                <div className="modal-inner__action">
                  <Button name={successButtonName} onClick={async () => {
                    {
                      await dispatch({ type: "VOTE_ITEM_DELETE", payload: selectedVoteIndexNo })
                      await dispatch({ type: "ALERT_STATUS", payload: { status: true, selectedLinkName: selectedLinkName } })
                      await dispatch({ type: 'MODAL_STATUS', payload: { status: false } })
                      setTimeout(() => { dispatch({ type: "ALERT_STATUS", payload: { status: false } }) }, 1000);
                    }
                  }} />
                  <Button name={cancelButtonName} onClick={() => { dispatch({ type: 'MODAL_STATUS', payload: { status: false } }) }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

Modal.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  successButtonName: PropTypes.string.isRequired,
  cancelButtonName: PropTypes.string.isRequired
};

export default Modal;