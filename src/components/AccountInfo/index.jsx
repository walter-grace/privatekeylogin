import React, { useState } from "react";
import { PageHeader } from "antd";
import { Button } from "reactstrap"
import "./style.scss";
import CoolButton from "../button/CoolButton";


function AccountInfo({
  handleLogout, privKey, walletInfo,account
}) {
 const [privateKeyHidden, setPkeyVisiblity] = useState(false);
 var QRCode = require('qrcode.react');
 return (
  <div>
      <PageHeader
          className="site-page-header"
          title="Solana Wallet"
          extra={[
              <Button key="1" type="primary" onClick={handleLogout}>
              Logout
              </Button>,
          ]}
      />
      <div className="container">
      <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", margin: 20 }}>
          <div style={{margin:20}}>
            Wallet address: <i>
            {account?.publicKey.toBase58()}
            </i>
          </div>
            <QRCode value={account?.publicKey.toBase58()}></QRCode>
          <div style={{margin:20}}>
            Balance: <i>{(walletInfo && walletInfo.lamports) || 0.000}</i>
          </div>
          <hr/>
          <span>Private key:</span>
          {
              !privateKeyHidden ? 
              <div style={{margin:20, maxWidth: 900, wordWrap: "break-word", display:"flex", flexDirection:"column"}}>
                <span style={{margin: 20}}>{"********************************"}</span>
                <Button onClick={()=>{setPkeyVisiblity(true)}}>Show Private Key</Button>
              </div>:
              <div style={{margin:20, maxWidth: 900, wordWrap: "break-word", display:"flex", flexDirection:"column"}}>
               <span style={{margin: 20}}>{(privKey)}</span>
                <Button onClick={()=>{setPkeyVisiblity(false)}}>Hide Private Key</Button>
              </div>
            }
            <div>
         
            </div>
        </div>
      </div>
</div>
)
}

export default AccountInfo;