import React from 'react';
import { Alert} from 'react-bootstrap';

function AlertModal(props) {
  const { data, type} = props;
  return (
      <Alert variant={type} dismissible>
        <p>
          {data}
        </p>
      </Alert>
  )
}

export default AlertModal;
