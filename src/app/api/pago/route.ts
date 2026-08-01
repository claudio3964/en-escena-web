import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // TODO: integrar Mercado Pago
    // Generar preferencia de pago y devolver init_point

    return NextResponse.json({ 
      success: true, 
      checkoutUrl: 'https://www.mercadopago.com.uy/checkout/v1/redirect?pref_id=...' 
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error al generar pago' }, { status: 500 })
  }
}