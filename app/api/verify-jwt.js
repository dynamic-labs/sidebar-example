import jwt from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';

const client = new JwksClient({
  jwksUri: `https://app.dynamic.xyz/api/v0/sdk/${process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID}/.well-known/jwks`
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token } = req.body;

  try {
    const signingKey = await client.getSigningKey();
    const publicKey = signingKey.getPublicKey();
    const decoded = jwt.verify(token, publicKey);

    res.status(200).json({ decoded });
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
}