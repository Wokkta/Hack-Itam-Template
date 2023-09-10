import { Alert } from 'antd';

const NotFound = () => {
  return (
    <Alert
      message="Error 404 No such page found"
      description="We can't get games data from the server. Please reload the page. If not working, try again or connect developers"
      type="error"
      closable
    />
  );
};
export default NotFound;
