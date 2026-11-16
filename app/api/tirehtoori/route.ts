import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const minutes =
      typeof body === 'object' && body !== null && 'minutes' in body
        ? body.minutes
        : null;

    if (typeof minutes !== 'string' || minutes.trim().length === 0) {
      return NextResponse.json(
        { error: 'Lisää pöytäkirjan teksti ennen lähetystä.' },
        { status: 400 },
      );
    }

    if (minutes.length > 200_000) {
      return NextResponse.json(
        { error: 'Teksti on liian pitkä. Enimmäispituus on 200 000 merkkiä.' },
        { status: 413 },
      );
    }

    // Vastaanottaa tekstin, mutta ei vielä analysoi tai tallenna sitä.
    return NextResponse.json({
      message:
        'Tirehtööri vastaanotti pöytäkirjan tekstin. Automaattinen analyysi ja PRH-ilmoituksen muodostus eivät ole vielä käytössä.',
      received: true,
    });
  } catch {
    return NextResponse.json(
      { error: 'Pyyntöä ei voitu käsitellä. Lähetä sisältö JSON-muodossa.' },
      { status: 400 },
    );
  }
}
