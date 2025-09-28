import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const numero = Number(searchParams.get('numero'));

  if (isNaN(numero)) {
    return NextResponse.json({ error: 'Parâmetro "numero" inválido.' }, { status: 400 });
  }

  const tabuada = Array.from({ length: 10 }, (_, i) => ({
    operacao: `${numero} x ${i + 1}`,
    resultado: numero * (i + 1),
  }));

  return NextResponse.json({ numero, tabuada });
}