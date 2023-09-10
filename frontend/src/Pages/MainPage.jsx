import { QRCode, Space } from 'antd';

function MainPage() {
  return (
    <section>
      <div>
        <h1>Наши медиа</h1>
        <Space>
          <QRCode
            type="canvas"
            value="https://github.com/Wokkta/Hack-Itam-Template"
            //icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          <Space></Space>
          <QRCode
            type="svg"
            value="https://t.me/itatmisis"
            //icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
        </Space>
      </div>
    </section>
  );
}

export default MainPage;
