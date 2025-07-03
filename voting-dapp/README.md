# 🗳 Voting DApp

Ứng dụng bỏ phiếu phi tập trung (Voting DApp) sử dụng smart contract Ethereum + frontend React.

## 🔧 Công nghệ

- Solidity (Voting Contract)
- Hardhat (Dev & Testing)
- React + Ethers.js (Frontend)
- Sepolia Testnet

## 🚀 Chức năng

- Tạo đề tài bỏ phiếu ngay khi deploy
- Mỗi ví chỉ được vote 1 lần
- Xem kết quả trực tiếp

## 📦 Cài đặt & chạy local

```bash
git clone https://github.com/yourusername/voting-dapp
cd voting-dapp

npm install
npx hardhat test
npx hardhat run scripts/deploy.js --network hardhat
```

## 🌐 Deploy lên testnet

- Thêm `INFURA_KEY` và `PRIVATE_KEY` vào `.env`
- Chạy:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## 📄 License

MIT
