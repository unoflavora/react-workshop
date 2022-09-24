import React from 'react';

import type { Contact } from '../types/contact';
import './styles.css';

const ContactCard = ({ id, first_name, last_name, phones }: Contact) => (
  <div className="contact-card">
    <strong>{id} - {first_name} {last_name}</strong>
    <ul>
      {(phones || []).map(({ number }, phoneIndex) => 
        <li key={phoneIndex}>{number}</li>
      )}
    </ul>
  </div>
);

export default ContactCard;
