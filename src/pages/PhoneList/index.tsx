import React, { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';

import type { GetContactListParams, GetContactListResponse } from './types/contact';
import ContactCard from './ContactCard';
import './styles.css';

const GetContactList = gql`
query GetContactList($distinct_on: [contact_select_column!], $limit: Int, $offset: Int, $order_by: [contact_order_by!], $where: contact_bool_exp) {
  contact(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    created_at
    first_name
    id
    last_name
    phones {
      number
    }
  }
}
`;

const PhoneList = () => {
    const { data: resp, loading } = useQuery<GetContactListResponse, GetContactListParams>(GetContactList, {
      variables: {
        offset: 0,
        limit: 10,
      },
    });

    const renderContactList = useMemo(() => {
      if (resp?.contact) return <div className='contact-list'>
        {resp?.contact.map((contact, index) => <ContactCard {...contact} key={index}/>)}
      </div>;
      return null;
    }, [resp]);
  
    return loading ? (
      <p>Loading...</p>
    ) : renderContactList;
  };
  
  export default PhoneList;
  