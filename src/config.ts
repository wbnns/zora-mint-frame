import { base } from 'viem/chains';
import { getFrameMetadata } from '@coinbase/onchainkit';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const CHAIN = base;
export const CONTRACT_ADDRESS = '0x1f554EfA7119649Ff1e610A07f397C3EdbF21Ded';
export const TOKEN_ID = 1n; // First collection is 1

export const FRAME_METADATA = getFrameMetadata({
  buttons: ['Free mint'],
  image: `${SITE_URL}/opengraph-image.png`,
  post_url: `${SITE_URL}/api/frame`,
});
