import React from 'react';
import './MemberDetailModal.css'; // Yeni CSS dosyasını import ediyoruz

interface MemberDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    role: string;
    cvContent: string;
  } | null;
}

const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ isOpen, onClose, member }) => {
  if (!isOpen || !member) {
    return null;
  }

  // CV içeriğini paragraf (p) etiketlerine ayırma
  const paragraphs = member.cvContent.split('\n\n').map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text.trim().replace(/\n/g, '<br/>') }} />
  ));

  return (
<div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
  <div className="modal-content" onClick={e => e.stopPropagation()}>
    <button className="modal-close-btn" onClick={onClose}>
      &times;
    </button>
    <h2 className="modal-member-name">{member.name}</h2>
    <h3 className="modal-member-role">{member.role} Detaylı Özgeçmiş</h3>
    <div className="modal-cv-body">
      {paragraphs}
    </div>
  </div>
</div>

  );
};

export default MemberDetailModal;