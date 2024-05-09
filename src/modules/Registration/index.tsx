import Modal from '@/common/components/Modal'
import {
  setLoginModal,
  setRegistrationModal,
  setRegistrationStatus,
} from '@/features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

import LoginVsRegisterBottom from '@/common/components/LoginVsRegisterBottom'
import RegistrationForm from './component/RegistrationForm'
import { useEffect } from 'react'

const Registration = () => {
  const { registrationModal, registrationStatus } = useAppSelector(
    (state) => state.modal
  )
  const dispatch = useAppDispatch()

  const title =
    registrationStatus === 'success'
      ? 'Your registration was successful. Login to your account.'
      : registrationStatus === 'error'
        ? 'Something went wrong. Please? try again!'
        : 'Registration'

  const handleCloseModal = () => {
    dispatch(setRegistrationModal(false))
  }

  const openLoginModal = () => {
    dispatch(setLoginModal(true))

    handleCloseModal()
  }

  useEffect(() => {
    dispatch(setRegistrationStatus('idle'))
  }, [])

  return (
    <Modal
      title={title}
      isOpen={registrationModal}
      closeModal={handleCloseModal}
    >
      {registrationStatus === 'success' ? (
        <LoginVsRegisterBottom
          text="Already have an account?"
          btnText="Sign in"
          openModal={openLoginModal}
        />
      ) : registrationStatus === 'error' ? (
        <LoginVsRegisterBottom
          text="Don't have an account yet?"
          btnText="Register"
          openModal={() => dispatch(setRegistrationModal(true))}
        />
      ) : (
        <>
          <RegistrationForm />
          <LoginVsRegisterBottom
            text="Already have an account?"
            btnText="Sign in"
            openModal={openLoginModal}
          />
        </>
      )}
    </Modal>
  )
}

export default Registration
