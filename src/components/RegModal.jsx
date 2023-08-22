// import { ModalOverlay, Modal, ModalFooter, ModalContent, ModalHeader, ModalCloseButton, Button, ModalBody, Lorem, useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    
  } from '@chakra-ui/react';
import { FormReg } from './FormReg';

export function RegModal({isOpen, onClose, onOpen}) {
   
    return (
      <>
          
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormReg num={104}/>
            </ModalBody>
            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }