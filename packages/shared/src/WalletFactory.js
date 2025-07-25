// WalletFactory.js - Shared wallet creation utilities

class WalletFactory {
  static createWallet(type = 'basic') {
    const walletId = `wallet_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    return {
      id: walletId,
      type: type,
      balance: 0,
      created: new Date().toISOString(),
      isActive: true,
    };
  }

  static validateWallet(wallet) {
    return (
      wallet &&
      wallet.id &&
      wallet.type &&
      Object.prototype.hasOwnProperty.call(wallet, 'balance')
    );
  }
}

export default WalletFactory;
