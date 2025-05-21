'use client';

import React from 'react';
import PromotionForm from '@/app/сomponents/promotion-form';
import Modal, { ModalProps } from '@/app/сomponents/modal';

export interface PromotionFormModal extends ModalProps {
  companyId: string;
}

export default function PromotionFormModal({
  companyId,
  onClose,
  ...rest
}: PromotionFormModal) {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
}
