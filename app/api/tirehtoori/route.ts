import { NextResponse } from 'next/server';

// Tirehtöörin vastaanottoreitti. Älä lokita sisältöä: se voi sisältää henkilötietoja.
export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    if (typeof body !== 'object' || body === null) {
      return NextResponse.json({ error: 'Virheellinen pyyntö.' }, { status: 400 });
    }

    const data = body as Record<string, unknown>;
    // `minutes` säilyttää yhteensopivuuden vallanvaihto-sivun nykyisen lomakkeen kanssa.
    const content = typeof data.content === 'string' ? data.content : data.minutes;
    const type = typeof data.type === 'string' ? data.type : 'pöytäkirja';

    if (typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json({ error: 'Lisää sisältö ennen lähetystä.' }, { status: 400 });
    }
    if (content.length > 200_000) {
      return NextResponse.json(
        { error: 'Sisältö on liian pitkä. Enimmäispituus on 200 000 merkkiä.' },
        { status: 413 },
      );
    }
    if (type.length > 100) {
      return NextResponse.json({ error: 'Tiedoston tyyppi on liian pitkä.' }, { status: 400 });
    }

    // Sisältö vastaanotetaan, mutta sitä ei vielä analysoida eikä tallenneta.
    const message = 'Tirehtööri on vastaanottanut tiedon. Automaattinen analyysi ei ole vielä käytössä.';
    return NextResponse.json({
      status: 'success',
      message,
      analysis: `Tirehtööri tunnisti tiedoston tyypiksi: ${type}`,
      received: true,
    });
  } catch {
    return NextResponse.json({ error: 'Tirehtöörillä oli häiriö.' }, { status: 400 });
  }
}
