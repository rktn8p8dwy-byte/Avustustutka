import { NextResponse } from 'next/server';

// This feature is not implemented. Do not accept or echo sensitive minutes
// merely to return a misleading success response.
export async function POST() {
  return NextResponse.json(
    { error: 'Pöytäkirjojen palvelinkäsittely ei ole vielä käytössä. Älä lähetä henkilötietoja.' },
    { status: 501, headers: { 'Cache-Control': 'no-store' } },
  );
}
