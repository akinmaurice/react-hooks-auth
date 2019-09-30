import React from 'react';
import { Alert} from 'react-bootstrap';

function AlertModal(props) {
  const { data, type, method: closeAlert } = props;
  return (
      <Alert variant={type} onClose={closeAlert} dismissible>
        <p>
          {data}
        </p>
      </Alert>
  )
}

export default AlertModal;
