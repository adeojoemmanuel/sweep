{blockchain.account === "" ||
blockchain.smartContract === null ? (
  <div>
  
      Connect to the {CONFIG.NETWORK.NAME} network
   
    <div> 
      CONNECT
    </div>
    {blockchain.errorMsg !== "" ? (
      <>
          {blockchain.errorMsg}
      </>
    ) : null}
  </div>
) : blockchain.approved ? (
  // if contract is approved
  <>
    <div
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
      }}
    >
      {feedback}
    </div>
      
      <div
        disabled={mintingTokens ? 1 : 0}
        onClick={(e) => {
          e.preventDefault();
          mintTokens();
          getData();
        }}
      >
        {mintingTokens ? "MINTING" : "MINT"}
      </div>
  </>
) : (
  // if contract is not not approved
  <>
    <div
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
      }}
    >
      Please approve the contract to start minting
    </div>

      <div
        disabled={mintingTokens ? 1 : 0}
        onClick={(e) => {
          e.preventDefault();
          approveContract();
        }}
      >
        {approving ? "APPROVING" : "APPROVE"}
      </div>
  </>
)}