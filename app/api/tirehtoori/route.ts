import { NextResponse } from 'next/server';

// This endpoint is retired: the current dashboard handles file selection locally.
export async function POST() {
  return NextResponse.json(
    { error: 'Tirehtööri-rajapinta ei ole tällä hetkellä käytössä.' },
    { status: 410 },
  );
}
