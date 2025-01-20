import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

// Specify that this route should be processed at the edge
export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage:
              'radial-gradient(circle at 20% 80%, rgba(76, 29, 149, 0.1) 0%, transparent 40%), ' +
              'radial-gradient(circle at 80% 20%, rgba(29, 78, 216, 0.1) 0%, transparent 40%)',
          }}
        >
          {/* Social Proof Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '12px 24px',
              borderRadius: '9999px',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', color: '#FFD700' }}>★★★★★</div>
            <div style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#9CA3AF' }}>5+ Clients Love</span>
              <span style={{ color: '#A855F7' }}>Sanganak</span>
            </div>
          </div>

          {/* Main Heading */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '900px',
            }}
          >
            <div
              style={{
                color: '#fff',
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.1,
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              Transform Your Ideas Into Reality with{' '}
              <span style={{ color: '#A855F7' }}>Sanganak</span>
            </div>

            {/* Subheading */}
            <div
              style={{
                color: '#9CA3AF',
                fontSize: 24,
                textAlign: 'center',
                marginBottom: '8px',
              }}
            >
              Expert solutions in Design, Web & Mobile Dev, Blockchain, AI, and SaaS.
            </div>
            <div
              style={{
                color: '#9CA3AF',
                fontSize: 24,
                textAlign: 'center',
              }}
            >
              Elevate your business with cutting-edge technology.
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(`${e.message}`);
    return new Response(`Failed to generate the image: ${e.message}`, {
      status: 500,
    });
  }
}
