// .ts
import axios from 'axios';

async function requestAirdrop(pubkey: string, network: 'testnet' | 'devnet'): Promise<void> {
  try {
    const response = await axios.post('https://uxdc-faucet-api-1srh.vercel.app/api/uxdc-airdrop', {
      pubkey,
      network,
    });

    console.log('Airdrop successful:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.data.error);
    } else {
      console.error('Request failed:', error.message);
    }
  }
}

// Example usage:
const publicKey = 'B1kVQtQFbTRtBdaJsgN8uing8A2Nzo6HrVfuRcAuXVrY';
const network = 'devnet';
requestAirdrop(publicKey, network);

// 6iwVXSw5Vf8prfbzQqxkRTde14UqyqY97uxjwSTbJWzx