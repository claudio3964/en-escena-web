import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // TODO: integrar Resend para enviar emails
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)

    console.log('Nuevo contacto:', body)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error al enviar' }, { status: 500 })
  }
}