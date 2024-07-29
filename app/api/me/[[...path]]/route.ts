//import { createOptimizelyOneApi } from '@remkoj/optimizely-one-nextjs/server';
import { createOptimizelyOneApi } from '@remkoj/optimizely-one-nextjs/api';

const handler = createOptimizelyOneApi()

export const GET = handler  
export const POST = handler  
export const runtime = 'edge' // 'nodejs' (default) | 'edge'  
export const dynamic = 'force-dynamic'  
export const dynamicParams = true  
export const fetchCache = 'default-no-store'
